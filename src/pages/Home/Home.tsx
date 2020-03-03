import React from "react";
import styled from "styled-components";
import { Flex, Span } from "../../atoms";
import { SpanTheme } from "../../atoms/text/Span/types";
import { NavigationBar } from "../../organisms";
import { Route } from "../../constants";
import P from "../../atoms/text/P/P";

// TO DO: Abstract this
const HomeBase = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const Body = styled.div`
  padding-top: 30px;
  display: flex;
  flex-driection: row;
  justify-content: space-between;
  width: 100%;
`;

export const Home = () => {
  return (
    <HomeBase>
      <NavigationBar />
      <Body>
        <Flex
          width="50vw"
          flexDirection="column"
          alignItems="center"
          paddingTop="50px"
        >
          <Span theme={SpanTheme.TITLE}>Robert Mercado </Span>
          <Span theme={SpanTheme.SUBHEADER}>
            Software Engineer | Home Cook | Bourbon Drinker
          </Span>
          <P marginTop="50px" fontFamily="monospace">
            I'm working on it...
          </P>
        </Flex>
        <StyledImg />
      </Body>
    </HomeBase>
  );
};
