"use client";

import React from "react";
import { Label, TextInput, Textarea, Button, CustomFlowbiteTheme } from "flowbite-react";

interface ContactFormProps {
    className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = "" }) => {
    // Highly specific themes to override Flowbite defaults and match the screenshot exactly
    const customTextInputTheme: CustomFlowbiteTheme["textInput"] = {
        field: {
            input: {
                base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50 outline-none transition-all rounded-xl h-[56px] px-4 text-[16px]",
                colors: {
                    gray: "bg-[#F9FAFB] border-[#D1D5DB] text-[#111928] placeholder-[#9CA3AF] focus:border-[#D80ADA] focus:ring-1 focus:ring-[#D80ADA]",
                },
            },
        },
    };

    const customTextareaTheme: CustomFlowbiteTheme["textarea"] = {
        base: "block w-full rounded-xl border text-[16px] disabled:cursor-not-allowed disabled:opacity-50 outline-none transition-all resize-none p-4",
        colors: {
            gray: "bg-[#F9FAFB] border-[#D1D5DB] text-[#111928] placeholder-[#9CA3AF] focus:border-[#D80ADA] focus:ring-1 focus:ring-[#D80ADA]",
        },
    };

    const customButtonTheme: CustomFlowbiteTheme["button"] = {
        base: "group flex h-min items-center justify-center p-0 text-center font-bold focus:z-10 focus:outline-none transition-all active:scale-[0.98]",
        color: {
            primary: "bg-[#D80ADA] hover:brightness-110 text-white shadow-lg shadow-[#D80ADA]/20 border-none",
        },
        inner: {
            base: "flex items-center transition-all duration-200 justify-center w-full h-full",
        },
        size: {
            custom: "h-[56px] w-[156px] text-[16px] rounded-2xl",
        },
    };

    return (
        <form className={`space-y-8 ${className}`}>
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <Label
                        htmlFor="firstName"
                        className="block text-[#111928] font-medium text-[18px]"
                    >
                        First name
                    </Label>
                    <TextInput
                        id="firstName"
                        type="text"
                        required
                        color="gray"
                        theme={customTextInputTheme}
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="lastName"
                        className="block text-[#111928] font-medium text-[18px]"
                    >
                        Last name
                    </Label>
                    <TextInput
                        id="lastName"
                        type="text"
                        required
                        color="gray"
                        theme={customTextInputTheme}
                    />
                </div>
            </div>

            {/* Row 2: Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-2">
                    <Label
                        htmlFor="email"
                        className="block text-[#111928] font-medium text-[18px]"
                    >
                        Email
                    </Label>
                    <TextInput
                        id="email"
                        type="email"
                        required
                        color="gray"
                        theme={customTextInputTheme}
                    />
                </div>
                <div className="space-y-2">
                    <Label
                        htmlFor="phone"
                        className="block text-[#111928] font-medium text-[18px]"
                    >
                        Phone number
                    </Label>
                    <TextInput
                        id="phone"
                        type="tel"
                        color="gray"
                        theme={customTextInputTheme}
                    />
                </div>
            </div>

            {/* Row 3: Message */}
            <div className="space-y-2">
                <Label
                    htmlFor="message"
                    className="block text-[#111928] font-medium text-[18px]"
                >
                    Your message
                </Label>
                <Textarea
                    id="message"
                    required
                    rows={6}
                    color="gray"
                    theme={customTextareaTheme}
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
                <Button
                    type="submit"
                    color="primary"
                    theme={customButtonTheme}
                    size="custom"
                >
                    Send Message
                </Button>
            </div>
        </form>
    );
};
