import React from "react";
import styled from "styled-components";
import { Span } from "../../atoms";
import { SpanTheme } from "../../atoms/text/Span/types";
import { NavigationBar } from "../../organisms";
import { Route } from "../../constants";

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
        <div
          style={{
            width: "50vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "50px"
          }}
        >
          <Span theme={SpanTheme.TBA}>Robert Mercado </Span>
          <span
            style={{
              fontSize: "20px",
              color: "#878787",
              fontFamily: "Copperplate",
              marginTop: "5px",
              fontWeight: 100
            }}
          >
            Software Engineer | Cook | Bourbon Drinker | Sexy Man
          </span>
          <span style={{ marginTop: "50px" }}>I'm working on it...</span>
        </div>
        <StyledImg />
      </Body>
    </HomeBase>
  );
};
