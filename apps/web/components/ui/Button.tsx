import React from "react";
import { Button as FlowbiteButton } from "flowbite-react";
import type { ButtonProps as FlowbiteButtonProps } from "flowbite-react";

interface ButtonProps extends Omit<FlowbiteButtonProps, "color"> {
    variant?: "primary" | "secondary" | "outline";
    isLoading?: boolean;
}

export default function Button({
    variant = "primary",
    isLoading = false,
    children,
    disabled,
    ...props
}: ButtonProps) {
    const colorMap = {
        primary: "blue",
        secondary: "gray",
        outline: "light",
    };

    return (
        <FlowbiteButton
            color={colorMap[variant]}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </FlowbiteButton>
    );
}
