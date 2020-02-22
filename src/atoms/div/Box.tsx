import styled from "styled-components";
import StyledSystem, {
  space,
  backgroundImage,
  background,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  position,
  textAlign,
  overflow,
  zIndex,
  borders,
  fontFamily,
  fontWeight,
  lineHeight,
  letterSpacing
} from "styled-system";
import { TypographyProps } from "../../types/styled-system";
//import { flexShrink, FlexShrink } from 'Theme';

// abstract this so Flex and Box use it seper
export type BoxProps = TypographyProps &
  StyledSystem.SpaceProps &
  StyledSystem.BackgroundImageProps &
  StyledSystem.BackgroundProps &
  StyledSystem.ColorProps &
  StyledSystem.FontSizeProps &
  StyledSystem.OrderProps &
  StyledSystem.AlignSelfProps &
  StyledSystem.SizeProps &
  StyledSystem.WidthProps &
  StyledSystem.HeightProps &
  StyledSystem.MaxWidthProps &
  StyledSystem.MinWidthProps &
  StyledSystem.MaxHeightProps &
  StyledSystem.MinHeightProps &
  StyledSystem.PositionProps &
  StyledSystem.FlexProps &
  StyledSystem.TextAlignProps &
  StyledSystem.ZIndexProps &
  StyledSystem.BordersProps &
  StyledSystem.OverflowProps;

export const Box: React.FunctionComponent<BoxProps & {
  children?: React.ReactNode;
} & JSX.IntrinsicElements["div"]> = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  space,
  background,
  backgroundImage,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
  size,
  position,
  textAlign,
  overflow,
  alignSelf,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  zIndex,
  borders
  //flexShrink
);
