import React from 'react'
import Banner from '../components/common/Banner'
import PageNameBanner from '../components/common/PageNameBanner'
import PageBannerImg from "@/public/images/productBannerImg.svg"
import ProductComplete from '../components/product/ProductComplete'

export const metadata = {
  title: "SentinalKits /Products",
  description: "Sentinal kits Medical Care Products",
};

const page = () => {
  return (
    <>
        <PageNameBanner title="Our Product" image={PageBannerImg}/>
        <ProductComplete/>
        <Banner/>
    </>
  )
}

export default page