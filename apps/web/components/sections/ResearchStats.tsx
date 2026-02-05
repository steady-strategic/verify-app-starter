
import React from 'react';
import Link from 'next/link';
import { BaseSectionProps } from './types';

interface ResearchStat {
    value: string;
    description: string;
    citation: string;
    link: string;
}

const stats: ResearchStat[] = [
    {
        value: "3x",
        description: "as effective as standard therapy",
        citation: "Garland EL, Hanley AW, Nakamura Y, et al. Mindfulness-Oriented Recovery Enhancement vs supportive group therapy for co-occurring opioid misuse and chronic pain in primary care: A randomized clinical trial. JAMA internal medicine. 2022;182(4):407-417.",
        link: "#"
    },
    {
        value: "50%",
        description: "reduction in drug cravings",
        citation: "Cooperman NA, Hanley AW, Kline A, Garland EL. A pilot randomized clinical trial of mindfulness-oriented recovery enhancement as an adjunct to methadone treatment for people with opioid use disorder and chronic pain: Impact on illicit drug use, health, and well-being. Journal of Substance Abuse Treatment. Published online 2021:108468.",
        link: "#"
    },
    {
        value: "59%",
        description: "reduction in treatment dropout",
        citation: "Cooperman NA, Lu SE, Hanley AW, et al. Telehealth mindfulness-oriented recovery enhancement vs usual care in individuals with opioid use disorder and pain: a randomized clinical trial. JAMA psychiatry. 2024;81(4):338-346.",
        link: "#"
    },
    {
        value: "42%",
        description: "reduction in drug relapse",
        citation: "Cooperman NA, Lu SE, Hanley AW, et al. Telehealth mindfulness-oriented recovery enhancement vs usual care in individuals with opioid use disorder and pain: a randomized clinical trial. JAMA psychiatry. 2024;81(4):338-346.",
        link: "#"
    },
    {
        value: "30%",
        description: "reduction in acute pain",
        citation: "Garland EL, Baker AK, Larsen P, et al. Randomized Controlled Trial of Brief Mindfulness Training and Hypnotic Suggestion for Acute Pain Relief in the Hospital Setting. Journal of General Internal Medicine. 2017;32(10):1106-1113",
        link: "#"
    },
    {
        value: "45%",
        description: "reduction in post-operative pain",
        citation: "Hanley AW, Gililland J, Garland EL. To be mindful of the breath or pain: Comparing two brief preoperative mindfulness techniques for total joint arthroplasty patients. Journal of consulting and clinical psychology. 2021;89(7):590.",
        link: "#"
    },
    {
        value: "59%",
        description: "success rate in treating chronic pain",
        citation: "Garland EL, Hanley AW, Nakamura Y, et al. Mindfulness-Oriented Recovery Enhancement vs supportive group therapy for co-occurring opioid misuse and chronic pain in primary care: A randomized clinical trial. JAMA internal medicine. 2022;182(4):407-417.",
        link: "#"
    },
    {
        value: "43%",
        description: "reduction in anxiety",
        citation: "Hanley AW, Gililland J, Erickson J, et al. Brief preoperative mind–body therapies for total joint arthroplasty patients: a randomized controlled trial. Pain. 2021;162(6):1749-1757.",
        link: "#"
    },
    {
        value: "38%",
        description: "improvement in depression",
        citation: "Garland EL, Hanley AW, Nakamura Y, et al. Mindfulness-Oriented Recovery Enhancement vs supportive group therapy for co-occurring opioid misuse and chronic pain in primary care: A randomized clinical trial. JAMA internal medicine. 2022;182(4):407-417",
        link: "#"
    },
    {
        value: "59%",
        description: "success rate in treating PTSD",
        citation: "Parisi, A., Hudak, J., Froeliger, B., & Garland, E. L. (2023). Mindfulness-Oriented Recovery Enhancement reduces post-traumatic stress via reappraisal among patients with chronic pain and co-occurring opioid misuse. Nature Mental Health, 1(7), 489-500.",
        link: "#"
    }
];

export const ResearchStats: React.FC<BaseSectionProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col gap-12 lg:gap-20 ${className}`}>
            <div className="w-full grid grid-cols-1 gap-12 lg:gap-y-16">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col gap-4">
                        <h3 className="font-sans font-bold text-[24px] leading-[1.2] tracking-[-0.48px] text-gray-900">
                            <span className="text-primary-1">{stat.value}</span> {stat.description}
                        </h3>
                        <p className="font-sans text-[16px] leading-[1.5] text-gray-900">
                            {stat.citation}
                        </p>
                        <Link href={stat.link} className="flex items-center gap-2 group w-fit">
                            <span className="font-bold text-gray-900 text-lg">→</span>
                            <span className="font-bold text-primary-1 underline decoration-primary-1 underline-offset-4 text-[16px]">Read Research</span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
