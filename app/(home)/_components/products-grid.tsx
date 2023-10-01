import { formatter } from "@/lib/utils";
import Image from "next/image";

export const solar_power_packages = [
  {
    id: "standard_package",
    package_name: "Standard Package",
    power_generation: "5KW",

    equipment_included: {
      strorage: {
        battery: "1 unit",
        name: "ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 6, rating: "450W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "5KW",
        name: "Sunsynk Inverter 5kW",
      },
    },
    price: 80000,
    installaments: {
      deposit: 20000,
      monthly: 1800,
    },
    description:
      "Ideal for the home looking to have uninterrupted power supply during moderate load shedding.",
  },
  {
    id: "advanced_package",
    package_name: "Advanced Package",
    power_generation: "10KW",
    equipment_included: {
      strorage: {
        battery: "2 units",
        name: "ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 10, rating: "450W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "5KW",
        name: "Sunsynk Inverter 5kW",
      },
    },
    price: 100000,
    installaments: {
      deposit: 25000,
      monthly: 2000,
    },
    description:
      "Ideal for the home looking to have uninterrupted power supply during longer periods of load shedding.",
  },
  {
    id: "premium_package",
    package_name: "Premium Package",
    power_generation: "15KW",
    equipment_included: {
      strorage: {
        battery: "3 units",
        name: "ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 12, rating: "450W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "8KW",
        name: "Sunsynk Inverter 8kW",
      },
    },
    price: 130000,
    installaments: {
      deposit: 35000,
      monthly: 2500,
    },
    description:
      "Experience enhanced energy independence and the convenience of always having power during outages.",
  },
  {
    id: "ultimate_package",
    package_name: "Ultimate Package",
    power_generation: "20KW",
    equipment_included: {
      strorage: {
        battery: "4 units",
        name: "ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 16, rating: "450W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "8KW",
        name: "Sunsynk Inverter 8kW",
      },
    },
    price: 150000,
    installaments: {
      deposit: 35000,
      monthly: 3000,
    },
    description:
      "Embrace energy independence and bid farewell to grid dependency with this comprehensive and reliable 20KWH home solar system",
  },
];

export type SolarPowerPackage = typeof solar_power_packages[0];

const ProductsGrid = () => {
  return (
    <section className="w-full py-10 container mx-auto ">
      <h2 className="text-3xl font-bold text-zinc-800 text-center">Solar Power Packages</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 mt-6 gap-y-8">
        {solar_power_packages.map((item) => (
          <article
            key={item.package_name}
            className="w-full border border-zinc-100 p-3 rounded-md shadow-sm hover:shadow-lg hover:bg-zinc-100 transition-all"
          >
            <Image
              src="/images/solar packages.webp"
              width="800"
              height="800"
              alt={item.package_name}
              className="object-cover w-1/2 mx-auto"
            />
            <div className="mt-4 w-full ">
              <h2 className="text-xl font-medium text-zinc-800">
                {item.package_name}
              </h2>
              <p className="text-sm text-zinc-500">{item.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-lg font-medium text-zinc-800">
                  Power Generation
                </h3>
                <p className="text-sm text-zinc-500 font-medium">
                  {item.power_generation}
                </p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-md font-medium text-zinc-800">
                  {item.equipment_included.hybrid_inverter.name}
                </h3>
                <p className="text-xs text-zinc-500 font-medium"></p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <h3 className="text-md font-medium text-red-50 px-4 py-2 bg-red-600">
                  {formatter(item.price)}
                </h3>
                <p className="text-xs text-zinc-500 font-medium"></p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ProductsGrid;
