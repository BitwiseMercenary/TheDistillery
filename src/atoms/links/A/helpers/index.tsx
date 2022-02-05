import { base, leetIconlink } from "../themes";

export enum ATheme {
    DEFAULT,
    ICONLINK,
}

export const ThemeSelector = {
    [ATheme.DEFAULT]: base,
    [ATheme.ICONLINK]: leetIconlink,
} as const;
