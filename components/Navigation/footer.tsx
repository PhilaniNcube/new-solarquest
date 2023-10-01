import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {



  const year = new Date().getFullYear();

  return (
    <>
      <div>
        <div className=" mt-10 bg-zinc-800 px-4 lg:px-0 py-10 lg:py-32">
          <div className="w-full lg:flex justify-between mx-auto container">
            <div className="lg:w-1/2 justify-between lg:flex">
              <div className="flex flex-col mt-4 lg:mt-0">
                <ul>
                  <li>
                    <p className="text-lg text-white tracking-wide font-semibold">
                      Pages
                    </p>
                  </li>
                  <li className="mt-6">
                    <Link
                      href="/"
                      className="text-base text-white tracking-wide"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/products"
                      className="text-base text-white tracking-wide"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link
                      href="/installations"
                      className="text-base text-white tracking-wide"
                    >
                      Installations
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-4 lg:mt-0">
                <ul>
                  <li>
                    <p className="text-lg text-white tracking-wide font-semibold">
                      About Us
                    </p>
                  </li>
                  <Link
                    href="/contact"
                    className="text-base text-white tracking-wide"
                  >
                    Contact Us
                  </Link>
                </ul>
              </div>
              <div className="flex flex-col mt-4 lg:mt-0 lg:items-center">
                <ul>
                  <li>
                    <p className="text-lg text-white tracking-wide font-semibold">
                      Stay Connected
                    </p>
                  </li>
                  <div className="flex w-2/5 sm:w-1/4 lg:w-full justify-between text-white lg:px-4 items-center mt-6">
                    <li>
                      <FacebookIcon />
                    </li>
                    <li>
                      <TwitterIcon />
                    </li>
                    <li>
                      <InstagramIcon />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end pb-4 lg:pb-0">
              <div className="w-10/12 lg:w-1/2">
                <h1 className="text-lg text-white font-semibold tracking-wide mb-6 text-center lg:text-left">
                  Subscribe to our Newsletter
                </h1>
                <div className="flex justify-center">
                  <div className="w-full bg-white md:rounded-2xl flex justify-center items-center rounded relative">
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      id="email"
                      aria-label="email"
                      className="placeholder-gray-600 h-12 lg:h-16 pl-4 rounded-lg text-gray-700 text-xs sm:text-base bg-transparent focus:outline-none w-full"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 inset-y-0 h-full focus:outline-none transition duration-150 border-l border-gray-300 text-xs lg:text-base font-medium text-zinc-700 ease-in-out rounded  px-2 sm:px-6 py-2 lg:py-4"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 py-5">
          <p className="text-base text-gray-700 text-center">
            ©{year}  Solarquest. All right reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
