import React from "react";

import Image from "next/image";
import { PageBannerSectionProps } from "./types";
import { TrainingForm } from "./TrainingForm";

export const PageBanner: React.FC<PageBannerSectionProps> = ({
    className = "",
    title,
    subtitle,
    description,
    backgroundImage,
    foregroundImage,
    variant,
    children
}) => {
    const isClinicians = variant === "clinicians";
    const isTraining = variant === "training";
    const isDirectory = variant === "directory";
    const isPatients = variant === "patients";
    const isHowItWorks = variant === "how-it-works";
    const isLightVariant = isClinicians || isTraining || isPatients || isHowItWorks;
    const isFullBleed = isPatients || isHowItWorks || isClinicians || isTraining;

    const getHeightClass = () => {
        if (isDirectory) return 'min-h-[561px]';
        if (isLightVariant) return 'h-auto md:h-[680px]';
        return '';
    };

    return (
        <div
            className={`w-full bg-cover bg-no-repeat bg-top flex flex-col justify-center relative ${isClinicians || isPatients || (isLightVariant && !backgroundImage.src.includes('page-banner')) ? 'bg-white' : ''} ${getHeightClass()} ${className}`}
            style={isClinicians || isPatients ? undefined : { backgroundImage: `url('${backgroundImage.src}')` }}
        >
            {/* Content Container */}
            <div className={`w-full max-w-[1440px] mx-auto h-full overflow-hidden flex flex-col md:flex-row items-center justify-between ${isLightVariant ? 'py-16 md:py-[70px]' : 'py-[70px]'} px-6 md:px-20 gap-8 md:gap-[63px] relative`}>
                <section className={`flex flex-col items-start text-left w-full max-w-lg md:max-w-[45%] z-10 ${isLightVariant && !isHowItWorks ? 'text-gray-900' : 'text-white'}`}>
                    <div className={`flex flex-col items-start ${isDirectory ? 'gap-10' : 'gap-6'}`}>
                        <h1 className={`text-4xl md:text-[50px] font-sans font-bold tracking-tight leading-[110%] m-0 ${isLightVariant && !isHowItWorks ? 'text-primary-1' : 'text-white'}`}>
                            {title}
                        </h1>
                        <div className="text-xl md:text-2xl leading-relaxed w-full">
                            {subtitle && <div className="font-bold mb-6">{subtitle}</div>}
                            <div className="text-lg leading-relaxed font-normal w-full [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2">
                                {description}
                            </div>
                        </div>
                        {children}
                    </div>
                </section>

                {foregroundImage && !isFullBleed && (
                    <div className={`relative shrink-0 ${isLightVariant ? `w-[calc(100%+48px)] mx-[-24px] md:w-[726px] md:mx-0 ${isTraining ? 'h-[850px]' : 'h-[400px]'} md:h-full md:absolute md:right-0 md:top-0` : 'w-full md:w-[656px] h-[300px] md:h-[492px]'}`}>
                        <Image
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            fill
                            className={`${isLightVariant ? 'object-cover' : 'object-contain md:object-cover'}`}
                            sizes={isLightVariant ? "50vw" : "(max-width: 768px) 100vw, 656px"}
                            priority
                        />
                        {isTraining && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="max-w-[340px] flex flex-col gap-4 text-left">
                                    <h2 className="text-white text-[28px] font-bold leading-[125%] tracking-[-0.02em] font-sans m-0">
                                        No commitment today.
                                    </h2>
                                    <p className="text-white text-xl font-semibold leading-[140%] tracking-[-0.02em] font-sans m-0">
                                        Pre-register and you'll save 20% off the cost of $895.
                                    </p>
                                    <TrainingForm />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Full Bleed Right Image (Patients & How It Works) */}
            {foregroundImage && isFullBleed && (
                <div className={`relative w-full ${isTraining ? 'h-[850px]' : 'h-[400px]'} md:absolute md:top-0 md:right-0 md:w-1/2 md:h-full z-0`}>
                    <Image
                        src={foregroundImage.src}
                        alt={foregroundImage.alt}
                        fill
                        className="object-cover"
                        sizes="50vw"
                        priority
                    />
                    {isTraining && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="max-w-[340px] flex flex-col gap-4 text-left">
                                <h2 className="text-white text-[28px] font-bold leading-[125%] tracking-[-0.02em] font-sans m-0">
                                    No commitment today.
                                </h2>
                                <p className="text-white text-xl font-semibold leading-[140%] tracking-[-0.02em] font-sans m-0">
                                    Pre-register and you'll save 15% off the cost of $895.
                                </p>
                                <TrainingForm />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
