import type { FunctionComponent, SVGProps } from "react";

import Github from "@assets/Github.svg?react";
import LinkedIn from "@assets/LinkedIn.svg?react";
import DownloadCV from "@assets/DownloadCV.svg?react";

import type { Fumble } from "./typewriter";

type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

interface BaseSegment {
  /** The characters typed out for this segment. */
  text: string;
  /** Deliberate stumbles to weave in while typing this segment. */
  fumbles?: readonly Fumble[];
}

/** A social link, typed as a `<svg/>` token that then morphs into the icon. */
export interface IconSegment extends BaseSegment {
  kind: "icon";
  href: string;
  Icon: SvgIcon;
  label: string;
}

/** A line of faux-markup: a tag, the title, body copy, or a comment. */
export interface TextSegment extends BaseSegment {
  kind: "tag" | "title" | "body" | "comment";
}

export type Segment = IconSegment | TextSegment;

// The page, in the order it types itself out: the icon row first, then the
// markup block. Fumbles are described in terms of what's typed *before* them,
// so they need no manual character offsets.
export const SEGMENTS: readonly Segment[] = [
  { kind: "icon", text: "<svg/>", href: "https://github.com/BitwiseMercenary", Icon: Github, label: "GitHub" },
  { kind: "icon", text: "<svg/>", href: "https://www.linkedin.com/in/the-robert-mercado", Icon: LinkedIn, label: "LinkedIn" },
  { kind: "icon", text: "<svg/>", href: "/Resume V6 Full.pdf", Icon: DownloadCV, label: "Download CV" },
  { kind: "tag", text: "<h1>" },
  { kind: "title", text: "Robert Mercado", fumbles: [{ after: "Robert M", wrong: "r" }] },
  { kind: "tag", text: "</h1>" },
  { kind: "tag", text: "<p>", fumbles: [{ after: "<p", wrong: "p" }] },
  { kind: "body", text: "Plan. Design. Build. Lead." },
  { kind: "body", text: "Repeat." },
  { kind: "tag", text: "</p>" },
  { kind: "comment", text: "<!-- distilled in dc -->" },
];

/** Typed by the idle caret half a minute after the page settles. */
export const EGG: TextSegment = { kind: "comment", text: "<!-- still here? -->" };
