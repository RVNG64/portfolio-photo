import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Masonry from 'react-masonry-css';
import { Tilt } from 'react-tilt'
import './ImageGallery.css';

const IMAGES = [
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1683319344/DSC02904_arkwah_cnkd8w.webp", legend: 'Légende 1'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp", legend: 'Légende 2'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/golf-1_kogg40.webp", legend: 'Légende 3'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/lille-1_uunkfn.webp", legend: 'Légende 4'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680283551/DSC01138_pttpb6.jpg", legend: 'Légende 5'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877945/regard-1_k595n9.webp", legend: 'Légende 6'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/tz-autour-du-v195169lo-1-compressed_zszysx.webp", legend: 'Légende 7'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680249277/DSC03167_fslekc.jpg", legend: 'Légende 8'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680025414/DSC01379-2_qpdmwp.jpg", legend: 'Légende 9'},
];

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div style={{ padding: '50px', backgroundColor: '#f3f3f3' }}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {IMAGES.map((image, index) => (
          <Tilt className="Tilt" options={{ max : 15, scale: 1 }}>
            <img
              key={index}
              src={image.src}
              onClick={() => setSelectedImage(index)}
              onMouseOver={(e) => e.currentTarget.classList.add('image-hover-effect')}
              onMouseOut={(e) => e.currentTarget.classList.remove('image-hover-effect')}
              style={{
                width: '100%',
                cursor: 'pointer',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '5px 5px 15px rgba(0,0,0,0.3)',
                transition: '0.5s',
              }}
            />
          </Tilt>
        ))}
      </Masonry>
      {selectedImage !== null &&
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={() => setSelectedImage(null)}
          style={{
            content: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
              border: 'none',
              background: 'transparent',
              padding: 0,
              inset: '0px',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
            },
          }}
          shouldCloseOnOverlayClick={true}
        >
          <button onClick={() => setSelectedImage(null)} style={{ position: 'absolute', top: 20, right: 20, backgroundColor: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px' }}>X</button>
          <Carousel selectedItem={selectedImage} showThumbs={false} showStatus={false} infiniteLoop={true} useKeyboardArrows={true} onClickItem={() => setSelectedImage(null)} onClickThumb={() => setSelectedImage(null)} >
            {IMAGES.map((image, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img src={image.src} alt={`carousel-item-${index}`} style={{ maxHeight: '90vh', maxWidth: 'auto', objectFit: 'contain' }} />
                <p className="legend">{image.legend}</p>
              </div>
            ))}
          </Carousel>
        </Modal>
      }
    </div>
  );
};

export default ImageGallery;
