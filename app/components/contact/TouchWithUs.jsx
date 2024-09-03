import React from "react";
import Image from "next/image";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import EmailIcon from "@/public/images/emailIcon.svg";
import LocationIcon from "@/public/images/locationIcon.svg";
import ContactSocial from "@/public/images/contactSocial.svg";

const TouchWithUs = () => {
  return (
    <>
      <div className="2xl:-mt-28 lg:-mt-36 mt-10   2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 xl:px-[90px] lg:px-[40px] px-5 flex  bg-white lg:justify-between flex-wrap justify-center ">
        <div className="py-20 lg:pl-14 xs:pl-3 pl-5 shadow-lg lg:w-6/12 xl:w-[50%] bg-white">
          <h2 className="text-black text-[32px] font-normal font-nohemi">
          Write a message
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
              rows="9"
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
        <div className="lg:w-6/12 xl:w-[50%] py-20 lg:pl-14 xs:pl-3 pl-5   mt-12 lg:mt-0 bg-custom-gradient">
          <h2 className="text-white text-[32px] font-normal font-nohemi">
            Contact Information
          </h2>
          <p className="text-white text-base font-normal font-primary leading-normal mt-3 xl:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore{" "}
          </p>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <Image src={PhoneIcon} alt="Phone Icon" />
              <p className=" text-white text-base font-normal font-nohemi uppercase leading-[17.60px]">Phone</p>
            </div>
            <div className="ml-9 mt-2">

            <p className="text-white text-base font-normal font-primary uppercase leading-[17.60px] mb-1">(12+) 123 3456</p>
            <p className="text-white text-base font-normal font-primary uppercase leading-[17.60px]">(12+) 123 3456</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <Image src={EmailIcon} alt="Phone Icon" />
              <p className=" text-white text-base font-normal font-nohemi uppercase leading-[17.60px]">Email</p>
            </div>
            <div className="ml-9 mt-2">

            <p className="text-white text-base font-normal font-primary uppercase leading-[17.60px] mb-1">info@yoursite.com</p>
            <p className="text-white text-base font-normal font-primary uppercase leading-[17.60px]">support@yoursite.com</p>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <Image src={LocationIcon} alt="Phone Icon" />
              <p className=" text-white text-base font-normal font-nohemi uppercase leading-[17.60px]">Location</p>
            </div>
            <div className="ml-9 mt-2">

            <p className="text-white text-base font-normal font-primary uppercase leading-[17.60px] mb-1 w-[44%]">121th Haidezign st, Melbourne, AUS 12313</p>
            </div>
          </div>
          <div>
            <h2 className="text-white text-xl font-normal font-nohemi mt-10">Social Links</h2>
            <Image src={ContactSocial} alt="Social Links" className="mt-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchWithUs;
