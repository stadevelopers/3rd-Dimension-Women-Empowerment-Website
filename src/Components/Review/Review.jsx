
import React from 'react';
import './Review.css'
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";



import slider_image1 from "../Assets/gallery1.jpg";
import slider_image2 from "../Assets/gallery2.jpg";
import slider_image3 from "../Assets/gallery3.jpg";
import slider_image4 from "../Assets/gallery4.jpg";
import slider_image5 from "../Assets/gallery5.jpg";
import slider_image6 from "../Assets/gallery6.jpg";
import slider_image7 from "../Assets/gallery7.jpg";
import slider_image8 from "../Assets/gallery8.jpg";
import slider_image9 from "../Assets/gallery9.jpg";
import slider_image10 from "../Assets/gallery10.jpg";
import slider_image11 from "../Assets/gallery11.jpg";
import slider_image12 from "../Assets/gallery12.jpg";
import slider_image13 from "../Assets/gallery13.jpg";
import slider_image14 from "../Assets/gallery14.jpg";
import slider_image15 from "../Assets/gallery15.jpg";
import slider_image16 from "../Assets/gallery16.jpg";
import slider_image17 from "../Assets/gallery17.jpg";
import slider_image18 from "../Assets/gallery18.jpg";



const Review = () => {
  return (
    <div className="containers" id='gallery'>
      <h1 className="secTitle">Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_containers"
      >
        <SwiperSlide>
          <img src={slider_image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image15} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image16} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image17} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image18} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_image14} alt="slide_image" />
        </SwiperSlide>
        
        

        <div className="slider-controlers">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-paginations"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Review