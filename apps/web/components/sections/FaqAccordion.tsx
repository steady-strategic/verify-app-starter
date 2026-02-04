"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaqAccordionSectionProps } from "./types";

export const FaqAccordion: React.FC<FaqAccordionSectionProps> = ({
    className = "",
    title,
    items
}) => {
    // State to track which item is open. null means all closed.
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-full bg-white flex flex-col items-center py-20 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[800px] flex flex-col items-center gap-12 font-sans">

                {/* Section Title */}
                <h2 className="text-4xl md:text-[50px] font-bold text-gray-900 tracking-tight">
                    {title}
                </h2>

                {/* Accordion Container */}
                <div className="w-full flex flex-col border-t border-gray-200">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-4">
                                        <Image
                                            src="/assets/icons/question-icon.svg"
                                            alt="Question"
                                            width={20}
                                            height={20}
                                            className="shrink-0"
                                        />
                                        <span className={`text-lg md:text-xl font-medium ${isOpen ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'} transition-colors`}>
                                            {item.question}
                                        </span>
                                    </div>
                                    <svg
                                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="text-gray-600 text-lg leading-relaxed pl-[40px]">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </section>
        </div>
    );
};
