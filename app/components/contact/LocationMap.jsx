import React from "react";
import Image from "next/image";
import LocationMapImage from "@/public/images/Map.svg";
import PhoneIcon from "@/public/images/phoneIcon.svg";
import MailIcon from "@/public/images/mailIcon.svg";
import LocationIcon from "@/public/images/locationIcon.svg";

const LocationMap = () => {
  return (
    <>
      <div className="mt-32">
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14495.85232539756!2d54.7278259!3d24.7281477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5effd1737a9a77%3A0x4bdf4e512ac74a2a!2sSafe%20Care%20Medical%20Industry!5e0!3m2!1sen!2s!4v1723027491491!5m2!1sen!2s"
            width="100%"
            height="600"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen />
      </div>
      <div className="flex flex-wrap justify-center md:-mt-36 xl:px-0 lg:px-[40px] px-5 xs:gap-5  2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
        <div className="bg-[#F6E9F4] py-24 xl:pl-36 pl-[5%] pr-[100px] xs:w-full w-full lg:pr-0 lg:w-[30%] 2xl:w-[33%] ">
          <div>
            <Image src={PhoneIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Phone
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            (12+) 123 3456
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            (12+) 123 3456
          </p>
        </div>
        <div className="bg-[#E2BADC]  py-24 xl:pl-36 pl-[5%] pr-[100px] lg:pr-0 xs:w-full w-full lg:w-[30%] 2xl:w-[33%]   ">
          <div>
            <Image src={MailIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Email
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            info@yoursite.com
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            support@yoursite.com
          </p>
        </div>
        <div className="bg-[#F6E9F4] py-24 xl:pl-36 pl-[5%] pr-[100px] xs:w-full lg:pr-0 lg:w-[30%] w-full 2xl:w-[33%]  ">
          <div>
            <Image src={LocationIcon} alt="Phone Icon" />
          </div>
          <h3 className=" text-black text-2xl font-medium font-nohemi uppercase leading-relaxed mt-6">
            Location
          </h3>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            121th Haidezign st,
          </p>
          <p className=" text-black text-base font-normal font-primary uppercase leading-[17.60px] mt-2">
            Melbourne, AUS 12313
          </p>
        </div>
      </div>
    </>
  );
};

export default LocationMap;
