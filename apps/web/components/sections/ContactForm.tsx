"use client";

import React from "react";
import { Label, TextInput, Textarea, Button } from "flowbite-react";

interface ContactFormProps {
    className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
    // Custom Flowbite themes using global Tailwind CSS classes
    const textInputTheme = {
        field: {
            input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 outline-none transition-all rounded-xl h-[56px] px-4",
                colors: {
                    gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 placeholder-gray-400",
                },
            },
        },
    };

    const textareaTheme = {
        base: "block w-full rounded-xl border text-base disabled:cursor-not-allowed disabled:opacity-50 outline-none transition-all resize-none p-4",
        colors: {
            gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 placeholder-gray-400",
        },
    };

    const buttonTheme = {
        base: "group flex h-min items-center justify-center p-0 text-center font-bold focus:z-10 focus:outline-none transition-all active:scale-[0.98]",
        color: {
            primary: "bg-primary-1 hover:brightness-110 text-white shadow-lg shadow-primary-1/20 border-none",
        },
        inner: {
            base: "flex items-center transition-all duration-200 justify-center w-full h-full",
        },
        size: {
            custom_contact: "h-[56px] w-[156px] text-[16px] rounded-2xl",
        },
    };

    return (
        <form className={`space-y-8 ${className}`}>
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <Label
                        htmlFor="firstName"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        First name
                    </Label>
                    <TextInput
                        id="firstName"
                        type="text"
                        required
                        color="gray"
                        theme={textInputTheme}
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="lastName"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Last name
                    </Label>
                    <TextInput
                        id="lastName"
                        type="text"
                        required
                        color="gray"
                        theme={textInputTheme}
                    />
                </div>
            </div>

            {/* Row 2: Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Email
                    </Label>
                    <TextInput
                        id="email"
                        type="email"
                        required
                        color="gray"
                        theme={textInputTheme}
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="phone"
                        className="block text-gray-900 font-medium text-[18px]"
                    >
                        Phone number
                    </Label>
                    <TextInput
                        id="phone"
                        type="tel"
                        color="gray"
                        theme={textInputTheme}
                    />
                </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
                <Label
                    htmlFor="message"
                    className="block text-gray-900 font-medium text-[18px]"
                >
                    Your message
                </Label>
                <Textarea
                    id="message"
                    required
                    rows={6}
                    color="gray"
                    theme={textareaTheme}
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
                <Button
                    type="submit"
                    color="primary"
                    theme={buttonTheme}
                    size="custom_contact"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};
