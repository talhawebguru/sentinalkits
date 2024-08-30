"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "@/public/images/product1.jpg";
import AddCart from "@/public/images/addCartIcon.svg";
import AddSave from "@/public/images/addSaveIcon.svg";

const productData = [
  {
    id: "1",
    name: "Intravitreal Kit",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "2",
    name: "Intravitreal Kit",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "3",
    name: "Intravitreal Kit",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "4",
    name: "Intravitreal Kit",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "5",
    name: "Intravitreal Kit",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
];

const ProductData = ({
  initialLimit,
  gridSizeL,
  gridSizeM,
  gridSizeS,
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
      <div
        className={`grid gap-10 justify-center mt-14 grid-cols-1 sm:grid-cols-${gridSizeS} md:grid-cols-${gridSizeM} lg:grid-cols-${gridSizeL} `}
      >
        {displayedProducts.map((item, index) => (
          <div
            className="bg-white shadow-lg  flex flex-col  pb-4  justify-center px-5"
            key={index}
          >
            <Image
              src={item.url}
              alt={item.name}
              className="mx-auto w-full h-64 "
             
            />
            <div className="">
              <h2 className="text-[#0e0e0e] text-xl font-normal font-nohemi capitalize mt-4">
                {item.name}
              </h2>
              <div className="mt-3 flex justify-between items-center">
                <div>
                  <p className="text-[#0F0F0F33] text-base font-normal font-nohemi capitalize line-through">45</p>
                  <p className="text-[#0F0F0F] text-2xl font-normal font-nohemi capitalize">32,-</p>
                </div>
                <div className="flex gap-1">
                    <Image src={AddCart} alt="Add Cart"/>
                    <Image src={AddSave} alt="Add Save"/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductData;
