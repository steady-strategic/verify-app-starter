
import React from 'react';
import Image from 'next/image';
import { BaseSectionProps } from './types';

export const ResearchHero: React.FC<BaseSectionProps> = ({ className = "" }) => {
    return (
        <div className={`relative w-full h-[560px] overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/images/Research/ResearchBannerBG.png"
                    alt="Research Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Overlay - Optional if needed based on the design, handled by image or opacity layers */}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-20 max-w-7xl mx-auto">
                <div className="max-w-[600px]">
                    {/* Main Title */}
                    <h1 className="font-extrabold text-[50px] lg:text-[70px] leading-[1.1] tracking-[-1px] text-white font-sans mb-8">
                        The Science of <br />
                        <span className="text-primary-1">MORE</span>
                    </h1>

                    {/* Subtitle / Description */}
                    <div className="text-white">
                        <h2 className="font-bold text-[28px] leading-[1.25] tracking-[-0.56px] mb-6 text-white">
                            Science that delivers measurable impact
                        </h2>
                        <p className="text-[20px] leading-[1.4] font-normal opacity-90">
                            Grounded in affective neuroscience and gold-standard clinical research, MORE targets the mechanisms that drive suffering—and the pathways that restore wellbeing.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator (if present in design) or other elements */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <Image
                        src="/assets/images/Research/Mark_white 1.png"
                        alt="MORE Mark"
                        width={202}
                        height={70}
                        className="opacity-50"
                    />
                </div>
            </div>
        </div>
    );
};
