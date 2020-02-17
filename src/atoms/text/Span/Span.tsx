import React from "react";
import styled from "styled-components";
import { SpanProps, SpanTheme, ThemeSelector } from "./types";

const ThemedSpan = styled.span`
  ${(props: SpanProps) => ThemeSelector[props.theme]}
`;

export const Span = (props: SpanProps) => {
  return <ThemedSpan {...props}>{props.children}</ThemedSpan>;
};

Span.defaultProps = {
  theme: SpanTheme.DEFAULT
};
