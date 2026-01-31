import React from "react";
import Image from "next/image";
import { PageBannerSectionProps } from "./types";
import { HubspotForm } from "../ui/HubspotForm";

export const PageBanner: React.FC<PageBannerSectionProps> = ({
    title,
    description,
    subtitle,
    backgroundImage,
    foregroundImage,
    variant = "default",
    className = "",
    id,
    formId = "fdb9ed11-ff4f-4c8c-9eea-e34704b4b8df", // Default fallback if needed
}) => {
    // Variant: For Clinicians
    if (variant === "forClinicians") {
        if (!foregroundImage) return null;
        return (
            <section id={id} className={`relative w-full max-w-[1440px] mx-auto h-[680px] overflow-hidden ${className}`}>
                <div className="absolute inset-0 flex flex-col lg:flex-row">
                    {/* Left: Background (White) */}
                    <div className="w-full lg:w-1/2 bg-white" />
                    {/* Right: Background (Image) */}
                    <div className="w-full lg:w-1/2 relative">
                        <Image
                            src={foregroundImage.src} // Using foregroundImage as the main hero image
                            alt={foregroundImage.alt}
                            fill
                            className="object-cover object-right"
                            priority
                        />
                    </div>
                </div>

                <div className="relative z-10 container mx-auto h-full">
                    <div className="flex flex-col lg:flex-row h-full">
                        {/* Left: Content (50%) */}
                        <div className="w-full lg:w-1/2 py-20 px-4 md:px-8 xl:pr-24 flex flex-col justify-center h-full">
                            {/* Heading */}
                            <h1 className="font-sans text-[46px] font-extrabold leading-[130%] tracking-[-0.92px] text-colors-gray-900 mb-2">
                                <span className="text-primary-1">MORE</span> {title.replace("MORE ", "")}
                            </h1>

                            {/* Subtitle */}
                            {subtitle && (
                                <h2 className="font-sans text-xl font-semibold leading-relaxed text-colors-gray-700 mb-8">
                                    {subtitle}
                                </h2>
                            )}

                            {/* Description */}
                            <div className="space-y-6">
                                {description.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="font-sans text-lg font-normal leading-[150%] text-colors-gray-700"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right: Spacer (50%) */}
                        <div className="hidden lg:block w-1/2" />
                    </div>
                </div>
            </section>
        );
    }

    // Variant: More Institute
    if (variant === "more-institute") {
        return (
            <section id={id} className={`relative w-full max-w-[1440px] mx-auto h-[730px] overflow-hidden ${className}`}>
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
                        <div className="w-full lg:w-1/2 py-20 lg:pt-32 lg:pb-24 px-4 md:px-8 xl:pl-20 flex flex-col gap-figma-8">
                            <div className="w-full max-w-[650px] text-colors-white">
                                {/* Form: Replacing manual form with HubspotForm */}
                                <div className="p-4 bg-white/5 rounded-figma-lg border border-white/10">
                                    <HubspotForm formId={formId} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Variant: Research
    if (variant === "Research") {
        if (!foregroundImage) return null;
        return (
            <section
                id={id}
                className={`relative w-full max-w-[1451px] mx-auto h-[685px] overflow-hidden rounded-[24px] ${className}`}
                style={{
                    background: "linear-gradient(90deg, #7c3aed 0%, #1a0a2e 100%)",
                }}
            >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage.src}
                        alt={backgroundImage.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-10 w-full h-full flex flex-row">
                    {/* Left: Content */}
                    <div className="flex flex-col pl-[100px] pt-[171px] max-w-[650px] z-20">
                        {/* Title */}
                        <h1
                            className="text-white font-inter"
                            style={{
                                fontSize: "46px",
                                fontWeight: 800,
                                letterSpacing: "-0.92px",
                                lineHeight: "1.2",
                                marginBottom: "24px",
                            }}
                        >
                            {title}
                        </h1>

                        {/* Subtitle */}
                        {subtitle && (
                            <h2
                                className="text-white font-inter whitespace-pre-line"
                                style={{
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.56px",
                                    lineHeight: "35px",
                                }}
                            >
                                {subtitle}
                            </h2>
                        )}

                        {/* Description */}
                        {description && description.length > 0 && (
                            <div className="mt-4 space-y-4">
                                {description.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-white font-inter text-lg"
                                        style={{
                                            fontSize: "28px",
                                            fontWeight: 700,
                                            letterSpacing: "-0.56px",
                                            lineHeight: "35px",
                                        }}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right: Foreground Image (Brain) */}
                    <div className="absolute right-0 top-0 h-full w-[50%] z-10">
                        <Image
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            fill
                            className="object-cover object-right"
                            priority
                        />
                    </div>
                </div>
            </section>
        );
    }

    // Variant: researchBrain
    if (variant === "researchBrain") {
        if (!foregroundImage) return null;
        return (
            <section
                id={id}
                className={`relative w-full max-w-[1440px] mx-auto h-[680px] overflow-hidden ${className}`}
                style={{
                    background: "linear-gradient(90deg, #7c3aed 0%, #1a0a2e 100%)",
                }}
            >
                {/* Background Image Layer */}
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

                        {/* Subtitle */}
                        {subtitle && (
                            <h2
                                className="text-white whitespace-pre-line"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "28px",
                                    fontWeight: 700,
                                    letterSpacing: "-0.56px",
                                    lineHeight: "35px",
                                }}
                            >
                                {subtitle}
                            </h2>
                        )}

                        {/* Description */}
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
    }

    // Variant: directory
    if (variant === "directory") {
        return (
            <section
                id={id}
                className={`relative w-full max-w-[1440px] mx-auto h-[561px] overflow-hidden ${className}`}
                style={{
                    background: "linear-gradient(90deg, #7C3AED 0%, #1A0A2E 100%)",
                }}
            >
                {/* Background Image Layer */}
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
                <div className="relative z-10 w-full h-full flex items-center px-10 md:px-20">
                    <div className="w-full max-w-[469px] flex flex-col gap-16">
                        {/* Title & Description */}
                        <div className="flex flex-col gap-6 text-left">
                            <h1
                                className="text-white"
                                style={{
                                    fontFamily: "var(--font-inter), Inter, sans-serif",
                                    fontSize: "50px",
                                    fontWeight: 800,
                                    letterSpacing: "-1px",
                                    lineHeight: "55px",
                                }}
                            >
                                {title}
                            </h1>
                            <div className="flex flex-col gap-4">
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

                        {/* Form */}
                        <form className="flex w-full gap-[10px]">
                            <div className="relative flex-1">
                                <select
                                    className="w-full h-[52px] pl-4 pr-10 bg-white rounded-lg appearance-none text-[#111928] font-sans text-[16px] focus:outline-none cursor-pointer"
                                    defaultValue=""
                                >
                                    <option value="" disabled>California</option>
                                    <option value="CA">California</option>
                                    <option value="NY">New York</option>
                                    <option value="TX">Texas</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <Image
                                        src="/assets/images/dropdown-icon.svg"
                                        alt="Dropdown"
                                        width={12}
                                        height={12}
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 h-[52px] bg-[#d80ada] rounded-lg hover:brightness-110 transition-all text-white font-sans font-bold text-[16px]"
                                style={{ width: "127px" }}
                            >
                                <Image
                                    src="/assets/images/search-icon.svg"
                                    alt="Search"
                                    width={16}
                                    height={16}
                                />
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
    // Variant: how-it-works
    if (variant === "how-it-works") {
        return (
            <section
                id={id}
                className={`relative w-full max-w-[1440px] mx-auto h-[680px] overflow-hidden flex items-center justify-between py-[70px] px-20 box-border gap-[20px] ${className}`}
            >
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage.src}
                        alt={backgroundImage.alt}
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="relative z-10 h-[426px] w-[571px] flex flex-col items-start text-left text-white font-sans">
                    <div className="self-stretch flex flex-col items-start gap-6 shrink-0">
                        <div className="self-stretch flex flex-col items-start">
                            <h1 className="m-0 w-[563px] relative font-sans text-[46px] font-extrabold leading-[130%] tracking-[-0.92px] text-colors-gray-900 flex items-center">
                                {title}
                            </h1>
                        </div>
                        <div className="self-stretch relative inline-block text-[28px]">
                            {subtitle && (
                                <b className="tracking-[-0.02em] leading-[125%] block mb-4">
                                    {subtitle}
                                </b>
                            )}
                            <div className="text-lg leading-[150%]">
                                {description.map((paragraph, index) => (
                                    <p key={index} className="mb-4 last:mb-0">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Foreground Image */}
                {foregroundImage && (
                    <div className="relative z-10">
                        <Image
                            className="h-[492px] w-[656px] object-cover"
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            width={656}
                            height={492}
                            priority
                        />
                    </div>
                )}
            </section>
        );
    }


    return (
        <section
            className={`relative w-full max-w-[1440px] mx-auto h-[680px] overflow-hidden ${className}`}
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
                {foregroundImage && (
                    <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[656px] h-[492px]">
                        <Image
                            src={foregroundImage.src}
                            alt={foregroundImage.alt}
                            fill
                            className="object-cover rounded-3xl"
                            priority
                        />
                    </div>
                )}
            </div>
        </section>
    );
};
