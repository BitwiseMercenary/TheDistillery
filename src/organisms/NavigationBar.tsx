import React from "react";
import styled from "styled-components";
import { Button, A, Flex } from "../atoms";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ATheme } from "../atoms/links/A/types";
import { ComponentListContainer } from "../molecules/ComponentListContainer/ComponentListContainer";

// TODO: abstract as atom
const NavContainer = styled.div`
  width: 325px; //calc(100% - 20px);
  height: 52px;
  background-color: transparent;
  margin-top: 20px;
  border: solid 3px black;
  border-radius: 10px;
  display: inline-flex;
  box-shadow: 0px 15px 15px 0px #cfcfcf;
`;

export const NavigationBar = () => {
  // TO DO: Abstract as molecule
  const buttonList = [
    <Button id="NavBar-Home-Button">Home</Button>,
    <Button id="NavBar-Resume-Button" onClick={() => {}}>
      Resume
    </Button>,
    <Button id="NavBar-OtherStuff-Button" onClick={() => {}}>
      Other Stuff
    </Button>
  ];

  const iconList = [
    <A
      theme={ATheme.ICONLINK}
      href="https://www.linkedin.com/in/robert-mercado-30801990/"
    >
      <FaLinkedin />
    </A>,
    <A theme={ATheme.ICONLINK} href="https://github.com/DarkseidOmega/">
      <FaGithub />
    </A>
  ];
  return (
    <Flex>
      <NavContainer className="NavContainer">
        <ComponentListContainer className="ButtonListContainer">
          {buttonList}
        </ComponentListContainer>
      </NavContainer>

      <Flex margin="25px 0 0 15px" width="85px">
        <ComponentListContainer className="IconListContainer">
          {iconList}
        </ComponentListContainer>
      </Flex>
    </Flex>
  );
};
