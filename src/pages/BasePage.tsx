import React from "react";
import styled from "styled-components";
import { NavigationBar } from "../organisms/NavigationBar/NavigationBar";
import { Flex } from "../atoms";
import { NavigationBarTheme } from "../organisms/NavigationBar/types";
import { colors } from "../theme";

// TO DO: Abstract this
const HomeBase = styled(Flex)`
    height: 100%;
    width: 100%;
    background-color: ${colors.LEET.background};
    background-size: cover;
    flex-direction: column;
    align-items: center;
`;

const Body = styled(Flex)`
    padding-top: 30px;
    justify-content: space-between;
    width: 100%;

    @media only screen and (max-width: 625px) {
        flex-direction: column;
        align-items: center;
    }
`;

// I think this file should be moved to `/pages`. I don't think an organism should be able to use another organism.
export const BasePage = ({ children = null, bodyStyles = {} }) => {
    return (
        <HomeBase>
            <NavigationBar theme={NavigationBarTheme.LEET} />
            <Body {...bodyStyles} id={"BasePage"}>
                {children}
            </Body>
        </HomeBase>
    );
};
