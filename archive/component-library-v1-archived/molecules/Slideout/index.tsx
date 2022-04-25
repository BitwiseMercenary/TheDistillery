import React, { useState } from "react";
import styled from "styled-components";

import { Flex } from "../../atoms";

const Container = Flex as any;
const ContentContainer = styled(Container)`
    position: absolute;
    top: 20px;
    width: ${props => props.width};
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyContent};
`;

const DEFAULT_CONTAINER_WIDTH = "100%";
const DEFAULT_CONTENT_WIDTH = "100%";
const DEFAULT_CONTENT_HEIGHT = "100px";
const DEFAULT_CONTENT_JUSTIFY = "unset";
const DEFAULT_ALIGN_ITEMS = "unset";

const DEFAULT_CONTENT_PROPS = {
    height: DEFAULT_CONTENT_HEIGHT,
    width: DEFAULT_CONTENT_WIDTH,
    justifyContent: DEFAULT_CONTENT_JUSTIFY,
    alignItems: DEFAULT_ALIGN_ITEMS,
};

interface SlideoutBase {
    content?: React.ReactNode;
    toggleComponent: React.ReactNode;
    dataTestId?: string;
    width?: string;
    contentContainerStyleOverride?: {
        height?: string;
        width?: string;
        justifyContent?: string;
    };
}
type SlideoutProps = React.PropsWithChildren<SlideoutBase>;

export const Slideout = (props: SlideoutProps) => {
    const {
        children,
        content,
        dataTestId,
        toggleComponent,
        contentContainerStyleOverride,
        width = DEFAULT_CONTAINER_WIDTH,
    } = props;

    const contentContainerProps = {
        ...DEFAULT_CONTENT_PROPS,
        ...contentContainerStyleOverride,
    };

    const [expanded, setExpanded] = useState(false);

    const onClick = () => setExpanded(!expanded);

    return (
        <Flex flexDirection={"column"} position={"relative"} data-testid={dataTestId} width={width}>
            <Flex onClick={onClick} role={"button"} data-testid={`${dataTestId}-Toggler`}>
                {toggleComponent}
            </Flex>
            {expanded && (
                <ContentContainer data-testid={`${dataTestId}-Slideout-Content`} {...contentContainerProps}>
                    {children || content}
                </ContentContainer>
            )}
        </Flex>
    );
};
