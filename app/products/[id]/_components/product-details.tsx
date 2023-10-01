"use client"

import { SolarPowerPackage } from "@/app/(home)/_components/products-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { formatter } from "@/lib/utils";
import { AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";

const ProductDetails = ({product}: {product:SolarPowerPackage}) => {
  return (
    <main className="container py-10 mx-auto">
      <div className="flex flex-col md:flex-row">
        <motion.div layoutId={product.id} className="lg:w-1/3">
          <Image
            src="/images/solar packages.webp"
            width={500}
            height={500}
            alt={product.package_name}
            id="product-image w-full aspect-square object-cover"
          />
        </motion.div>
        <article className="flex-1 h-full">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>{product.package_name}</CardTitle>
            </CardHeader>
            <CardContent className="@container">
              <p className="text-sm text-zinc-500">{product.description}</p>
              <h3 className="mt-3 text-3xl font-bold text-red-600">{formatter(product.price)}</h3>
              <div className="grid grid-cols-1 @lg:grid-cols-2 gap-6">
                <div className="w-full">
                  <h3 className="text-xl font-bold text-zinc-800">Power Generation</h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {product.power_generation}
                  </p>
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-zinc-800">Inverter</h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {product.equipment_included.hybrid_inverter.name}
                  </p>
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-zinc-800">Battery</h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {product.equipment_included.strorage.name}
                  </p>
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-zinc-800">Solar Panels</h3>
                  <p className="text-sm text-zinc-500 font-medium">
                    {product.equipment_included.solar_panels.quantity} Panels ({product.equipment_included.solar_panels.rating})
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-red-600 rounded-full" type="button">Request Quote</Button>
            </CardFooter>
          </Card>
        </article>
      </div>
    </main>
  );
};
export default ProductDetails;

