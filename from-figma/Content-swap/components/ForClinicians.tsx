import React from "react";
import Image from "next/image";

export interface ForCliniciansProps {
  className?: string;
}

export const ForClinicians: React.FC<ForCliniciansProps> = ({ className = "" }) => {
  const features = [
    "Learn how to provide MORE therapy in your own practice",
    "Access asynchronous and on-demand training",
    "Earn 13 CEUs plus enhance your credentials",
    "Bring lasting and meaningful relief to your clients",
  ];

  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col lg:flex-row gap-16 items-stretch">
        {/* Left Content */}
        <div className="flex flex-col gap-8 flex-1 max-w-[680px]">
          {/* Heading & Description */}
          <div className="flex flex-col gap-4">
            <h2 className="font-inter text-[28px] font-bold leading-[1.25] tracking-[-0.56px] text-[#111928]">
              For Clinicians
            </h2>
            <p className="font-inter text-[20px] font-semibold leading-[28px] tracking-[-0.40px] text-[#374151]">
              Provide evidence-based mindfulness therapy to treat chronic pain, addiction, stress, depression and more.
            </p>
          </div>

          {/* Features */}
          <div className="flex flex-col gap-0">
            {/* Separator Line */}
            <div className="h-px bg-[#e5e7eb] w-full" />
            
            {/* Feature List */}
            <div className="flex flex-col gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-[10px] items-start">
                  {/* Icon */}
                  <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7.3333"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 mt-1"
                    style={{ color: "#e704e7" }}
                  >
                    <g id="Vector">
                      <path
                        d="M1.6883,2.5756h-1.2662c-0.112,0 -0.2193,0.042 -0.2985,0.116c-0.0791,0.075 -0.1236,0.175 -0.1236,0.281v3.568c0,0.21 0.0889,0.412 0.2472,0.56c0.1583,0.149 0.3731,0.233 0.5969,0.233h0.4221c0.2239,0 0.4386,-0.084 0.5969,-0.233c0.1583,-0.148 0.2472,-0.35 0.2472,-0.56v-3.568c0,-0.106 -0.0444,-0.206 -0.1236,-0.281c-0.0791,-0.074 -0.1865,-0.116 -0.2984,-0.116z"
                        fill="currentColor"
                      />
                      <path
                        d="M7.1558,2.5756h-1.6689l0.6576,-1.784c0.0216,-0.163 -0.0183,-0.328 -0.1128,-0.467c-0.0944,-0.138 -0.2375,-0.242 -0.4044,-0.291c-0.1669,-0.05 -0.3471,-0.044 -0.5094,0.018c-0.1623,0.062 -0.2965,0.175 -0.3793,0.32c-0.4879,0.782 -1.0882,1.497 -1.7841,2.125v3.8h0.0481c0.8901,0.231 2.0686,0.64 3.1596,0.64c0.5909,0 0.6719,-0.208 0.7935,-0.522l0.9936,-2.775c0.0463,-0.12 0.0612,-0.248 0.0434,-0.375c-0.0177,-0.126 -0.0677,-0.247 -0.1455,-0.351c-0.0779,-0.104 -0.1814,-0.189 -0.3017,-0.248c-0.1204,-0.059 -0.2541,-0.09 -0.3897,-0.09z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                  {/* Feature Text */}
                  <p className="font-inter text-[18px] font-normal leading-[1.5] text-[#111928]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 min-h-[400px] lg:min-h-auto">
          <div className="relative w-full h-full rounded-[20px] overflow-hidden">
            <Image
              src="/from-figma/Content-swap/assets/therapist-client.png"
              alt="Therapist providing mindfulness therapy to client"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
