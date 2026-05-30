import { useEffect, useMemo, useState } from "react";

/**
 * A deliberate typo woven into a segment: type `after` correctly, fat-finger
 * `wrong`, then backspace it away and carry on. Expressed relative to the text
 * already typed so it needs no absolute character offsets.
 */
export interface Fumble {
  after: string;
  wrong: string;
}

interface Typeable {
  text: string;
  fumbles?: readonly Fumble[];
}

/** Live state of the type-in. */
interface TypingState {
  /** Count of correct characters currently shown. */
  revealed: number;
  /** Transient wrong characters sitting at the caret, awaiting deletion. */
  typo: string;
}

/** One displayed step of the timeline, and how long to wait before showing it. */
interface Frame extends TypingState {
  delay: number;
}

/**
 * A segment paired with what's currently visible of it — everything the
 * renderer needs, with no sequencing math left to do.
 */
export interface RenderedSegment<T> {
  segment: T;
  key: number;
  /** Visible correct characters. */
  text: string;
  /** Transient wrong characters (empty unless this segment holds the caret). */
  typo: string;
  hasCaret: boolean;
  /** Whether the segment has been fully typed. */
  complete: boolean;
}

const DEFAULT_KEYSTROKE_MS = 55;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const totalChars = (segments: readonly Typeable[]) =>
  segments.reduce((sum, segment) => sum + segment.text.length, 0);

/**
 * True when we should present the finished state immediately rather than
 * animate — for users who prefer reduced motion, and in environments without
 * matchMedia (jsdom/SSR) where the content must be present on first render.
 */
export const shouldReduceMotion = () =>
  typeof window === "undefined" ||
  typeof window.matchMedia !== "function" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Precompute the whole keystroke timeline once: per-key jitter so the cadence
 * is never mechanical, longer beats after a word / sentence / tag, the odd
 * hesitation, and the type-it-wrong-then-fix-it detours.
 */
const buildTimeline = (segments: readonly Typeable[], keystrokeMs: number): Frame[] => {
  const text = segments.map(segment => segment.text).join("");

  // A fumble's absolute index is where its segment starts plus the length of
  // the prefix typed correctly before it.
  const fumbleAt = new Map<number, string>();
  let offset = 0;
  for (const segment of segments) {
    for (const fumble of segment.fumbles ?? []) {
      fumbleAt.set(offset + fumble.after.length, fumble.wrong);
    }
    offset += segment.text.length;
  }

  const pauseBefore = (index: number) => {
    let delay = keystrokeMs * rand(0.45, 1.6);
    if (index === 0) delay += 250; // a beat before the first keystroke
    const previous = text[index - 1];
    if (previous === " ") delay += rand(30, 110); // finished a word
    if (previous === ".") delay += rand(140, 300); // finished a sentence
    if (previous === ">") delay += rand(50, 130); // finished a tag
    if (Math.random() < 0.06) delay += rand(140, 320); // occasional hesitation
    return delay;
  };

  const frames: Frame[] = [];
  for (let i = 0; i < text.length; i++) {
    const wrong = fumbleAt.get(i);
    if (wrong) {
      // Fat-finger the wrong characters in...
      let mistyped = "";
      [...wrong].forEach((char, k) => {
        mistyped += char;
        frames.push({ revealed: i, typo: mistyped, delay: k === 0 ? pauseBefore(i) : keystrokeMs * rand(0.5, 1.1) });
      });
      // ...pause as if noticing, then backspace them away...
      for (let k = mistyped.length - 1; k >= 0; k--) {
        const justNoticed = k === mistyped.length - 1;
        frames.push({ revealed: i, typo: mistyped.slice(0, k), delay: justNoticed ? rand(300, 520) : rand(50, 110) });
      }
      // ...and a beat before getting it right.
      frames.push({ revealed: i + 1, typo: "", delay: rand(110, 220) });
      continue;
    }
    frames.push({ revealed: i + 1, typo: "", delay: pauseBefore(i) });
  }
  return frames;
};

/** Map the live typing state onto the segments, ready for rendering. */
const project = <T extends Typeable>(segments: readonly T[], { revealed, typo }: TypingState): RenderedSegment<T>[] => {
  const done = revealed >= totalChars(segments);
  const lastIndex = segments.length - 1;
  const rendered: RenderedSegment<T>[] = [];

  let offset = 0;
  segments.forEach((segment, index) => {
    const start = offset;
    const end = start + segment.text.length;
    offset = end;

    const visible = Math.max(0, Math.min(segment.text.length, revealed - start));
    // The caret rides the segment being typed; once everything is revealed it
    // rests on the final one.
    const hasCaret = done ? index === lastIndex : revealed >= start && revealed < end;

    // Drop segments not yet reached, but always keep the one holding the caret.
    if (visible === 0 && !hasCaret) return;

    rendered.push({
      segment,
      key: index,
      text: segment.text.slice(0, visible),
      typo: hasCaret ? typo : "",
      hasCaret,
      complete: revealed >= end,
    });
  });
  return rendered;
};

/**
 * Types `segments` out with a human, uneven cadence — fumbling and correcting
 * the typos declared on them — and returns the segments projected into a
 * ready-to-render shape, plus whether the whole sequence has finished.
 */
export const useTypewriter = <T extends Typeable>(segments: readonly T[], keystrokeMs = DEFAULT_KEYSTROKE_MS) => {
  const total = useMemo(() => totalChars(segments), [segments]);
  const [state, setState] = useState<TypingState>(() =>
    shouldReduceMotion() ? { revealed: total, typo: "" } : { revealed: 0, typo: "" },
  );

  useEffect(() => {
    if (shouldReduceMotion()) {
      setState({ revealed: total, typo: "" });
      return;
    }

    const frames = buildTimeline(segments, keystrokeMs);
    let timer: ReturnType<typeof setTimeout>;
    let next = 0;
    const tick = () => {
      if (next >= frames.length) return;
      const { delay, ...display } = frames[next++];
      timer = setTimeout(() => {
        setState(display);
        tick();
      }, delay);
    };
    tick();
    return () => clearTimeout(timer);
  }, [segments, keystrokeMs, total]);

  return useMemo(() => ({ segments: project(segments, state), done: state.revealed >= total }), [segments, state, total]);
};
