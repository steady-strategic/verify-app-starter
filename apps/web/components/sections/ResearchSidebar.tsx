
import React from 'react';
import Link from 'next/link';

export const ResearchSidebar: React.FC = () => {
    return (
        <div className="flex flex-col gap-12 sticky top-24">

            {/* Subscribe / Certified */}
            <div className="flex flex-col gap-4 p-5 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[14px] uppercase text-gray-900 tracking-wider">
                    Get <span className="text-primary-1">More</span> certified
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-500">
                    Learn how to bring this research-backed therapy to your own patients.
                </p>
                <Link href="/clinicians/certified" className="bg-primary-1 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                    Pre-Register Now
                </Link>
            </div>

            {/* Latest News */}
            <div className="flex flex-col gap-6">
                <h4 className="font-bold text-[14px] uppercase text-gray-900 tracking-wider">
                    Insights from Dr. Garland
                </h4>

                <div className="flex flex-col gap-6">
                    {/* Blog Card 1 */}
                    <div className="group flex gap-3 items-start cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden relative">
                            {/* Use placeholder image or from assets if available */}
                        </div>
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-[16px] leading-[1.25] text-gray-900 group-hover:text-primary-1 transition-colors">
                                Our first office
                            </h5>
                            <p className="text-[14px] leading-[1.4] text-gray-500 line-clamp-2">
                                Over the past year, we undergone many changes.
                            </p>
                            <span className="text-[14px] font-medium text-primary-1 underline">Read in 2 minutes</span>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="group flex gap-3 items-start cursor-pointer">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden relative"></div>
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-[16px] leading-[1.25] text-gray-900 group-hover:text-primary-1 transition-colors">
                                Enterprise design
                            </h5>
                            <p className="text-[14px] leading-[1.4] text-gray-500 line-clamp-2">
                                Over the past year, we undergone many changes.
                            </p>
                            <span className="text-[14px] font-medium text-primary-1 underline">Read in 4 minutes</span>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="group flex gap-3 items-start cursor-pointer">
                        <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden relative"></div>
                        <div className="flex flex-col gap-1">
                            <h5 className="font-bold text-[16px] leading-[1.25] text-gray-900 group-hover:text-primary-1 transition-colors">
                                We sign up with Audi
                            </h5>
                            <p className="text-[14px] leading-[1.4] text-gray-500 line-clamp-2">
                                Over the past year, we undergone many changes.
                            </p>
                            <span className="text-[14px] font-medium text-primary-1 underline">Read in 10 minutes</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
