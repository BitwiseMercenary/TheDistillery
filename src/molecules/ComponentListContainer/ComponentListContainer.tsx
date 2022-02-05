import React, { useContext } from "react";
import styled from "styled-components";
import { Div } from "../../atoms";
import { ComponentListContainerLayout, ComponentListContainerProps, LayoutSelector } from "./helpers";
import { ThemeContext } from "../../schemes/ThemeContext";
import { select } from "../../schemes/Theme";
import { ComponentRegistry } from "../../models";

const StyledComponentListContainer: React.FunctionComponent<ComponentListContainerProps> = styled(Div)`
    ${props => props.styles}
    ${props => LayoutSelector[props.layout]}
`;

const ID = ComponentRegistry.ComponentListContainer;

/**
 * Displays children in list
 */
export const ComponentListContainer = ({
    variant,
    layout = ComponentListContainerLayout.DEFAULT,
    theme = "",
    styles = "",
    ...props
}: ComponentListContainerProps) => {
    const contextTheme = useContext(ThemeContext);
    const customTheme = theme || contextTheme;

    const customStyles = customTheme || variant ? select(customTheme, ID, variant) : styles;

    /*
        1. get children from props
        2. if a child doesnt have an id, tag it with one generated from the Parents class name
     */
    return (
        <StyledComponentListContainer {...props} styles={customStyles} layout={layout}>
            {props.children}
        </StyledComponentListContainer>
    );
};
