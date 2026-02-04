import React from "react";
import { TextAboutSectionProps } from "./types";

export const TextAbout: React.FC<TextAboutSectionProps> = ({
    className = "",
    title,
    subtitle,
    body
}) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center justify-center py-20 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[856px] flex flex-col items-center gap-8 text-center font-sans text-gray-900">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl md:text-[32px] font-bold leading-[130%]">
                        {title}
                    </h2>
                    <div className="text-xl md:text-[28px] font-bold leading-[130%]">
                        {subtitle}
                    </div>
                </div>

                <div className="text-lg md:text-xl leading-[160%] text-gray-700 max-w-3xl flex flex-col gap-6">
                    {body}
                </div>
            </section>
        </div>
    );
};
