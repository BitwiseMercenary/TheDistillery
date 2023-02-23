import React from "react";
import styled from "@emotion/styled";
import { supaBigFontSize, regular, fontNames } from "@constants/typography";
import { colors } from "@constants/colors";
import { Box } from "@mui/material";

import { FloatingText, MenuButton } from "../../components";

const Container = styled.div`
  background: ${colors.background};
  color: white;
  height: 100vh;
  width: 100vw;
`;

const Glass = styled(Box)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const HTML = ({ children }) => {
  return (
    <Box fontFamily={fontNames.Inconsolata} color={"#8E8E8E83"} display={"flex"}>
      <FloatingText bottom="1rem" fontSize="1rem">
        {children}
      </FloatingText>
    </Box>
  );
};

const BlinkingCursor = styled.div`
  display: inline-block;
  width: 0.5rem;
  height: 1rem;
  background: white;
  transition: 0.5s;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }

  animation-name: blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
export const Home = () => (
  <Container>
    <MenuButton />
    <HTML>{"<h1>"}</HTML>
    <Box fontSize={"4rem"}>Robert Mercado</Box>
    <HTML>{"</h1>"}</HTML>
    <HTML>{"<p>"}</HTML>
    <Box fontSize={"1rem"}>Plan. Design. Build. Lead.</Box>
    <Box fontSize={"1rem"}>Repeat.</Box>
    <HTML>
      {"</p>"} <BlinkingCursor />
    </HTML>

    {/*
          <Box fontSize={"1rem"} fontFamily={fontNames.Inconsolata} color={"#8E8E8E83"}>
              {"// const foo = {"}
          </Box>
          <Box fontSize={"5rem"}>I'm Robert Mercado</Box>
          <Box fontSize={regular}>tinkerer.</Box>
          <Box fontSize={regular}>builder.</Box>
          <Box fontSize={regular}>leader.</Box>
          <Box fontSize={".25rem"}>bourbon drinker.</Box>
          */}
  </Container>
);
