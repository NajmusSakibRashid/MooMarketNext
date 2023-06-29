'use client'

import '../../../style/cattle-global.css'
import { useEffect, useState } from 'react';
import { fetchData } from '@/lib/fetch-data';

import FarmBanner from '@/components/farm-banner';
import ProductProfile from '@/components/product-profile';
import Image from 'next/image';
import BidSection from '@/components/bid-section';

const CattleHomePage = ({ params }) => {
  const [cattle, setCattle] = useState(false);
  const [product, setProduct] = useState(false);
  const [farms, setFarms] = useState(false);
  const [farm, setFarm] = useState(false);
  useEffect(() => {
    fetchData(setCattle, 'BestDeal');
    fetchData(setFarms, 'BestSeller');
  }, [])
  useEffect(() => {
    if (cattle) {
      cattle.forEach(element => {
        if (element.id == params.cattle) {
          setProduct(element);
        }
      });
    }
  }, [cattle])
  useEffect(() => {
    if (farms && product) {
      farms.forEach(element => {
        if (element.id == product.farm) {
          setFarm(element);
        }
      })
    }
  }, [farms, product])
  return (
    <>
      {
        farm ?
          <FarmBanner backgroundImage={farm.image}>
            {farm.title}
          </FarmBanner>
          :
          <>Loading...</>
      }
      {
        product?
        <div className="profile-image-info">
          <Image className='profile-image' src={`/best-deal/${product.image}`} width={300} height={400} alt='cow profile image' />
          <ProductProfile>
            {product}
          </ProductProfile>
          <BidSection/>
        </div>
        :
        <>Loading...</>
      }
    </>
  );
}
export default CattleHomePage;