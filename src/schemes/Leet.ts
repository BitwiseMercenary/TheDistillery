import {ComponentRegistry} from "../models";
import {leetBaseButton, leetNavButton} from "../atoms/input/Button/themes";
import {ThemeId} from "./ThemeId";

export const Leet = {
    id: ThemeId.Leet,
    [ComponentRegistry.ComponentListContainer]: {
        base: "",
    },
    [ComponentRegistry.Button]: {
        nav: leetNavButton,
        base: leetBaseButton,
    }
} as const;
