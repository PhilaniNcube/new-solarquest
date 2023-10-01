"use client"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { SolarPowerPackage, solar_power_packages } from "@/app/(home)/_components/products-grid";


const ProductPageGrid = () => {
  return (
    <section className="py-10 container mx-auto">
      <AnimatePresence>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {solar_power_packages.map((item: SolarPowerPackage) => (
            <Link href={`/products/${item.id}`} key={item.id}>
              <motion.div key={item.id} layoutId={item.id}>
                <Image
                  src="/images/solar packages.webp"
                  width={500}
                  height={500}
                  alt={item.package_name}
                />
              </motion.div>
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
};
export default ProductPageGrid;
