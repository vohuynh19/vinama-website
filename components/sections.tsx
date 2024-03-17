import clsx from "clsx";
import { fullScreen, subtitle, title } from "./primitives";
import { textConfig } from "@/config/text";
import Image from "next/image";
import { NavigateButton } from "./button";
import { Button, Pagination } from "@nextui-org/react";
import { ArrowIcon, FacebookLogo, InstagramLogo, TwitterLogo } from "./icons";
import Link from "next/link";
import { NewsInListItem, NewsItem, mockNewsData } from "./news";
import { fontSaira } from "@/config/fonts";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "@tanstack/react-query";
import { getPageNews } from "@/firebase/modules/news";
import { FC, useRef, useState } from "react";
import { useRouter } from "next/router";
import { registerUser } from "@/firebase/modules/user";
import { toast } from "react-toastify";
import { SyncLoader } from "react-spinners";

const CardComp: FC<{
  text: string;
  subText: string;
}> = ({ text, subText }) => {
  const router = useRouter();
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

        <NavigateButton onClick={() => router.push("/contact")}>
          {textConfig.common.contact}
        </NavigateButton>
      </div>
    </div>
  );
};

export const renderTitle = (
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

export const ServiceSection = () => {
  const router = useRouter();
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
              <div
                className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8 cursor-pointer"
                onClick={() =>
                  router.push("http://localhost:3000/news/GV0lt5TDzbqvdfwYXzAE")
                }
              >
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
              <div
                className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8 cursor-pointer"
                onClick={() => router.push("news/KR0ogdJHMUxuYcMfG2Ic")}
              >
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
              <div
                className="w-[240px] h-[240px] rounded-full overflow-hidden mb-8 cursor-pointer"
                onClick={() =>
                  router.push("http://localhost:3000/news/EncL6aoctOVeNjimNDBD")
                }
              >
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
              <CardComp
                text={textConfig["/"].section6.title1}
                subText={textConfig["/"].section6.desc1}
              />
            </div>

            <div className="flex justify-center">
              <CardComp
                text={textConfig["/"].section6.title2}
                subText={textConfig["/"].section6.desc2}
              />
            </div>

            <div className="flex justify-center">
              <CardComp
                text={textConfig["/"].section6.title3}
                subText={textConfig["/"].section6.desc3}
              />
            </div>

            <div className="flex justify-center">
              <CardComp
                text={textConfig["/"].section6.title4}
                subText={textConfig["/"].section6.desc4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactNowSection = () => {
  const router = useRouter();
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

          <NavigateButton onClick={() => router.push("/contact")}>
            {textConfig.common.contactNow}
          </NavigateButton>
        </div>
      </div>
    </section>
  );
};

export const SubcribeSection = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const submitForm = async () => {
    try {
      if (!emailRef.current) {
        toast.error("Đăng ký thất bại, vui lòng điền đủ thông tin.");
        return;
      }

      await registerUser({
        email: emailRef.current.value,
        content: "Đăng ký nhận thông tin mới nhất",
      });

      toast.success("Đăng ký theo dõi thành công");
    } catch (error) {
      const err = error as {
        message: string;
      };
      if (err.message === "Email already exists") {
        toast.error("Email đã được đăng ký");
        return;
      }

      if (error) toast.error("Đăng ký thất bại, vui lòng điền đủ thông tin.");
    }
  };

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
              ref={emailRef}
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
              onClick={() => submitForm()}
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
  const router = useRouter();
  const { data, isFetching } = useQuery({
    queryKey: ["news", "home"],
    queryFn: () => getPageNews(3),
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
      {isFetching && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}

      <div className={fullScreen({ type: "relative" })}>
        <div className="container h-full flex flex-col py-8 md:py-2 justify-center items-center">
          <div className="text-center mb-4 lg:mb-0 mt-12 xl:mb-4">
            {renderTitle(textConfig["/"].section4.title)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            {data[0] && (
              <NewsItem
                newsData={data[0]}
                onClick={(id) => router.push(`/news/${id}`)}
              />
            )}
            {data[1] && (
              <NewsItem
                newsData={data[1]}
                onClick={(id) => router.push(`/news/${id}`)}
              />
            )}
            {data[2] && (
              <NewsItem
                newsData={data[2]}
                onClick={(id) => router.push(`/news/${id}`)}
              />
            )}
          </div>

          <div className="w-full flex justify-center mt-4">
            <NavigateButton onClick={() => router.push("/news")}>
              {textConfig.common.seeMore}
            </NavigateButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactFormSection = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const submitForm = () => {
    try {
      if (!nameRef.current || !emailRef.current || !contentRef.current) {
        toast.error("Đăng ký thất bại, vui lòng điền đủ thông tin.");
        return;
      }

      registerUser({
        name: nameRef.current.value,
        email: emailRef.current.value,
        content: contentRef.current.value,
      });

      toast.success("Đăng ký theo dõi thành công");
    } catch (error) {
      toast.error("Đăng ký thất bại, vui lòng điền đủ thông tin.");
    }
  };

  return (
    <section className="flex lg:h-screen bg-sky_1 bg-contain relative px-4">
      <div className="w-full h-full flex justify-center items-center py-8 mt-24 lg:mt-4">
        <div className="container flex flex-col justify-center items-center">
          {renderTitle(textConfig.contact.section2.title, "white")}

          <div className="flex flex-col w-full max-w-3xl mb-8 mt-8">
            <label
              className={
                (clsx(fontSaira.className),
                "text-primary text-xl lg:text-3xl mb-3")
              }
            >
              {textConfig.contact.section2.label1}*
            </label>
            <input
              ref={nameRef}
              placeholder={textConfig.contact.section2.placeholder1}
              className={clsx(
                fontSaira.className,
                "text-lg lg:text-xl outline-0 border-t-0 border-b-1 border-l-0 border-r-0 bg-transparent border-[#666666] text-white py-2",
              )}
            />

            <label
              className={
                (clsx(fontSaira.className),
                "text-primary text-xl lg:text-3xl mb-3 mt-8")
              }
            >
              {textConfig.contact.section2.label2}*
            </label>
            <input
              ref={emailRef}
              placeholder={textConfig.contact.section2.placeholder2}
              className={clsx(
                fontSaira.className,
                "text-lg lg:text-xl outline-0 border-t-0 border-b-1 border-l-0 border-r-0 bg-transparent border-[#666666] text-white py-2",
              )}
            />

            <label
              className={
                (clsx(fontSaira.className),
                "text-primary text-xl lg:text-3xl mb-3 mt-8")
              }
            >
              {textConfig.contact.section2.label3}*
            </label>
            <input
              ref={contentRef}
              placeholder={textConfig.contact.section2.placeholder3}
              className={clsx(
                fontSaira.className,
                "text-lg lg:text-xl outline-0 border-t-0 border-b-1 border-l-0 border-r-0 bg-transparent border-[#666666] text-white py-2",
              )}
            />
          </div>

          <NavigateButton onClick={() => submitForm()}>
            {textConfig.contact.section2.sent}
          </NavigateButton>
        </div>
      </div>
    </section>
  );
};

const LIST_LENGTH = 12;

export const ListNewsSection: FC<{
  onClick: (id: string) => void;
}> = ({ onClick }) => {
  const { data: queryData } = useQuery({
    queryKey: ["news", "page"],
    queryFn: () => getPageNews(),
  });

  const [page, setPage] = useState(1);

  const isSm = useMediaQuery({ maxDeviceWidth: 767 });
  const isMd = useMediaQuery({ minDeviceWidth: 768, maxDeviceWidth: 1023 });
  const isLg = useMediaQuery({ minDeviceWidth: 1024 });

  const data = queryData?.filter((_, idx) => {
    return idx >= LIST_LENGTH * (page - 1) && idx < LIST_LENGTH * page;
  });

  if (!queryData || queryData.length === 0 || !data || data.length === 0) {
    return;
  }

  return (
    <section className="flex bg-sky_1 bg-cover relative py-4 px-4">
      <div
        className={clsx(
          fullScreen({
            type: "relative",
          }),
          "w-full flex-col items-center justify-center",
        )}
      >
        {isSm && (
          <div>
            {data.map((news) => {
              return (
                <NewsInListItem
                  key={news.id}
                  newsData={news}
                  onClick={onClick}
                />
              );
            })}
          </div>
        )}
        {isMd && (
          <div className="container grid grid-cols-2 gap-8">
            <div>
              {data
                .filter((_, index) => index % 2 == 0)
                .map((news) => {
                  return (
                    <NewsInListItem
                      key={news.id}
                      newsData={news}
                      onClick={onClick}
                    />
                  );
                })}
            </div>
            <div>
              {data
                .filter((_, index) => index % 2 == 1)
                .map((news) => {
                  return (
                    <NewsInListItem
                      key={news.id}
                      newsData={news}
                      onClick={onClick}
                    />
                  );
                })}
            </div>
          </div>
        )}
        {isLg && (
          <div className="container grid grid-cols-3 gap-8">
            <div>
              {data
                .filter((_, index) => index % 3 == 0)
                .map((news) => {
                  return (
                    <NewsInListItem
                      key={news.id}
                      newsData={news}
                      onClick={onClick}
                    />
                  );
                })}
            </div>
            <div>
              {data
                .filter((_, index) => index % 3 == 1)
                .map((news) => {
                  return (
                    <NewsInListItem
                      key={news.id}
                      newsData={news}
                      onClick={onClick}
                    />
                  );
                })}
            </div>
            <div>
              {data
                .filter((_, index) => index % 3 == 2)
                .map((news) => {
                  return (
                    <NewsInListItem
                      key={news.id}
                      newsData={news}
                      onClick={onClick}
                    />
                  );
                })}
            </div>
          </div>
        )}

        <div className="container">
          <Pagination
            onChange={(value) => setPage(value)}
            size="lg"
            showShadow
            color="primary"
            total={Math.ceil(queryData.length / LIST_LENGTH)}
            initialPage={1}
            classNames={{
              base: "flex items-center justify-center",
              item: "bg-transparent text-[#ffffff] hover:text-primary hover:!bg-transparent",
              cursor: "text-primary font-bold bg-transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
};
