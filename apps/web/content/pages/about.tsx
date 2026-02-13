import type {
    VideoModSectionProps,
    TextAboutSectionProps,
    ProfileAboutSectionProps
} from "@/components/sections/types";
import React from "react";

export const aboutContent = {
    videoAbout: {
        variant: "about",
        title: "About Us",
        subtitle: "Together, we are working towards a future where anyone experiencing addiction, pain or emotional distress can find relief.",
        description: "", // Keep description empty as we use subtitle for the mission statement
        backgroundImage: {
            src: "/assets/images/VideoAbout/Vid-background-comp.png",
            alt: "Background"
        },
        videoThumbnail: {
            src: "/assets/images/VideoAbout/Vid-preview-comp.png",
            alt: "Video Preview"
        }
    } satisfies VideoModSectionProps,

    textAbout: {
        title: (
            <span>
                <span className="text-primary-1">MORE</span> was developed to meet a critical need: people living with addiction, chronic pain, and emotional distress need more than symptom management.
            </span>
        ),
        subtitle: "They need an approach that supports lasting change.",
        body: (
            <div className="flex flex-col gap-6">
                <p>
                    MORE combines evidence-based mindfulness practices with compassionate care, giving patients tools to reduce suffering, build emotional resilience, and experience greater well-being.
                </p>
                <p>
                    At the heart of MORE is its founder, Dr. Eric Garland, whose decades of research and clinical experience guide every aspect of this transformative therapy.
                </p>
            </div>
        )
    } satisfies TextAboutSectionProps,

    profileAbout: {
        image: {
            src: "/assets/images/ProfileAbout/drGarland-about.png",
            alt: "Dr. Eric Garland"
        },
        title: (
            <span>
                Dr. Eric Garland, Founder of <span className="text-primary-1">MORE</span>
            </span>
        ),
        body: (
            <div className="flex flex-col gap-4 text-base">
                <p>
                    Dr. Eric Garland, PhD, LCSW, is an Endowed Professor in Health Sciences at the Sanford Institute for Empathy and Compassion, Endowed Professor in the Department of Psychiatry and the Center for Addiction Science and Treatment at the University of California San Diego, and Director of UCSD's ONEMIND (Optimized Neuroscience-Enhanced Intervention Design).
                </p>
                <p>
                    Dr. Garland is the developer of Mindfulness-Oriented Recovery Enhancement (MORE), an innovative, mindfulness-based intervention founded on insights derived from cognitive, affective, and neurobiological science.
                </p>
                <p>
                    His contributions to the field have earned him recognition as a Fellow of the Mind and Life Institute and Social Welfare. He has held key national leadership roles, including Chair of the Research Working Group for the Academic Consortium for Integrative Medicine and Health and appointment to the NIH HEAL Multi-Disciplinary Working Group. Dr. Garland has briefed federal policymakers on the use of MORE to address the opioid crisis, including the Director of the White House Office of National Drug Control Policy and the Congressional Addiction Treatment and Recovery Caucus.
                </p>
                <p>
                    In recognition of his expertise in mindfulness research, in 2012 Dr. Garland was named Fellow of the Mind and Life Institute and in 2019 was inducted as a Fellow into the American Academy of Social Work and Social Welfare. Dr. Garland served as Chair of the Research Working Group of the National Academic Consortium for Integrative Medicine and Health, and in 2019 was appointed to the NIH HEAL Multi-Disciplinary Working Group comprised of national experts on pain and addiction research to help guide the nation’s $2+ billion HEAL initiative. Dr. Garland has briefed federal policymakers on MORE as a treatment to halt the opioid crisis: in 2023, Dr. Garland briefed the Director of the White House Office of National Drug Control Policy (ONDCP), and in 2024, he was invited to the House of Representatives on Capitol Hill to brief the Congressional Addiction Treatment and Recovery Caucus.
                </p>
                <p>
                    Dr. Garland is the world's most published author on mindfulness research, with more than 280 peer-reviewed publications. His work has been featured in major media outlets such as CNN, the New York Times, Time, NPR, and the LA Times.
                </p>
                <p>
                    In addition to his research leadership, Dr. Garland is a licensed psychotherapist with over two decades of clinical experience treating addiction, trauma, mood disorders, chronic pain, and psychosomatic conditions. He is trained in mindfulness-based therapy, cognitive-behavioral therapy, and clinical hypnosis, and was elected a Distinguished Fellow of the National Academies of Practice in recognition of his clinical expertise.
                </p>
            </div>
        ),
        cta: {
            text: "Download CV",
            href: "https://drericgarland.com/cv/"
        }
    } satisfies ProfileAboutSectionProps
};
