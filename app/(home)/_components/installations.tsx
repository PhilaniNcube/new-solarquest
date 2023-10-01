import Image from "next/image"

const Installations = () => {
  return (
    <section className="py-10 container mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <Image
          src="/images/installers.png"
          width={1024}
          height={1024}
          alt="installers"
          className="w-full aspect-square lg:aspect-video object-cover"
        />
        <div className="w-full p-6">
          <h2 className="text-2xl font-bold text-zinc-800">
            Solar Installations
          </h2>
          <p className="mt-3 text-sm md:text-md text-zinc-700 md:tracking-wider">
            Qualified technicians have the necessary technical knowledge and
            training to understand the intricacies of solar power system
            installation. They are aware of the latest industry standards,
            building codes, and safety regulations, ensuring that your solar
            power system is installed accurately and up to code.
          </p>
          <h3 className="mt-5 text-lg font-bold text-zinc-800">
            Factors to Consider for Solar Power System Installation
          </h3>
          <ul className="mt-3 text-sm md:text-md text-zinc-700">
            <li className="tracking-wide leading-7">Roof type and condition</li>
            <li className="tracking-wide leading-7">
              Roof orientation and tilt angle
            </li>
            <li className="tracking-wide leading-7">Shading analysis</li>
            <li className="tracking-wide leading-7">Solar panel selection</li>
            <li className="tracking-wide leading-7">
              Inverter capacity and type
            </li>
            <li className="tracking-wide leading-7">
              Electrical wiring and system configuration
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Installations;
