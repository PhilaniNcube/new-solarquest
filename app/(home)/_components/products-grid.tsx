import { formatter } from "@/lib/utils";
import Image from "next/image";

export const solar_power_packages = [
  {
    id: "sd_backup_5",
    package_name: "SD Backup 5",
    power_generation: "5.1KW",

    equipment_included: {
      strorage: {
        battery: "1 unit",
        name: "Rebel ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 0, rating: "450W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "5kvA",
        name: "Sunsynk/Deye Inverter 5kvA",
      },
    },
    price: 69995,
    installaments: {
      deposit: 20000,
      monthly: 1800,
    },
    description:
      "Ideal for the home looking to have uninterrupted power supply during moderate load shedding.",
  },
  {
    id: "sd_solar_5",
    package_name: "SD Solar 5",
    power_generation: "5.1kWh",
    equipment_included: {
      strorage: {
        battery: "1 unit",
        name: "Rebel ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 6, rating: "430W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "5kvA",
        name: "Sunsynk/Deye Inverter 5kvA",
      },
    },
    price: 107995,
    installaments: {
      deposit: 25000,
      monthly: 2000,
    },
    description:
      "Ideal for the home looking to have uninterrupted power supply during longer periods of load shedding.",
  },
  {
    id: "sd_solar_8",
    package_name: "SD Solar 8",
    power_generation: "5.1kWh",
    equipment_included: {
      strorage: {
        battery: "1 unit",
        name: "Rebel ULTR5 5kWh Lithium Battery",
      },
      solar_panels: { quantity: 8, rating: "430W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "8KW",
        name: "Sunsynk Inverter 8kvA",
      },
    },
    price: 149995,
    installaments: {
      deposit: 35000,
      monthly: 2500,
    },
    description:
      "Experience enhanced energy independence and the convenience of always having power during outages.",
  },
  {
    id: "sd_solar_12",
    package_name: "SD Solar 12",
    power_generation: "10KW",
    equipment_included: {
      strorage: {
        battery: "2 units",
        name: "Rebel ULTR5 5.1kWh Lithium Battery",
      },
      solar_panels: { quantity: 12, rating: "430W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "8KW",
        name: "Sunsynk Inverter 12kvA",
      },
    },
    price: 229995,
    installaments: {
      deposit: 35000,
      monthly: 3000,
    },
    description:
      "Embrace energy independence and bid farewell to grid dependency with this comprehensive and reliable 20KWH home solar system",
  },
  {
    id: "sd_solar_16",
    package_name: "SD Solar 16",
    power_generation: "15KW",
    equipment_included: {
      strorage: {
        battery: "3 units",
        name: "Rebel ULTR5 5.1kWh Lithium Battery",
      },
      solar_panels: { quantity: 16, rating: "430W" },
      hybrid_inverter: {
        quantity: 1,
        rating: "8KW",
        name: "Sunsynk Inverter 16kvA",
      },
    },
    price: 299995,
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
    <section className="container w-full py-10 mx-auto ">
      <h2 className="text-3xl font-bold text-center text-zinc-800">
        Solar Power Packages
      </h2>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-5 gap-x-4 gap-y-8">
        {solar_power_packages.map((item) => (
          <article
            key={item.package_name}
            className="w-full p-3 transition-all border rounded-md shadow-sm border-zinc-100 hover:shadow-lg hover:bg-zinc-100"
          >
            <Image
              src="/images/solar packages.webp"
              width="800"
              height="800"
              alt={item.package_name}
              className="object-cover w-1/2 mx-auto"
            />
            <div className="w-full mt-4 ">
              <h2 className="text-xl font-medium text-zinc-800">
                {item.package_name}
              </h2>
              <p className="text-sm text-zinc-500 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <h3 className="text-lg font-medium text-zinc-800">Capacity</h3>
                <p className="text-sm font-medium text-zinc-500">
                  {item.power_generation}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <h3 className="font-medium text-md text-zinc-800">
                  {item.equipment_included.hybrid_inverter.name}
                </h3>
              </div>
              {item.equipment_included.solar_panels.quantity === 0 ? (
                <p className="text-xs font-medium text-zinc-500">
                  No Solar Panels
                </p>
              ) : (
                <p className="text-xs font-medium text-zinc-500">
                  {item.equipment_included.solar_panels.quantity} Solar Panels (
                  {item.equipment_included.solar_panels.rating})
                </p>
              )}
              <div className="flex items-center justify-between mt-2">
                <h3 className="px-4 py-2 font-medium bg-red-600 text-md text-red-50">
                  {formatter(item.price)}
                </h3>
                <p className="text-xs font-medium text-zinc-500"></p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default ProductsGrid;
