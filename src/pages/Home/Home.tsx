import React from "react";
import styled from "styled-components";
import { Span } from "../../atoms";
import { SpanTheme } from "../../atoms/text/Span/types";

const HomeBase = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-size: cover;
`;

export const Home = () => {
  return (
    <HomeBase>
      <Span theme={SpanTheme.TBA}>Brewing the mash... </Span>
    </HomeBase>
  );
};
