import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Header.css';

SwiperCore.use([Autoplay, Navigation, Pagination, EffectCube]);

const Header = () => {
  return (
    <div className="header">
      <Swiper spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} effect={'cube'} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94}} speed={2000} autoplay={{ delay: 5000, disableOnInteraction: false }} >
        <SwiperSlide>
          <div className="slide" style={{backgroundImage: "url('https://res.cloudinary.com/dvzsvgucq/image/upload/v1683319344/DSC02904_arkwah_cnkd8w.webp')"}} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{backgroundImage: "url('https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp')"}} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{backgroundImage: "url('https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/golf-1_kogg40.webp')"}} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{backgroundImage: "url('https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/lille-1_uunkfn.webp')"}} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide" style={{backgroundImage: "url('https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877945/regard-1_k595n9.webp')"}} />
        </SwiperSlide>
      </Swiper>
      <div className="header-content">
        <h1>Photographe Pays Basque</h1>
      </div>
    </div>
  );
};

export default Header;
