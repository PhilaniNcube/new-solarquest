import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Financing = () => {
  return (
    <section>
      <div>
        <div className="mx-auto container md:py-12 py-9">
          <div className="relative rounded-md">
            <Image
              src="/images/neighbourhood.png"
              alt="city view"
              width={1792}
              height={672}
              className="w-full h-full rounded-md  object-center object-cover absolute sm:block hidden"
            />
            <Image
              width={1024}
              height={1024}
              src="/images/neighbourhood_square.png"
              alt="city view"
              className="w-full h-full rounded-md absolute object-center object-cover sm:hidden"
            />
            <div className="text-xl relative z-20 bg-gradient-to-r from-zinc-700 to-transparent w-full h-full md:z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
              <div>
                <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">
                  Looking for financing?
                </h1>
                {/**Write a description for financing options*/}

                <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">
               We can provide you with affordable financing options from some of our partners. You may also be able to finance the installation through your bank.
                </p>
              </div>
              <div className="md:mt-16 mt-8">
                <Button type="button" className="text-base font-medium leading-4 bg-white text-zinc-800">
                  Apply Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Financing;
