"use client"
import { Button } from "../ui/button";
import { DollarSign, Grid3X3 } from "lucide-react";
import Link from "next/link";
import {motion} from "framer-motion"
import { usePathname } from "next/navigation";
import Image from "next/image";

interface DesktopNavigationProps {
  links: {label: string, href: string}[]
}

const DesktopNavigation =  ({links}:DesktopNavigationProps ) => {

  const pathname = usePathname()



  return (
    <div>
      <nav className="items-center hidden py-4 border-b md:flex">
        <div className="container flex items-center justify-between mx-auto">
          <Image src="/images/logo-red.png" width={2526} height={661} alt="Logo" className="w-44 object-cover" />
          <div className="flex items-center gap-x-4">
            <Button
              type="button"
              className="items-center text-white rounded-full bg-red-600 flaex gap-x-2"
            >
              <DollarSign size={24} />
              <span>Financing</span>
            </Button>
            <Button
              type="button"
              className="items-center text-white rounded-full bg-zinc-700 flaex gap-x-2"
            >
              <Grid3X3 size={24} />
              <span>Installation Quote</span>
            </Button>
          </div>
        </div>
      </nav>
      <div className="py-4 bg-red-600">
        <nav className="container flex items-center justify-between mx-auto font-light text-white">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="relative">
              {pathname === link.href && (
                <motion.span layoutId="underline" className="absolute bg-white left-0 right-0 top-full h-[1px]" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default DesktopNavigation;
