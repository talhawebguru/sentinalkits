import React from "react";
import Image from "next/image";
import TouchContact from "@/public/images/touchContact.svg";

const TouchWithUs = () => {
  return (
    <>
      <div className=" 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-[40px] px-5 flex mt-20 bg-white lg:justify-between flex-wrap justify-center ">
        <div className="py-20 lg:pl-14 xs:pl-3 pl-5 shadow-lg lg:w-6/12 xl:w-[65%]">
          <h2 className="text-black text-[32px] font-normal font-nohemi">
            Get In Touch With Us
          </h2>
          <p className="xl:w-[464px] w-[89%] text-black text-base font-normal font-primary leading-normal mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
          <form action="" className="flex flex-col mt-8">
            <input
              type="text"
              placeholder="Name"
              className="py-3 pl-5 w-[80%] xl:w-[440px] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466]"
            />
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="py-3 pl-5  w-[80%] xl:w-[440px] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
              className="py-3 pl-5 xl:w-[440px]  w-[80%] bg-[#FAFAFA] font-primary leading-[17.68px] font-normal text-base text-[#04040466] mt-5"
            ></textarea>
            <div>
              <button className="bg-primary text-white py-3 px-10 mt-5">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-6/12 xl:w-[35%] flex justify-end  mt-12 lg:mt-0">
          <Image src={TouchContact} alt="Contact Us" className="" />
        </div>
      </div>
    </>
  );
};

export default TouchWithUs;
