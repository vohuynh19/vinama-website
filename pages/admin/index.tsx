import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import {
  Button,
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
import moment from "moment";
import { logout } from "@/firebase/modules/auth";

export const MarkdownEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const columns = [
  {
    key: "createdAt",
    label: "Thời gian",
  },
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
      <div className="flex justify-center mb-8">
        <Button variant="ghost" color="danger" onClick={() => logout()}>
          Đăng xuất
        </Button>
      </div>
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
                  {columnKey.toString() === "createdAt"
                    ? `${moment(getKeyValue(item, columnKey)).format("hh:mm DD t\\háng MM YYYY")}`
                    : getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </AdminLayout>
  );
}
