import React from "react";
import Image from "next/image";
import { AppSectionProps } from "./types";

const CheckIcon = () => (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.666992 4.33333L2.66699 6.33333L7.33366 1.66667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const AppleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5833 14.5833C21.5833 11.5 23.9167 10.5 24.5 10.5C23.3333 8.75 21.5833 8.16667 20.4167 8.16667C18.6667 8.16667 17.5 9.33333 16.3333 9.33333C15.1667 9.33333 13.4167 8.16667 11.6667 8.16667C8.75 8.16667 5.83333 10.5 5.83333 14.5833C5.83333 16.9167 6.41667 19.25 7.58333 21C8.75 22.75 10.5 25.0833 12.25 25.0833C13.4167 25.0833 14 24.5 15.75 24.5C17.5 24.5 18.0833 25.0833 19.25 25.0833C21 25.0833 22.75 22.75 23.9167 21C25.0833 19.25 25.6667 17.5 25.6667 17.5C25.6667 17.5 21.5833 16.3333 21.5833 14.5833Z" fill="white" />
        <path d="M18.6667 2.91667C19.8333 1.75 20.4167 0.583333 20.4167 0.583333C20.4167 0.583333 18.6667 0 16.9167 1.16667C15.1667 2.33333 14.5833 3.5 14.5833 3.5C14.5833 3.5 16.3333 4.08333 18.6667 2.91667Z" fill="white" />
    </svg>
);

export const App: React.FC<AppSectionProps> = ({
    className = "",
    variant = "default",
}) => {
    const isDefault = variant === "default";
    const isPatients = variant === "patients";

    return (
        <div className={`relative w-full max-w-[1440px] mx-auto h-[877px] overflow-hidden ${className}`}>
            {/* Background Layer */}
            <div className="absolute inset-0 w-full h-full">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-[724px]">
                    <Image
                        src="/assets/images/App/Background.png"
                        alt="App background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* White bottom section */}
                <div className="absolute bottom-0 left-0 w-full h-[153px] bg-white" />

                {/* Sound wave overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[306px] overflow-hidden pointer-events-none">
                    <div className="absolute inset-0">
                        {/* Sound wave SVG would go here - using a gradient overlay for now */}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
                    </div>
                </div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex items-start justify-between gap-[101px] px-[111px] py-24 h-full">
                {/* Left Content */}
                <div className="flex flex-col gap-4 w-[699px] shrink-0">
                    {/* Header */}
                    <div className="flex flex-col">
                        <h2 className="text-[50px] font-extrabold leading-[1.1] tracking-[-1px] m-0">
                            <span className="text-primary-1">MORE</span>
                            <span className="text-white"> Support, Anywhere</span>
                        </h2>
                        <p className="text-[38px] font-extralight italic leading-[1.3] tracking-[-1.9px] text-[#fafafa] m-0">
                            Coming Soon!
                        </p>
                    </div>

                    {/* Main Content Area */}
                    <div className="flex flex-col gap-8 w-[640px]">
                        {isDefault && (
                            <>
                                {/* Description */}
                                <p className="text-xl text-white leading-[1.5] m-0">
                                    Take your mindfulness practices on the go. Now you can access MORE meditations anytime, anywhere.
                                </p>

                                {/* Features Section */}
                                <div className="flex flex-col">
                                    <div className="w-full h-px bg-gray-200 mb-8" />

                                    {/* Feature List */}
                                    <div className="flex flex-col gap-4 mb-6">
                                        <div className="flex gap-2.5 items-start">
                                            <div className="w-4 h-4 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mt-1">
                                                <CheckIcon />
                                            </div>
                                            <p className="text-base font-bold text-white leading-[1.5] m-0">
                                                Pleasant meditations designed to help ease cravings, pain, and stress
                                            </p>
                                        </div>

                                        <div className="flex gap-2.5 items-start">
                                            <div className="w-4 h-4 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mt-1">
                                                <CheckIcon />
                                            </div>
                                            <p className="text-base font-bold text-white leading-[1.5] m-0">
                                                Learn skills that support healing and a renewed sense of joy in daily life
                                            </p>
                                        </div>

                                        <div className="flex gap-2.5 items-start">
                                            <div className="w-4 h-4 rounded-full bg-primary-1 flex items-center justify-center shrink-0 mt-1">
                                                <CheckIcon />
                                            </div>
                                            <p className="text-base font-bold text-white leading-[1.5] m-0">
                                                Use alongside MORE therapy sessions for the fullest impact
                                            </p>
                                        </div>
                                    </div>

                                    {/* Download CTA */}
                                    <p className="text-xl font-semibold text-white leading-[1.4] tracking-[-0.4px] mb-0">
                                        Download the App
                                    </p>
                                </div>

                                {/* App Store Button */}
                                <button className="bg-primary-1 rounded-lg px-4 py-3 flex items-center justify-center gap-2 w-[145px] hover:brightness-110 transition-all">
                                    <AppleIcon />
                                    <div className="flex flex-col items-start text-white text-left">
                                        <span className="text-xs leading-[12px]">Download on the</span>
                                        <span className="text-sm font-bold leading-[1.25]">AppStore</span>
                                    </div>
                                </button>
                            </>
                        )}

                        {isPatients && (
                            <>
                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200" />

                                {/* Description */}
                                <div className="text-xl text-white leading-[1.5]">
                                    <p className="mb-0">
                                        The MORE Therapy app is designed to support your well-being whether you're working with a therapist or exploring these tools on your own.
                                    </p>
                                    <p className="mb-0">&nbsp;</p>
                                    <p className="mb-0">
                                        Unique, neuroscience-informed mind-body practices will help to reduce craving, emotional distress, and pain, while strengthening your ability to find peace and joy. Use it to deepen your therapy experience or as a standalone resource you can return to anytime, anywhere.
                                    </p>
                                </div>

                                {/* App Store Button */}
                                <button className="bg-primary-1 rounded-lg px-4 py-3 flex items-center justify-center gap-2 w-[145px] hover:brightness-110 transition-all">
                                    <AppleIcon />
                                    <div className="flex flex-col items-start text-white text-left">
                                        <span className="text-xs leading-[12px]">Download on the</span>
                                        <span className="text-sm font-bold leading-[1.25]">AppStore</span>
                                    </div>
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Content - Phone Mockup */}
                <div className="flex items-center justify-center h-[660.575px] w-[363.443px] shrink-0">
                    <div className="rotate-[3.96deg]">
                        <div className="relative w-[320px] h-[640px] rounded-lg">
                            <Image
                                src="/assets/images/App/Mockup.png"
                                alt="MORE App Mockup"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
