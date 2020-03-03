import { colors } from "../../../../theme";

export const iconlink = `
    transition: all .5s;
    cursor: pointer;
    :hover {
        transform: scale(1.3);
        > svg {
            fill: ${colors.gold};
        }
    }

    :focus {
        transform: scale(1.3);
        > svg {
            fill: ${colors.gold};
        }
    }

    > svg {
        fill: ${colors.black};
        height: 30px;
        width: 30px;
    }
`;
