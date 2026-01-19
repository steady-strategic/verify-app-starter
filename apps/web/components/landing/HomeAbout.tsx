import React from "react";
import { Content } from "../sections/Content";

export default function HomeAbout() {
    return (
        <Content
            variant="Home-About"
            title="MORE - Mindfulness-Oriented Recovery Enhancement"
            subtitle="A Therapy Based on Science and Lasting Outcomes"
            titleHighlight="MORE"
            features={[
                {
                    text: "Designed by Dr. Eric Garland, PhD, LCSW, Endowed Professor in Health Sciences at the University of California San Diego, Director of UCSD's ONEMIND and leading expert on the use of mind-body therapies. Having authored 290 scientific articles, Dr. Garland is the world's most prolific author of mindfulness research."
                }
            ]}
            image={{
                src: "/assets/images/dr-eric-garland.png",
                alt: "Dr. Eric Garland, PhD, LCSW - Designer of MORE Therapy"
            }}
            buttons={{
                linkedin: "https://www.linkedin.com/in/eric-garland-phd-lcsw/",
                twitter: "https://twitter.com/ericgarland"
            }}
        />
    );
}
