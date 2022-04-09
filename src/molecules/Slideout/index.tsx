import React, { useState } from "react";
import styled from "styled-components";

import { Button, Flex } from "@atoms/index";
import { FlexProps } from "@atoms/layout/Flex";
import p from "@atoms/text/P/P";

const Container = Flex as any;
const ContentContainer = styled(Container)`
    transition: all 0.75s;
    position: absolute;
    top: 20px;
    width: ${props => props.width};
    height: ${props => (props.expanded ? props.height : "0")};
    opacity: ${props => (props.expanded ? 1 : 0)};
    align-items: center;
    justify-content: ${props => props.justifyContent};
`;

const DEFAULT_CONTENT_WIDTH = "100%";
const DEFAULT_CONTENT_HEIGHT = "100px";
const DEFAULT_CONTENT_JUSTIFY = "center";

const DEFAULT_CONTENT_PROPS = {
    height: DEFAULT_CONTENT_HEIGHT,
    width: DEFAULT_CONTENT_WIDTH,
    justifyContent: DEFAULT_CONTENT_JUSTIFY,
};

interface SlideoutBase {
    content?: React.ReactNode;
    toggleComponent: React.ReactNode;
    contentContainerStyleOverride?: {
        height?: string;
        width?: string;
        justifyContent?: string;
    };
}
type SlideoutProps = React.PropsWithChildren<SlideoutBase>;

export const Slideout = (props: SlideoutProps) => {
    const { children, content, toggleComponent, contentContainerStyleOverride } = props;

    const contentContainerProps = {
        ...DEFAULT_CONTENT_PROPS,
        ...contentContainerStyleOverride,
    };

    const [expanded, setExpanded] = useState(false);

    const onClick = () => setExpanded(!expanded);

    return (
        <Flex flexDirection={"column"} position={"relative"}>
            <Flex onClick={onClick} role={"button"}>
                {toggleComponent}
            </Flex>
            <ContentContainer expanded={expanded} {...contentContainerProps}>
                {children || content}
            </ContentContainer>
        </Flex>
    );
};
