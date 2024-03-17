import { mockNewsData } from "@/components/news";
import { fullScreen, subtitle, title } from "@/components/primitives";
import {
  ContactNowSection,
  ListNewsSection,
  SubcribeSection,
  renderTitle,
} from "@/components/sections";
import { textConfig } from "@/config/text";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  const data = mockNewsData[1];

  return (
    <DefaultLayout>
      <div className="bg-black">
        {/**
         * SECTION 1
         */}
        <section className="flex min-h-screen bg-sky_1 bg-contain relative px-4">
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
            )}
          >
            <div className="container w-full flex flex-col relative py-40">
              <div className="relative p-12">
                <div className="top-0 left-0 right-0 bottom-0 bg-[#ffffff] absolute rounded-3xl opacity-10 z-0"></div>

                <div className="z-50">
                  <h3
                    className={clsx(
                      title({
                        color: "white",
                        size: "lg",
                      }),
                      "uppercase mb-4 font-black",
                    )}
                  >
                    {data.title}
                  </h3>
                  <h3
                    className={clsx(
                      subtitle({
                        color: "white",
                        size: "md1",
                      }),
                    )}
                  >
                    {data.subTitle}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
