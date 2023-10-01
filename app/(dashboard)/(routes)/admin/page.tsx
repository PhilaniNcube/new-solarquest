import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { EyeIcon, PlusIcon } from "lucide-react";

const DashboardPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Separator />
      <div className="grid grid-cols-2 gap-6 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/admin/products/create">
              <Button type="button">
                <PlusIcon />
                Create Product
              </Button>
            </Link>
          </CardContent>

        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leads</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/admin/leads">
              <Button type="button">
                <EyeIcon />
                View Leads
              </Button>
            </Link>
          </CardContent>

        </Card>
      </div>
    </div>
  );
};
export default DashboardPage;
