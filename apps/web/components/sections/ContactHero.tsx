import React from "react";
import Image from "next/image";

interface ContactHeroProps {
    // Props kept for compatibility, though currently unused with the custom form
    portalId?: string;
    formId?: string;
}

export const ContactHero: React.FC<ContactHeroProps> = () => {
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
                        Contact Us
                    </h1>
                    <p className="text-[20px] font-normal leading-normal text-white font-sans">
                        We’d love to hear from you. Whether you’re a clinician interested in MORE certification, a patient looking for support, or an organization exploring training opportunities, our team is here to help.
                    </p>
                </div>

                {/* Form Card */}
                <div className="w-full max-w-[811px] bg-white rounded-[40px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
                    <form className="space-y-8">
                        {/* Row 1: Names */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-gray-900 font-medium text-[18px]">First name</label>
                                <input
                                    id="firstName"
                                    type="text"
                                    required
                                    className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-gray-900 font-medium text-[18px]">Last name</label>
                                <input
                                    id="lastName"
                                    type="text"
                                    required
                                    className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Row 2: Contact Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-gray-900 font-medium text-[18px]">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="block text-gray-900 font-medium text-[18px]">Phone number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    className="block w-full h-[56px] px-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-gray-900 font-medium text-[18px]">Your message</label>
                            <textarea
                                id="message"
                                required
                                rows={6}
                                className="block w-full p-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:border-primary-1 focus:ring-1 focus:ring-primary-1 outline-none transition-all resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="bg-primary-1 hover:brightness-110 active:scale-[0.98] text-white font-bold text-[16px] h-[56px] w-[156px] rounded-2xl transition-all shadow-lg shadow-primary-1/20 flex items-center justify-center"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
