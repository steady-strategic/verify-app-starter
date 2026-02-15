"use client";

import React from "react";
import Image from "next/image";
import { VideoModTallSectionProps } from "./types";

export const VideoModTall: React.FC<VideoModTallSectionProps> = ({
    className = "",
    title,
    subtitle,
    highlight,
    description,
    backgroundImage,
    videoThumbnail,
    videoUrl,
    id,
    cta,
}) => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);

    // Extract video ID from URL if present
    const getVideoId = (url?: string) => {
        if (!url) return null;
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            return url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
        }
        return null;
    };

    const getEmbedUrl = (url?: string) => {
        if (!url) return "";
        let embedUrl = url;
        const videoId = getVideoId(url);
        if (videoId) {
            embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        }
        return embedUrl;
    };

    const videoId = getVideoId(videoUrl);
    const thumbnailSrc = videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : videoThumbnail.src;

    return (
        <section
            id={id}
            className={`relative w-full overflow-hidden py-24 ${className}`}
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
            <div className="relative z-10 container mx-auto px-4 md:px-8 flex flex-col items-center gap-6 text-center">

                {/* Text Block 1 */}
                <div className="max-w-7xl flex flex-col gap-6">
                    <div className="font-sans text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                        {title}
                    </div>
                    <div className="font-sans text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                        {subtitle}
                    </div>
                </div>

                {/* Highlight Block */}
                <div className="max-w-4xl flex flex-col gap-6">
                    <div className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {highlight}
                    </div>
                    <div className="font-sans text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                        {description}
                    </div>
                </div>

                {/* Video/Image Container */}
                <div
                    className="w-full max-w-6xl aspect-video relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer mt-8"
                    onClick={() => videoUrl && setIsVideoOpen(true)}
                >
                    <Image
                        src={thumbnailSrc}
                        alt={videoThumbnail.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized={!!videoId}
                    />

                    {/* Play Button Overlay (Optional visual cue) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                            <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                <path d="M22.5 11.4019C24.5 12.5566 24.5 15.4434 22.5 16.5981L4.5 26.9904C2.5 28.1451 -5.00679e-07 26.7017 -4.01336e-07 24.3923L5.07185e-07 3.60769C6.06528e-07 1.29829 2.5 -0.14507 4.5 1.00962L22.5 11.4019Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

            {/* Video Modal */}
            {isVideoOpen && videoUrl && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div className="relative w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <button
                            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsVideoOpen(false);
                            }}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <iframe
                            className="w-full h-full"
                            src={getEmbedUrl(videoUrl)}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
