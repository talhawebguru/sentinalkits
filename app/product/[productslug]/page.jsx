"use client"
import React from 'react';
import { useState } from 'react';
import PageNameBanner from '../../components/common/PageNameBanner';
import Banner from '../../components/common/Banner';
import BackButton from '@/app/components/product/BackButton';
import ProductMainDetail from '@/app/components/product/ProductMainDetail';
import RelatedProducts from '@/app/components/product/RelatedProducts';
import Popup from '@/app/components/product/Popup';
import PageBannerImg from '@/public/images/productBannerImg.svg';



export default  function ProductDetails(){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    return (
        <>  
            <PageNameBanner title="Our Product" image={PageBannerImg} />
            <BackButton />
            <ProductMainDetail openPop={setIsPopupOpen}   />
            <RelatedProducts />
            <Banner />
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </>
    );
};
