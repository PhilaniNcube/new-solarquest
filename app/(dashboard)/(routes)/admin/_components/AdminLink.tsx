"use client"

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminLink = ({href, label}:{href:string, label:string}) => {

  const pathname = usePathname();

  return (
    <Link href={href} className={cn("flex w-full px-3 py-2",
    pathname === href && "bg-zinc-100")}>
      {label}
    </Link>
  );
};
export default AdminLink;
