import React from "react";
import { IconButton as MuiIconButton, styled } from "@mui/material";
import { keyframes } from "@emotion/react";
import { base, focus } from "@constants/colors";

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

const StyledButton = styled(MuiIconButton)`
  && .MuiTouchRipple-child {
    background-color: ${focus.accentForegroundFocus};
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.5;
    animation-name: ${enterKeyframe};
    animation-duration: 550ms;
    animation-timing-function: ${({ theme }) => theme.transitions.easing.easeInOut};
  }

  > svg {
    transition: all 0.5s ease;
  }
  :hover {
    > svg {
      fill: ${base.accentForeground};
    }
  }
`;

export const IconButton = ({ Icon, size }) => {
  return (
    <StyledButton>
      <Icon height={size} width={size} />
    </StyledButton>
  );
};
