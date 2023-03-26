import React from "react";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    theme?: any;
    variant?: string;
    styles?: string;
}
