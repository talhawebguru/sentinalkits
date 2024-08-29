import React from 'react'
import Image from "next/image";
import MissionImg from "@/public/images/missionImg.svg";

const Mission = () => {
  return (
    <>
    <div className="flex md:justify-between md:gap-5  flex-wrap md:flex-nowrap md:mt-28   2xl:max-w-[1440px] 2xl:mx-auto xl:px-[90px] lg:px-[40px] px-5">
      <div className="md:w-[50%]">
        <h1 className="text-[#0e0e0e] text-[42px] font-normal font-nohemi capitalize mt-24 ">
        Our Mission
        </h1>
        <p className="text-[#0e0e0e] text-base font-normal font-primary mt-5">
          Safecare Medical Industries Was Conceived And Established In The
          Year Of 2016 By Bin Ali Group That Plans To Give A Different
          Dimension To The Medical Industries All Across The Middle
          East.Headquartered in Abu Dhabi, UAE, SafeCare is a domestic profit
          corporation providing quality medical plastic consumable products
          across all GCC countries. With its registered subsidiary factories
          and subsidiary offices across the UK, USA, Germany, and China,
          SafeCare thrives on producing and providing quality medical products
          across the globe.
        </p>
      
      </div>
      <div className="h-[590px] md:w-[50%] mt-10 md:mt-0 flex justify-end">
        <Image src={MissionImg} alt="About Us" className="" />
      </div>
    </div>
  </>
  )
}

export default Mission