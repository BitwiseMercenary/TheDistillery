import React, { useContext } from "react";
import styled from "styled-components";
import { Flex } from "../../atoms";
import { ComponentListContainer } from "../../molecules/ComponentListContainer/ComponentListContainer";
import { ThemeSelector } from "./types";
import { ComponentRegistry } from "../../models";
import { ThemeContext } from "../../schemes/ThemeContext";

// TODO: abstract as atom
/*const NavContainer = styled.div`
    width: 325px; //calc(100% - 20px);
    height: 52px;
    background-color: transparent;
    margin-top: 20px;
    border: solid 3px black;
    border-radius: 10px;
    display: inline-flex;
    box-shadow: 0px 15px 15px 0px #cfcfcf;
`;*/

/*const TopStuff = styled(Flex)`
    @media only screen and (max-width: 605px) {
        flex-direction: column;
        align-items: center;
    }
`;*/
export const componentId = ComponentRegistry.NavigationBar;

const StyledNavigationBar = styled(Flex)`
    ${props => {
        return ThemeSelector[props.theme];
    }}
    ${props => props.layout || ""}
`;

export const NavigationBar = ({ layout, tabList, iconList }) => {
    const theme = useContext(ThemeContext);
    return (
        <StyledNavigationBar id={"NavigationBar"} theme={theme} layout={layout}>
            <ComponentListContainer id="ButtonListContainer" theme={theme}>
                {tabList}
                {iconList}
            </ComponentListContainer>
        </StyledNavigationBar>
    );
};
