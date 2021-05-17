import React, { useContext } from "react";
import styled from "styled-components";
import { Flex } from "../../../atoms";
import { ComponentListContainer } from "../../../molecules/ComponentListContainer/ComponentListContainer";
import { ComponentRegistry } from "../../../models";
import { ThemeContext } from "../../../schemes/ThemeContext";
import {ComponentListContainerLayout as NavLayout} from "../../../molecules/ComponentListContainer/helpers";

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

const StyledNavigationBar = styled(Flex)`
`;

export const NavigationBar = ({ tabList, iconList }) => {
    return (
        <StyledNavigationBar id={"NavigationBar"} >
            <ComponentListContainer id="ButtonListContainer" layout={NavLayout.VERTICAL} variant={"base"}>
                {tabList}
                {iconList}
            </ComponentListContainer>
        </StyledNavigationBar>
    );
};
