import styled from "styled-components";
//import { colors } from "Theme";
import {
  alignSelf,
  AlignSelfProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  height,
  HeightProps,
  letterSpacing,
  lineHeight,
  order,
  OrderProps,
  space,
  SpaceProps,
  textAlign,
  TypographyProps as StyledSystemTypographyProps,
  width,
  WidthProps,
} from "styled-system";
import { colors } from "../../../theme";
//import { themed } from 'Utils/theme.helpers';

export type TypographyProps = ColorProps & StyledSystemTypographyProps;

export type TextProps = TypographyProps &
  AlignSelfProps &
  FlexProps &
  HeightProps &
  OrderProps &
  SpaceProps &
  WidthProps & { htmlFor?: string };

const P = styled.p<TextProps>(
  space,
  width,
  height,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
  //themed('text')
);

P.defaultProps = {
  fontSize: "15px",
  color: colors.black,
};

export default P;
