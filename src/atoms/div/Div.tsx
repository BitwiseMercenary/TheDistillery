import styled from "styled-components";
import { DivProps, divProps } from "../../models/styled-system";

export const Div: React.FunctionComponent<DivProps> = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  ...divProps
);
