"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "flowbite-react";
import { VideoSectionProps } from "./types";

export const Video: React.FC<VideoSectionProps> = ({
    title,
    description,
    videoThumbnail,
    videoUrl,
    variant = "default",
    className = "",
    id,
}) => {
    const [openModal, setOpenModal] = useState(false);

    const getEmbedUrl = (url: string) => {
        if (!url) return "";
        // Simple Youtube Embed conversion
        const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
            return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
        }
        // Fallback for Vimeo or direct embeds, though primarily tailored for YT here
        if (url.includes("vimeo.com")) {
            const vimeoId = url.split("/").pop();
            if (vimeoId) return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
        }
        return url; // Return original if no match (might be already embedded or unknown)
    };

    return (
        <section
            className={`relative w-full overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, #6b21a8 0%, #0f172a 100%)",
            }}
            id={id}
        >
            {/* Main Content Area with Background */}
            <div className="relative w-full h-[806px]">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={videoThumbnail.src}
                        alt={videoThumbnail.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-20 py-24 z-10">
                    {/* Top Content - Title and Description */}
                    <div className="text-center mb-20 flex flex-col gap-4">
                        {/* Title */}
                        <h2
                            className="text-white w-full max-w-[1280px]"
                            style={{
                                fontFamily: "var(--font-inter), Inter, sans-serif",
                                fontSize: "46px",
                                fontWeight: 800,
                                letterSpacing: "-0.92px",
                                lineHeight: "1.2",
                            }}
                        >
                            {title}
                        </h2>

                        {/* Description */}
                        <p
                            className="text-white max-w-[768px] mx-auto"
                            style={{
                                fontFamily: "var(--font-inter), Inter, sans-serif",
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: "24px",
                            }}
                        >
                            {description}
                        </p>
                    </div>

                    {/* Play Icon Overlay */}
                    {videoUrl && (
                        <div className="absolute z-20 flex items-center justify-center">
                            <button
                                className="w-32 h-32 flex items-center justify-center hover:scale-110 transition-transform"
                                onClick={() => setOpenModal(true)}
                                aria-label="Play video"
                            >
                                <Image
                                    src="/assets/images/play-icon.svg"
                                    alt="Play video"
                                    width={128}
                                    height={128}
                                    className="drop-shadow-2xl"
                                />
                            </button>
                        </div>
                    )}
                </div>

                {/* Bottom Light Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#fafafa] h-[83px] w-full" />
            </div>

            {/* Video Modal */}
            <Modal show={openModal} size="7xl" onClose={() => setOpenModal(false)} popup dismissible>
                <Modal.Header />
                <Modal.Body>
                    <div className="relative pt-[56.25%] w-full">
                        {videoUrl && (
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg"
                                src={getEmbedUrl(videoUrl)}
                                title="Video Player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    );
};
