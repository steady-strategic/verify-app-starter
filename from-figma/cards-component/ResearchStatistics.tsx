import React from "react";
import Image from "next/image";

export default function ResearchStatistics() {
    return (
        <section className="flex flex-col items-center gap-14 py-16 px-4">
            {/* Headline */}
            <h2 className="text-center text-[28px] font-semibold leading-[35px] tracking-[-0.56px] text-gray-700 max-w-[694px]">
                Backed by $90M in federal research grants and 16+ clinical trials,{" "}
                <span className="text-[#8a38f5]">MORE</span> is proven to be 3x as
                effective as standard therapy
            </h2>

            {/* Statistics Grid Container */}
            <div className="w-full max-w-[1280px] rounded-lg shadow-[0px_1px_10px_rgba(0,0,0,0.04)] bg-white">
                {/* Top Row */}
                <div className="flex">
                    {/* Pain Relief Card */}
                    <div className="flex-1 p-12 flex flex-col gap-4">
                        <h3 className="text-[20px] font-semibold tracking-[-0.4px] text-[#111928]">
                            Clinically significant pain relief
                        </h3>
                        <div className="text-[18px] leading-[27px] text-gray-700 whitespace-pre-line">
                            {`30% reduction in acute pain
45% reduction in post-operative pain
59% success rate in treating chronic pain`}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-px bg-gray-200 my-0"></div>

                    {/* Opioid Misuse Card */}
                    <div className="flex-1 p-12 flex flex-col gap-4">
                        <h3 className="text-[20px] font-semibold tracking-[-0.4px] text-[#111928]">
                            Proven reductions in opioid misuse
                        </h3>
                        <div className="text-[18px] leading-[27px] text-gray-700 whitespace-pre-line">
                            {`45% reduction in opioid misuse
59% reduction in treatment dropout
31% reduction in opioid dose`}
                        </div>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="h-px bg-gray-200"></div>

                {/* Bottom Row */}
                <div className="flex">
                    {/* Cravings Card */}
                    <div className="flex-1 p-12 flex flex-col gap-4">
                        <h3 className="text-[20px] font-semibold tracking-[-0.4px] text-[#111928]">
                            Fewer cravings, greater resilience
                        </h3>
                        <div className="text-[18px] leading-[27px] text-gray-700 whitespace-pre-line">
                            {`50% reduction in drug craving
27% reduction in alcohol craving
30% reduction in cigarette craving`}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-px bg-gray-200"></div>

                    {/* Emotional Well-being Card */}
                    <div className="flex-1 p-12 flex flex-col gap-4">
                        <h3 className="text-[20px] font-semibold tracking-[-0.4px] text-[#111928]">
                            Measurable improvements in emotional well-being
                        </h3>
                        <div className="text-[18px] leading-[27px] text-gray-700 whitespace-pre-line">
                            {`43% reduction in anxiety
38% improvement in depression
2.75× greater increase in positive emotion vs. standard therapy`}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <button className="px-6 py-3 bg-[#8a38f5] hover:bg-[#7829d9] text-white text-[18px] font-bold rounded-md transition-colors">
                See the Research
            </button>
        </section>
    );
}