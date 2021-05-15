import { leet } from "../themes";
import { base as baseL, vertical as verticalL } from "../layout";
import { DivProps } from "../../../models/styled-system";
import { GlobalTheme } from "../../../schemes";

export const ComponentListContainerLayout = {
    DEFAULT: "DEFAULT",
    VERTICAL: "VERTICAL",
} as const;

// TO DO: Refactor themes so that we can have components uphold contracts to provide theme implementations
export const ThemeSelector = {
    [GlobalTheme.LEET]: leet
} as const;

export const LayoutSelector = {
    [ComponentListContainerLayout.DEFAULT]: baseL,
    [ComponentListContainerLayout.VERTICAL]: verticalL
} as const;

export type ComponentListContainerProps = DivProps & {
    theme?: keyof typeof GlobalTheme | undefined;
    layout?: keyof typeof LayoutSelector | undefined;
};
