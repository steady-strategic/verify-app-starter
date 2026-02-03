import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { BaseSectionProps, ResearchHomeSectionProps } from "./types";

interface ItemProps {
    contentWidth?: string;
    contentAlignSelf?: string;
    title: string;
    titleAlignSelf?: string;
    titleWidth?: string;
    titleDisplay?: string;
}

const ResearchItem: React.FC<ItemProps> = ({
    contentWidth,
    contentAlignSelf,
    title,
    titleAlignSelf,
    titleWidth,
    titleDisplay
}) => {
    return (
        <div
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-sm"
            style={{
                width: contentWidth === "unset" ? undefined : contentWidth,
                alignSelf: contentAlignSelf === "stretch" ? "stretch" : (contentAlignSelf === "unset" ? undefined : contentAlignSelf),
                flex: contentWidth === "unset" ? "1" : undefined
            }}
        >
            <div
                className="relative tracking-[-0.02em] leading-[125%] font-medium"
                style={{
                    alignSelf: titleAlignSelf === "stretch" ? "stretch" : (titleAlignSelf === "unset" ? undefined : titleAlignSelf),
                    width: titleWidth,
                    display: titleDisplay
                }}
            >
                {title}
            </div>
        </div>
    );
};

const items = [
    {
        contentWidth: "395px",
        contentAlignSelf: undefined,
        title: "Dramatically reduces addiction and substance use",
        titleAlignSelf: "stretch",
        titleWidth: undefined,
        titleDisplay: undefined,
    },
    {
        contentWidth: "unset",
        contentAlignSelf: "stretch",
        title: "Clinically significant pain relief",
        titleAlignSelf: undefined,
        titleWidth: undefined,
        titleDisplay: undefined,
    },
    {
        contentWidth: undefined,
        contentAlignSelf: undefined,
        title: "Measurable improvements in emotional well-being",
        titleAlignSelf: "unset",
        titleWidth: "395px",
        titleDisplay: "inline-block",
    },
];

export const ResearchHome: React.FC<ResearchHomeSectionProps> = ({ className = "" }) => {
    return (
        <div
            className={`w-full min-h-[683px] bg-white flex flex-col items-center pt-[90px] px-4 pb-[59px] box-border ${className}`}
        >
            <section className="flex flex-col items-center gap-[60px] text-center text-[28px] text-gray-900 font-sans">
                <div className="w-full max-w-7xl flex flex-col items-center justify-center">
                    <h3 className="m-[0px] w-[636px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] inline-block">
                        <span>{`Backed by $90M in federal research grants and 16+ clinical trials, `}</span>
                        <span className="text-primary-1">MORE</span>
                        <span> is proven to be 3x as effective as standard therapy</span>
                    </h3>
                </div>
                <section className="w-full max-w-7xl h-full flex flex-wrap justify-center items-center gap-[48px]">
                    {items.map((item, index) => (
                        <ResearchItem
                            key={index}
                            contentWidth={item.contentWidth}
                            contentAlignSelf={item.contentAlignSelf}
                            title={item.title}
                            titleAlignSelf={item.titleAlignSelf}
                            titleWidth={item.titleWidth}
                            titleDisplay={item.titleDisplay}
                        />
                    ))}
                </section>
                <button className="cursor-pointer [border:none] py-35 px-6 bg-primary-1 w-[206px] h-[53px] rounded-md overflow-hidden shrink-0 flex items-center justify-center box-border gap-2">
                    <Image
                        className="h-4 w-4 relative hidden shrink-0"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/ResearchHome/cart-plus1.svg"
                    />
                    <b className="relative text-lg leading-[150%] font-sans text-white text-left shrink-0">
                        Read the Research
                    </b>
                    <Image
                        className="h-4 w-4 relative hidden shrink-0"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/ResearchHome/cart-plus1.svg"
                    />
                </button>
            </section>
        </div>
    );
};
