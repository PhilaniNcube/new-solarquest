import Image from "next/image";
import { solar_power_packages } from "../(home)/_components/products-grid";
import Link from "next/link"
import ProductPageGrid from "../(products)/_components/grid";


const ProductsPage = () => {


  return (
    <main>
      <Image
        src="/images/devices.webp"
        width={1920}
        height={1080}
        alt="Devices"
        className="w-full object-cover h-[40vh] md:h-[70vh] object-top"
      />
      <ProductPageGrid />
    </main>
  );
};
export default ProductsPage;
