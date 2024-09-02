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


const ProductDetails = ({params}) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>  
            <PageNameBanner title="" image={PageBannerImg} />
            <BackButton />
        <h1 className='text-[42px]'>{params.slug} </h1>
            <ProductMainDetail openPop={setIsPopupOpen}  />
            <RelatedProducts />
            <Banner />
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
};



export default ProductDetails;
