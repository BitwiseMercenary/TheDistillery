import React from "react";
import { IconButton, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

import { ReactComponent as RmLogo } from "@assets/Rm.svg";

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const StyledButton = styled(IconButton)`
  background-color: black;
  height: 50px;
  width: 50px;
  && .MuiTouchRipple-child {
    background-color: white;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.5;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) => theme.transitions.easing.easeInOut};
  }
`;

export const MenuButton = () => {
  return (
    <StyledButton>
      <RmLogo height={"20px"} width={"20px"} />
    </StyledButton>
  );
};
