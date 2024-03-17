import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { NavigateButton } from "@/components/button";
import { title } from "@/components/primitives";
import clsx from "clsx";
import { useQuery } from "@tanstack/react-query";
import { deleteNews, getNews, updateNews } from "@/firebase/modules/news";
import { toast } from "react-toastify";
import { queryClient } from "@/config/client";
import { SyncLoader } from "react-spinners";

const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function IndexPage() {
  const [value, setValue] = useState<string | undefined>();
  const titleRef = useRef<HTMLInputElement>(null);
  const subtitleRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);

  useAuthRoute();

  const router = useRouter();
  const id = router.query.id as string;

  const { data, isFetching } = useQuery({
    queryKey: ["news"],
    queryFn: () => getNews(id),
  });

  useEffect(() => {
    if (data && titleRef.current && subtitleRef.current && imgRef.current) {
      titleRef.current.value = data.title;
      subtitleRef.current.value = data.subTitle;
      imgRef.current.value = data.imageUri;
      setValue(data.markdownContent);
    }
  }, [data]);

  const onEdit = async () => {
    try {
      if (titleRef.current && subtitleRef.current && imgRef.current && value)
        await updateNews({
          id,
          title: titleRef.current?.value,
          subTitle: subtitleRef.current?.value,
          markdownContent: value,
          imageUri: imgRef.current?.value,
        });
      toast.success("Cập nhật tin tức thành công");
    } catch (error) {
      toast.error("Cập nhật thất bại, vui lòng thử lại");
    }
  };

  const onDelete = async () => {
    try {
      await deleteNews(id);
      toast.success("Xoá tin tức thành công");
      router.push("/admin/news");
      queryClient.invalidateQueries({
        queryKey: ["news", "page"],
        exact: true,
      });
    } catch (error) {
      toast.error("Xoá thất bại, vui lòng thử lại");
    }
  };

  return (
    <AdminLayout>
      {isFetching && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}

      <div className="flex w-full flex-col justify-center items-center px-4">
        <div className="container w-full">
          <h1
            className={clsx(
              title({
                color: "white",
              }),
              "text-center mb-8",
            )}
          >
            Chỉnh sửa tin tức
          </h1>

          <Input
            ref={titleRef}
            className="mb-4"
            label="Tiêu đề"
            placeholder="Nhập tiêu đề phụ"
          />

          <Input
            ref={subtitleRef}
            className="mb-4"
            label="Tiêu đề phụ"
            placeholder="Nhập tiêu đề phụ"
          />

          <Input
            ref={imgRef}
            className="mb-4"
            label="Link ảnh bìa"
            placeholder="Nhập link ảnh bìa"
          />

          <div className="text-white mb-2">Bài viết chi tiết</div>
          <MarkdownEditor height={400} value={value} onChange={setValue} />

          <div className="flex justify-center items-center text-center my-8">
            <NavigateButton color="primary" onClick={onEdit}>
              Sửa
            </NavigateButton>
            <div className="w-[24px]" />
            <NavigateButton color="danger" onClick={onDelete}>
              Xoá
            </NavigateButton>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
