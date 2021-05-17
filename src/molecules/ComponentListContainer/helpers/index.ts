import { base as baseL, vertical as verticalL } from "../layout";
import { DivProps } from "../../../models/styled-system";

export const ComponentListContainerLayout = {
    DEFAULT: "DEFAULT",
    VERTICAL: "VERTICAL",
} as const;

export const LayoutSelector = {
    [ComponentListContainerLayout.DEFAULT]: baseL,
    [ComponentListContainerLayout.VERTICAL]: verticalL
} as const;

export type ComponentListContainerProps = DivProps & {
    theme?: any;
    styles?: string;
    variant?: string;
    layout?: string;
};
