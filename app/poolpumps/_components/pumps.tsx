import { formatter } from "@/lib/utils";
import Image from "next/image";

const poolPumps = [
  {
    image: "/images/pump-1.webp",
    title: "Solar Pool Pump 500W",
    price: 11500,
  },
  {
    image: "/images/rison_pump.webp",
    title: "Rison 500W Solar Pool Pump",
    price: 12000,
  },
  {
    image: "/images/badu_pump.webp",
    title: "BADU Solar Pool Pump",
    price: 9500,
  },
];

const Pumps = () => {
  return (
    <section className="">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 container py-10 ">
        {poolPumps.map((pump, index) => (
          <div key={index} className="@container">
            <div className="flex flex-col px-3 py-4 border border-slate-300 rounded">
              <Image
                alt={pump.title}
                width={400}
                height={400}
                src={pump.image}
                className="w-full h-64 object-cover"
              />
              <div>
                <h3 className="text-md font-bold text-zinc-800">
                  {pump.title}
                </h3>
                <p className="text-xl font-extrabold text-zinc-600">
                  {formatter(pump.price)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Pumps;
