"use client";

import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { TestimonialsSectionProps } from "./types";

// Testimonials data from Figma design
const testimonials = [
    {
        id: 1,
        quote: `"This is an intervention that has demonstrated both during in-person and virtual settings a level of healing that I have not seen in any other treatment approach I have provided."`,
        name: 'Trish Dooley Budsock, MA, LPC',
        title: 'Robert Wood Johnson Medical School at Rutgers'
    },
    {
        id: 2,
        quote: `"Many report not only relief from physical suffering but also deep emotional healing, enhanced self-awareness, and meaningful recovery. A program evaluation of MORE at Essentia showed statistically significant symptom improvements in my patients."`,
        name: 'Trish Dooley Budsock, MA, LPC',
        title: 'Robert Wood Johnson Medical School at Rutgers'
    },
    {
        id: 3,
        quote: `"Since being trained, I have used MORE everyday with my clients as well as for myself. I have found it to be one of the most successful tools when working with individuals, as well as it being very accessible."`,
        name: 'Gabrielle Korpas, LCSW, CADC-III',
        title: null
    },
    {
        id: 4,
        quote: `"MORE has been one of the most meaningful additions to my clinical work. I've seen how it can complement other treatments in profound ways—whether I'm supporting someone through pain management, opioid use recovery, stress, or anxiety."`,
        name: 'Ivana Micic, LCSW, Project Reality',
        title: null
    },
    {
        id: 5,
        quote: `"MORE has profoundly enhanced my work with people facing substance use disorders and chronic pain, giving me practical, evidence-based tools that reliably support healing, growth, and resilience. It has enriched my clients' journeys to wellness and wholeness and deepened my fulfillment as a physician".`,
        name: 'Agustin Castellanos, MD',
        title: null
    },
    {
        id: 6,
        quote: `"MORE has been a treasure chest full of gems that have been beneficial in my clinical practice and in my own well-being."`,
        name: 'Tina Liu Tom, PhD, VA Medical Center',
        title: null
    },
    {
        id: 7,
        quote: `"MORE is unique not only in its ability to reduce craving, substance use, and physical and emotional pain, but also its focus on teaching participants how to reconnect with the natural sources of pleasure and joy in their daily lives."`,
        name: 'Anna Parisi, PhD, LCSW, George Mason University',
        title: null
    }
];

export const Testimonials: React.FC<TestimonialsSectionProps> = ({ className = "" }) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center py-24 px-4 box-border overflow-hidden ${className}`}>
            <section className="w-full max-w-[1280px] flex flex-col items-center gap-7 text-center font-sans">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 max-w-[672px]">
                    <h2 className="text-[28px] font-bold leading-[1.25] tracking-[-0.56px] text-gray-900 m-0">
                        Testimonials
                    </h2>
                    <p className="text-lg leading-[1.5] text-gray-700 m-0">
                        Hear from clinicians who use MORE in their practice
                    </p>
                </div>

                {/* Carousel */}
                <div className="w-full max-w-[1216px] h-[400px] md:h-[280px]">
                    <Carousel
                        slideInterval={5000}
                        leftControl={
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors">
                                <Image
                                    src="/assets/images/Testimonials/arrow-left-outline.svg"
                                    alt="Previous"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        }
                        rightControl={
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition-colors">
                                <Image
                                    src="/assets/images/Testimonials/arrow-right-outline1.svg"
                                    alt="Next"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        }
                        indicators={true}
                        theme={{
                            root: {
                                base: "relative h-full w-full",
                                leftControl: "absolute top-0 left-[-16px] flex h-full items-center justify-start md:justify-center px-0 md:px-4 focus:outline-none",
                                rightControl: "absolute top-0 right-[-16px] flex h-full items-center justify-end md:justify-center px-0 md:px-4 focus:outline-none"
                            },
                            indicators: {
                                active: {
                                    off: "bg-gray-300 hover:bg-gray-400",
                                    on: "!bg-primary-1"
                                },
                                base: "h-2 w-2 rounded-full",
                                wrapper: "absolute bottom-2 left-1/2 flex -translate-x-1/2 space-x-3"
                            },
                            item: {
                                base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                                wrapper: {
                                    off: "w-full flex-shrink-0 transform cursor-default snap-center",
                                    on: "w-full flex-shrink-0 transform cursor-grab snap-center"
                                }
                            },
                            control: {
                                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
                                icon: "h-5 w-5 text-white sm:h-6 sm:w-6"
                            },
                            scrollContainer: {
                                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']",
                                snap: "snap-x"
                            }
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex h-full items-center justify-center"
                            >
                                <div className="flex flex-col items-center gap-8 max-w-[768px] px-4">
                                    {/* Quote */}
                                    <p className="text-xl font-semibold leading-[1.4] tracking-[-0.4px] text-gray-900 text-center m-0">
                                        {testimonial.quote}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <p className="text-base font-semibold leading-[1.25] text-gray-900 m-0">
                                            {testimonial.name}
                                        </p>
                                        {testimonial.title && (
                                            <>
                                                <p className="text-base font-semibold leading-[1.25] text-gray-900 m-0">
                                                    /
                                                </p>
                                                <p className="text-sm leading-[1.25] text-gray-500 m-0">
                                                    {testimonial.title}
                                                </p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>
        </div>
    );
};
