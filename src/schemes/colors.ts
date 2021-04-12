import { GlobalTheme } from "./GlobalTheme";

export const colors = {
    // shades of white
    white: "#FFFFFF",

    //shades of black
    black: "#000000",

    //shades of grey,
    grey: "#878787",

    //shades of yellow
    gold: "#E0BB00",

    //shades of red
    red: "#DF0808",

    // Define colors for Leet theme
    [GlobalTheme.LEET]: {
        background: "#261f30",
    },
} as const;
