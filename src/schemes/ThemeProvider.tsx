import React from "react";
import { ThemeContext } from "./ThemeContext";
import { registerCustomTheme, Theme } from "./Theme";

export const ThemeProvider = ({ value, children }) => {
    // if the theme being provided isnt a system one.
    if (value !== undefined && value !== null && !Theme[value]) {
        registerCustomTheme(value);
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
