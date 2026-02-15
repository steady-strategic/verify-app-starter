import type {
    PageBannerSectionProps,
    ContentSectionProps,
    Cards2x3SectionProps,
    TextCliniciansSectionProps,
    ProviderListSectionProps,
    KnowMoreTallSectionProps,

} from "@/components/sections/types";
import React from "react";

export const cliniciansContent = {

    pageBanner: {
        variant: "clinicians",
        title: (
            <span className="text-gray-900">
                Why <span className="text-primary-1">MORE?</span>
            </span>
        ),
        subtitle: (
            <span className="text-gray-900 font-bold">
                Provide Real, Lasting Recovery
            </span>
        ),
        description: (
            <span className="text-gray-900">
                For clinicians seeking a therapy that simultaneously addresses a wide array of afflictions including addiction, chronic pain, and emotional distress —MORE addresses these challenges at their core.
                <br /><br />
                Hailed as one of the greatest breakthroughs in psychotherapy in the past 30 years, MORE unifies the most powerful elements of mindfulness, cognitive‑behavioral therapy, and positive psychology into a single, neuroscience‑driven method that restores the brain’s capacity for regulation, well‑being, meaning, and joy.
                <br /><br />
                Discover how MORE can deepen your therapeutic impact, broaden your clinical toolkit, and help your patients achieve levels of healing and transformation that once felt out of reach.
            </span>
        ),
        backgroundImage: {
            src: "/assets/images/PageBanner/page-banner.png", // Inherited texture or generic bg
            alt: "Background"
        },
        foregroundImage: {
            src: "/assets/images/PageBanner/content-right-image-src.avif",
            alt: "Clinicians Illustration"
        }
    } satisfies PageBannerSectionProps,

    content: {
        variant: "simple",
        title: (
            <span>
                <span>MORE</span> <span className="text-gray-900">gives clinicians a powerful, science-backed tool that builds resilience and restores well-being for their clients.</span>
            </span>
        ),
        items: [
            "Delivered over eight weekly sessions",
            "Group therapy or individual",
            "Easy homework delivery",
            "Enriching for both patient and clinician",
            "An insurance-reimbursable service covered by CPT codes",
            "CE-eligible, earn up to 13 continuing education units"
        ],
        image: {
            src: "/assets/images/Content/left-image.avif",
            alt: "Therapy Session"
        },
        cta: {
            text: "Learn MORE",
            href: "/training"
        }
    } satisfies ContentSectionProps,

    textClinicians: {
        title: "You too, can bring this kind of relief to your clients.",
        body: (
            <span>
                Through engaging asynchronous training, <span className="text-primary-1 font-bold">MORE Institute</span> will teach you how to deliver this powerful therapy to your own clients who are struggling with addiction, chronic pain and emotional distress.
            </span>
        )
    } satisfies TextCliniciansSectionProps,

    providerList: {
        title: (
            <span>
                Implementing <span className="text-primary-1">MORE</span> in Health Care
            </span>
        ),
        description: "1000+ clinicians and health care systems nationwide have implemented MORE in a range of settings, including medical centers, addiction treatment, behavioral health, community-based clinics, higher education institutions, state and local government, and the military health system.",
        items: [
            { name: "Kaiser Permanente", location: "Washington" },
            { name: "John Hopkins Medical School", location: "Maryland" },
            { name: "Mt. Sinai Hospital", location: "New York" },
            { name: "Intermountain Health Care", location: "Utah" },
            { name: "Arkansas Department of Human Services", location: "Arkansas" },
            { name: "Southwest Care Center", location: "New Mexico" },
            { name: "New Roads Behavioral Health", location: "Utah" },
            { name: "Medical University of South Carolina", location: "South Carolina" },
            { name: "University of Utah Health", location: "Utah" },
            { name: "Philadelphia Veterans Affairs Medical Center", location: "Pennsylvania" },
            { name: "Turning Point Center", location: "Utah" },
            { name: "Ralph H. Johnson Veterans Affairs Medical Center", location: "South Carolina" },
            { name: "Essentia Health", location: "Minnesota" },
            { name: "Harvard University, Brigham and Women’s Hospital", location: "Massachusetts" },
            { name: "VA Medical Center", location: "Hawaii" },
            { name: "University of California San Diego Health", location: "California" },
            { name: "Rutgers Robert Wood Johnson Medical School", location: "New Jersey" },
            { name: "Henrico Area SUD, MH Outpatient Services, and Court Services", location: "Virginia" },
            { name: "Ventura County Behavioral Health", location: "California" },
            { name: "Hampshire County Jail and House of Correction", location: "Massachusetts" },
            { name: "Memorial Sloan Kettering Cancer Center", location: "New York" },
            { name: "University of North Carolina at Chapel Hill", location: "North Carolina" },
            { name: "Texas A&M University", location: "Texas" },
            { name: "University of Washington Medicine", location: "Washington" },
            { name: "Community Counseling and Correction Services", location: "Montana" },
            { name: "Emory University School of Medicine", location: "Georgia" }

        ],
        cta: {
            text: "Learn MORE",
            href: "/research"
        }
    } satisfies ProviderListSectionProps,

    knowMoreTall: {
        title: (
            <span>
                Join the 1000+ clinicians nationwide who are bringing powerful relief to their clients.
            </span>
        ),
        cta: {
            text: "Pre-register Today",
            href: "/register"
        },
        backgroundImage: {
            src: "/assets/images/KnowMoreTall/Background3@2x.avif",
            alt: "Background"
        }
    } satisfies KnowMoreTallSectionProps,

    cards2x3: {
        title: (
            <span>
                Why <span className="text-primary-1">MORE</span> Works,
                <br />
                and Why Clinicians Trust It
            </span>
        ),
        subtitle: (
            <span>
                Rigorously tested in <span className="font-bold">16 clinical trials and funded by $90M in federal grants</span>, MORE is proven to help patients shift from reactive responses to mindful awareness, self-regulation, and natural reward.
            </span>
        ),
        items: [
            {
                title: "Dramatically reduces addiction and drug use",
                body: (
                    <span>
                        Cuts opioid misuse by <span className="font-bold text-primary-1">45%</span>, drug relapse by <span className="font-bold text-primary-1">42%</span>, addiction treatment dropout by <span className="font-bold text-primary-1">59%</span> and opioid dose by <span className="font-bold text-primary-1">31%</span>.
                    </span>
                )
            },
            {
                title: "Powerful pain relief",
                body: (
                    <span>
                        Reduces acute pain by <span className="font-bold text-primary-1">30%</span> post-operative pain by <span className="font-bold text-primary-1">45%</span> and chronic pain by <span className="font-bold text-primary-1">25%</span> lasting 9+ months after the eight week MORE treatment.
                    </span>
                )
            },
            {
                title: "Cuts cravings and boosts resilience",
                body: (
                    <span>
                        Reduces drug craving by <span className="font-bold text-primary-1">50%</span> and increases positive emotions <span className="font-bold text-primary-1">3x</span> more than standard therapy.
                    </span>
                )
            },
            {
                title: "Relieves stress and depression",
                body: (
                    <span>
                        Reduces anxiety by <span className="font-bold text-primary-1">43%</span> and improves depression by <span className="font-bold text-primary-1">38%</span>.
                    </span>
                )
            },
            {
                title: "Meaningful PTSD outcomes",
                body: (
                    <span>
                        Clinically significant reductions in PTSD in <span className="font-bold text-primary-1">59%</span> of patients, nearly twice as effective as standard therapy.
                    </span>
                )
            },
            {
                title: "Rewires the brain for lasting change",
                body: "Restores healthy reward responses, reduces anhedonia, and quiets craving-related brain signals."
            }
        ],
        cta: {
            text: "Read the Research",
            href: "/research"
        }
    } satisfies Cards2x3SectionProps
};
