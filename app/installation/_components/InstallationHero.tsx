import { Button } from "@/components/ui/button";
import Image from "next/image";

const InstallationHero = () => {
  return (
    <section className="w-full relative">
      <Image
        src="/images/installation.webp"
        width={4032}
        height={1960}
        alt="installation"
        className="w-full object-cover max-h-[60vh] min-h-[50vh]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-slate-500/70 lg:to-transparent">
        <div className="container mx-auto flex flex-col justify-center items-start h-full">
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-[20ch]">
            Quick, Professional, Quality Installations
          </h1>
          <p className="text-sm mt-3 lg:text-lg font-light text-white max-w-[70ch]">
            Experience independence from load shedding with our seamless solar
            power system installation process. It's time to empower your home
            with an unconstrained supply of clean, green energy.
          </p>
          <Button className="bg-red-600 text-white rounded-full mt-6">Request Quote</Button>
        </div>
      </div>
    </section>
  );
};
export default InstallationHero;
