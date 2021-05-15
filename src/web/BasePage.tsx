import React from "react";
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Flex } from "../atoms";
import { colors, GlobalTheme } from "../schemes";
import { useNavComponents } from "./useNavComponents";
import { ThemeContext } from "../schemes/ThemeContext";

// TO DO: Abstract this
const HomeBase = styled(Flex)`
    height: 100%;
    width: 100%;
    background-color: ${colors.LEET.background};
    background-size: cover;
    flex-direction: row;
    align-items: center;
`;

const Body = styled(Flex)`
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 625px) {
        flex-direction: column;
        align-items: center;
    }
`;

// I think this file should be moved to `/pages`. I don't think an organism should be able to use another organism.
export const BasePage = ({ children = null, bodyStyles = {} }) => {

    const { tabList, iconList } = useNavComponents();

    return (
        <ThemeContext.Provider value={GlobalTheme.LEET}>
            <HomeBase id={"BasePage"}>
                <NavigationBar tabList={tabList} iconList={iconList}/>
                <Body {...bodyStyles} id={"BasePage-Body"}>
                    {children}
                </Body>
            </HomeBase>
        </ThemeContext.Provider>
    );
};
