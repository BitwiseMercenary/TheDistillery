import { base, vertical, leet } from "../themes";
import { DivProps } from "../../../models/styled-system";
import { GlobalTheme } from "../../../schemes";

export const ComponentListContainerTheme = {
    ...GlobalTheme,
    DEFAULT: "DEFAULT",
    VERTICAL: "VERTICAL",
} as const;

// TO DO: Refactor themes so that we can have components uphold contracts to provide theme implementations
export const ThemeSelector = {
    [ComponentListContainerTheme.DEFAULT]: base,
    [ComponentListContainerTheme.VERTICAL]: vertical,
    [GlobalTheme.LEET]: leet,
} as const;

export type ComponentListContainerProps = DivProps & {
    theme?: keyof typeof ComponentListContainerTheme | undefined;
};
