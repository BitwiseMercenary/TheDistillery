import styled from "@emotion/styled";


interface Props {
  fontSize: string;
  bottom: string;
}
export const FloatingText = styled.span<Props>`
  position: relative;
  margin-left: 50px;
  font-size: ${props => props?.fontSize};

  // transform-origin: 50% 100%;
  // transform: perspective(300px) rotateX(25deg);

  // transform: skew(-14deg);
  // text-shadow: 0 0 10px #fff, 0 0 20px #fff;
`;
