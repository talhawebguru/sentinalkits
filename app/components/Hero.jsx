'use client'
import React from "react";
import Image from "next/image";
import RightArrow from "@/public/images/rightArrow.svg";

const Hero = () => {
  return (
    <>
      <div className="min-w-full min-h-[680px] xs:bg-primary  xl:min-h-[100vh] 2xl:min-h-[84.5vh] overflow-hidden mt-5 relative flex justify-center ">
        <video className="absolute" preload="auto" loop muted autoPlay>
          <source src="../video/hero.mp4"  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex flex-col items-center justify-center absolute xl:mt-28 lg:mt-20 mt-14  2xl:mt-48">
          <div className="text-center ">
            <span className="text-white text-[56px] font-normal font-nohemi capitalize">
              We do Care for your
              <br />
            </span>
            <span className="text-white text-[56px] font-normal font-nohemi ">
              Better Tomorrow
            </span>
          </div>
          <p className="text-center mt-4 text-white text-base font-normal font-primary md:w-[690px] w-[80%] ">
            Our extensive range of products is designed with input from
            healthcare professionals, ensuring they meet the demands of modern
            medical procedures.
          </p>
          <div className="px-[25px] mt-8 py-3 bg-custom-gradient justify-center items-center gap-4 inline-flex text-white text-base font-medium font-primary">
            Get this from Jurhy <Image src={RightArrow} alt="Right Arrow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
