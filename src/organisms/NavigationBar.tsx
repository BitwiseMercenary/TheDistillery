import React from "react";
import styled from "styled-components";

// TODO: abstract as atom
const StyledButton = styled.button`
  height: 40px;
  background: transparent;
  font-size: 20px;
  border: none;
  border-left: solid 2px black;
  border-right: solid 2px black;
  border-radius: 10px;
  cursor: pointer;
`;
const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton>{props.children}</StyledButton>;
};

const NavContainer = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  background-color: transparent;
  margin-top: 20px;
  border: solid 3px black;
  border-radius: 10px;
  display: inline-flex;
  box-shadow: 0px 15px 15px 0px #cfcfcf;
}





`;

const ButtonListContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationBar = () => {
  // TO DO: Abstract as molecule
  const buttonList = [<Button>Home</Button>];

  return (
    <NavContainer>
      <ButtonListContainer>{buttonList}</ButtonListContainer>
    </NavContainer>
  );
};
