import React from "react";
import ProductData from "./ProductData";

const Product = () => {
  return (
    <>
      <div className="bg-light-gray mt-28 xs:mt-1">
        <div className=" pt-36 xs:pt-20 pb-28 xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
          <div className="flex justify-between items-center">
            <h2 className="text-[#0e0e0e] text-[42px] font-normal font-nohemi capitalize">
              Our Products
            </h2>
            <div>
              <form className="flex mb-3">
                <input
                  type="text"
                  className="w-full xl:w-[350px]  h-14 px-[16px] py-4 bg-white shadow justify-start items-start gap-2.5 inline-flex text-[#bdbab8] text-[13px] font-normal font-primary leading-tight"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
          <div className="grid gap-6 mt-14 xl:gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
           <ProductData  initialLimit={8} mobileLimit={4}  selectedCategory="All Products" />
           </div>
        </div>
      </div>
    </>
  );
};

export default Product;
