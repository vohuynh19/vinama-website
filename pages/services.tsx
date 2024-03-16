import { fullScreen, subtitle, title } from "@/components/primitives";
import {
  ContactNowSection,
  DroneSection,
  ServiceSection,
  SubcribeSection,
} from "@/components/sections";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
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
        <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
          <div className={fullScreen()}>
            <div className="sm:w-full md:w-3/5">
              <Image
                className="h-full w-full object-cover"
                alt="intro-cover-1"
                src={"/images/earth.png"}
                width={1162}
                height={993}
              />
            </div>
          </div>

          <div
            className={clsx(
              fullScreen({
                type: "relative",
              }),
              "flex justify-center items-center",
            )}
          >
            <div className="container h-full flex flex-col justify-center">
              <div className="h-[240px]" />
              {renderTitle(textConfig.services.section1.title, "white")}
              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                {textConfig.services.section1.description}
              </h3>
            </div>
          </div>
        </section>

        {/**
         * SECTION 2
         */}
        <ServiceSection />

        {/**
         * SECTION 3
         */}

        <DroneSection />

        {/**
         * SECTION 4
         */}

        <ContactNowSection />

        {/**
         * SECTION 5
         */}

        <SubcribeSection />
      </div>
    </DefaultLayout>
  );
}
