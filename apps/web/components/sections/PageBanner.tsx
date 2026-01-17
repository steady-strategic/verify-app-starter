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
            <section
                className={`relative w-full py-24 ${className}`}
                id={id}
                style={{ backgroundColor: "#FFFFFF" }}
            >
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
                        {/* Left: Content */}
                        <div className="flex-1 flex flex-col gap-8">
                            {/* Heading */}
                            <h1
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "48px",
                                    fontWeight: 700,
                                    lineHeight: "1.1",
                                    letterSpacing: "-0.96px",
                                    color: "#111928",
                                }}
                            >
                                <span style={{ color: "#E704E7" }}>MORE</span> {title.replace("MORE ", "")}
                            </h1>

                            {/* Subtitle */}
                            <p
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    lineHeight: "30px",
                                    color: "#374151",
                                }}
                            >
                                MORE Institute is an interactive learning platform that offers:
                            </p>

                            {/* Bullet Points */}
                            <ul className="flex flex-col gap-4">
                                {[
                                    "Engaging asynchronous and on-demand training to become MORE certified.",
                                    "13 CEUs and ongoing CEU opportunities.",
                                    "Professional videos, interactive exercises, and group supervision sessions.",
                                    "Ready-to-use tools including scripts, handouts, and meditations.",
                                    "Professional development that enhances your credentials.",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E704E7] flex-shrink-0" />
                                        <span
                                            style={{
                                                fontSize: "18px",
                                                lineHeight: "27px",
                                                color: "#374151",
                                            }}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Closing */}
                            <p
                                className="mt-2"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                    lineHeight: "27px",
                                    color: "#111928",
                                }}
                            >
                                Join the growing community of clinicians bringing research-backed relief to their clients.
                            </p>
                        </div>

                        {/* Right: Registration Card */}
                        <div
                            className="w-full lg:w-[480px] rounded-3xl p-8 lg:p-10 text-white shadow-2xl"
                            style={{
                                background: "linear-gradient(135deg, #4F46E5 0%, #E704E7 100%)",
                            }}
                        >
                            <div className="flex flex-col gap-2 mb-8">
                                <h2 className="text-3xl font-bold">No commitment today</h2>
                                <p className="text-lg opacity-90">
                                    Pre-register and you'll save 15% off the cost of $895.
                                </p>
                            </div>

                            {/* Form Placeholder */}
                            <form className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Topic</label>
                                    <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none">
                                        <option className="text-black">Select a topic</option>
                                    </select>
                                </div>

                                <button
                                    type="button"
                                    className="mt-4 w-full py-3.5 rounded-lg font-bold text-center bg-[#E704E7] hover:bg-[#d604d6] transition-colors shadow-lg"
                                >
                                    Pre-Register
                                </button>
                            </form>
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
