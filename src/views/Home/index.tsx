import type {ReactNode} from "react";
import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";
import {Box} from "@mui/material";

import {fontNames} from "@constants/typography";
import {base} from "@constants/colors";

import {FloatingText, IconButton} from "../../components";
import {type IconSegment, type Segment, SEGMENTS} from "./content";
import {type RenderedSegment, shouldReduceMotion, useTypewriter} from "./typewriter";

const MARKUP_GRAY = "#8e8e8e83";

const Container = styled.div`
  background: ${base.background};
  color: white;
  height: 100vh;
  width: 100vw;
`;

// Reserve the icon row's height up front so the markup below doesn't jump as
// the <svg/> tokens grow into icons.
const IconRow = styled.div`
  min-height: 3rem;
`;

// Gray faux-markup styling, shared by tag lines and the icon placeholders.
const TagLine = ({ children }: { children: ReactNode }) => (
  <Box sx={{ fontFamily: fontNames.Inconsolata, color: MARKUP_GRAY, display: "flex" }}>
    <FloatingText fontSize="1rem">
      {children}
    </FloatingText>
  </Box>
);

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
  background: white;
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

const IconLink = ({ icon, animate }: { icon: IconSegment; animate: boolean }) => (
  <IconHatch data-static={animate ? undefined : "true"}>
    <a href={icon.href} target={"_blank"} rel="noreferrer" aria-label={icon.label}>
      <IconButton Icon={icon.Icon} size={"1.563rem"} />
    </a>
  </IconHatch>
);

const renderSegment = ({ segment, key, text, typo, hasCaret, complete }: RenderedSegment<Segment>, blink: boolean, animate: boolean) => {
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
      {hasCaret && <Caret blink={blink} />}
    </>
  );

  switch (segment.kind) {
    case "tag":
      return <TagLine key={key}>{content}</TagLine>;
    case "title":
      return (
        <Box key={key} sx={{ fontSize: "4rem" }}>
          {content}
        </Box>
      );
    case "body":
      return (
        <Box key={key} sx={{ fontSize: "1rem" }}>
          {content}
        </Box>
      );
  }
};

export const Home = () => {
  const { segments, done } = useTypewriter(SEGMENTS);
  const animate = !shouldReduceMotion();

  const icons = segments.filter(rendered => rendered.segment.kind === "icon");
  const lines = segments.filter(rendered => rendered.segment.kind !== "icon");

  return (
    <Container>
      <IconRow>{icons.map(rendered => renderSegment(rendered, done, animate))}</IconRow>
      {lines.map(rendered => renderSegment(rendered, done, animate))}
    </Container>
  );
};
