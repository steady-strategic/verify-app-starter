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
                        <div key={index} className="flex flex-col items-start text-left gap-4 bg-gray-50 p-8 rounded-2xl h-full">
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
