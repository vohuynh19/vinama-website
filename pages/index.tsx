import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import clsx from "clsx";
import Image from "next/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="bg-black">
        <section className="flex h-screen bg-sky_1 bg-contain">
          <div className="absolute h-full w-full flex justify-center items-center">
            <div className="h-4/5">
              <Image
                className="h-full w-full"
                alt="home-cover-1"
                src={"/images/home-1.png"}
                width={1136}
                height={721}
              />
            </div>
          </div>
          <div className="absolute h-full w-full flex justify-center items-center">
            <div className="text-center">
              <h3
                className={clsx(
                  title({
                    color: "white",
                    size: "lgXX",
                  }),
                  "uppercase mb-4 font-black",
                )}
              >
                Drone light show
              </h3>
              <h3
                className={subtitle({
                  color: "white",
                  size: "lg",
                })}
              >
                Cảm xúc hùng vĩ sẽ không phai đi
              </h3>
            </div>
          </div>
        </section>

        <section className="flex h-screen bg-sky_1 bg-contain"></section>

        <section className="flex h-screen bg-sky_1 bg-contain"></section>
      </div>
    </DefaultLayout>
  );
}
