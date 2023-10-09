import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full relative">
      <Image
        src="/images/solar_home_2.png"
        width={1456}
        height={816}
        alt="geyser"
        className="w-full object-cover max-h-[60vh] min-h-[50vh] object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-slate-500/80 lg:to-slate-500/40">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-[20ch]">
            Solar Potential Of Your Home
          </h1>
          <p className="text-sm mt-3 lg:text-lg font-light text-white max-w-[55ch]">
          Find out the amount of solar energy your home can generate and how much you can save on your electricity bill.
          </p>
          <Button className="bg-red-600 text-white rounded-full mt-6">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
