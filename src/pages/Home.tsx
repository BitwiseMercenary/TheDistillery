import React from "react";
import styled from "styled-components";

const HomeBase = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  background-size: cover;
`;

const Message = styled.div`
  background-color: #fff;
  opacity: 0.18;
  font-family: cursive;
  font-size: 50px;
  color: black;
  font-weight: 600;
  width: fit-content;
  display: inline-table;
  border-radius: 30px;
  width: 400px;
  margin-top: 50vh;
`;

export const Home = () => {
  return (
    <HomeBase>
      <Message>Brewing the mash... </Message>
    </HomeBase>
  );
};
