import { ThemeId } from "./ThemeId";

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
    [ThemeId.Leet]: {
        background: "#272f30",
        navText: "#FFFFFF",
        navBorder: "#5b5f60",
        selectedNavButton: "#443d4d",
        iconLinkButton: "#49a17d",
        iconLinkButtonHover: "#49a165",
    } as const,
} as const;
