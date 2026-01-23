import React from "react";
import Image from "next/image";
import { ContactHeroSectionProps } from "./types";

export const ContactHero: React.FC<ContactHeroSectionProps> = ({
    title,
    description,
    backgroundImage,
    className = "",
    id,
}) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <section id={id} className={`relative w-full ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 h-[561px] w-full z-0">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-center justify-center min-h-[561px] py-16">
                <div className="w-full max-w-[1440px] px-4">
                    {/* Heading and Description */}
                    <div className="text-center mb-12">
                        <h1 className="font-sans text-[36px] font-[800] text-white mb-4 leading-tight tracking-[-0.36px]">
                            {title}
                        </h1>
                        <p className="font-sans text-[20px] font-[400] text-white leading-[30px] max-w-[672px] mx-auto">
                            {description}
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-[811px] mx-auto bg-white rounded-[24px] border border-[#f4f4f4] shadow-[0px_0px_9.4px_rgba(0,0,0,0.03)] p-8 gap-6 flex flex-col">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            {/* Name Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[14px] font-[500] text-[#111928]">First name</label>
                                    <input
                                        type="text"
                                        placeholder="Bonnie"
                                        className="font-sans px-4 py-3 border border-[#e5e7eb] rounded-lg text-[14px] font-[400] text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:border-[#3b82f6]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[14px] font-[500] text-[#111928]">Last name</label>
                                    <input
                                        type="text"
                                        placeholder="Green"
                                        className="font-sans px-4 py-3 border border-[#e5e7eb] rounded-lg text-[14px] font-[400] text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:border-[#3b82f6]"
                                    />
                                </div>
                            </div>

                            {/* Email and Phone Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[14px] font-[500] text-[#111928]">Email</label>
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="font-sans px-4 py-3 border border-[#e5e7eb] rounded-lg text-[14px] font-[400] text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:border-[#3b82f6]"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="font-sans text-[14px] font-[500] text-[#111928]">Phone number</label>
                                    <input
                                        type="tel"
                                        placeholder="+(12) 345 6789"
                                        className="font-sans px-4 py-3 border border-[#e5e7eb] rounded-lg text-[14px] font-[400] text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:border-[#3b82f6]"
                                    />
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="flex flex-col gap-2">
                                <label className="font-sans text-[14px] font-[500] text-[#111928]">Your message</label>
                                <textarea
                                    placeholder="Enter your message..."
                                    rows={6}
                                    className="font-sans px-4 py-3 border border-[#e5e7eb] rounded-lg text-[14px] font-[400] text-[#6b7280] placeholder-[#9ca3af] focus:outline-none focus:border-[#3b82f6] resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="font-sans bg-[#d946ef] hover:bg-[#c026d3] text-white font-[700] text-[16px] px-6 py-3 rounded-lg transition-colors duration-200 w-fit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
