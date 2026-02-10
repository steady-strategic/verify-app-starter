
import React from 'react';
import Link from 'next/link';
import { BaseSectionProps } from './types';

const ArrowLink = () => (
    <Link href="#" className="inline-block ml-1 text-primary-1 hover:text-primary-2 transition-colors font-bold text-xl no-underline leading-none align-middle">
        →
    </Link>
);

export const ResearchTextList: React.FC<BaseSectionProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col gap-10 mt-20 ${className}`}>
            import React from "react";
            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/38061786/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces drug relapse by 42%, addiction treatment dropout by 59%, and days of drug use by 36% <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2789279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE cuts opioid misuse by 45%, tripling the effect of standard group therapy, with effects sustained for 9+ months <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8281569/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces drug craving by 50% <ArrowLink />
                </a>
                {", "}
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/40898007/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces craving in people with alcohol use disorder by 27%{" "}
                    <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9476401/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces cigarette craving by 30% <ArrowLink />
                </a>
                <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2789279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    with 36% of patients reducing their dose by 50% or more <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28702870/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    A single, 15-minute MORE mindfulness practice reduces acute pain by 30% <ArrowLink />
                </a>

                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/34165999/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    post-operative pain by 49% <ArrowLink />
                </a>

                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/33449510/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    and anxiety by 43% <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2789279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces chronic pain by 25% and sustains relief for 9+ months <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2789279"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    A large clinical trial found that 70% of participants began with major depressive disorder and none met the criteria for the condition by the study’s conclusion <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6764586/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE is nearly twice as effective as standard group therapy in reducing PTSD symptoms, leading to clinically significant reductions in PTSD symptoms in 59% of patients. <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28437120/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE decreases stress by 31%, about three times as effective as standard group therapy in reducing stress13 <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28363322/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE increases positive emotions by 2.75 times more than standard group therapy <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pubmed.ncbi.nlm.nih.gov/28437120/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    MORE reduces video game craving by 41% <ArrowLink />
                </a>
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9476401/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline text-gray-900 hover:text-primary-1 transition-colors inline-flex items-center gap-1"
                >
                    For every $1 spent on MORE, there are $798 in cost savings. The lifetime economic impact from quality of life, decreased mortality & morbidity, and improved productivity are estimated at $320,216 per person. <ArrowLink />
                </a>
            </p>
        </div>
    );
}