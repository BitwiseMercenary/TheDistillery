import React, {useContext} from "react";
import styled from "styled-components";
import { Div } from "../../atoms";
import { DivProps } from "../../models/styled-system";
import {ComponentListContainerLayout, ComponentListContainerProps, LayoutSelector, ThemeSelector} from "./types";
import {GlobalTheme} from "../../schemes";
import {ThemeContext} from "../../schemes/ThemeContext";

const StyledComponentListContainer: React.FunctionComponent<DivProps & { theme?: any, layout?: any }> = styled(Div)`
    ${props => ThemeSelector[props.theme]}
    ${props => LayoutSelector[props.layout]}
`;

/**
 * Displays children in list
 */
export const ComponentListContainer = ({
    layout = ComponentListContainerLayout.DEFAULT,
    ...props
}: ComponentListContainerProps) => {
    const theme = useContext(ThemeContext);

    /*
        1. get children from props
        2. if a child doesnt have an id, tag it with one generated from the Parents class name
     */
    return (
        <StyledComponentListContainer {...props} theme={theme} layout={layout}>
            {props.children}
        </StyledComponentListContainer>
    );
};
