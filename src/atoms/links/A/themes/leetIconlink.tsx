import { colors } from "../../../../schemes";

export const leetIconlink = `
    transition: all .5s;
    cursor: pointer;
    display: flex;
    :hover {
        transform: scale(1.2);
        > svg {
            fill: ${colors.Leet.iconLinkButtonHover};
        }
    }

    :focus {
        outline: none;
        transform: scale(1.2);
        > svg {
            fill: ${colors.Leet.iconLinkButtonHover};
        }
    }

    > svg {
        fill: ${colors.Leet.iconLinkButton};
        height: 20px;
        width: 20px;
    }
`;
