import React from "react";
import styled from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import { Flex } from "../atoms";
import { colors, Theme } from "../schemes";
import { useNavComponents } from "./useNavComponents";
import { ThemeProvider } from "../schemes/ThemeProvider";
import { IdeTopToolbar } from "./components/IdeTopToolbar";

// TO DO: Abstract this
const HomeBase = styled(Flex)`
    height: 100%;
    background-color: ${colors.Leet.background};
    background-size: cover;
    flex-direction: row;
    align-items: center;
`;

const Body = styled(Flex)`
    background-color: ${colors.white};
    width: 100%;
    height: 100%;
    align-items: center;

    @media only screen and (max-width: 625px) {
        flex-direction: column;
        align-items: center;
    }
`;

// I think this file should be moved to `/pages`. I don't think an organism should be able to use another organism.
export const BasePage = ({ children = null, bodyStyles = {}, name }) => {
    const { tabList } = useNavComponents();

    return (
        <ThemeProvider value={Theme.Leet}>
            <Flex height={"100%"} width={"100%"} flexDirection={"column"}>
                <IdeTopToolbar currentLocation={name} />
                <HomeBase id={"BasePage"}>
                    <NavigationBar tabList={tabList} />
                    <Body {...bodyStyles} id={"BasePage-Body"}>
                        {children}
                    </Body>
                </HomeBase>
            </Flex>
        </ThemeProvider>
    );
};
