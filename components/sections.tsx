import clsx from "clsx";
import { fullScreen, subtitle, title } from "./primitives";
import { textConfig } from "@/config/text";
import Image from "next/image";
import { NavigateButton } from "./button";
import { Button } from "@nextui-org/react";
import { ArrowIcon, FacebookLogo, InstagramLogo, TwitterLogo } from "./icons";
import Link from "next/link";
import { NewsItem, mockNewsData } from "./news";

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

const renderTitle = (text: string, color: "purple2" | "white" = "purple2") => (
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

export const ServiceSection = () => {
  return (
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
  );
};

export const DroneSection = () => {
  return (
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
  );
};

export const ContactNowSection = () => {
  return (
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
  );
};

export const SubcribeSection = () => {
  return (
    <section className="flex lg:h-screen bg-sky_1 bg-contain px-4 py-12 md:py-4">
      <div className="w-full flex items-center justify-center">
        <div className="container lg:h-full flex flex-col items-center justify-center relative">
          <div
            className={clsx(
              title({
                color: "white",
                size: "lg",
              }),
              "uppercase mb-4 font-black mt-24",
            )}
          >
            {textConfig.common.phone}
          </div>

          <div
            className={clsx(
              title({
                color: "white",
                size: "md",
              }),
              "uppercase mb-4 font-black",
            )}
          >
            {textConfig.common.email}
          </div>

          <div className="h-[24px] xl:h-[80px]" />

          <div
            className={clsx(
              subtitle({
                size: "lg",
              }),
              "font-medium mb-4",
            )}
          >
            {textConfig.common.emailForNews}
          </div>

          <div className="w-full flex p-3 border-1 border-[#FFFFFF] rounded-lg relative max-w-xl">
            <div className="top-0 left-0 right-0 bottom-0 bg-[#183049] absolute rounded-lg opacity-30 z-0"></div>
            <input
              type="text"
              className="flex-1 text-[#FFFFFF] bg-transparent text-28px lg:text-[32px] border-none focus:outline-none h-12 lg:h-16 z-10 pr-4"
            />
            <Button
              size="lg"
              color="primary"
              className={clsx(
                title({
                  size: "sm",
                  color: "white",
                }),
                "font-black rounded-lg uppercase px-8 py-0 h-12 lg:h-16",
              )}
              endContent={<ArrowIcon width={44} height={44} />}
            >
              {textConfig.common.subcribe}
            </Button>
          </div>

          <div className="flex-1" />

          <div className="grid grid-cols-3 gap-8 mt-8">
            <Link
              href={"/"}
              className="h-[80px] w-[80px] lg:h-[96px] lg:w-[96px] border-1 border-[#FFFFFF] rounded-xl flex justify-center items-center relative"
            >
              <div className="top-0 left-0 right-0 bottom-0 bg-[#183049] absolute rounded-xl opacity-30 z-0 hover:opacity-40"></div>
              <FacebookLogo />
            </Link>
            <Link
              href={"/"}
              className="h-[80px] w-[80px] lg:h-[96px] lg:w-[96px] border-1 border-[#FFFFFF] rounded-xl flex justify-center items-center relative"
            >
              <div className="top-0 left-0 right-0 bottom-0 bg-[#183049] absolute rounded-xl opacity-30 z-0 hover:opacity-40"></div>
              <InstagramLogo />
            </Link>
            <Link
              href={"/"}
              className="h-[80px] w-[80px] lg:h-[96px] lg:w-[96px] border-1 border-[#FFFFFF] rounded-xl flex justify-center items-center relative"
            >
              <div className="top-0 left-0 right-0 bottom-0 bg-[#183049] absolute rounded-xl opacity-30 z-0 hover:opacity-40"></div>
              <TwitterLogo />
            </Link>
          </div>

          <div className="h-[24px]" />

          <div
            className={clsx(
              subtitle({
                size: "md1",
              }),
              "font-medium mb-8",
            )}
          >
            {textConfig.common.copyright}
          </div>
        </div>
      </div>
    </section>
  );
};

export const NewsSection = () => {
  return (
    <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
      <div className={fullScreen({ type: "relative" })}>
        <div className="container h-full flex flex-col py-8 md:py-2 justify-center items-center">
          <div className="text-center mb-4 lg:mb-0 mt-12 xl:mb-4">
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
  );
};
