import styled from "styled-components";
import StyledSystem, {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system";
import { Box, BoxProps } from "./Box";

export type FlexOnlyProps = StyledSystem.AlignItemsProps &
  StyledSystem.FlexWrapProps &
  StyledSystem.FlexDirectionProps &
  StyledSystem.JustifyContentProps;

export type FlexBoxProps = FlexOnlyProps & BoxProps;

export const Flex: React.FunctionComponent<FlexBoxProps & {
  children?: React.ReactNode;
}> = styled(Box)(
  {
    display: "flex"
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);
