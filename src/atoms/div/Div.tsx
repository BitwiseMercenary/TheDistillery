import styled from "styled-components";
import { DivProps, baseProps } from "../../models/styled-system";

export const Div: React.FunctionComponent<DivProps> = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  ...baseProps
);

//export const Div = (props: any) => styled(BaseDiv)``;
