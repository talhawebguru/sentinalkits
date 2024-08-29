import React from "react";
import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import SocialIcons from "@/public/images/social.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" xl:px-[90px] 2xl:px-0 lg:px-10 px-5 lg:mt-[100px] mt-8 bg-light-gray flex flex-col ">
        <div className="">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 lg:pt-[90px] pt-10  2xl:max-w-[1440px] 2xl:mx-auto">
            {/* Col1 */}
            <div>
              <div className="">
                <Link href="/">
                  <Image src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="mt-9">
                <p className=" text-neutral-light-gray text-base font-normal font-secondary leading-normal">
                Safecare Prepared plates and broth tested  in accordance with CLSI M22 A3- Quality  assurance for Commercially Prepared  Microbiological Culture Media – second  edition.
                </p>
              </div>

              <div className="mt-11">
                <h2 className=" text-light-black text-xl font-normal font-arial">
                  Social Links
                </h2>
                <div className="mt-5">
                  <Image src={SocialIcons} alt="social icons" />
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <div className="flex flex-col sm:ml-24 gap-5">
                <h3 className="text-light-black text-xl font-normal font-arial">
                  Quick Links
                </h3>
                <ul className="flex flex-col  gap-5 text-neutral-light-gray text-base font-normal font-secondary">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/product">Product</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Col 3 */}
            <div>
              <div className="flex flex-col gap-5">
                <h3 className="text-light-black text-xl font-normal font-arial">
                  News Letter
                </h3>
                <p className="text-neutral-light-gray text-base font-normal font-primary leading-normal">
                  Over 750+ people have subscribed.
                </p>
                <div>
                  <form className="flex">
                    <input
                      type="text"
                      className="w-full h-12 px-[22px] py-3.5 bg-white shadow justify-start items-start gap-2.5 inline-flex text-neutral-light text-[13px] font-normal font-secondary leading-tight"
                      placeholder="Enter your Email"
                    />
                    <button className="w-[134px] h-12 bg-custom-gradient text-white text-base font-normal font-arial ml-2">
                      Shop Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/*  CopyRight Section */}

          <div className="lg:mt-24 mt-5">
            <div className="w-full h-[0px] border border-neutral-light"></div>
            <div className="py-6">
              <h3 className="text-copyRight text-base font-normal font-secondary text-center">
                Copyright 2024 Microbiano Ltd | Powered by Safecaretech
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
