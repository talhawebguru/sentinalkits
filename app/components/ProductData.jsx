"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Product1 from "@/public/images/product1.jpg";
import Product2 from "@/public/images/product2.jpg";
import Product3 from "@/public/images/product3.jpg";
import Product4 from "@/public/images/product4.jpg";
import Product5 from "@/public/images/product5.jpg";
import Product6 from "@/public/images/product6.jpg";
import Product7 from "@/public/images/product7.jpg";
import Product8 from "@/public/images/product8.jpg";
import Product9 from "@/public/images/product9.jpg";
import Product10 from "@/public/images/product10.jpg";
import Product11 from "@/public/images/product11.jpg";
import Product12 from "@/public/images/product12.jpg";
import Product13 from "@/public/images/product13.jpg";
import Product14 from "@/public/images/product14.jpg";
import Product15 from "@/public/images/product15.jpg";
import Product16 from "@/public/images/product16.jpg";
import Product17 from "@/public/images/product17.jpg";
import Product18 from "@/public/images/product18.jpg";
import Product19 from "@/public/images/product19.jpg";
import Product20 from "@/public/images/product20.jpg";
import Product21 from "@/public/images/product21.jpg";
import AddCart from "@/public/images/addCartIcon.svg";
import AddSave from "@/public/images/addSaveIcon.svg";

const productData = [
  {
    id: "1",
    name: "VULVAL TOILET CLEANING PACK",
    url: Product1,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "2",
    name: "SUTURE REMOVAL KIT",
    url: Product2,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "3",
    name: "SUTURING TRAY",
    url: Product3,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "4",
    name: "TRACHEOSTOMY CARE KIT",
    url: Product4,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "5",
    name: "REFRACTIVE SURGERY PACK",
    url: Product5,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "6",
    name: "Regular Procedure kit",
    url: Product6,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "7",
    name: "Renal dialysis on off kit",
    url: Product7,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "8",
    name: "Minor Lacerations Tray",
    url: Product8,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "9",
    name: "MOUTH CARE KIT",
    url: Product9,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "10",
    name: "perineal care tray",
    url: Product10,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "11",
    name: "I.V. START KIT",
    url: Product11,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "12",
    name: "LACERATION TRAY",
    url: Product12,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "13",
    name: "DEBRIDEMENT kit",
    url: Product13,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "14",
    name: "DRESSING KIT",
    url: Product14,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "15",
    name: "Hemodialysis on off kit",
    url: Product15,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "16",
    name: "CENTRAL LINE REMOVAL KIT",
    url: Product16,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "17",
    name: "CVC OFF KIT",
    url: Product17,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "18",
    name: "CVC ON KIT",
    url: Product18,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "19",
    name: "BLOOD COLLECTION",
    url: Product19,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "20",
    name: "AVF OFF KIT",
    url: Product20,
    category: "One-piece Colostomy Bag",
  },
  {
    id: "21",
    name: "AVF ON KIT",
    url: Product21,
    category: "One-piece Colostomy Bag",
  },
];

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
            className="bg-white shadow-lg  flex flex-col  pb-4  justify-center px-5"
            key={index}
          >
          <Link href='/product/singleP'>
            <Image
              src={item.url}
              alt={item.name}
              className="mx-auto w-full h-64 "
             
            />
            </Link>
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
    </>
  );
};

export default ProductData;
