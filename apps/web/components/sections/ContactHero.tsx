import React from "react";
import Image from "next/image";
import { ContactHubspotForm } from "./ContactHubspotForm";
import { BlogForm } from "./BlogForm";

interface ContactHeroProps {
    // Props kept for compatibility, though currently unused with the custom form
    portalId?: string;
    formId?: string;
    variant?: "default" | "knowmore";
}

export const ContactHero: React.FC<ContactHeroProps> = ({ variant = "default" }) => {
    return (
        <section className="relative w-full pb-24 bg-white">
            {/* Background Banner */}
            <div className="absolute top-0 left-0 w-full h-[561px] z-0 overflow-hidden">
                <div className="relative w-full h-full bg-primary-2">
                    <Image
                        src="/assets/images/contact-background.png"
                        alt="Contact Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center pt-[90px] px-6">
                {/* Header Text */}
                <div className="flex flex-col items-center text-center max-w-[672px] gap-4 mb-12">
                    <h1 className="text-[36px] font-extrabold leading-tight text-white font-sans tracking-tight">
                        {variant === "knowmore" ? (
                            <span>Know <span className="text-white">MORE</span></span>
                        ) : (
                            "Contact Us"
                        )}
                    </h1>
                    <p className="text-[20px] font-normal leading-normal text-white font-sans">
                        {variant === "knowmore"
                            ? "Sign up for Dr. Garland's insights and stay up to date on the research and events."
                            : "We’d love to hear from you. Whether you’re a clinician interested in MORE certification, a patient looking for support, or an organization exploring training opportunities, our team is here to help."
                        }
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full max-w-[811px] bg-white rounded-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
                    {variant === "knowmore" ? <BlogForm /> : <ContactHubspotForm />}
                </div>
            </div>
        </section>
    );
};
