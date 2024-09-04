import React from 'react'
import Banner from '../components/Banner'
import PageNameBanner from '../components/PageNameBanner'
import PageBannerImg from "@/public/images/productBannerImg.svg"
import ProductComplete from '../components/product/ProductComplete'

export const metadata = {
  title: "SentinalKits /Products",
  description: "Sentinal kits Medical Care Products",
};

const page = () => {
  return (
    <>
        <PageNameBanner title="" image={PageBannerImg}/>
        <ProductComplete/>
        <Banner/>
    </>
  )
}

export default page