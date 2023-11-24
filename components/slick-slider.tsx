import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './card';
import './slickslider.css'

const SlickSlider = () => {

  return (
    <Swiper
    pagination={{
  
      clickable: true,
    }}
    slidesPerView={2}
    spaceBetween={50}
    modules={[Pagination]}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1424: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
    className="mySwiper"
  >
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
    <SwiperSlide><Card/></SwiperSlide>
  </Swiper>
  );
};

export default SlickSlider;
