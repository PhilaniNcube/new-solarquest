"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { DataResponse, GeocodingResponse } from "@/types";
import { Circle, CircleDashedIcon } from "lucide-react";
import { useState } from "react";

const SolarPotentialForm = () => {

  const [loading, setLoading] = useState(false);

  const [solarData, setSolarData] = useState<DataResponse | null>(null);

  console.log(solarData);

  const getSolarData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const address = form.address.value;
    const monthlyBill = form.monthlyBill.value;
    const offGrid = form.offGrid.checked;

    setLoading(true);
    // console.log(email, address, monthlyBill, offGrid);

    try {

      const encodedAddress = encodeURIComponent(address);

      // get the lat and lng of the address from geocode api
        const gecodingUrl = new URL(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
        );

         const response = await fetch(gecodingUrl)
           .then((res) => res.json())
           .then((data) => data)
           .catch((err) => console.log(err));

         const geocode: GeocodingResponse = await response;

        //  console.log(geocode);

         const { results, status } = geocode;

          if (status !== "OK") {
            throw new Error("Something went wrong");
          }

          const {
            geometry: { location },
            formatted_address,
            place_id,
          } = results[0];

              //query the solar api for the solar data
                const url = new URL(
                  `https://solar.googleapis.com/v1/buildingInsights:findClosest?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`
                );

                 url.searchParams.append(
                   "location.latitude",
                   location.lat.toString()
                 );
                 url.searchParams.append(
                   "location.longitude",
                   location.lng.toString()
                 );

                      const res = await fetch(url, {
                        method: "GET",
                      })
                        .then((res) => res.json())
                        .then((data) => data)
                        .catch((err) => console.log(err));

                      const solar: DataResponse = await res;

                      console.log(res)

                      if (res.error) {
                        console.log("Error: ", res.error.message);
                        throw new Error("Error: " + res.error.message + 'Your address may not yet be covered.' );
                      }

                     setSolarData(solar);

    } catch (error) {
      console.log(error)
      alert(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <section>
      <form onSubmit={getSolarData} className="container py-10">
        <h2 className="text-2xl font-bold lg:text-3xl">
          Tell Us About Your Property
        </h2>
        <p className="text-md max-w-[70ch] text-red-600">
          Please note, comprehensive roof data is available only for the major
          South African cities, i.e. Johannesburg, Pretoria, Cape Town, Port
          Elizabeth, Durban and East London
        </p>
        <Separator className="mt-3" />
        <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-6">
          <div className="w-full">
            <Label htmlFor="email">Streed email</Label>
            <Input type="email" name="email" placeholder="Street email" />
          </div>
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
          <div className="w-ful flex space-x-3 items-center">
            <Checkbox name="offGrid" />
            <Label htmlFor="offGrid">Are you looking for Off Grid Power?</Label>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="mt-4">
          <Button type="submit" className="w-1/3 lg:w-1/4">
            Submit
            {loading && (
              <CircleDashedIcon
                className="animate-spin inline-block ml-2"
                size={20}
              />
            )}
          </Button>
        </div>
      </form>
      {solarData && (
        <div className="container py-10">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Here is your solar data
          </h2>
          <Separator className="my-4" />
          <h3 className="text-xl font-semibold">Building Data</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-lg font-semibold">Solar Potential</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">
                    Max Sunshine Hours
                  </span>
                  <span className="text-sm font-semibold">
                    {solarData.solarPotential.maxSunshineHoursPerYear.toFixed(
                      2
                    )}
                    /year
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-lg font-semibold">Roof Area</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Max Panel Area</span>
                  <span className="text-sm font-semibold">
                    {solarData.solarPotential.maxArrayAreaMeters2.toFixed(2)}sqm
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-lg font-semibold">Max kwH Output</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Max kWh</span>
                  <span className="text-sm font-semibold">
                    {
                      solarData.solarPotential.solarPanelConfigs[
                        solarData.solarPotential.solarPanelConfigs.length - 1
                      ].yearlyEnergyDcKwh
                    }
                     {" "}/year
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </section>
  );
};
export default SolarPotentialForm;
