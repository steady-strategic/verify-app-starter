import React from "react";
import { TextCliniciansSectionProps } from "./types";

export const TextClinicians: React.FC<TextCliniciansSectionProps> = ({
    className = "",
    title,
    body
}) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center justify-center py-20 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[856px] flex flex-col items-center gap-6 text-center text-gray-900 font-sans">
                <h2 className="text-3xl md:text-[34px] font-bold tracking-[-0.02em] leading-[125%]">
                    {title}
                </h2>
                <div className="text-xl md:text-[22px] leading-[150%] font-medium text-gray-900 max-w-3xl">
                    {body}
                </div>
            </section>
        </div>
    );
};
