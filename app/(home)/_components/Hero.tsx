import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative overflow-clip">
      <div className="absolute inset-0">
        <Image
          src="/images/living-room.webp"
          width={1920}
          height={1080}
          alt="Solar"
          className="object-cover w-full rounded-md aspect-video"
        />
      </div>
      <section className="container relative z-20 grid grid-cols-1 gap-6 py-8 mx-auto lg:grid-cols-2 md:gap-10">
        <div />
        <div className="flex flex-col justify-center w-full py-20 ">
          <h1 className="text-3xl font-bold uppercase md:text-5xl max-w-[20ch] text-zinc-800">
            Solar INstallations for Off-Grid & Load Shedding
          </h1>
          <p className="pr-20 mt-5 font-medium text-md text-zinc-600">
            Unlocking Renewable Energy Solutions: High-quality, Affordable Solar
            Installations for a Sustainable Future
          </p>
          <Button
            type="button"
            className="mt-5 text-white uppercase bg-red-600 rounded-full w-fit text-md"
          >
            Get A Quote
          </Button>
        </div>
        {/* <Image
        src="/images/solar_home.webp"
        width={1456}
        height={1224}
        alt="Solar"
        className="object-cover w-full rounded-md aspect-video"
      /> */}
      </section>
    </div>
  );
};
export default Hero;
