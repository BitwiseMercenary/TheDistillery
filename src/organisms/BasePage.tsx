import React from "react";
import styled from "styled-components";
import { NavigationBar } from "./NavigationBar";
import { Flex } from "../atoms";

// TO DO: Abstract this
const HomeBase = styled(Flex)`
    height: 100%;
    width: 100%;
    background-color: white;
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

export const BasePage = ({ children, bodyStyles = {} }) => {
    return (
        <HomeBase>
            <NavigationBar/>
            <Body {...bodyStyles} id={"BasePage"}>
                {children}
            </Body>
        </HomeBase>
    );
};
