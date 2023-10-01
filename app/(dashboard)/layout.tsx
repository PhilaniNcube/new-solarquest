import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import AdminLink from "./(routes)/admin/_components/AdminLink";

const DashboardLayout =async ({children}:{children:React.ReactNode}) => {

  const {userId} = auth()

  if(!userId){
    return <div>Not Authorized</div>
  }



  return (
    <div className="flex h-[calc(100vh-140px)]">
      <aside className="w-[250px] h-full border-r">
        <div className="w-full px-3 py-4">
          <h2 className="text-2xl font-bold">
            <Link href="/admin">Admin Dashboard</Link>
          </h2>
        </div>
        <Separator className="my-4" />
        <AdminLink href="/admin/products" label="Products" />
        <AdminLink href="/admin/leads" label="Leads" />

      </aside>
      <main className="flex-1 p-5">{children}</main>
    </div>
  );
};
export default DashboardLayout;
