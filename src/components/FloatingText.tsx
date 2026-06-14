import styled from "@emotion/styled";

interface Props {
  fontSize: string;
}

export const FloatingText = styled.span<Props>`
  position: relative;
  margin-left: 50px;
  font-size: ${props => props.fontSize};
`;
