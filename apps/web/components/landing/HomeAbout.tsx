
import React from "react";
import { HomeAboutSection } from "../sections/HomeAboutSection";

export default function HomeAbout() {
    return (
        <HomeAboutSection
            variant="default"
            title={
                <span>
                    <strong>MORE:</strong> Mindfulness-Oriented Recovery Enhancement
                </span>
            }
            subtitle="A Therapy Based on Science and Lasting Outcomes"
            description="Designed by Dr. Eric Garland, PhD, LCSW, Endowed Professor in Health Sciences at the University of California San Diego, Director of UCSD's ONEMIND and leading expert on the use of mind-body therapies. Having authored 290 scientific articles, Dr. Garland is the world's most prolific author of mindfulness research."
            profileImage={{
                src: "/assets/images/dr-eric-garland.png",
                alt: "Dr. Eric Garland"
            }}
            socialLinks={{
                linkedin: "#",
                x: "#"
            }}
        />
    );
}
