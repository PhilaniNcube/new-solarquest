import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <Image
        src="/images/backyard_pool.webp"
        width={1456}
        height={816}
        alt="geyser"
        className="w-full object-cover max-h-[60vh] min-h-[50vh] object-bottom"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-slate-500/80 lg:to-slate-500/40">
        <div className="container flex flex-col items-start justify-center h-full mx-auto">
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-[20ch]">
           Solar Powered Pool Pumps
          </h1>
          <p className="text-sm mt-3 lg:text-lg font-light text-white max-w-[70ch]">
            Save on your summer electricity bills with a solar powered pool pump.
          </p>
          <Button className="mt-6 text-white bg-red-600 rounded-full">
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
