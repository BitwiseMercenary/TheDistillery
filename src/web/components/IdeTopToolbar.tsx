import React from "react";
import styled from "styled-components";

import { Div, Flex } from "../../atoms";
import { ReactComponent as NavBarSeparator } from "../../assets/NavBarSeparator.svg";

import { colors } from "../../schemes";

const HorizontalTopBar = styled(Flex)`
    background: ${colors.Leet.background};
    color: ${colors.Leet.navText};
    height: 30px;
    border-bottom: solid 1px ${colors.Leet.navBorder};
`;

export const IdeTopToolbar = ({ currentLocation }) => {
    return (
        <HorizontalTopBar>
            <Div>TheDistillery</Div>
            <Div>
                <NavBarSeparator />
            </Div>
            <Div>src</Div>
            <Div>
                <NavBarSeparator />
            </Div>
            <Div>{currentLocation}</Div>
        </HorizontalTopBar>
    );
};
