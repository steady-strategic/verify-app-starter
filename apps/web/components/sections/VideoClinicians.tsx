import React from "react";
import Image from "next/image";
import { VideoCliniciansSectionProps } from "./types";

export const VideoClinicians: React.FC<VideoCliniciansSectionProps> = ({ className = "" }) => {
    return (
        <div className={`w-full relative flex flex-col items-center py-24 px-4 overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/assets/images/VideoClinicians/Background.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1020px] flex flex-col items-center text-center gap-12 text-white">

                {/* Text Content */}
                <div className="flex flex-col items-center gap-8 max-w-[836px]">
                    <h2 className="text-[50px] font-extrabold leading-[1.1] tracking-[-0.02em] font-sans m-0 text-white">
                        MORE is more than therapy. It’s transforming lives.
                    </h2>

                    <div className="flex flex-col gap-8">
                        <p className="text-xl font-medium leading-[1.4] tracking-[-0.02em] font-sans m-0 text-white/90">
                            Hear from Dan Kruger—international motorcycle racing champion. After decades of high-impact crashes and countless surgeries, Dan relied on opioids for more than 30 years. Strength and willpower weren’t enough. The cycle felt inescapable.
                        </p>

                        <h3 className="text-[32px] font-bold leading-[1.25] tracking-[-0.02em] font-sans m-0 text-white">
                            Then Dan found <span className="text-primary-1">MORE.</span>
                        </h3>

                        <p className="text-xl font-medium leading-[1.4] tracking-[-0.02em] font-sans m-0 text-white/90">
                            Through <span className="text-primary-1">MORE</span>, Dan retrained his brain’s response to pain and craving, tapered completely off opioids, and rebuilt emotional regulation while reconnecting with meaning, joy, and a life beyond pain.
                        </p>
                    </div>
                </div>

                {/* Video Thumbnail */}
                <div className="w-full relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="/assets/images/VideoClinicians/Thumbnail.png"
                        alt="Dan Kruger Video Thumbnail"
                        fill
                        className="object-cover"
                    />
                    {/* Possible Play Button Overlay could be added here if needed */}
                </div>
            </div>
        </div>
    );
};
