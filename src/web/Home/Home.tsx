import React from "react";
import styled from "styled-components";
import { Flex, Span } from "../../atoms";
import { SpanTheme } from "../../atoms/text/Span/types";
import { Route } from "../../constants";
import { BasePage } from "../";
import P from "../../atoms/text/P/P";

const StyledImg = styled.div`
    height: calc(100vh - 120px);
    background-size: cover !important;
    background-repeat: no-repeat !important;
    width: 100%;
    background: url(${Route.ROOT}/bestest.jpg);
    border-top-right-radius: 150px;
    border-bottom-right-radius: 150px;
    transition: all 0.75s;

    @media only screen and (max-width: 625px) {
        background-size: cover !important;
        height: calc(300px);
        border-radius: 150px;
    }
`;

const Responsive = styled(Flex)`
    width: 50vw;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 625px) {
        width: 90vw;
    }
`;

export const Home = () => {
    return (
        <BasePage>
            <Responsive>
                <StyledImg />
            </Responsive>
            <Responsive paddingTop="50px">
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    // this is turning into centering box hell -- fix it...
                >
                    <Span theme={SpanTheme.TITLE} aria-label="header">
                        Robert Mercado
                    </Span>
                    <Span theme={SpanTheme.SUBHEADER}>Software Engineer | Home Cook | Bourbon Drinker</Span>
                    <Flex width="70%" flexDirection="column">
                        <P marginTop="50px" fontFamily="monospace">
                            I'm a software engineer based out of Arlington, VA.
                        </P>
                        <P fontFamily="monospace">
                            I thought it'd be fun to create a component library just to build this personal website
                            ¯\_(ツ)_/¯ -- never take the path of least resistance, amirite? It's still a work in
                            progress.
                        </P>
                        <P fontFamily="monospace">
                            If you wish to contact me about work stuffs, the best way is via LinkedIn (see button by the
                            nav bar).
                        </P>
                    </Flex>
                </Flex>
            </Responsive>
        </BasePage>
    );
};
