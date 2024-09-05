"use client";
import React from "react";
import Image from "next/image";
import RightArrow from "@/public/images/rightArrow.svg";

const Hero = () => {
  return (
    <>
      <div className="min-w-full sm:min-h-[680px]   xl:min-h-[100vh] 2xl:min-h-[84.5vh] overflow-hidden mt-5 relative flex flex-wrap md:flex-nowrap justify-center ">
        <video
          className="md:absolute order-1 md:order-0"
          preload="auto"
          loop
          muted
          autoPlay
        >
          <source src="../video/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex order-0 md:order-1 flex-col items-center justify-center md:absolute xl:mt-28 lg:mt-20 sm:mt-14  xs:mt-5 2xl:mt-48">
          <div className="text-center ">
            <span className="md:text-white text-light-black text-[32px] sm:text-[56px] font-normal font-nohemi capitalize">
              We do Care for your
              <br />
            </span>
            <span className="md:text-white text-light-black text-[32px] sm:text-[56px] font-normal font-nohemi ">
              Better Tomorrow
            </span>
          </div>
          <p className="text-center mt-4 md:text-white text-light-black  text-base font-normal font-primary md:w-[690px] w-[80%] ">
            Our extensive range of products is designed with input from
            healthcare professionals, ensuring they meet the demands of modern
            medical procedures.
          </p>
          <div className="px-[25px] mt-8 mb-10 md:mb-0 py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
            Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
