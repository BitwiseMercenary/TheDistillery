import { Flex } from "../../atoms";
import React from "react";
import { IdeFileActionBar } from "./IdeFileActionBar";
import { IdeTopToolbar } from "./IdeTopToolbar";

export const IdeActionToolBarSet = ({ currentLocation }) => {
    return (
        <Flex flexDirection={"column"}>
            <IdeFileActionBar />
            <IdeTopToolbar currentLocation={currentLocation} />
        </Flex>
    );
};
