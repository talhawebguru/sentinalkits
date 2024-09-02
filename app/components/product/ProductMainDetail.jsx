import React from "react";
import Image from "next/image";
import Product1 from "@/public/images/product1.jpg";
import TabsProduct from "./TabsProduct";

const ProductMainDetail = (props) => {
  return (
    <>
      <div className="xl:px-[90px] md:h-[600px] 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0 lg:px-[40px] mt-10 px-5 flex flex-wrap md:flex-nowrap xl:gap-[90px] md:gap-10 overflow-hidden">
        <div className="md:w-6/12 md:h-[600px] h-auto  sm:w-[60%] bg-white shadow md:mt-0 mt-10 mx-auto ">
          <Image src={Product1} alt="Product" className="w-full scale-150 lg:scale-100 py-16 px-14 md:h-[600px] h-[350px] overflow-hidden " />
        </div>
        <div className="md:w-6/12 xs:overflow-hidden">
          <div>
            <h2 className="text-divi-gray text-[28px] font-medium font-primary leading-[33.60px] mt-5">
              One piece closed Ostomy bag (Single side non-woven fabric, EVOH,
              Medical Hydrocolloid)
              
            </h2>
            <h2 className="text-[#adadad] text-[13px] font-normal font-primary leading-tight mt-3">
              Max Cut Skin Barrier Dia:{" "}
              <span className="text-divi-gray-300"> 15-35mm / 87mm</span>
            </h2>
            <p className="text-[#adadad] text-[13px] font-normal font-primary leading-tight mt-1">
              Remark:{" "}
              <span className="text-divi-gray-300">
                With 2 piece for option
              </span>
            </p>
            <p className="xl:w-[586px] text-divi-gray-300 text-base font-normal font-primary leading-normal mt-10 ">
              Alkaline peptone water is generally used as an enrichment medium
              in the isolation of Vibrio spp. from faeces. This medium may also
              be used for the enrichment of Vibrio spp. from food and water
              samples.
            </p>
            <button onClick={() => props.openPop(true)} className="w-[204px] h-12 bg-primary text-white text-base font-normal font-arial mt-10 xs:mb-10">
            Request for quote
            </button>
          </div>
        </div>
      </div>
      <TabsProduct/>
    </>
  );
};

export default ProductMainDetail;
