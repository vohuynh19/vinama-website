import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "@/firebase/modules/user";
import { SyncLoader } from "react-spinners";

export const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const columns = [
  {
    key: "email",
    label: "Email",
  },
  {
    key: "name",
    label: "Tên",
  },
  {
    key: "content",
    label: "Nội dung",
  },
];

export default function IndexPage() {
  useAuthRoute();

  const { data, isFetching } = useQuery({
    queryKey: ["user"],
    queryFn: () => getAllUser(),
  });

  return (
    <AdminLayout>
      {isFetching && (
        <div className="w-screen h-screen flex justify-center items-center absolute">
          <SyncLoader color="#524FFF" />
        </div>
      )}
      <Table className="dark">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={data || []}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell className="!text-white">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </AdminLayout>
  );
}
