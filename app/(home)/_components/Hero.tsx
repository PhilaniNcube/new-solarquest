import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-clip">
      <div className="absolute inset-0">
        <Image
          src="/images/solar_home.webp"
          width={1920}
          height={1080}
          alt="Solar"
          className="w-full aspect-video object-cover rounded-md"
        /></div>
      <section className="container relative z-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 py-8">
        <div className="flex flex-col justify-center w-full  py-20 ">
          <h1 className="text-3xl font-bold uppercase md:text-5xl max-w-[20ch] text-zinc-800">
            Solar INstallations for Off-Grid & Load Shedding
          </h1>
          <p className="mt-5 text-md text-zinc-600 font-medium pr-20">
            Unlocking Renewable Energy Solutions: High-quality, Affordable Solar
            Installations for a Sustainable Future
          </p>
          <Button
            type="button"
            className="mt-5 text-white w-fit uppercase rounded-full text-md bg-red-600"
          >
            Get A Quote
          </Button>
        </div>
        {/* <Image
        src="/images/solar_home.webp"
        width={1456}
        height={1224}
        alt="Solar"
        className="w-full aspect-video object-cover rounded-md"
      /> */}
      </section>
    </div>
  );
};
export default Hero;
