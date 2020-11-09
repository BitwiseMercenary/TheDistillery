import { base, iconlink } from "../themes";

export enum ATheme {
    DEFAULT,
    ICONLINK,
}

export const ThemeSelector = {
    [ATheme.DEFAULT]: base,
    [ATheme.ICONLINK]: iconlink,
} as const;
