import React from "react";
import styled from "styled-components";

import { A, Div, Flex } from "../../atoms";
import { ReactComponent as NavBarSeparator } from "../../assets/NavBarSeparator.svg";

import { colors } from "../../schemes";
import { ReactComponent as RMLogo } from "../../assets/RM.svg";
import { spacingTokens } from "../../design-tokens/spacing";
import { ATheme } from "../../atoms/links/A/helpers";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Container = styled(Flex)`
    background: ${colors.Leet.background};
    color: ${colors.Leet.navText};
    height: 30px;
    border-bottom: solid 1px ${colors.Leet.navBorder};
    align-items: center;
    padding-left: ${spacingTokens.reg};
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

const IconBar = () => {
    return (
        <Flex width={"25%"} justifyContent={"right"}>
            <A
                marginLeft={spacingTokens.reg}
                key="LinkedIn-ButtonIcon"
                href="https://www.linkedin.com/in/robert-mercado-30801990/"
                variant={"iconLinkButton"}
            >
                <FaLinkedin />
            </A>
            <A
                marginLeft={spacingTokens.reg}
                key="Github-ButtonIcon"
                variant={"iconLinkButton"}
                href="https://github.com/DarkseidOmega/"
            >
                <FaGithub />
            </A>
        </Flex>
    );
};

export const IdeTopToolbar = ({ currentLocation }) => {
    return (
        <Container id={"IdeTopToolbar"}>
            <RMLogo style={{ width: "18px", height: "18px" }} />
            <CurrentLocationTracker currentLocation={currentLocation} />
            <IconBar />
        </Container>
    );
};
