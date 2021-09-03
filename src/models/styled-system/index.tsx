import React from "react";
import StyledSystem, {
    ColorProps,
    TypographyProps as StyledSystemTypographyProps,
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
    letterSpacing,
} from "styled-system";

export type TypographyProps = ColorProps & StyledSystemTypographyProps;

export type BaseProps = TypographyProps &
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
    StyledSystem.OverflowProps & { layout?: string; styles?: string };

// TODO: abstract this into chunks so that its usable for multplie atoms and html elements
export type DivProps = BaseProps & React.HTMLAttributes<HTMLDivElement> & JSX.IntrinsicElements["div"];

export const baseProps = [
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
    fontFamily,
    fontWeight,
    lineHeight,
    letterSpacing,
    zIndex,
    borders,
];
