import AdminLayout from "@/layouts/admin";
import { useAuthRoute } from "@/firebase/useAuthRoute";

export default function IndexPage() {
  useAuthRoute();

  return <AdminLayout>alo</AdminLayout>;
}
