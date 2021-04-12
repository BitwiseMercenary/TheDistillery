import { colors } from "../../../../schemes";

export const title = `
    font-family: Copperplate;
    font-size: 60px;
    color: black;
    font-weight: 600;
    width: fit-content;
    display: inline-table;
    width: 40vw;
    border-bottom: solid 2px ${colors.gold};

    @media only screen and (max-width: 605px) {
        font-size: 40px;
        width: min-content;
      }
`;
