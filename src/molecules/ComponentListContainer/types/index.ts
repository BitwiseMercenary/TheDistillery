import {base, vertical} from "../themes"
import {DivProps} from "../../../models/styled-system";

export enum ComponentListContainerTheme {
    DEFAULT = "DEFAULT",
    VERTICAL = "VERTICAL"
}

export const ThemeSelector = {
    [ComponentListContainerTheme.DEFAULT]: base,
    [ComponentListContainerTheme.VERTICAL]: vertical,
} as const;

export type ComponentListContainerProps = DivProps & {
    theme?: ComponentListContainerTheme | undefined
}