import React from "react";
import { AuthTextSectionProps } from "./types";

export const AuthText: React.FC<AuthTextSectionProps> = ({ className = "" }) => {
    return (
        <section className={`w-full bg-white py-16 md:py-24 px-6 md:px-20 ${className}`}>
            <div className="max-w-[800px] mx-auto flex flex-col gap-12 text-stone-900">

                {/* Header */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl md:text-5xl font-bold font-sans leading-tight">
                        <span className="text-primary-1">MORE™</span> Trademark &<br />
                        Authorized Use Policy
                    </h1>
                    <p className="text-lg md:text-xl font-bold">
                        <span className="text-primary-1">MORE™</span> is a registered trademark of MORE Therapy.
                    </p>
                </div>

                {/* Authorized Use */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-stone-900">Authorized Use</h2>
                    <p className="text-stone-700 leading-relaxed">
                        The MORE name, logo, and associated materials may be used only by individuals who:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-700 leading-relaxed marker:text-stone-400">
                        <li>Have completed approved MORE training, and</li>
                        <li>Are recognized as Certified MORE Therapists or Counselors, and</li>
                        <li>Use the MORE name in accordance with these guidelines.</li>
                    </ul>
                    <p className="text-stone-700 leading-relaxed mt-2">
                        Authorized users may reference MORE in professional credentials (e.g., "Certified MORE Therapist"), marketing materials, and client-facing communications, provided that representations of MORE are accurate and consistent with the training.
                    </p>
                </div>

                {/* Unauthorized Use */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-stone-900">Unauthorized Use</h2>
                    <p className="text-stone-700 leading-relaxed">
                        The following are not permitted without express written authorization:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-stone-700 leading-relaxed marker:text-stone-400">
                        <li>Use of the MORE name by untrained individuals</li>
                        <li>Teaching, training, or certifying others in MORE</li>
                        <li>Creating derivative programs, apps, or courses branded as MORE</li>
                        <li>Use of MORE in a way that implies endorsement, certification, or affiliation beyond approved training</li>
                        <li>Use of MORE as a generic or descriptive term</li>
                    </ul>
                </div>

                {/* No Restriction */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-stone-900">No Restriction on Clinical Practice</h2>
                    <p className="text-stone-700 leading-relaxed">
                        This policy does not restrict clinicians from practicing within their licensed scope, integrating therapeutic techniques, or exercising independent professional judgment. It governs only the use of the MORE trademark and branded materials.
                    </p>
                </div>

                {/* Questions */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-stone-900">Questions</h2>
                    <p className="text-stone-700 leading-relaxed">
                        For questions regarding authorized use of MORE, please contact:<br />
                        <a href="mailto:support@moretherapy.com" className="hover:text-primary-1 transition-colors">support@moretherapy.com</a>
                    </p>
                </div>

            </div>
        </section>
    );
};
