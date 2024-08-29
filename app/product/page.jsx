import React from 'react'
import Banner from '../components/Banner'
import PageNameBanner from '../components/PageNameBanner'
import PageBannerImg from "@/public/images/productBannerImg.svg"
import ProductComplete from '../components/product/ProductComplete'

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