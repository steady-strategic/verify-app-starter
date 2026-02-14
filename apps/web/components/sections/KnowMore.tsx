import React from "react";
import Image from "next/image";
import Link from "next/link";
import { KnowMoreSectionProps } from "./types";

export const KnowMore: React.FC<KnowMoreSectionProps> = ({
    className = "",
    title,
    subtitle,
    cta,
    backgroundImage,
}) => {
    return (
        <div className={`w-full h-[400px] flex items-center px-6 md:px-[117px] relative isolate text-left text-white font-sans overflow-hidden ${className}`}>
            <Image
                src={backgroundImage.src}
                alt={backgroundImage.alt}
                fill
                className="absolute top-0 left-0 object-cover z-0"
                sizes="100vw"
            />
            <div className="w-full md:w-[534px] flex flex-col items-start gap-8 z-10 relative">
                <div className="flex flex-col gap-2">
                    <h2 className="text-4xl md:text-[50px] font-sans font-extrabold tracking-[-0.02em] leading-[110%] m-0">
                        {title}
                    </h2>
                    <p className="text-xl md:text-[28px] font-bold tracking-[-0.02em] leading-[125%] m-0">
                        {subtitle}
                    </p>
                </div>
                <Link
                    href="/know-more"
                    className="cursor-pointer border-none py-4 px-6 bg-primary-1 rounded-md flex items-center justify-center hover:bg-[#BA00B8] transition-colors"
                >
                    <span className="text-lg font-bold leading-[150%] text-white">
                        {cta.text}
                    </span>
                </Link>
            </div>
        </div>
    );
};
