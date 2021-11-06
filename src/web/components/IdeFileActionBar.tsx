import { ReactComponent as RMLogo } from "../../assets/RM.svg";
import { Button, Flex } from "../../atoms";
import React from "react";
import styled from "styled-components";
import { colors } from "../../schemes";

const HorizontalTopBar = styled(Flex)`
    background: ${colors.Leet.background};
    color: ${colors.Leet.navText};
    height: 30px;
    border-bottom: solid 1px ${colors.Leet.navBorder};
`;

export const IdeFileActionBar = () => {
    return (
        <HorizontalTopBar>
            <RMLogo style={{ width: "18px", height: "18px" }} />
            <Button variant={"base"}>File</Button>
            <Button variant={"base"}>Edit</Button>
            <Button variant={"base"}>View</Button>
            <Button variant={"base"}>Help</Button>
        </HorizontalTopBar>
    );
};
