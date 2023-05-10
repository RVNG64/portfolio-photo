import React, { useState } from 'react';
import Gallery, { PhotoProps } from 'react-photo-gallery';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Image {
  src: string;
  width: number;
  height: number;
}

const IMAGES: Image[] = [
  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1683319344/DSC02904_arkwah_cnkd8w.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/golf-1_kogg40.webp",
    width: 4,
    height: 3
  },

  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877943/lille-1_uunkfn.webp",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1680283551/DSC01138_pttpb6.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877945/regard-1_k595n9.webp",
    width: 3,
    height: 4
  },
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (event: React.MouseEvent, { photo, index }: { photo: PhotoProps; index: number; }) => {
    setCurrentImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={IMAGES} onClick={openLightbox} columns={3} />
      <Modal
        isOpen={isOpen}
        onRequestClose={closeLightbox}
        style={{
          content: {
            border: 'none', // Supprime le cadre
            overflow: 'visible', // Permet à l'image de déborder de la modale
            display: 'flex', // Centre l'image
            alignItems: 'center',
            justifyContent: 'center',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)', // Assombrit l'arrière-plan
          },
        }}
      >
        <Carousel
          showThumbs={false}
          selectedItem={currentImage}

        >
          {IMAGES.map((img, idx) => (
            <div key={idx} >
              <img src={img.src} alt={`Image ${idx}`} />
            </div>
          ))}
        </Carousel>
      </Modal>
    </div>
  );
};

export default ImageGallery;
