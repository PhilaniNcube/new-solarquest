import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
    return (
      <section className="w-full relative">
        <Image
          src="/images/solar-geyser.jpg"
          width={1920}
          height={1280}
          alt="geyser"
          className="w-full object-cover max-h-[60vh] min-h-[50vh] object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-slate-500/80 lg:to-slate-500/40">
          <div className="container mx-auto flex flex-col justify-center items-start h-full">
            <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-[20ch]">
              Solar Geysers/Water Heating
            </h1>
            <p className="text-sm mt-3 lg:text-lg font-light text-white max-w-[40ch] lg:max-w-[50ch]">
              Make a smart, affordable, and eco-friendly move for your home.
              Embrace the power of the sun and save on your water heating costs
              with our top-quality solar water heaters/geysers.
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
