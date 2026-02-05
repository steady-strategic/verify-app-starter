
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BaseSectionProps } from './types';

export const ResearchContent: React.FC<BaseSectionProps> = ({ className = "" }) => {
    return (
        <div className={`w-full flex flex-col gap-12 lg:gap-20 ${className}`}>
            {/* Section 1 */}
            <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <h3 className="font-sans font-bold text-[28px] leading-[1.25] tracking-[-0.56px] text-gray-900">
                        <span className="text-primary-1">MORE</span> reduces addictive behavior by strengthening self-regulation in the brain
                    </h3>
                    <p className="font-sans text-[18px] leading-[1.5] text-gray-900 m-0">
                        Garland et al 2022 Science Advances
                    </p>
                    <Link href="#" className="flex items-center gap-2 group w-fit">
                        <span className="font-bold text-gray-900 group-hover:text-primary-1 transition-colors">→</span>
                        <span className="font-bold text-primary-1 underline decoration-primary-1 underline-offset-4">Read Research</span>
                    </Link>
                </div>
                <div className="w-full relative aspect-[702/585]">
                    <Image
                        src="/assets/images/Research/theta.png"
                        alt="Theta Wave Chart"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Section 2 */}
            <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <h3 className="font-sans font-bold text-[28px] leading-[1.25] tracking-[-0.56px] text-gray-900">
                        <span className="text-primary-1">MORE</span> decreases craving responses in the brain
                    </h3>
                    <p className="font-sans text-[18px] leading-[1.5] text-gray-900 m-0">
                        Garland et al 2019 Science Advances
                    </p>
                    <Link href="#" className="flex items-center gap-2 group w-fit">
                        <span className="font-bold text-gray-900 group-hover:text-primary-1 transition-colors">→</span>
                        <span className="font-bold text-primary-1 underline decoration-primary-1 underline-offset-4">Read Research</span>
                    </Link>
                </div>
                <div className="w-full relative h-[432px]">
                    <Image
                        src="/assets/images/Research/crave-charts.png"
                        alt="Craving Responses Chart"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Section 3 */}
            <div className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <h3 className="font-sans font-bold text-[28px] leading-[1.25] tracking-[-0.56px] text-gray-900">
                        <span className="text-primary-1">MORE</span> restores the brain's ability to savor natural healthy pleasure and joy
                    </h3>
                    <p className="font-sans text-[18px] leading-[1.5] text-gray-900 m-0">
                        Garland et al 2025 JAMA Psychiatry
                    </p>
                    <Link href="#" className="flex items-center gap-2 group w-fit">
                        <span className="font-bold text-gray-900 group-hover:text-primary-1 transition-colors">→</span>
                        <span className="font-bold text-primary-1 underline decoration-primary-1 underline-offset-4">Read Research</span>
                    </Link>
                </div>
                <div className="w-full relative h-[502px]">
                    <Image
                        src="/assets/images/Research/brain-act.png"
                        alt="Brain Activity Chart"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Mark Image */}
            <div className="w-full flex justify-center py-24">
                <Image
                    src="/assets/images/Research/Mark_1.png"
                    alt="MORE Mark"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </div>
        </div>
    );
};
