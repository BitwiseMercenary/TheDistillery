import styled from "styled-components";
import { BaseProps, baseProps } from "../../../models/styled-system";
import { ATheme, ThemeSelector } from "./types";

export type AProps = BaseProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  JSX.IntrinsicElements["a"] & {
    theme: ATheme;
  };

const BaseA: React.FunctionComponent<AProps> = styled.a({}, ...baseProps);

export const A = styled(BaseA)`
  ${(props: AProps) => ThemeSelector[props.theme]}
`;

A.defaultProps = {
  theme: ATheme.DEFAULT
};
