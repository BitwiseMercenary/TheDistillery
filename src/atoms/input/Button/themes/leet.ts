import { colors } from "../../../../schemes";

export const leetBaseButton = `
    height: 40px;
    background: transparent;
    font-size: 18px;
    color: ${colors.Leet.navText};
`;
export const leetNavButton = `
    height: 40px;
    background: transparent;
    font-size: 18px;
    color: ${colors.Leet.navText};
    border: none;
    cursor: pointer;
    
    :hover {
        background: ${colors.Leet.selectedNavButton};
    }
`;
