import { solar_power_packages } from "@/app/(home)/_components/products-grid";
import ProductDetails from "./_components/product-details";

const ProductPage = ({params}:{params: {id:string}}) => {

  const product = solar_power_packages.find(p => p.id === params.id)

  return <div>
    <ProductDetails product={product!} />
  </div>;
};
export default ProductPage;
