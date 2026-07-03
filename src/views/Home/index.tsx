import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";

import { fontNames } from "@constants/typography";
import { base } from "@constants/colors";

import { IconButton } from "../../components";
import { EGG, type IconSegment, type Segment, SEGMENTS } from "./content";
import { completedProjection, type RenderedSegment, shouldReduceMotion, useTypewriter } from "./typewriter";

const MARKUP_GRAY = "#8e8e8e83";
const GUTTER_GRAY = "#8e8e8e4d";
const COMMENT_GREEN = "#9ff8a06e";

// Content sits indented inside its tags, like formatted source.
const INDENT = "1rem";

// The full buffer, easter-egg line included, used for sizing and gutter
// numbering; the egg only ever types after idling, but its line is reserved
// from the start so nothing shifts when it does.
const ALL_SEGMENTS: readonly Segment[] = [...SEGMENTS, EGG];
const EGG_SEGMENTS: readonly Segment[] = [EGG];

// Gutter numbers: the icon row shares line 1, every other segment is a line.
const lineNumbers = (() => {
  const numbers = new Map<number, number>();
  let line = 1;
  ALL_SEGMENTS.forEach((segment, index) => numbers.set(index, segment.kind === "icon" ? 1 : ++line));
  return numbers;
})();
const EGG_LINE_NO = lineNumbers.get(ALL_SEGMENTS.length - 1);

const Container = styled.div`
  background: radial-gradient(120% 85% at 50% 42%, #101010 0%, ${base.background} 72%);
  color: white;
  min-height: 100vh;
  min-height: 100dvh;
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// The finished page, rendered invisibly, gives the composition its final size
// from the first frame; the animated copy paints on top of it, so nothing
// shifts or re-centers as lines type in.
const Sizer = styled.div`
  position: relative;
`;

const Ghost = styled.div`
  visibility: hidden;
`;

const Live = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

// One buffer line: a gutter number on the text's baseline, then the content.
const Line = styled.div`
  display: flex;
  align-items: baseline;
`;

// The icon row is a line too, but centers its icons and reserves their final
// height so the markup below sits still while <svg/> tokens grow into icons.
const IconLine = styled(Line)`
  align-items: center;
  min-height: 3rem;
`;

const LineNo = styled.span`
  font-family: ${fontNames.Inconsolata};
  font-size: 1rem;
  color: ${GUTTER_GRAY};
  width: 2ch;
  margin-right: 1.5ch;
  text-align: right;
  flex-shrink: 0;
  user-select: none;
`;

// Gray faux-markup styling for the tag lines...
const TagLine = styled.div`
  font-family: ${fontNames.Inconsolata};
  color: ${MARKUP_GRAY};
  font-size: 1rem;
`;

// ...dim accent green for comments, the way editors dress them...
const CommentLine = styled(TagLine)`
  color: ${COMMENT_GREEN};
`;

// ...and the inline `<svg/>` tokens the icons hatch from.
const TagToken = styled.span`
  font-family: ${fontNames.Inconsolata};
  color: ${MARKUP_GRAY};
  font-size: 1rem;
`;

// A block caret that scales to its line's font-size (1em tall) and rides along
// with the text. It blinks only once the sequence is done, like an idle
// terminal waiting for input.
const Caret = styled.span<{ blink: boolean }>`
  display: inline-block;
  width: 0.55ch;
  height: 1em;
  margin-left: 0.08em;
  background: ${base.accentForeground};
  vertical-align: text-bottom;

  @keyframes blink {
    0%,
    49% {
      opacity: 1;
    }
    50%,
    100% {
      opacity: 0.1;
    }
  }

  animation: ${({ blink }) => (blink ? "blink 1s step-end infinite" : "none")};
`;

// The morph: once an icon's <svg/> token finishes, the real icon materializes
// in its place, scaling up out of a blur. Disabled for reduced motion.
const materialize = keyframes`
  0% {
    transform: scale(0.4);
    opacity: 0;
    filter: blur(4px);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    filter: blur(0);
  }
`;

const IconHatch = styled.span`
  display: inline-block;
  vertical-align: middle;
  animation-name: ${materialize};
  animation-duration: 0.45s;
  animation-timing-function: ease-out;
  animation-fill-mode: both;

  &[data-static="true"] {
    animation: none;
  }
`;

// A faux-comment that re-runs the whole sequence, fading in a beat after the
// typing settles.
const ReplayButton = styled.button<{ visible: boolean }>`
  display: block;
  background: none;
  border: none;
  padding: 0;
  margin-left: 3.5ch;
  font-family: ${fontNames.Inconsolata};
  font-size: 1rem;
  color: ${GUTTER_GRAY};
  cursor: pointer;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition:
    opacity 0.6s ease ${({ visible }) => (visible ? "0.8s" : "0s")},
    color 0.2s ease;

  :hover {
    color: ${base.accentForeground};
  }
  :disabled {
    cursor: default;
  }
`;

const IconLink = ({ icon, animate }: { icon: IconSegment; animate: boolean }) => (
  <IconHatch data-static={animate ? undefined : "true"}>
    <a href={icon.href} target={"_blank"} rel="noreferrer" aria-label={icon.label}>
      <IconButton Icon={icon.Icon} size={"1.563rem"} />
    </a>
  </IconHatch>
);

interface RenderOptions {
  /** Whether the resting caret should blink. */
  blink: boolean;
  /** Whether entrance animations should play. */
  animate: boolean;
  /** Whether this copy shows the caret at all (the egg steals it when it types). */
  caret: boolean;
}

const renderSegment = ({ segment, key, text, typo, hasCaret, complete }: RenderedSegment<Segment>, { blink, animate, caret }: RenderOptions) => {
  if (segment.kind === "icon") {
    return complete ? (
      <IconLink key={key} icon={segment} animate={animate} />
    ) : (
      <TagToken key={key}>
        {text}
        {typo}
        <Caret blink={false} />
      </TagToken>
    );
  }

  const content = (
    <>
      {text}
      {typo}
      {hasCaret && caret && <Caret blink={blink} />}
    </>
  );

  switch (segment.kind) {
    case "tag":
      return <TagLine key={key}>{content}</TagLine>;
    case "comment":
      return <CommentLine key={key}>{content}</CommentLine>;
    case "title":
      return (
        <Box
          key={key}
          component="h1"
          sx={{ m: 0, pl: INDENT, fontSize: "clamp(1.4rem, 7vw, 4rem)", fontWeight: 400, lineHeight: 1.2 }}
        >
          {content}
        </Box>
      );
    case "body":
      return (
        <Box key={key} component="p" sx={{ m: 0, pl: INDENT, fontSize: "clamp(0.75rem, 3.9vw, 1rem)" }}>
          {content}
        </Box>
      );
  }
};

const Page = ({ rendered, options }: { rendered: RenderedSegment<Segment>[]; options: RenderOptions }) => {
  const icons = rendered.filter(r => r.segment.kind === "icon");
  const lines = rendered.filter(r => r.segment.kind !== "icon");
  return (
    <>
      {icons.length > 0 && (
        <IconLine>
          <LineNo>1</LineNo>
          {icons.map(r => renderSegment(r, options))}
        </IconLine>
      )}
      {lines.map(r => (
        <Line key={r.key}>
          <LineNo>{lineNumbers.get(r.key)}</LineNo>
          {renderSegment(r, options)}
        </Line>
      ))}
    </>
  );
};

/** The idle caret waking up: types its one-line comment on its own clock. */
const EggLine = ({ animate }: { animate: boolean }) => {
  const { segments, done } = useTypewriter(EGG_SEGMENTS);
  return (
    <>
      {segments.map(r => (
        <Line key={r.key}>
          <LineNo>{EGG_LINE_NO}</LineNo>
          {renderSegment(r, { blink: done, animate, caret: true })}
        </Line>
      ))}
    </>
  );
};

/** Flips true once `armed` has stayed true for `delayMs`; resets when disarmed. */
const useDelayedFlag = (armed: boolean, delayMs: number) => {
  const [fired, setFired] = useState(false);
  useEffect(() => {
    if (!armed) {
      setFired(false);
      return;
    }
    const timer = setTimeout(() => setFired(true), delayMs);
    return () => clearTimeout(timer);
  }, [armed, delayMs]);
  return fired;
};

const FINISHED = completedProjection(ALL_SEGMENTS);

export const Home = () => {
  const { segments, done, replay } = useTypewriter(SEGMENTS);
  const animate = !shouldReduceMotion();
  const egg = useDelayedFlag(done && animate, 30_000);
  const settled = done && animate;

  return (
    <Container>
      <Sizer>
        <Ghost aria-hidden>
          <Page rendered={FINISHED} options={{ blink: false, animate: false, caret: true }} />
        </Ghost>
        <Live>
          <Page rendered={segments} options={{ blink: done, animate, caret: !egg }} />
          {egg && <EggLine animate={animate} />}
        </Live>
        <ReplayButton visible={settled} disabled={!settled} onClick={replay} aria-label="Replay the typing animation">
          {"<!-- replay -->"}
        </ReplayButton>
      </Sizer>
    </Container>
  );
};
