import styled from "@emotion/styled";

const shadowEffect = ({ bottom }) => `
::after {
    content: "";
    display: block;
    position: absolute;
    bottom: ${bottom};
    left: 20%;
    height: 10%;
    width: 100%;
    // box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    //background-color: rgba(113, 113, 113, 0.25);

    //transform: translate(-50%, 0);
    transition: transform 1s;
  }
  `;

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
