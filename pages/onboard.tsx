import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { Features } from '../constants'
import { Paragraph } from '../assets/styles'
import styles from '../styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BaseButton } from '../assets/styles/Button/styled'
import { theme } from '../assets/variables'


const FeatureSlide = styled.div`
  #features .swiper-wrapper {
    align-items: center;
  }

  #features .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: ${theme.grey[500]}
  }

  #features .swiper-pagination-bullet-active {
    background: linear-gradient(268.86deg, #BA68C8 0%, #F79240 100%);
  }
`;


export default function Onboard() {
  return (
    <>
      <Head>
        <title> Tickits | Features </title>
        <link rel="icon" type='image/png' href="/logo.png" />
      </Head>
      <FeatureSlide>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          id='features'
        >
          {Features.map(feature => (
            <SwiperSlide key={feature.id}>
              <main className={styles.main} style={{'padding': '7rem 0 3rem 0'}}>
                <div>
                  <Image 
                    src={feature.image}
                    width={feature.width} 
                    height={feature.height}
                    priority
                    alt='Features Logo' 
                  />
                </div>
                <Paragraph margin='2rem 0' family='secondary' align='center' width='80%'>
                  {feature.content}
                </Paragraph>
              </main>
            </SwiperSlide>
          ))}
        </Swiper>
      </FeatureSlide>

      <BaseButton variant='solid' width='270px' margin='2.5rem auto' family='secondary'> 
        Book Now 
      </BaseButton>
     
    </>
  );
}
