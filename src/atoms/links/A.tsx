import styled from "styled-components";
import { TypographyProps } from "../../models/styled-system";

type AProps = TypographyProps &
  React.HTMLAttributes<HTMLAnchorElement> &
  JSX.IntrinsicElements["a"];

export const A: React.FunctionComponent<AProps> = styled.a``;
