'use client'

import Fragment from "@/components/fragment";

import { useState, useEffect } from "react";

import { fetchData } from "@/lib/fetch-data";

const HomePage = () => {
	const [bestDeal, setBestDeal] = useState(false)
	const [popularItems, setPopularItems] = useState(false)
	const [bestSeller, setBestSeller] = useState(false)
	useEffect(() => {
		fetchData(setBestDeal, 'BestDeal');
		fetchData(setPopularItems, 'PopularItems');
		fetchData(setBestSeller, 'BestSeller');
	}, [])
	return (
		<>
			<Fragment imageSrc='best-deal.png' title='Find your best deal here!' collection='best-deal'>
				{bestDeal}
			</Fragment>
			<Fragment imageSrc='transparent-popular.png' title='Find popular items here!' collection='popular-items'>
				{popularItems}
			</Fragment>
			<Fragment imageSrc='best-seller.png' title='Find best seller farms here!' collection='best-seller'>
				{bestSeller}
			</Fragment>
		</>
	);
}
export default HomePage;