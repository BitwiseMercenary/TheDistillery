import React, { useContext } from "react";
import styled from "styled-components";
import { ButtonProps } from "./helpers";
import { ThemeContext } from "@schemes/ThemeContext";
import { ComponentRegistry } from "@models/index";
import { select } from "@schemes/Theme";
import { baseButton } from "./themes";

const ThemedButton = styled.button`
    ${(props: ButtonProps) => props.styles}
`;

const ID = ComponentRegistry.Button;

export const Button = (props: ButtonProps) => {
    const { theme, variant, styles = baseButton } = props;

    const contextTheme = useContext(ThemeContext);
    const customTheme = theme || contextTheme;

    const customStyles = customTheme || variant ? select(customTheme, ID, variant) : styles;

    return (
        <ThemedButton {...props} styles={customStyles}>
            {props.children}
        </ThemedButton>
    );
};
