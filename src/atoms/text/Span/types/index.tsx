import React from "react";
import { base, tba } from "../themes";

export enum SpanTheme {
  DEFAULT = "DEFAULT",
  TBA = "TBA"
}

export const ThemeSelector = {
  [SpanTheme.DEFAULT]: base,
  [SpanTheme.TBA]: tba
} as const;

export interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  theme: SpanTheme;
}
