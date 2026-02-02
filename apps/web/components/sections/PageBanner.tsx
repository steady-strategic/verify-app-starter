import React from "react";
import Image from "next/image";
import { PageBannerSectionProps } from "./types";

export const PageBanner: React.FC<PageBannerSectionProps> = ({
    className = "",
    title,
    subtitle,
    description,
    backgroundImage,
    foregroundImage,
}) => {
    return (
        <div
            className={`w-full bg-cover bg-no-repeat bg-top ${className}`}
            style={{ backgroundImage: `url('${backgroundImage.src}')` }}
        >
            <div className="w-full max-w-[1440px] mx-auto h-auto min-h-[680px] overflow-hidden flex flex-col md:flex-row items-center justify-between py-[70px] px-6 md:px-20 gap-8 md:gap-5">
                <section className="flex flex-col items-start text-left text-white max-w-lg z-10">
                    <div className="flex flex-col items-start gap-6">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight leading-tight m-0">
                            {title}
                        </h1>
                        <div className="text-xl md:text-2xl leading-relaxed">
                            {subtitle && <div className="font-bold mb-6">{subtitle}</div>}
                            <div className="text-lg leading-relaxed font-normal">
                                {description}
                            </div>
                        </div>
                    </div>
                </section>

                {foregroundImage && (
                    <div className="relative w-full md:w-[656px] h-[300px] md:h-[492px] shrink-0">
                        <Image
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            fill
                            className="object-contain md:object-cover"
                            sizes="(max-width: 768px) 100vw, 656px"
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
