import React from "react";
import { Cards3x2SectionProps } from "./types";

export const Cards3x2: React.FC<Cards3x2SectionProps> = ({
    className = "",
    title,
    items
}) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center py-24 px-6 md:px-20 box-border ${className}`}>
            <div className="w-full max-w-[1280px] flex flex-col items-center gap-12 text-center text-gray-900 font-sans">
                <div className="w-full max-w-4xl flex flex-col items-center justify-center">
                    <h2 className="m-0 relative text-3xl md:text-[28px] tracking-[-0.02em] leading-[125%] font-bold">
                        {title}
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col items-start text-left gap-4 h-full">
                            <div className="w-8 h-8 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mb-2">
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3333 1L5 8.33333L1.66667 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 leading-[125%]">
                                {item.title}
                            </h3>
                            <p className="text-lg leading-[150%] text-gray-700">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
