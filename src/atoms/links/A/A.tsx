import React, { useContext } from "react";

import styled from "styled-components";
import { baseProps, BaseProps } from "../../../models/styled-system";
import { ATheme, ThemeSelector } from "./helpers";
import { ComponentRegistry } from "../../../models";
import { ThemeContext } from "../../../schemes/ThemeContext";
import { select } from "../../../schemes/Theme";

const ID = ComponentRegistry.A;

export type AProps = BaseProps &
    React.HTMLAttributes<HTMLAnchorElement> &
    JSX.IntrinsicElements["a"] & {
        theme?: any;
        variant?: string;
        styles?: string;
    };

const StyledATag: React.FunctionComponent<AProps> = styled.a`
    ${(props: AProps) => baseProps};
    ${(props: AProps) => props.styles};
`;

const defaultATagTheme = ThemeSelector[ATheme.DEFAULT];

export const A = (props: AProps) => {
    const { theme, variant, styles = defaultATagTheme } = props;

    const contextTheme = useContext(ThemeContext);
    const customTheme = theme || contextTheme;

    const customStyles = customTheme || variant ? select(customTheme, ID, variant) : styles;

    return (
        <StyledATag {...props} styles={customStyles}>
            {props.children}
        </StyledATag>
    );
};
