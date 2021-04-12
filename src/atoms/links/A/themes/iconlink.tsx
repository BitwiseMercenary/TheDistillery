import { colors } from "../../../../schemes";

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
        outline: none;
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
