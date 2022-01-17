import React from "react";
import styled from "styled-components";
import { Div, Flex } from "../../atoms";
import { ComponentListContainer } from "../../molecules/ComponentListContainer/ComponentListContainer";
import { ComponentListContainerLayout as NavLayout } from "../../molecules/ComponentListContainer/helpers";

import { ReactComponent as Folder } from "../../assets/Folder.svg";
import { ReactComponent as ModuleDirectory } from "../../assets/ModuleDirectory.svg";
import { colors } from "../../schemes";
import { CollapseIcon } from "./CollapseIcon";

const NavDirButton = ({ IconComponent, text }) => {
    return (
        <Flex color={colors.Leet.navText} id={`NavigationBar-DirButton-${text}`}>
            <CollapseIcon direction={"down"} /> <IconComponent /> <Div paddingLeft={"5px"}>{text}</Div>
        </Flex>
    );
};

const StyledNavigationBar = styled(Flex)`
    flex-direction: column;
    height: 100%;
    width: 200px;
    border-right: solid 1px ${colors.Leet.navBorder};
`;

export const NavigationBar = ({ tabList, iconList }) => {
    return (
        <StyledNavigationBar id={"NavigationBar"}>
            <NavDirButton IconComponent={ModuleDirectory} text="TheDistillery" />
            <NavDirButton IconComponent={Folder} text="src" />
            <ComponentListContainer id="ButtonListContainer" layout={NavLayout.VERTICAL} variant={"base"}>
                {tabList}
                {iconList}
            </ComponentListContainer>
        </StyledNavigationBar>
    );
};
