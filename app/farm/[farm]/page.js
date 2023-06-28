'use client'

import '../../../style/farm-global.css';

import FarmBanner from "@/components/farm-banner";
import Post from '@/components/post';
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetch-data";

const FarmHomePage = ({ params }) => {
 const [farms, setFarms] = useState(false);
 const [farm, setFarm] = useState(false);
 const [cattles, setCattles] = useState(false);
 const [categories,setCategories]=useState(false);
 useEffect(() => {
  fetchData(setFarms, 'BestSeller')
  fetchData(setCattles, 'BestDeal')
 }, [])
 useEffect(() => {
  if (farms) {
   farms.forEach(farm => {
    if (farm.id == params.farm) {
     setFarm(farm);
    }
   })
  }
 }, [farms])
 useEffect(() => {
  if (cattles) {
   let tCategories = [];
   cattles.forEach(cattle => {
    if (!tCategories.includes(cattle.category)) {
     tCategories.push(cattle.category);
    }
   })
   setCategories(tCategories);
  }
 }, [cattles])
 return (
  <>
   {
    farm ?
     <>
      <FarmBanner backgroundImage={farm.image}>
       {farm.title}
      </FarmBanner>
      <div className='grid'>
       {
        categories ?
         categories.map(category => {
          return (
           <>
            <div className='header'>{category}</div>
            {
             cattles ?
              cattles.map(cattle => {
               if (cattle.category === category&&cattle.farm==params.farm) {
                return (
                 <Post id={cattle.id} collection='best-deal'>
                  {cattle}
                 </Post>
                )
               }
               return null
              })
              :
              <h1>Cattle is Loading...</h1>
            }
           </>
          )
         })
         :
         <h1>Category is Loading...</h1>
       }
      </div>
     </>
     :
     <h1>Farm is Loading...</h1>
   }
  </>
 );
}
export default FarmHomePage;