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
    variant
}) => {
    const isClinicians = variant === "clinicians";

    return (
        <div
            className={`w-full bg-cover bg-no-repeat bg-top ${isClinicians ? 'bg-white h-[680px]' : ''} ${className}`}
            style={!isClinicians ? { backgroundImage: `url('${backgroundImage.src}')` } : undefined}
        >
            <div className={`w-full max-w-[1440px] mx-auto h-full overflow-hidden flex flex-col md:flex-row items-center justify-between ${isClinicians ? 'py-0' : 'py-[70px]'} px-6 md:px-20 gap-8 md:gap-5 relative`}>
                <section className={`flex flex-col items-start text-left max-w-lg z-10 ${isClinicians ? '' : 'text-white'}`}>
                    <div className="flex flex-col items-start gap-6">
                        <h1 className={`text-4xl md:text-5xl font-sans font-bold tracking-tight leading-tight m-0 ${isClinicians ? '' : 'text-white'}`}>
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
                    <div className={`relative shrink-0 ${isClinicians ? 'w-full md:w-1/2 h-full absolute right-0 top-0' : 'w-full md:w-[656px] h-[300px] md:h-[492px]'}`}>
                        <Image
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            fill
                            className={`${isClinicians ? 'object-cover rounded-bl-[48px]' : 'object-contain md:object-cover'}`}
                            sizes={isClinicians ? "50vw" : "(max-width: 768px) 100vw, 656px"}
                            priority
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
