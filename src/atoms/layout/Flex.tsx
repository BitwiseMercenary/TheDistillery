import styled from "styled-components";
import StyledSystem, { flexWrap, flexDirection, alignItems, justifyContent } from "styled-system";
import { Div } from "./Div";
import { DivProps } from "../../models/styled-system";

export type FlexOnlyProps = StyledSystem.AlignItemsProps &
    StyledSystem.FlexWrapProps &
    StyledSystem.FlexDirectionProps &
    StyledSystem.JustifyContentProps;

export type FlexProps = FlexOnlyProps & DivProps;

export const Flex: React.FunctionComponent<FlexProps> = styled(Div)(
    {
        display: "flex",
    },
    flexWrap,
    flexDirection,
    alignItems,
    justifyContent,
);
