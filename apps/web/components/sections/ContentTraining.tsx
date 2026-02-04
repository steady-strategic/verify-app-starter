import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentTrainingSectionProps } from "./types";

export const ContentTraining: React.FC<ContentTrainingSectionProps> = ({
    className = "",
    title,
    body,
    image,
    cta
}) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center py-24 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[1440px] flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-[610px] relative h-[500px] md:h-[705px] shrink-0">
                    <Image
                        className="w-full h-full object-cover rounded-2xl"
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 610px"
                    />
                </div>
                <section className="flex-1 flex flex-col items-start gap-8 text-left text-gray-900 font-sans">
                    <div className="w-full flex flex-col items-start">
                        <h2 className="m-0 relative text-3xl md:text-[28px] tracking-[-0.02em] leading-[125%] font-bold">
                            {title}
                        </h2>
                    </div>
                    <div className="w-full text-lg leading-[150%] text-gray-900">
                        {body}
                    </div>
                    <Link
                        href={cta.href}
                        className="cursor-pointer border-none py-3 px-6 bg-primary-1 rounded-lg flex items-center justify-center hover:bg-primary-1/90 transition-colors"
                    >
                        <span className="relative text-lg leading-[150%] font-medium text-white text-left">
                            {cta.text}
                        </span>
                    </Link>
                </section>
            </section>
        </div>
    );
};
