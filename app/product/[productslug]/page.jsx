"use client"
import React from 'react';
import { useState } from 'react';
import PageNameBanner from '../../components/PageNameBanner';
import Banner from '../../components/Banner';
import BackButton from '@/app/components/product/BackButton';
import ProductMainDetail from '@/app/components/product/ProductMainDetail';
import RelatedProducts from '@/app/components/product/RelatedProducts';
import Popup from '@/app/components/product/Popup';
import PageBannerImg from '@/public/images/productBannerImg.svg';
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import productData from '@/data/ProductList';



export default  function ProductDetails(){
    // const pathname = usePathname()
    // console.log(pathname)
    // const product= productData.find((p)=>'/product/'+p.name.toLowerCase().replace(/ /g, '-')== pathname)
    // console.log(product)
    

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    return (
        <>  
            <PageNameBanner title="" image={PageBannerImg} />
            <BackButton />
            <ProductMainDetail openPop={setIsPopupOpen}   />
            <RelatedProducts />
            <Banner />
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
};


// 'use client'
 
// import { useEffect } from 'react'
// import { usePathname, useSearchParams } from 'next/navigation'
 
// export default function NavigationEvents() {
//   const pathname = usePathname()
//   const searchParams = useSearchParams()
 
//   useEffect(() => {
//     const url = `${pathname}?${searchParams}`
//     console.log(url)
//     // You can now use the current URL
//     // ...
//   }, [pathname, searchParams])
 
// }

