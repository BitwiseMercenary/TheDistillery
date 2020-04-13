import React from "react";
import styled from "styled-components";
import { Flex, Span } from "../../atoms";
import { SpanTheme } from "../../atoms/text/Span/types";
import { BasePage } from "../../organisms";
import { Route } from "../../constants";
import { DesktopWindow } from "../../molecules/DesktopWindow/DesktopWindow";
import P from "../../atoms/text/P/P";

const StyledImg = styled.div`
  height: calc(100vh - 120px);
  background-size: cover !important;
  background-repeat: no-repeat !important;
  width: 50vw;
  background: url(${Route.ROOT}/bestest.jpg);
  border-top-left-radius: 150px;
  border-bottom-left-radius: 150px;
  transition: all 0.75s;

  @media only screen and (max-width: 625px) {
    height: unset;
  }
`;

export const Home = () => {
  return (
    <BasePage>
      <Flex
        width="50vw"
        flexDirection="column"
        alignItems="center"
        paddingTop="50px"
      >
        <DesktopWindow width={"100%"} height={"auto"}>
          <Flex flexDirection="column" justifyContent="center">
            <Span theme={SpanTheme.TITLE} aria-label="header">
              Robert Mercado
            </Span>
            <Span theme={SpanTheme.SUBHEADER}>
              Software Engineer | Home Cook | Bourbon Drinker
            </Span>
            <Flex width="70%" flexDirection="column">
              <P marginTop="50px" fontFamily="monospace">
                I'm a software engineer based out of Arlington, VA.
              </P>
              <P fontFamily="monospace">
                I thought it'd be fun to create a component library just to
                build this personal website ¯\_(ツ)_/¯ -- never take the path of
                least resistance, amirite? It's still a work in progress.
              </P>
              <P fontFamily="monospace">
                If you wish to contact me about work stuffs, the best way is via
                LinkedIn (see button by the nav bar).
              </P>
            </Flex>
          </Flex>
        </DesktopWindow>
      </Flex>
      <StyledImg />
    </BasePage>
  );
};
