import { getSolarData } from "@/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SolarPotentialForm = () => {
  return (
    <form action={getSolarData} className="container py-10">
      <h2 className="text-2xl lg:text-3xl">Tell Us About Your Property</h2>
      <p className="text-sm max-w-[40ch]">
        Please note, comprehensive roof data is available only for the major
        South African cities, i.e. Johannesburg, Pretoria, Cape Town, Port
        Elizabeth, Durban and East London
      </p>
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-3">
        <div className="w-full">
          <Label htmlFor="address">Streed Address</Label>
          <Input type="text" name="address" placeholder="Street Address" />
        </div>
        <div className="w-full">
          <Label htmlFor="monthlyBill">Monthly Electricity Bill</Label>
          <Input
            type="number"
            name="monthlyBill"
            placeholder="How much do you spend"
          />
        </div>
        <div className="w-full flex space-x-3 items-center">
          <Checkbox name="offGrid" />
          <Label htmlFor="offGrid">Are you looking for Off Grid Power?</Label>
        </div>
      </div>
      <div className="my-3">
        <Button type="submit" className="w-1/3 lg:w-1/4">Submit</Button>
      </div>
    </form>
  );
};
export default SolarPotentialForm;
