import React from "react";
import Image from "next/image";
import { PageBannerSectionProps } from "./types";

export const PageBanner: React.FC<PageBannerSectionProps> = ({
    title,
    description,
    backgroundImage,
    foregroundImage,
    variant = "default",
    className = "",
    id,
}) => {
    // Variant: Clinicians
    if (variant === "clinicians") {
        return (
            <section id={id} className={`relative w-full overflow-hidden ${className}`}>
                {/* Background Split Layer */}
                <div className="absolute inset-0 flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 bg-colors-white" />
                    <div className="w-full lg:w-1/2 bg-gradient-to-tr from-indigo-600 to-primary-1" />
                </div>

                <div className="relative z-10 container mx-auto">
                    <div className="flex flex-col lg:flex-row items-stretch">
                        {/* Left: Content (50%) */}
                        <div className="w-full lg:w-1/2 py-20 lg:pt-32 lg:pb-24 px-4 md:px-8 xl:pr-24 flex flex-col gap-figma-8">
                            {/* Heading */}
                            <h1 className="font-sans text-5xl font-bold leading-tight tracking-tighter text-colors-gray-900">
                                <span className="text-primary-1">MORE</span> {title.replace("MORE ", "")}
                            </h1>

                            {/* Subtitle */}
                            <p className="font-sans text-xl font-semibold leading-relaxed text-colors-gray-700">
                                MORE Institute is an interactive learning platform that offers:
                            </p>

                            {/* Bullet Points */}
                            <ul className="flex flex-col gap-figma-4">
                                {[
                                    "Engaging asynchronous and on-demand training to become MORE certified.",
                                    "13 CEUs and ongoing CEU opportunities.",
                                    "Professional videos, interactive exercises, and group supervision sessions.",
                                    "Ready-to-use tools including scripts, handouts, and meditations.",
                                    "Professional development that enhances your credentials.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-figma-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-figma-full bg-primary-1 flex-shrink-0" />
                                        <span className="font-sans text-lg leading-relaxed text-colors-gray-700">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Closing */}
                            <p className="mt-figma-2 font-sans text-lg font-medium leading-relaxed text-colors-gray-800">
                                Join the growing community of clinicians bringing research-backed relief to their clients.
                            </p>
                        </div>

                        {/* Right: Registration Form (50%) */}
                        <div className="w-full lg:w-1/2 py-20 lg:pt-32 lg:pb-24 px-4 md:px-8 xl:pl-40 flex flex-col gap-figma-8">
                            <div className="w-full max-w-[480px] text-colors-white">
                                <div className="flex flex-col gap-figma-2 mb-figma-12">
                                    <h2 className="font-sans text-3xl font-bold leading-tight text-colors-white">
                                        No commitment today
                                    </h2>
                                    <p className="font-sans text-lg text-colors-white opacity-90">
                                        Pre-register and you'll save 15% off the cost of $895.
                                    </p>
                                </div>

                                {/* Form */}
                                <form className="flex flex-col gap-figma-5">
                                    <div>
                                        <label className="block font-sans text-sm font-semibold mb-figma-1.5">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3.5 rounded-figma-lg bg-white/10 border border-white/20 text-colors-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-sans"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-sans text-sm font-semibold mb-figma-1.5">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3.5 rounded-figma-lg bg-white/10 border border-white/20 text-colors-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-sans"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-sans text-sm font-semibold mb-figma-1.5">Topic</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3.5 rounded-figma-lg bg-white/10 border border-white/20 text-colors-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none cursor-pointer font-sans">
                                                <option className="text-colors-gray-900">Select a topic</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg className="w-4 h-4 text-colors-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end mt-figma-4">
                                        <button
                                            type="button"
                                            className="px-10 py-4 rounded-figma-lg font-sans font-bold text-center bg-primary-1 hover:brightness-110 text-colors-white transition-all shadow-elevation-1 active:scale-[0.98]"
                                        >
                                            Pre-Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            className={`relative w-full h-[680px] overflow-hidden ${className}`}
            style={{
                background: "linear-gradient(135deg, #6b21a8 0%, #0f172a 100%)",
            }}
            id={id}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex items-center px-20">
                {/* Left: Text Section */}
                <div className="max-w-[720px] flex flex-col gap-6">
                    {/* Title */}
                    <h1
                        className="text-white"
                        style={{
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                            fontSize: "46px",
                            fontWeight: 800,
                            letterSpacing: "-0.92px",
                            lineHeight: "1.2",
                        }}
                    >
                        {title}
                    </h1>

                    {/* Description Paragraphs */}
                    <div className="flex flex-col gap-4 max-w-[571px]">
                        {description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-white"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 400,
                                    lineHeight: "27px",
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Right: Foreground Image */}
                <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[656px] h-[492px]">
                    <Image
                        src={foregroundImage.src}
                        alt={foregroundImage.alt}
                        fill
                        className="object-cover rounded-3xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
