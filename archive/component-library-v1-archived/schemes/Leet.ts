import { ComponentRegistry } from "../models";
import { leetBaseButton, leetNavButton } from "../atoms/input/Button/themes";
import { ThemeId } from "./ThemeId";
import { leetBaseComponentListContainer } from "../molecules/ComponentListContainer/themes";
import { leetIconlink } from "../atoms/links/A/themes";

export const Leet = {
    id: ThemeId.Leet,
    [ComponentRegistry.ComponentListContainer]: {
        base: leetBaseComponentListContainer,
    },
    [ComponentRegistry.Button]: {
        nav: leetNavButton,
        base: leetBaseButton,
    },
    [ComponentRegistry.A]: {
        iconLinkButton: leetIconlink,
    },
} as const;
