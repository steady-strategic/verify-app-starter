import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { VideoSectionProps } from "./types";

export const Video: React.FC<VideoSectionProps> = ({
    className = "",
    variant = "default",
    title,
    subtitle, // Looking at the screenshot, "patients" variant uses subtitle instead of description text block
    description,
    backgroundImage,
    videoPreviewImage
}) => {
    const isPatients = variant === "patients";

    // Defaults for the original (home/default) variant if props aren't provided
    const defaultBg = "/assets/images/Video/Background1@2x.png";
    const defaultPreview = "/assets/images/Video/Vid-preview-comp.png";
    const defaultTitle = "See MORE in action";
    const defaultDesc = "Learn how MORE targets the brain's reward processes to restore responsiveness to natural pleasure and reduce opioid cravings.";

    const bgSrc = isPatients ? "/assets/images/Video/patients-bg.png" : (backgroundImage?.src || defaultBg);
    const previewSrc = videoPreviewImage?.src || defaultPreview;

    return (
        <div
            className={`w-full min-h-[856px] relative flex flex-col items-center py-16 px-4 md:px-20 box-border overflow-hidden ${className}`}
        >
            <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-[0]"
                width={1440}
                height={856}
                sizes="100vw"
                alt=""
                src={bgSrc}
            />

            <div className="relative z-[1] w-full max-w-7xl flex flex-col items-center gap-12 text-center text-white">
                <div className="flex flex-col items-center gap-4 max-w-3xl">
                    <h1 className="m-[0px] w-full relative text-3xl md:text-[50px] tracking-[-0.02em] leading-[110%] font-extrabold font-sans text-white">
                        {title || defaultTitle}
                    </h1>

                    {/* Render subtitle if present (used in Patients variant) */}
                    {subtitle && (
                        <div className="relative text-lg md:text-xl tracking-[-0.02em] leading-[140%] font-semibold font-sans">
                            {subtitle}
                        </div>
                    )}
                    {/* Render description if present (used in Default variant) */}
                    {description && (
                        <div className="relative text-lg md:text-xl tracking-[-0.02em] leading-[140%] font-semibold font-sans">
                            {description}
                        </div>
                    )}
                    {/* Fallback description for default variant if neither subtitle nor description passed */}
                    {!subtitle && !description && !isPatients && (
                        <div className="relative text-lg md:text-xl tracking-[-0.02em] leading-[140%] font-semibold font-sans">
                            {defaultDesc}
                        </div>
                    )}
                </div>

                <div className="w-full max-w-[1020px] aspect-video relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        className="w-full h-full object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 1020px"
                        alt="Video thumbnail"
                        src={previewSrc}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
