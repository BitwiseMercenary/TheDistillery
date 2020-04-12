import React from "react";
import styled from "styled-components";
import { Div, Flex } from "../../atoms";

const borderRadius = "5px";

const frameBorder = "#6A6A6A";

const windowButtonSize = "12px";

const Frame = styled(Flex)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 6.2px;
  border: solid 1.2px ${frameBorder};
`;

/* @special */
export const DesktopWindow = ({ width, height, children }) => {
  return (
    <Frame width={width} height={height} flexDirection="column">
      {/* top bar of frame*/}
      <Flex
        backgroundColor="#2A2A2C"
        width="100%"
        height="20px"
        borderRadius={`${borderRadius} ${borderRadius} 0 0`}
        padding="2.5px 6.5px"
        //border={`solid 1px ${frameBorder}`}
      >
        {/* OSX Window button container */}
        <Flex width="53px" justifyContent="space-between">
          <Div
            backgroundColor={"#FC5B57"}
            height={windowButtonSize}
            width={windowButtonSize}
            borderRadius={windowButtonSize}
          />
          <Div
            backgroundColor={"#E5BF3C"}
            height={windowButtonSize}
            width={windowButtonSize}
            borderRadius={windowButtonSize}
          />
          <Div
            backgroundColor={"#57C038"}
            height={windowButtonSize}
            width={windowButtonSize}
            borderRadius={windowButtonSize}
          />
        </Flex>
        <Flex
          width="100%"
          height="100%"
          justifyContent="center"
          fontSize="12px"
          color="white"
        >
          <Flex>Window Text</Flex>
        </Flex>
      </Flex>
      <Flex
        height="100%"
        width="100%"
        borderRadius={`0 0 ${borderRadius} ${borderRadius}`}
        overflowY="auto"
      >
        {children}
      </Flex>
    </Frame>
  );
};

DesktopWindow.defaultProps = {
  children: null,
};
