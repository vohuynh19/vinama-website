import { NavigateButton } from "@/components/button";
import { ArrowIcon, MouseLogo } from "@/components/icons";
import { NewsItem, mockNewsData } from "@/components/news";
import { fullScreen, subtitle, title } from "@/components/primitives";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import { useEffect } from "react";

export default function IndexPage() {
  const renderTitle = (
    text: string,
    color: "purple2" | "white" = "purple2",
  ) => (
    <h3
      className={clsx(
        title({
          color,
          size: "lgXX",
        }),
        "uppercase mb-4 font-black",
      )}
    >
      {text}
    </h3>
  );

  const renderCard = (text: string, subText: string) => {
    return (
      <div className="relative h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] flex flex-col justify-center items-center border-1 border-white rounded-3xl">
        <div className="h-full w-full bg-[#183049] absolute rounded-3xl opacity-30 z-0"></div>
        <div className="z-10  flex flex-col justify-center items-center">
          {renderTitle(text)}

          <h3
            className={clsx(
              title({
                color: "white",
                size: "sm",
              }),
              "mb-6 font-black",
            )}
          >
            {subText}
          </h3>

          <NavigateButton>{textConfig.common.contact}</NavigateButton>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const scrollSnap = `
      <style>
        @media screen and (min-width: 1024px){
          html {
            scroll-behavior: smooth;
            scroll-snap-type: y mandatory;
          }
          section{
            scroll-snap-align: start;
          }
        }
      </style>
    `;
    document.head.insertAdjacentHTML("beforeend", scrollSnap);
  }, []);

  return (
    <DefaultLayout>
      <div className="bg-black">
        {/**
         * SECTION 1
         */}
        <section className="flex lg:h-screen bg-sky_1 bg-contain relative">
          <div className={fullScreen()}>
            <div className="sm:w-full md:w-3/5">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-1"
                src={"/images/home-1.png"}
                width={1136}
                height={721}
              />
            </div>
          </div>

          <div className={clsx(fullScreen({ type: "relative" }), "py-48")}>
            <div className="text-center flex flex-col items-center justify-center p-4 md:p-0">
              {renderTitle(textConfig["/"].section1.title, "white")}

              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                {textConfig["/"].section1.description}
              </h3>

              <MouseLogo className="mt-8" />
            </div>
          </div>
        </section>

        {/**
         * SECTION 2
         */}

        <section className="px-4 pb-16 lg:h-screen bg-sky_1 bg-contain relative">
          <div
            className={fullScreen({
              type: "absolute",
            })}
          >
            <div className="w-full max-w-[1536px]">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-2"
                src={"/images/home-2.png"}
                width={888}
                height={779}
              />
            </div>
          </div>

          <div
            className={clsx(
              fullScreen({
                type: "relative",
              }),
              "py-8",
            )}
          >
            <div className="container flex items-center justify-center">
              <div className="w-full flex flex-col ">
                <h3
                  className={clsx(
                    title({
                      size: "md",
                      color: "purple",
                    }),
                    "uppercase mb-4 font-medium",
                  )}
                >
                  {textConfig["/"].section2.title1}
                </h3>

                <h3
                  className={clsx(
                    title({
                      size: "lg",
                      color: "white",
                    }),
                    "uppercase mb-4 font-medium",
                  )}
                >
                  {textConfig["/"].section2.title2}
                </h3>

                <div className="h-[3px] w-[240px] bg-[#524FFF] my-3" />

                <h3
                  className={subtitle({
                    size: "md1",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section2.description1}
                </h3>

                <h3
                  className={subtitle({
                    size: "md1",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section2.description2}
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 3
         */}

        <section className="flex h-[600px] lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={clsx(fullScreen(), "overflow-hidden")}>
            <div className="absolute h-1/2 right-[-64px]">
              <Image
                className="h-full w-full object-cover"
                alt="home-cover-1"
                src={"/images/home-1.png"}
                width={1136}
                height={721}
              />
            </div>
          </div>

          <div className={fullScreen({ type: "relative" })}>
            <div className="container">
              <div className="w-full break-normal">
                {renderTitle(textConfig["/"].section3.title)}
              </div>

              <div className="w-full lg:w-[800px] break-normal mt-8">
                <p
                  className={clsx(
                    subtitle({
                      size: "lg",
                      color: "white",
                    }),
                    "mb-6",
                  )}
                >
                  {textConfig["/"].section3.description1}
                </p>
                <p
                  className={subtitle({
                    size: "lg",
                    color: "white",
                  })}
                >
                  {textConfig["/"].section3.description2}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 4
         */}

        <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={fullScreen({ type: "relative" })}>
            <div className="container flex-col py-8">
              <div className="text-center mb-8">
                {renderTitle(textConfig["/"].section4.title)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
                <NewsItem newsData={mockNewsData[0]} />
                <NewsItem newsData={mockNewsData[1]} />
                <NewsItem newsData={mockNewsData[2]} />
              </div>

              <div className="w-full flex justify-center mt-4">
                <NavigateButton>{textConfig.common.seeMore}</NavigateButton>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 5
         */}

        <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div
            className={fullScreen({
              type: "relative",
            })}
          >
            <div className="container h-full  flex flex-col py-8 items-center justify-center">
              <div className="text-center mb-16">
                {renderTitle(textConfig["/"].section5.title)}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-16">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8">
                    <Image
                      alt="service1"
                      width={600}
                      height={600}
                      src="/images/service-1.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={clsx(
                      title({
                        color: "white",
                        size: "sm1",
                      }),
                      "text-center",
                    )}
                  >
                    {textConfig["/"].section5.service1}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8">
                    <Image
                      alt="service2"
                      width={600}
                      height={600}
                      src="/images/service-2.png"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className={clsx(
                      title({
                        color: "white",
                        size: "sm1",
                      }),
                      "text-center",
                    )}
                  >
                    {textConfig["/"].section5.service2}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8">
                    <Image
                      alt="service3"
                      width={600}
                      height={600}
                      src="/images/service-3.png"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div
                    className={clsx(
                      title({
                        color: "white",
                        size: "sm1",
                      }),
                      "text-center",
                    )}
                  >
                    {textConfig["/"].section5.service3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 6
         */}

        <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div
            className={fullScreen({
              type: "relative",
            })}
          >
            <div className="container w-full lg:h-full flex-col flex lg:flex-row justify-center items-center">
              <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex justify-center">
                  {renderCard(
                    textConfig["/"].section6.title1,
                    textConfig["/"].section6.desc1,
                  )}
                </div>

                <div className="flex justify-center">
                  {renderCard(
                    textConfig["/"].section6.title2,
                    textConfig["/"].section6.desc2,
                  )}
                </div>

                <div className="flex justify-center">
                  {renderCard(
                    textConfig["/"].section6.title3,
                    textConfig["/"].section6.desc3,
                  )}
                </div>

                <div className="flex justify-center">
                  {renderCard(
                    textConfig["/"].section6.title4,
                    textConfig["/"].section6.desc4,
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/**
         * SECTION 7
         */}

        <section className="flex lg:h-screen bg-sky_1 bg-contain px-4 py-12 md:py-4">
          <div
            className={fullScreen({
              type: "relative",
            })}
          >
            <div className="container text-center flex flex-col justify-center items-center">
              <div className="w-full md:w-[80%]">
                {renderTitle(textConfig["/"].section7.title, "white")}
              </div>
              <div
                className={clsx(
                  subtitle({
                    size: "lg",
                    color: "white",
                  }),
                  "mb-8",
                )}
              >
                {textConfig["/"].section7.description}
              </div>

              <NavigateButton>{textConfig.common.contactNow}</NavigateButton>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
