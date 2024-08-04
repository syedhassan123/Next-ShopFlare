// components/TrendingNowCarousel.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import 'swiper/css/pagination';
import trendingStyles from '@/app/styles/trending.module.css';
import layoutStyles from '@/app/styles/trending.module.css';
import { IoMdTrendingUp } from "react-icons/io";

const TrendingSection = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    // Fetch trending products
    const fetchTrendingProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6'); // Adjust limit as needed
        const data = await response.json();
        setTrendingProducts(data);
      } catch (error) {
        console.error('Error fetching trending products:', error);
      }
    };

    fetchTrendingProducts();
  }, []);

  return (
    <div className={layoutStyles.trendingNowContainer}>
      <div className={trendingStyles.titleContainer}>
        <h2 className={trendingStyles.sectionTitle}>Trending Now</h2>
        <IoMdTrendingUp className={trendingStyles.trendingIcon} />
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className={layoutStyles.swiper}
      >
        {trendingProducts.map((product) => (
          <SwiperSlide key={product.id} className={layoutStyles.swiperSlide}>
            <div className={trendingStyles.trendingCard}>
              <Image
              width={180}
              height={180}

                src={product.image}
                alt={product.title}
                className={trendingStyles.trendingCardImage}
              />
              <div className={trendingStyles.trendingCardTitle}>
                {product.title}
              </div>
              <div className={trendingStyles.trendingCardPrice}>
                ${product.price}
              </div>
              <button className={trendingStyles.trendingCardButton}>
              <Link href={`/product/${product.id}`} passHref>
            Buy Now
            </Link>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingSection;
