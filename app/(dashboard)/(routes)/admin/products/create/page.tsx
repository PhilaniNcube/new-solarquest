import { Separator } from "@/components/ui/separator";
import ProductForm from "./_components/ProductForm";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium">Create New Product</h1>
        <Link href="/admin/products">
          <Button variant="outline" type="button">Back</Button>
        </Link>
      </div>
      <Separator className="my-2" />
      <ProductForm />
    </div>
  );
};
export default page;
