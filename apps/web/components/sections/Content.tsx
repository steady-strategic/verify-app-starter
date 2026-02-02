import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentSectionProps } from "./types";

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17L4 12" stroke="#D80ADA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const Content: React.FC<ContentSectionProps> = ({
    className = "",
    title,
    subtitle,
    items,
    image,
    cta
}) => {
    return (
        <div
            className={`w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col md:flex-row items-center justify-between py-24 px-6 md:px-20 gap-12 ${className}`}
        >
            <div className="w-full md:w-[610px] relative h-[400px] md:h-[530px] shrink-0">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="rounded-3xl object-cover"
                    sizes="(max-width: 768px) 100vw, 610px"
                />
            </div>

            <section className="w-full md:w-[606px] flex flex-col items-start gap-8 md:gap-[73px] text-left text-gray-900 font-sans">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[28px] md:text-[32px] font-bold tracking-[-0.02em] leading-[125%] m-0">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-xl tracking-[-0.02em] leading-[140%] font-semibold text-gray-700 m-0">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="w-full border-t border-gray-200 pt-8">
                    <ul className="flex flex-col gap-6">
                        {items.map((item, index) => (
                            <li key={index} className="flex gap-4 items-start text-lg leading-[150%]">
                                <span className="shrink-0 mt-1"><CheckIcon /></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {cta && (
                    <Link
                        href={cta.href}
                        className="cursor-pointer border border-gray-200 py-3 px-5 bg-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                    >
                        <span className="text-sm font-medium text-gray-900">
                            {cta.text}
                        </span>
                    </Link>
                )}
            </section>
        </div>
    );
};
