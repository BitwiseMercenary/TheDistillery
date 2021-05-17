/**
 * Registry of globally supported themes.
 */
import {Leet} from "./Leet";
import {ThemeId} from "./ThemeId";

export const Theme = {
    [ThemeId.Leet]: Leet
}

export const registerCustomTheme = (customThemeConfig: any) => {
    if(!customThemeConfig) {
        console.error("Invalid theme specified. Doing nothing.");

        return;
    }

    const customThemeName = Object.keys(customThemeConfig).pop();
    if (Theme[customThemeName]) {
        console.warn(`Theme ${customThemeName} already exists. Doing nothing.`)
        return;
    }

    Theme[customThemeName] = customThemeConfig;
}

export const select = (theme: any, componentId: string, variant: string) => {
    const themeConfig = Theme[theme.id];
    const componentThemeConfig = themeConfig?.[componentId];
    const variantStyle: string = componentThemeConfig?.[variant];

    if(themeConfig === undefined) console.error(`Theme ${theme.id} does not exist`);
    if(componentThemeConfig === undefined) console.error(`Component '${componentId}' is not registered with this theme`);
    if(variantStyle === undefined) console.error(`Variant '${variant}' does not exist`);

    return variantStyle || "";
}
