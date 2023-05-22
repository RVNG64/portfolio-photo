import React, { useState } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Masonry from 'react-masonry-css';
import { Tilt } from 'react-tilt'
import './ImageGallery.css';
import { Fade } from 'react-awesome-reveal';

const IMAGES = [
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1683319344/DSC02904_arkwah_cnkd8w.webp", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683522/DSC08658_Copier_2_vjn8af.jpg", legend: 'Utopia - Lille 3000'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083429/DSC03881_Copier_aykeqj.webp", legend: 'Cécile Lena'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083428/INSTAGRAM_Tryptique_JCPieri-201018-085223_Copier_jmrcyt.webp", legend: 'Nomad - Sidi Larbi Cherkaoui'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083431/dsc09704-2-copier_l4d1cc.webp", legend: 'MasterClass - Fúria - Lia Rodrigues'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683652/DSC03662_Copier_de6khr.jpg", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877945/regard-1_k595n9.webp", legend: 'Deuz'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/tz-autour-du-v195169lo-1-compressed_zszysx.webp", legend: "L'Equipe 21"},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc00544-copier_nxgouj.webp", legend: '002'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083433/dsc05918-copier_jrcv7a.webp", legend: "L'étoffe de nos rêves - Sandrine Anglade & Collectif Bilaka"},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc00218-copier_doyr1f.webp", legend: 'Nomad - Sidi Larbi Cherkaoui'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683651/DSC00763-2_Copier_yqga3z.jpg", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684766391/DSC09532_Copier_caaqty.jpg", legend: 'Open de Golf - AB Rugby Pro'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083449/dsc06986-copier_mn2jko.webp", legend: 'Orchestre Symphonique du Pays Basque'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc00166-copier_q0xnp1.webp", legend: 'Nomad - Sidi Larbi Cherkaoui'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083447/dsc00610-copier_b2n42u.webp", legend: 'Ikus - Alaia'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083434/dsc02556-copier_awwazq.webp", legend: 'MasterClass - Ballet Jazz Montréal'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083433/dsc00668-copier_k5wqxh.webp", legend: 'Ikus - Alaia'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083427/Mis%C3%A9rables_Copier_naw9tt.webp", legend: 'Les Misérables - Chloé Bonifay et Lazare Herson-Macarel'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083429/dsc06680-copier_vzcqq4.webp", legend: 'Orchestre Symphonique du Pays Basque'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150885/ferrari2-copier_fjamtq.webp", legend: 'Open de Golf'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083429/DSC02740_Copier_zk8z3k.webp", legend: '005'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150884/dsc08904-copier_pc36hq.webp", legend: '006'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150873/dsc08447-copier_amk1jt.webp", legend: '008'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150869/dsc09955-copier_obriwz.webp", legend: '009'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083449/dsc00068-copier_sfyvny.webp", legend: '010'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083434/dsc09617-copier_j0tq6q.webp", legend: '011'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083433/dsc04362-copier_mgk0pq.webp", legend: '012'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083426/DSC09205_Copier_rqbo7f.webp", legend: '013'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083427/DSC09557_Copier_aslyy3.webp", legend: '014'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083432/dsc09670-copier_hwjf4a.webp", legend: '015'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083426/furia_Copier_klc0gs.webp", legend: '016'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083433/dsc05953-copier_cisbxn.webp", legend: '017'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150884/dsc01094-copier_qh7mkt.webp", legend:'018'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150884/ferrari_dckwjl.webp", legend: '019'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683522/DSC08658_Copier_2_vjn8af.jpg", legend: '020'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683652/DSC03526_Copier_rtmrwd.jpg", legend: '021'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683653/DSC02955_Copier_abxcco.jpg", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150885/dsc00098-copier_iniey4.webp", legend: 'Pottoka - AB Rugby Pro'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150885/dsc08659-copier_dbb27z.webp", legend: 'Open de Golf'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150873/dsc08432-copier_qnaaxz.webp", legend: 'Kim Simonsson - Moss People'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683525/DSC08643_Copier_2_xbguxx.jpg", legend: 'Utopia - Lille 3000'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683653/DSC02890_Copier_x8hepf.jpg", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684683653/DSC01145_Copier_qm9fld.jpg", legend: 'Alaia - On Dream'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150872/dsc08611-copier_sz85yn.webp", legend: 'Lille'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150869/DSC00031_Copier_daj4lf.webp", legend: 'Ikus - Alaia'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc06388-copier_yvq25k.webp", legend: 'Conférence Claire Diterzi'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc00281-copier_eblu4p.webp", legend: 'Les Misérables - Chloé Bonifay et Lazare Herson-Macarel'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc06603-copier_hhp5pk.webp", legend: 'Orchestre Symphonique du Pays Basque'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083425/DSC06322_Copier_swsygq.webp", legend: 'Deuz'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083426/DSC03900_Copier_gtvevt.webp", legend: 'Deuz'},
  {src: "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083425/DSC06317_Copier_skoaka.webp", legend: 'Deuz'},
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
      <Fade direction="up" className='mosaic-button-container'>
        <button className='mosaic-button'>
          <a href="/contact">Contact</a>
        </button>
      </Fade>
    </div>
  );
};

export default ImageGallery;
