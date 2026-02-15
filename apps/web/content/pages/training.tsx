import { PageBannerSectionProps, ContentTrainingSectionProps, Cards3x2SectionProps, KnowMoreTallSectionProps } from "@/components/sections/types";
import React from "react";

export const cliniciansCertifiedContent = {
    pageBanner: {
        variant: "training",
        title: (
            <span>
                <span className="text-primary-1">MORE</span> <span className="text-gray-700">Training</span>
            </span>
        ),
        subtitle: (
            <span className="text-gray-900 font-bold">
                Learn how to deliver MORE in your own practice. MORE Institute is an interactive learning platform that offers:
            </span>
        ),
        description: (
            <div className="text-gray-900 text-lg flex flex-col gap-4">
                <ul className="list-disc pl-6 space-y-2">
                    <li>Engaging asynchronous and on-demand training to become MORE certified</li>
                    <li>Professional videos, interactive exercises, and group supervision sessions</li>
                    <li>Ready-to-use tools including scripts, handouts, and guided mind-body techniques</li>
                    <li>Instruction on delivering MORE to patients over eight weekly sessions</li>
                    <li>CEUs for training and ongoing education opportunities</li>
                    <li>Training is an insurance-reimbursable service covered by CPT codes</li>
                </ul>
                <p>
                    Our on-demand training follows the same proven format as our 2-day live experience, with interactive check-ins throughout to support focus and learning.
                </p>
            </div>
        ),
        backgroundImage: {
            src: "", // Not used in training variant but required by type
            alt: ""
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/trainingbg-round.avif",
            alt: "MORE Training Illustration"
        }
    } satisfies PageBannerSectionProps,

    contentTraining: {
        title: "What to expect:",
        body: (
            <span>
                <span>{`This training provides comprehensive instruction in the core mindfulness practices and clinical skills central to MORE. Participants will `}</span>
                <b>
                    learn the theoretical foundations of the MORE model, review
                    current research evidence, and explore recent advances
                </b>
                <span>{` in neuroscience and biobehavioral science related to mindfulness, addiction, stress, and chronic pain.`}</span>
                <br /><br />
                <span>{`The training includes `}</span>
                <b>guided demonstrations</b>
                <span>{` of the therapeutic techniques outlined in the MORE treatment manual and `}</span>
                <b>structured opportunities for applied practice</b>
                <span>{`. Participants will observe expert delivery of MORE interventions and receive clear guidance for implementing these methods with fidelity.`}</span>
                <br /><br />
                <span>{`Upon completion, participants will `}</span>
                <b>
                    gain a solid introductory level of competency in delivering MORE
                </b>
                <span>
                    {` and will be prepared to begin applying these techniques with individuals experiencing addictive behaviors, chronic pain conditions, or emotional distress.`}
                </span>
            </span>
        ),
        image: {
            src: "/assets/images/ContentTraining/whatToExpect-new.avif",
            alt: "Training Session"
        },
        cta: {
            text: "Pre-Register Today",
            href: "#"
        }
    } satisfies ContentTrainingSectionProps,

    cards3x2: {
        title: (
            <span>
                Over the course of this training, you’ll develop <br />
                the knowledge and skills to:
            </span>
        ),
        items: [
            {
                title: "Understand the Science Behind Suffering",
                body: "Dive into the latest theoretical frameworks connecting pain, emotional dysregulation, and addiction through transdiagnostic neurobehavioral mechanisms."
            },
            {
                title: "Master Innovative Techniques",
                body: "Learn to deliver powerful mindfulness, cognitive reappraisal, and savoring techniques that go beyond traditional approaches."
            },
            {
                title: "Treat Craving at Its Core",
                body: "Implement targeted mindfulness techniques shown to reduce craving and support recovery from addictive behavior."
            },
            {
                title: "Deliver Relief That Lasts",
                body: "Apply science-backed mindfulness methods proven to alleviate chronic pain and emotional distress."
            },
            {
                title: "Stay Ahead of the Curve",
                body: "Review the latest neuroscience and clinical research validating the efficacy of MORE™ in diverse populations."
            },
            {
                title: "Break the Cycle of Habitual Suffering",
                body: "Learn how to guide patients in de-automatizing destructive behaviors through mindfulness and metacognitive awareness."
            }
        ]
    } satisfies Cards3x2SectionProps,

    knowMoreTall: {
        title: (
            <span>
                Join the 1000+ clinicians nationwide who are bringing powerful relief to their clients.
            </span>
        ),
        cta: {
            text: "Pre-register Today",
            href: "/training"
        },
        backgroundImage: {
            src: "/assets/images/KnowMoreTall/Background3@2x.avif",
            alt: "Background"
        }
    } satisfies KnowMoreTallSectionProps
};
