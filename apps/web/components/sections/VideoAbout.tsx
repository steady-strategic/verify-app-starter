import React from "react";
import Image from "next/image";
import { VideoAboutSectionProps } from "./types";

export const VideoAbout: React.FC<VideoAboutSectionProps> = ({
    className = "",
    title,
    description,
    backgroundImage,
    videoPreviewImage
}) => {
    return (
        <div className={`w-full relative flex flex-col items-center justify-center py-24 px-6 md:px-20 box-border text-center overflow-hidden border-b-8 border-white ${className}`}>
            {/* Background Gradient Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Content - Z-index 10 to sit above background */}
            <section className="relative z-10 w-full max-w-[1280px] flex flex-col items-center gap-12 font-sans text-white">

                {/* Text Block */}
                <div className="flex flex-col items-center gap-6 max-w-3xl">
                    <h2 className="text-3xl md:text-[40px] font-bold tracking-[-0.02em] leading-[110%] text-white">
                        {title}
                    </h2>
                    <div className="text-lg md:text-xl font-medium leading-[150%]">
                        {description}
                    </div>
                </div>

                {/* Video Preview Block */}
                <div className="w-full max-w-[950px] aspect-video relative rounded-3xl overflow-hidden shadow-2xl bg-black/20">
                    <Image
                        src={videoPreviewImage.src}
                        alt={videoPreviewImage.alt}
                        fill
                        className="object-cover"
                    />

                    {/* Optional: Add Play Button Overlay if intended to look interactive */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer group">
                        {/* Simple CSS Play Button or SVG */}
                        {/* <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                             <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
                         </div> */}
                    </div>
                </div>

            </section>
        </div>
    );
};
