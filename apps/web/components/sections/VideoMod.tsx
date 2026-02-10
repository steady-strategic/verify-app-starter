
import React from "react";
import Image from "next/image";
import { VideoModSectionProps } from "./types";

export const VideoMod: React.FC<VideoModSectionProps> = ({
    variant = "default",
    title,
    subtitle,
    description,
    backgroundImage,
    videoThumbnail,
    videoUrl,
    className = "",
    id,
}) => {
    const isAbout = variant === "about";

    return (
        <section
            id={id}
            className={`relative w-full overflow-hidden flex items-center justify-center ${isAbout ? 'py-24 md:py-0 md:h-[916px]' : 'py-20'} ${className}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className={`relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center ${isAbout ? 'gap-8' : 'gap-12'}`}>

                {/* Text Content */}
                <div className={`max-w-4xl text-center flex flex-col ${isAbout ? 'gap-8' : 'gap-6'}`}>
                    <div className={`font-sans font-bold text-white tracking-tight ${isAbout ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-4xl md:text-5xl'}`}>
                        {title}
                    </div>
                    {subtitle && (
                        <div className={`font-sans text-white/90 max-w-3xl mx-auto leading-relaxed ${isAbout ? 'text-xl md:text-2xl font-bold' : 'text-lg md:text-xl'}`}>
                            {subtitle}
                        </div>
                    )}
                    <div className={`font-sans text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed ${variant === "patients" ? "!text-[16px]" : ""}`}>
                        {description}
                    </div>
                </div>

                {/* Video/Image Container */}
                <div className="w-full max-w-5xl aspect-video relative rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10 group cursor-pointer">
                    <Image
                        src={videoThumbnail.src}
                        alt={videoThumbnail.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Play Button Overlay (Visual only or functional if onClick added) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.5 26.9904C2.5 28.1451 -5.00679e-07 26.7017 -4.01336e-07 24.3923L5.07185e-07 3.60769C6.06528e-07 1.29829 2.5 -0.14507 4.5 1.00962L22.5 11.4019Z" fill="white" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
