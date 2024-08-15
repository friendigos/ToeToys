import React from 'react';
import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOrganic from '@/components/Header/Menu/MenuOrganic';
import SliderOrganic from '@/components/Slider/SliderOrganic';
import Category from '@/components/Organic/Category';
import Banner from '@/components/Organic/Banner';
import productData from '@/data/Product.json';
import PopularProduct from '@/components/Organic/PopularProduct';
import BuyPack from '@/components/Organic/BuyPack';
import FlashSale from '@/components/Organic/FlashSale';
import Benefit from '@/components/Home1/Benefit';
import Footer from '@/app/Footer';
import ModalNewsletter from '@/app/ModalNewsletter';

export default function HomeOrganic() {
	return (
		<>
			<div id="header" className="relative w-full">
				<MenuOrganic />
				<SliderOrganic />
			</div>
			<Category />
			<Banner />
			<PopularProduct data={productData} start={0} limit={8} />
			<FlashSale />
			<BuyPack />
			<Benefit props="md:pb-20 pb-10 mt-20" />
			{/* <Footer /> */}
			<ModalNewsletter />
		</>
	);
}
