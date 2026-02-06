import React from "react";
import Image from "next/image";
import { Label, TextInput, Textarea, Button } from "flowbite-react";

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
                <div className="w-full max-w-[811px] bg-white rounded-[24px] shadow-[0px_0px_9.9px_0px_rgba(0,0,0,0.03)] border border-[#f4f4f4] p-[32px] flex flex-col gap-6">
                    <form className="flex flex-col gap-8">
                        {/* Row 1: Names */}
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="firstName" value="First name" className="font-medium text-gray-900" />
                                </div>
                                <TextInput
                                    id="firstName"
                                    type="text"
                                    placeholder=""
                                    required
                                    theme={{ field: { input: { base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50", colors: { gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1" } } } }}
                                    color="gray"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="lastName" value="Last name" className="font-medium text-gray-900" />
                                </div>
                                <TextInput
                                    id="lastName"
                                    type="text"
                                    placeholder=""
                                    required
                                    theme={{ field: { input: { base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50", colors: { gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1" } } } }}
                                    color="gray"
                                />
                            </div>
                        </div>

                        {/* Row 2: Contact Info */}
                        <div className="flex flex-col md:flex-row gap-8 w-full">
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="email" value="Email" className="font-medium text-gray-900" />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder=""
                                    required
                                    theme={{ field: { input: { base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50", colors: { gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1" } } } }}
                                    color="gray"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="mb-2 block">
                                    <Label htmlFor="phone" value="Phone number" className="font-medium text-gray-900" />
                                </div>
                                <TextInput
                                    id="phone"
                                    type="tel"
                                    placeholder=""
                                    theme={{ field: { input: { base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50", colors: { gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1" } } } }}
                                    color="gray"
                                />
                            </div>
                        </div>

                        {/* Row 3: Message */}
                        <div className="w-full">
                            <div className="mb-2 block">
                                <Label htmlFor="message" value="Your message" className="font-medium text-gray-900" />
                            </div>
                            <Textarea
                                id="message"
                                placeholder=""
                                required
                                rows={6}
                                className="bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1"
                                theme={{ base: "block w-full rounded-lg border text-sm disabled:cursor-not-allowed disabled:opacity-50", colors: { gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-1 focus:ring-primary-1 placeholder-gray-400" } }}
                                color="gray"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="bg-primary-1 hover:bg-[#b008b2] focus:ring-4 focus:ring-purple-300 text-white font-bold rounded-lg px-5 py-0.5"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
