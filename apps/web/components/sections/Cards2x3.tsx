import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cards2x3SectionProps } from "./types";

export const Cards2x3: React.FC<Cards2x3SectionProps> = ({
    className = "",
    title,
    subtitle,
    items,
    cta
}) => {
    return (
        <div className={`w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col items-center py-[108px] px-6 md:px-20 gap-[78px] ${className}`}>
            <section className="w-full flex flex-col items-center gap-4 text-center">
                <h3 className="text-[28px] md:text-3xl font-bold tracking-[-0.02em] leading-[125%] font-sans text-gray-900 max-w-[694px]">
                    {title}
                </h3>
                <div className="text-lg leading-[150%] text-gray-900 max-w-[550px]">
                    {subtitle}
                </div>
            </section>

            <div className="w-full shadow-[0px_0px_9.9px_rgba(0,_0,_0,_0.03)] rounded-3xl bg-white border border-[#f4f4f4] flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {items.map((item, index) => {
                        // Determine border classes for grid
                        const isLastRow = index >= items.length - 2; // Bottom items
                        const isEven = index % 2 !== 0; // Right column items
                        const isLastItem = index === items.length - 1;

                        let borderClass = "";
                        if (!isLastRow) borderClass += " border-b border-gray-200";
                        if (!isEven) borderClass += " md:border-r border-gray-200";

                        return (
                            <div key={index} className={`flex flex-col items-start p-8 md:p-12 gap-6 ${borderClass}`}>
                                <div className="flex flex-col gap-3 text-left">
                                    <h4 className="text-xl font-bold font-sans text-gray-900 leading-[125%]">
                                        {item.title}
                                    </h4>
                                    <p className="text-base text-gray-700 leading-[150%]">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {cta && (
                <Link
                    href={cta.href}
                    className="cursor-pointer py-3 px-6 bg-primary-1 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-opacity no-underline"
                >
                    <span className="text-lg font-semibold text-white">
                        {cta.text}
                    </span>
                </Link>
            )}
        </div>
    );
};
