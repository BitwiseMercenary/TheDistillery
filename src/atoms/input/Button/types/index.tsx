import React from "react";
import { base } from "../themes";

export enum ButtonTheme {
    DEFAULT = "DEFAULT",
}

export const ThemeSelector = {
    [ButtonTheme.DEFAULT]: base,
} as const;

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    theme: ButtonTheme;
}
