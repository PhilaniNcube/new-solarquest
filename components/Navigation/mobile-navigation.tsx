"use client"

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
	links: { label: string; href: string }[];
}

const MobileNavigation = ({links}:MobileNavigationProps) => {

  const pathname = usePathname()

  const [open, setOpen] = useState(false)

  const activeLink = (href: string) => {
    return pathname === href ? "text-red-600 bg-slate-100" : "text-black"
  }

  return (
			<header className="flex bg-white md:hidden">
				<div className="container px-3">
					<div className="flex items-center justify-between py-4">
						<Link href="/" className="block">
							<img
								src="/images/logo-red.png"
								alt="logo"
								className="object-cover w-36"
							/>
						</Link>
						<Sheet open={open} onOpenChange={setOpen}>
							<SheetTrigger asChild>
								<Button
									type="button"
									variant="ghost"
									size="lg"
									className="text-2xl"
								>
									<MenuIcon size={32} />
								</Button>
							</SheetTrigger>
							<SheetContent>
								<nav className="flex flex-col gap-y-4">
									{links.map((link) => (
										<Link
											href={link.href}
											key={link.href}
											className={cn("text-xl px-2 py-1 rounded", activeLink(link.href))}
                      onClick={() => setOpen(false)}
										>
											{link.label}
										</Link>
									))}
									<Button type="button" className="text-xl bg-red-600">
										Financing
									</Button>
									<Button type="button" className="text-xl bg-red-600">
										Installation Quote
									</Button>
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</header>
		);
};
export default MobileNavigation;
