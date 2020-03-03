import React from "react";
import { base, title, subheader } from "../themes";

export enum SpanTheme {
  DEFAULT,
  TITLE,
  SUBHEADER
}

export const ThemeSelector = {
  [SpanTheme.DEFAULT]: base,
  [SpanTheme.TITLE]: title,
  [SpanTheme.SUBHEADER]: subheader
} as const;

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  theme: SpanTheme;
}
