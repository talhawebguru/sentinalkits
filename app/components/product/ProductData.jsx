"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import productData from "@/data/ProductList";
import ratingStar from "@/public/images/ratingStar.svg";


const ProductData = ({
  initialLimit,
  selectedCategory,
  mobileLimit,
}) => {
  const [limit, setLimit] = useState(initialLimit);

  useEffect(() => {
    const updateLimitBasedOnScreenSize = () => {
      if (window.innerWidth <= 640) {
        // Mobile screen size (<= 640px)
        setLimit(mobileLimit);
      } else {
        setLimit(initialLimit);
      }
    };

    updateLimitBasedOnScreenSize();

    window.addEventListener("resize", updateLimitBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenSize);
    };
  }, [initialLimit, mobileLimit]);

  const filteredProducts =
    selectedCategory === "All Products"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const displayedProducts = limit
    ? filteredProducts.slice(0, limit)
    : filteredProducts;
  return (
    <>
        {displayedProducts.map((item, index) => (
          <div
            className="bg-white shadow-xl   hover:shadow-2xl  flex flex-col  pb-4  justify-center px-5"
            key={index}
          >
          <Link  href={`/product/${item.name.toLowerCase().replace(/ /g, '-')}`}>
            <Image
              src={item.url}
              alt={item.name}
              className="mx-auto w-full h-64  "
             
            />
            </Link>
            <div className="">
              <h2 className="text-[#0e0e0e] text-base font-normal font-primary capitalize mt-4 h-12">
                {item.name}
              </h2>
              <div className="mt-1">
                <Image src={ratingStar} alt="rating" />
              </div>
              <div className="text-[#0e0e0e] text-base font-normal font-primary mt-3">
                <p>REF CHK-007</p>
              </div>
              <div className=" mt-5 rounded-lg h-[42px] flex justify-center items-center bg-custom-gradient text-white text-base font-normal font-primary">
               <Link href={`/product/${item.name.toLowerCase().replace(/ /g, '-')}`}>
               <p>View Detail</p>
               </Link>
                
              </div>
            
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductData;
