import { colors } from "../../../../theme";

export const base = `
    height: 40px;
    background: transparent;
    font-size: 18px;
    border: none;
    border-left: solid 2px black;
    border-right: solid 2px black;
    border-radius: 10px;
    cursor: pointer;
    font-family: monospace;

    :hover {
        transition: all 0.5s;
        border-left: solid 2px ${colors.gold};
        border-right: solid 2px ${colors.gold};
        color: ${colors.grey};
    }

    :focus {
        outline: none;
        transition: all 0.5s;
        border-left: solid 2px ${colors.gold};
        border-right: solid 2px ${colors.gold};
        color: ${colors.grey};
    }
`;
