
import React from 'react';
import { HomeResearch } from '../../components/sections/HomeResearch';
import { ContentDblStack } from '../../components/sections/ContentDblStack';

export default function TestMultiSectionsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <h1 className="p-8 text-2xl font-bold bg-white mb-8 border-b">Testing Multi-Added Sections</h1>

            <div className="mb-20">
                <h2 className="p-6 text-xl font-semibold text-gray-400">HomeResearch Component</h2>
                <HomeResearch
                    heading="Research shows that MORE reduces <span style='color: #d80ada'>cravings</span> and increases <span style='color: #d80ada'>self-control</span>."
                    features={[
                        {
                            title: "Reduce Cravings",
                            text: "MORE significantly reduces cravings for opioids and other substances by rewiring the brain's reward system."
                        },
                        {
                            title: "Manage Pain",
                            text: "Patients learn to distinguish between physical pain and emotional suffering, reducing the overall experience of pain."
                        },
                        {
                            title: "Increase Joy",
                            text: "By savoring natural rewards, patients rebuild their capacity to experience joy and meaning in everyday life."
                        }
                    ]}
                    cta={{
                        text: "View Our Research",
                        href: "/research"
                    }}
                />
            </div>

            <div className="mb-20">
                <h2 className="p-6 text-xl font-semibold text-gray-400">ContentDblStack Component</h2>
                <ContentDblStack
                    items={[
                        {
                            heading: "For Patients",
                            description: "Regain control of your life with a proven, science-backed approach.",
                            features: [
                                "Weekly group sessions",
                                "Daily mindfulness practices",
                                "Personalized support"
                            ],
                            image: {
                                src: "/assets/images/patient-hero-image.jpg",
                                alt: "Patient using the app"
                            },
                            cta: {
                                text: "Learn More",
                                href: "/patients"
                            },
                            reverse: false
                        },
                        {
                            heading: "For Clinicians",
                            description: "Equip yourself with the tools to help your patients thrive.",
                            features: [
                                "CEU accredited training",
                                "Comprehensive manual",
                                "Ongoing supervision"
                            ],
                            image: {
                                src: "/assets/images/clinician-hero-image.png",
                                alt: "Clinician working with patient"
                            },
                            cta: {
                                text: "Get Certified",
                                href: "/clinicians"
                            },
                            reverse: true
                        }
                    ]}
                />
            </div>
        </div>
    );
}
