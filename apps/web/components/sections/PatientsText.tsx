import React from "react";
import { PatientsTextSectionProps } from "./types";

export const PatientsText: React.FC<PatientsTextSectionProps> = ({
    className = "",
    title,
    subtitle
}) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center justify-center py-24 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[856px] flex flex-col items-center gap-6 text-center text-gray-900 font-sans">
                <h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.02em] leading-[110%] text-primary-1">
                    {title}
                </h2>
                <div className="text-xl md:text-[22px] leading-[150%] font-medium text-gray-900 max-w-3xl">
                    {subtitle}
                </div>
            </section>
        </div>
    );
};
