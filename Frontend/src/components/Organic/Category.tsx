'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

const Category = () => {
	const router = useRouter();

	const handleTypeClick = (type: string) => {
		router.push(`/shop/breadcrumb1?type=${type}`);
	};

	return (
		<>
			<div className="trending-block style-six md:pt-20 pt-10">
				<div className="container">
					<div className="heading3 text-center">Top Categories</div>
					<div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-8 mt-6">
						<Swiper
							spaceBetween={12}
							slidesPerView={2}
							navigation
							loop={true}
							modules={[Navigation, Autoplay]}
							breakpoints={{
								576: {
									slidesPerView: 3,
									spaceBetween: 12,
								},
								768: {
									slidesPerView: 4,
									spaceBetween: 20,
								},
								992: {
									slidesPerView: 5,
									spaceBetween: 20,
								},
								1290: {
									slidesPerView: 5,
									spaceBetween: 50,
								},
							}}
							className="h-full">
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('vegetables')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/category-organic1.png'}
											width={1000}
											height={1000}
											alt="outerwear"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Vegetables</span>
										<span className="text-secondar2"> (12)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('fruit')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/category-organic3.png'}
											width={1000}
											height={1000}
											alt="clothes"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Fruits</span>
										<span className="text-secondar2"> (10)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('meat')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/beverages.jpeg'}
											width={1000}
											height={1000}
											alt="swimwear"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Beverages</span>
										<span className="text-secondar2"> (25)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('meat')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/bakery.jpeg'}
											width={1000}
											height={1000}
											alt="sets"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Bakery Products</span>
										<span className="text-secondar2"> (11)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('vegetables')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/iceCreams.jpeg'}
											width={1000}
											height={1000}
											alt="accessories"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Ice-Creams</span>
										<span className="text-secondar2"> (15)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('drinks')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/chocolates.jpeg'}
											width={1000}
											height={1000}
											alt="lingerie"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Chocolates</span>
										<span className="text-secondar2"> (18)</span>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div
									className="trending-item block relative cursor-pointer"
									onClick={() => handleTypeClick('fruit')}>
									<div className="bg-img rounded-full overflow-hidden">
										<Image
											src={'/images/collection/dairy.jpeg'}
											width={1000}
											height={1000}
											alt="lingerie"
											priority={true}
											className="w-full"
										/>
									</div>
									<div className="trending-name text-center mt-5 duration-500">
										<span className="heading5">Dairy Products</span>
										<span className="text-secondar2"> (8)</span>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</>
	);
};

export default Category;
