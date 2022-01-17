import React from "react";
import { Flex } from "../../atoms";
import { ReactComponent as ArrowExpand } from "../../assets/ArrowExpand.svg";
import styled from "styled-components";

const Direction = {
    right: "right",
    left: "left",
    up: "right",
    down: "down",
} as const;

const DirectionToDegree = {
    [Direction.right]: 0,
    [Direction.down]: 90,
    [Direction.left]: 180,
    [Direction.up]: 270,
};

const TurnableArrow = styled(ArrowExpand)`
    transform: rotate(${props => DirectionToDegree[props.direction] + "deg"});
`;

export const CollapseIcon = ({ direction }) => <TurnableArrow direction={direction} />;
