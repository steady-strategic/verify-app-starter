
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
            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE reduces drug relapse by 42%, addiction treatment dropout by 59%, and days of drug use by 42% <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE cuts opioid misuse by 45%, tripling the effect of standard group therapy, with effects sustained for 9+ months <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE reduces drug craving by 50%, <ArrowLink /> MORE reduces craving in people with alcohol use disorder by 27% <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE reduces cigarette craving by 30% <ArrowLink /> with 36% of patients reducing their dose by 50% or more <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                A single, 15-minute MORE mindfulness practice reduces acute pain by 30% <ArrowLink /> , post-operative pain by 49% <ArrowLink /> and anxiety by 43% <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE reduces chronic pain by 25% and sustains relief for 9+ months <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                A large clinical trial found that 70% of participants began with major depressive disorder and none met the criteria for the condition by the study’s conclusion <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE is nearly twice as effective as standard group therapy in reducing PTSD symptoms, leading to clinically significant reductions in PTSD symptoms in 59% of patients. <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE decreases stress by 31%, about three times as effective as standard group therapy in reducing stress <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE increases positive emotions by 2.75 times more than standard group therapy <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                MORE reduces video game craving by 41% <ArrowLink />
            </p>

            <p className="text-[18px] leading-[1.5] text-gray-900 font-semibold font-sans">
                For every $1 spent on MORE, there are $798 in cost savings. The lifetime economic impact from quality of life, decreased mortality & morbidity, and improved productivity are estimated at $320,216 per person. <ArrowLink />
            </p>
        </div>
    );
};
