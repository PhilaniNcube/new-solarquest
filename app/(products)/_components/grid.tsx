"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { SolarPowerPackage, solar_power_packages } from "@/app/(home)/_components/products-grid";
import { formatter } from "@/lib/utils";


const ProductPageGrid = () => {
  return (
    <section className="container py-10 mx-auto">
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
          {solar_power_packages.map((item: SolarPowerPackage) => (
            <Link href={`/products/${item.id}`} key={item.id}>
              <motion.div key={item.id} layoutId={item.id}>
                <Image
                  src="/images/solar packages.webp"
                  width={500}
                  height={500}
                  alt={item.package_name}
                />
                <h2 className="text-lg font-bold">{item.package_name}</h2>
                <h3 suppressHydrationWarning className="mt-2 text-xl font-medium text-red-500">{formatter(item.price)}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};
export default ProductPageGrid;
