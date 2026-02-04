import React from "react";
import Link from "next/link";
import { ProviderListSectionProps } from "./types";

export const ProviderList: React.FC<ProviderListSectionProps> = ({
    className = "",
    title,
    description,
    items,
    cta
}) => {
    // Split items into two roughly equal columns
    const midPoint = Math.ceil(items.length / 2);
    const leftColumnItems = items.slice(0, midPoint);
    const rightColumnItems = items.slice(midPoint);

    return (
        <div className={`w-full bg-white flex flex-col items-center py-24 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[1280px] flex flex-col items-center gap-16">

                {/* Header */}
                <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
                    <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-[120%] font-sans">
                        {title}
                    </h2>
                    <div className="text-lg text-gray-700 leading-relaxed font-medium">
                        {description}
                    </div>
                </div>

                {/* List Container */}
                <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-24 text-left">
                    {/* Left Column */}
                    <ul className="flex flex-col gap-4 flex-1 max-w-lg">
                        {leftColumnItems.map((item, index) => (
                            <li key={index} className="text-lg leading-[150%]">
                                <span className="font-bold text-gray-900">{item.name}</span>
                                <span className="text-gray-900"> - {item.location}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Right Column */}
                    <ul className="flex flex-col gap-4 flex-1 max-w-lg">
                        {rightColumnItems.map((item, index) => (
                            <li key={index + midPoint} className="text-lg leading-[150%]">
                                <span className="font-bold text-gray-900">{item.name}</span>
                                <span className="text-gray-900"> - {item.location}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <Link
                    href={cta.href}
                    className="cursor-pointer py-3.5 px-8 bg-primary-1 rounded-md text-white border-none hover:bg-primary-1/90 transition-colors inline-flex items-center justify-center mt-4"
                >
                    <span className="text-lg font-bold font-sans">
                        {cta.text}
                    </span>
                </Link>

            </section>
        </div>
    );
};
