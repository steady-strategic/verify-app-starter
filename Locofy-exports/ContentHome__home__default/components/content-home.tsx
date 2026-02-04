import type { NextPage } from "next";
import Image from "next/image";

export type ContentHomeType = {
  className?: string;
};

const ContentHome: NextPage<ContentHomeType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] h-[1336px] bg-white max-w-full overflow-hidden flex flex-col items-center py-24 px-[0px] box-border gap-24 ${className}`}
    >
      <main className="w-[1280px] flex items-center gap-16 shrink-0">
        <section className="flex-1 flex flex-col items-start gap-8 text-left text-[28px] text-gray-900 font-[Inter]">
          <div className="self-stretch flex flex-col items-start gap-4">
            <h1 className="m-[0px] self-stretch relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit]">
              For Clinicians
            </h1>
            <div className="self-stretch relative text-xl tracking-[-0.02em] leading-[140%] font-semibold text-gray-700">
              Provide evidence-based mindfulness therapy to treat addiction,
              pain, and emotional distress.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start text-lg">
            <div className="self-stretch h-px relative bg-gray-200" />
            <div className="self-stretch flex flex-col items-start">
              <div className="self-stretch flex flex-col items-start pt-8 px-[0px] pb-[0px] gap-4">
                <div className="self-stretch flex items-center gap-25">
                  <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                    <Image
                      className="h-2 w-full relative"
                      loading="lazy"
                      width={8}
                      height={8}
                      sizes="100vw"
                      alt=""
                      src="/thumbs-up1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start">
                    <div className="self-stretch relative leading-[150%]">
                      Learn how to provide MORE therapy in your own practice
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-center gap-25">
                  <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                    <Image
                      className="h-2 w-full relative"
                      loading="lazy"
                      width={8}
                      height={8}
                      sizes="100vw"
                      alt=""
                      src="/thumbs-up1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start">
                    <div className="self-stretch relative leading-[150%]">
                      Access asynchronous and on-demand training
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-center gap-25">
                  <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                    <Image
                      className="h-2 w-full relative"
                      loading="lazy"
                      width={8}
                      height={8}
                      sizes="100vw"
                      alt=""
                      src="/thumbs-up1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start">
                    <div className="self-stretch relative leading-[150%]">
                      Earn CEUs plus enhance your credentials
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex items-center gap-25">
                  <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                    <Image
                      className="h-2 w-full relative"
                      loading="lazy"
                      width={8}
                      height={8}
                      sizes="100vw"
                      alt=""
                      src="/thumbs-up1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start">
                    <div className="self-stretch relative leading-[150%]">
                      Bring lasting and meaningful relief to your clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-25 px-[20px] bg-white rounded-rounded-lg flex items-center justify-center">
            <div className="relative text-sm leading-[150%] font-medium font-[Inter] text-gray-900 text-left">
              Learn MORE
            </div>
          </button>
        </section>
        <Image
          className="h-[530px] w-[610px] object-cover"
          loading="lazy"
          width={610}
          height={530}
          sizes="100vw"
          alt=""
          src="/Right-Image@2x.png"
        />
      </main>
      <section className="flex items-center gap-[64px] shrink-0">
        <Image
          className="h-[530px] w-[610px] object-cover"
          loading="lazy"
          width={610}
          height={530}
          sizes="100vw"
          alt=""
          src="/Left-Image2@2x.png"
        />
        <section className="h-[369px] w-[606px] flex flex-col items-start relative isolate gap-[16px] text-left text-[28px] text-gray-900 font-[Inter]">
          <div className="h-[107px] flex flex-col items-start gap-[16px] z-[0]">
            <h2 className="m-[0px] w-[606px] relative text-[length:inherit] tracking-[-0.02em] leading-[125%] font-bold font-[inherit] flex items-center">
              For Patients
            </h2>
            <h3 className="m-[0px] w-[606px] relative text-xl tracking-[-0.02em] leading-[140%] font-semibold font-[inherit] text-gray-700 inline-block">
              Get relief from addiction, pain, and emotional distress.
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start z-[1] text-lg">
            <div className="self-stretch h-px relative bg-gray-200" />
            <div className="self-stretch flex flex-col items-start pt-8 px-[0px] pb-[0px] gap-4">
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Learn to transform addictive habits, craving, and chronic
                    pain
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Reframe distressing thoughts and negative core beliefs
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Amplify positive emotions and reconnect with natural rewards
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-25">
                <div className="h-4 w-4 rounded-rounded-full bg-primary-1 flex items-center justify-center">
                  <Image
                    className="h-2 w-full relative"
                    loading="lazy"
                    width={8}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/thumbs-up1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start">
                  <div className="self-stretch relative leading-[150%]">
                    Experience powerful and lasting change with just 8 weekly
                    sessions
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer border-gray-200 border-solid border-[1px] py-25 px-5 bg-white !!m-[0 important] absolute top-[328px] left-[0px] rounded-rounded-lg flex items-center justify-center gap-2 z-[2]">
            <Image
              className="h-3.5 w-3.5 relative hidden shrink-0"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-narrow-right.svg"
            />
            <div className="relative text-sm leading-[150%] font-medium font-[Inter] text-gray-900 text-left shrink-0">
              Learn MORE
            </div>
            <Image
              className="h-3.5 w-3.5 relative hidden shrink-0"
              width={14}
              height={14}
              sizes="100vw"
              alt=""
              src="/arrow-narrow-right.svg"
            />
          </button>
        </section>
      </section>
    </div>
  );
};

export default ContentHome;
