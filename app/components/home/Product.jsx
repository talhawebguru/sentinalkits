import React from "react";
import ProductData from "../product/ProductData";
import Link from "next/link";

const Product = () => {
  return (
    <>
      <div className="bg-light-gray mt-28 xs:mt-1">
        <div className=" pt-36 xs:pt-20 pb-28 xl:px-[90px] lg:px-[40px] px-5 2xl:max-w-[1440px] 2xl:mx-auto 2xl:px-0">
          <div className="flex justify-between items-center">
            <h2 className="text-[#0e0e0e] text-[42px] xs:text-[28px] font-normal font-nohemi capitalize">
              Our Products
            </h2>
            <div className="w-[120px] hidden h-12 sm:flex justify-center items-center bg-custom-gradient text-white text-base font-primary ">
              <Link href="/product">
              View All
              </Link>
             
            </div>
            <div className="xs:block hidden">
              <Link href="/product">
                <p className="hidden xs:block underline font-primary text-base font-normal text-light-black">
                  View all
                </p>
              </Link>
            </div>
          </div>
          <div className="grid gap-5 mt-14 xl:gap-5 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gridSize1">
            <ProductData
              initialLimit={10}
              mobileLimit={5}
              selectedCategory="All Products"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
