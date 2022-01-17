import React from "react";
import styled from "styled-components";

import { Div, Flex } from "../../atoms";
import { ReactComponent as NavBarSeparator } from "../../assets/NavBarSeparator.svg";

import { colors } from "../../schemes";
import { ReactComponent as RMLogo } from "../../assets/RM.svg";

const HorizontalTopBar = styled(Flex)`
    background: ${colors.Leet.background};
    color: ${colors.Leet.navText};
    height: 30px;
    border-bottom: solid 1px ${colors.Leet.navBorder};
`;

const CurrentLocationTracker = ({ currentLocation }) => {
    return (
        <Flex id={"CurrentLocationTracker"} padding="4.5px">
            <Div>TheDistillery</Div>
            <Div padding={"2px 8px 0 8px"}>
                <NavBarSeparator />
            </Div>
            <Div>src</Div>
            <Div padding={"2px 8px 0 8px"}>
                <NavBarSeparator />
            </Div>
            <Div>{currentLocation}.tsx</Div>
        </Flex>
    );
};

export const IdeTopToolbar = ({ currentLocation }) => {
    return (
        <HorizontalTopBar id={"IdeTopToolbar"}>
            <RMLogo style={{ width: "18px", height: "18px" }} />
            <CurrentLocationTracker currentLocation={currentLocation} />
        </HorizontalTopBar>
    );
};
