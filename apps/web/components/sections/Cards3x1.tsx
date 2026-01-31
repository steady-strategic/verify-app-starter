import React from "react";
import Image from "next/image";
import { Cards3x1SectionProps } from "./types";

const Feature: React.FC<{
    iconSrc: string;
    body: string;
    className?: string;
}> = ({ className = "", iconSrc, body }) => {
    return (
        <div
            className={`flex-1 flex flex-col items-start gap-4 text-left text-xl text-[#d80ada] font-sans ${className}`}
        >
            <Image
                className="w-12 h-12 rounded-full"
                width={48}
                height={48}
                alt=""
                src={iconSrc}
            />
            <div className="self-stretch flex flex-col items-start gap-2">
                <h3
                    className="m-0 self-stretch relative font-bold"
                    style={{
                        fontFamily: "var(--content-header-2-font-family)",
                        fontSize: "var(--content-header-2-font-size)",
                        fontWeight: "var(--content-header-2-font-weight)",
                        letterSpacing: "var(--content-header-2-letter-spacing)",
                        lineHeight: "var(--content-header-2-line-height)",
                    }}
                >
                    <span>MORE</span>
                    <span className="text-colors-gray-900"> Mindfulness</span>
                </h3>
                <div className="self-stretch relative text-lg leading-[150%] text-colors-gray-900">
                    {body}
                </div>
            </div>
        </div>
    );
};

export const Cards3x1: React.FC<Cards3x1SectionProps> = ({
    className = "",
    id,
    features,
}) => {
    return (
        <section
            id={id}
            className={`w-full max-w-[1440px] mx-auto bg-white overflow-hidden flex flex-col items-center pt-[77px] pb-[84px] text-center text-[28px] text-[#d80ada] font-sans ${className}`}
        >
            <div className="w-full max-w-[1280px] px-4 md:px-0 flex flex-col items-center gap-[92px]">
                <div className="self-stretch flex flex-col items-center justify-center">
                    <h3
                        className="m-0 max-w-[928px] relative text-[#d80ada] font-bold inline-block"
                        style={{
                            fontFamily: "var(--content-header-2-font-family)",
                            fontSize: "var(--content-header-2-font-size)",
                            fontWeight: "var(--content-header-2-font-weight)",
                            letterSpacing: "var(--content-header-2-letter-spacing)",
                            lineHeight: "var(--content-header-2-line-height)",
                        }}
                    >
                        <span>MORE</span>
                        <span className="text-colors-gray-700">
                            {" "}
                            is a structured, rigorously-tested therapeutic protocol. Patients
                            engage in mind-body training, delivered individually or in a group
                            setting, to learn unique mindfulness, reappraisal, and savoring
                            skills to strengthen recovery and generate well-being.
                        </span>
                    </h3>
                </div>
                <div className="self-stretch flex flex-col md:flex-row items-start gap-12">
                    {features.map((item, index) => (
                        <Feature
                            key={index}
                            iconSrc={item.iconSrc}
                            body={item.body}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
