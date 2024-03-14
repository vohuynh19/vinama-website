import Image from "next/image";
import { FC } from "react";
import { DateIcon } from "./icons";
import { subtitle, tag, title } from "./primitives";
import clsx from "clsx";
import moment from "moment";
export const mockNewsData: INews[] = [
  {
    id: "1",
    title: "Sự kiện Quảng Cáo Sáng Tạo 2023",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "2",
    title: "20 Năm thành phố Cần Thơ trực thuộc Trung Ương",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "3",
    title: "20 năm thành lập Tỉnh Hậu Giang",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "4",
    title: "Quảng bá ra mắt phim GodzillaxKong Đế Chế Mới tối 30 Tết",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
  {
    id: "5",
    title: "Vietjet’s Night Sky chào đón tết Giáp Thìn",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor.. Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor..Lorem ipsum dolor sit amet consectetur. Donec rhoncus vitae aliquet tortor faucibus in. Non at sodales enim ac vitae ut. In nulla sed facilisis auctor...",
    imageUri:
      "https://media.cnn.com/api/v1/images/stellar/prod/meta-quest-3-accessories-lead-cnnu.jpg?c=original",
    categories: [
      {
        id: "123",
        name: "Dự án",
      },
    ],
    author: "Admin",
    createdAt: "2024-03-14T16:08:43.161Z",
    updatedAt: "2024-03-14T16:08:43.161Z",
  },
];

export const NewsItem: FC<{
  type: "vertical" | "horizontal";
  newsData: INews;
}> = ({ type, newsData }) => {
  const {
    categories,
    imageUri,
    title: newTitle,
    updatedAt,
    author,
    subTitle: newSubtitle,
  } = newsData;

  const DateItem = () => (
    <div
      className={clsx(
        subtitle({
          size: "base",
        }),
        "flex mt-2 items-center",
      )}
    >
      <DateIcon className="mr-2" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >{`${moment(updatedAt).day()} tháng ${moment(updatedAt).month()} ${moment(updatedAt).year()}`}</div>

      <div className="mr-1" />

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "grey",
          }),
          "mr-2",
        )}
      >
        By
      </div>

      <div
        className={clsx(
          subtitle({
            size: "base",
            color: "white",
          }),
        )}
      >
        {author}
      </div>
    </div>
  );

  if (type === "vertical") {
    return (
      <div>
        <div className="h-[320px] w-full">
          <Image
            width={1024}
            height={1024}
            alt="preview image"
            src={imageUri}
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-lg"
          />
        </div>
        <div>
          {categories.map((category) => (
            <div className={clsx(tag(), "uppercase mt-2")} key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
        <div
          className={title({
            color: "white",
          })}
        >
          {newTitle}
        </div>
        <DateItem />

        <p
          className={clsx(
            subtitle({
              color: "white",
            }),
            "line-clamp-4",
          )}
        >
          {newSubtitle}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="flex-1 h-[200px]">
        <Image
          className="w-full h-full rounded-lg"
          width={1024}
          height={1024}
          alt="preview image"
          src={imageUri}
        />
      </div>

      <div className="flex-1 flex flex-col pl-4">
        <div className="flex">
          {categories.map((category) => (
            <div className={clsx(tag(), "uppercase")} key={category.id}>
              {category.name}
            </div>
          ))}
        </div>

        <div
          className={clsx(
            title({
              color: "white",
              size: "sm1",
            }),
            "",
          )}
        >
          {newTitle}
        </div>

        <DateItem />

        <p
          className={clsx(
            subtitle({
              color: "white",
            }),
            "line-clamp-3",
          )}
        >
          {newSubtitle}
        </p>
      </div>
    </div>
  );
};