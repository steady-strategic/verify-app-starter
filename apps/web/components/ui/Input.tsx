import React from "react";
import { Label, TextInput } from "flowbite-react";
import type { TextInputProps } from "flowbite-react";

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    helperText?: string;
}

export default function Input({
    label,
    error,
    helperText,
    id,
    className = "",
    ...props
}: InputProps) {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {label && (
                <Label htmlFor={inputId}>{label}</Label>
            )}
            <TextInput
                id={inputId}
                color={error ? "failure" : undefined}
                {...props}
            />
            {(error || helperText) && (
                <p className={`text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
}
