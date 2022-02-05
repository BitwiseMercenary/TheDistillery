import React, { useState } from "react";
import { Button, Flex } from "../../atoms";

export const Dropdown = props => {
    const [expanded, setExpanded] = useState(false);

    const onClick = () => setExpanded(!expanded);

    return (
        <Flex>
            <Button onClick={onClick}>Dropdown Button</Button>
            {expanded && (props.children || props.content)}
        </Flex>
    );
};
