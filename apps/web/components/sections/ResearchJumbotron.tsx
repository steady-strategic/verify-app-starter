
import React from 'react';
import { BaseSectionProps } from './types';
import Link from 'next/link';

export const ResearchJumbotron: React.FC<BaseSectionProps> = ({ className = "" }) => {
    return (
        <div className={`w-full bg-white flex flex-col items-center py-24 px-4 ${className}`}>
            <div className="max-w-7xl w-full flex flex-col gap-8 items-center">

                {/* Main Card */}
                <div className="bg-white rounded-lg p-12 max-w-5xl w-full flex flex-col gap-8 text-center border border-gray-100 shadow-sm">
                    <div>
                        <h3 className="font-bold text-[28px] leading-[1.25] text-gray-900 tracking-[-0.56px] mb-4">
                            Implementing <span className="text-primary-1">MORE</span> in Health Care
                        </h3>
                        <p className="text-[18px] leading-[1.5] text-gray-900">
                            Providers and health care systems nationwide have implemented MORE in a range of settings, including medical centers, addiction treatment, behavioral health, community-based clinics, higher education institutions, state and local government, and the military health system.
                        </p>
                    </div>

                    <div className="w-full h-px bg-gray-200"></div>

                    {/* Hospital List */}
                    <div className="text-left text-[18px] leading-[1.75] text-gray-600 columns-1 md:columns-2 gap-12">
                        <p className="mb-4">
                            <strong className="text-gray-900">Kaiser Permanente</strong> - Washington
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">John Hopkins Medical School</strong> - Maryland
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Mt. Sinai Hospital</strong> - New York
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Intermountain Health Care</strong> - Utah
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Arkansas Department of Human Services</strong> - Arkansas
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Southwest Care Center</strong> - New Mexico
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">New Roads Behavioral Health</strong> - Utah
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Medical University of South Carolina</strong> - South Carolina
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">University of Utah Health</strong> - Utah
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Philadelphia Veterans Affairs Medical Center</strong> - Pennsylvania
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Turning Point Center</strong> - Utah
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Ralph H. Johnson Veterans Affairs Medical Center</strong> - South Carolina
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Essentia Health</strong> - Minnesota
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Hennepin Healthcare</strong> - Minnesota
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Neuroscience Associates of New York</strong> - New York
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Triangle Options for Substance Abusers</strong> - North Carolina
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Saint Luke’s Cancer Institute</strong> - Kansas
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Brooke Army Medical Center</strong> - Texas
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Darnall Army Medical Center</strong> - Texas
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Madigan Army Medical Center</strong> - Washington
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Wilford Hall Hospital</strong> - Texas
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Tripler Army Medical Center</strong> - Hawaii
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">Schofield Barracks</strong> - Hawaii
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">The University of Zurich</strong> - Switzerland
                        </p>
                        <p className="mb-4">
                            <strong className="text-gray-900">The University of Fribourg</strong> - Switzerland
                        </p>
                    </div>
                </div>

                <Link href="#" className="bg-primary-1 text-white font-bold text-[18px] py-3.5 px-6 rounded-md hover:bg-opacity-90 transition-all">
                    Learn MORE
                </Link>

            </div>
        </div>
    );
};
