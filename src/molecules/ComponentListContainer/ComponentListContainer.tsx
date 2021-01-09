import React from "react";
import styled from "styled-components";
import {Div} from "../../atoms";
import {ComponentListContainerProps, ComponentListContainerTheme, ThemeSelector} from "./types";
import {DivProps} from "../../models/styled-system";

const StyledComponentListContainer: React.FunctionComponent<DivProps & {theme?: any} > = styled(Div)`
  ${props => {
    console.log({ ...props });
    return ThemeSelector[props.theme]
  }
  }
}
`;

/**
 * Displays children in list
 */
export const ComponentListContainer = ({ theme =  ComponentListContainerTheme.DEFAULT, ...props }: ComponentListContainerProps) => {
    /*
        1. get children from props
        2. if a child doesnt have an id, tag it with one generated from the Parents class name
     */
    console.log({ ...props, theme, loc: "ComponentListContainer"})
    return <StyledComponentListContainer { ...props } theme={theme}>{props.children}</StyledComponentListContainer>;
};
