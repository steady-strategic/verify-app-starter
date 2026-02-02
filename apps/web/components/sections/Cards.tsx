import React from "react";
import Image from "next/image";
import { CardsSectionProps } from "./types";

export const Cards: React.FC<CardsSectionProps> = ({
    className = "",
    title,
    items,
}) => {
    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <section className="w-full max-w-[1440px] bg-white overflow-hidden flex flex-col items-center py-[77px] px-6 md:px-0 pb-[84px] text-center text-[28px] text-primary-1 font-sans">
                <div className="w-full max-w-[1280px] flex flex-col items-center gap-[60px] md:gap-[92px]">
                    <div className="flex flex-col items-center justify-center">
                        <h3 className="m-0 max-w-[928px] relative text-inherit tracking-[-0.02em] leading-[125%] font-bold">
                            {title}
                        </h3>
                    </div>
                    <div className="w-full flex flex-col md:flex-row items-start justify-center gap-12">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-6 flex-1 min-w-[300px]">
                                <div className="relative w-[120px] h-[120px]">
                                    <Image
                                        src={item.icon.src}
                                        alt={item.icon.alt}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="m-0 text-lg leading-[150%] text-gray-700 text-center">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
