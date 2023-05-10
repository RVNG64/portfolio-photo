import React, { useState } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PhotoMosaic.css';

// Installation des modules Swiper
SwiperCore.use([Autoplay, Navigation, Pagination]);

const PhotoMosaic: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1683319344/DSC02904_arkwah_cnkd8w.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/golf-1_kogg40.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680025414/DSC01379-2_qpdmwp.jpg",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/lille-1_uunkfn.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680283551/DSC01138_pttpb6.jpg",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877945/regard-1_k595n9.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/tz-autour-du-v195169lo-1-compressed_zszysx.webp",
    "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680249277/DSC03167_fslekc.jpg",
  ];

  const captions = [
    "Alaia - On Dream",
    "Alaia",
    "Open de Golf - AB Rugby Pro",
    "Medhi",
    "Légende 5",
    "Légende 6",
    "Légende 7",
    "Légende 8",
    "Légende 9",
  ];

  const imageClick = (index: number) => {
    setSelectedImage(index);
  };

  return (
    <div className="photo-mosaic">

      {selectedImage !== null && (
        <div className={`photo-mosaic__lightbox${selectedImage !== null ? ' open' : ''}`} onClick={() => setSelectedImage(null)}>
          <div className="photo-mosaic__lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <img src={images[selectedImage]} alt={`Image ${selectedImage}`} />
          </div>
          <div className={`photo-mosaic__caption${selectedImage !== null ? ' open' : ''}`}>{captions[selectedImage]}</div>
          <button className="photo-mosaic__close" onClick={() => setSelectedImage(null)}>Fermer</button>
          {selectedImage > 0 && <button className="photo-mosaic__prev" onClick={(event) => { event.stopPropagation(); setSelectedImage(selectedImage - 1); }}>&#8592;</button>}
          {selectedImage < images.length - 1 && <button className="photo-mosaic__next" onClick={(event) => { event.stopPropagation(); setSelectedImage(selectedImage + 1); }}>&#8594;</button>}
        </div>
      )}


      <Swiper spaceBetween={10} slidesPerView={5} navigation pagination={{ clickable: true }} speed={2000} autoplay={{ delay: 5000, disableOnInteraction: false }} className="photo-mosaic__swiper">
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={() => imageClick(index)}>
            <img src={image} alt={`Image ${index}`} style={{ height: "100%", width: "100%", objectFit: "cover", aspectRatio: "auto" }}/>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default PhotoMosaic;
