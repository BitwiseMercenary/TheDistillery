import React from "react";
import styled from "styled-components";
import { DivProps } from "../../models/styled-system";

type ComponentListContainer = DivProps & {
  theme: any;
};

const StyledComponentListContainer = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ComponentListContainer = (props: DivProps) => {
  /*
        1. get children from props
        2. if a child doesnt have an id, tag it with one generated from the Parents class name
     */

  return (
    <StyledComponentListContainer>
      {props.children}
    </StyledComponentListContainer>
  );
};
