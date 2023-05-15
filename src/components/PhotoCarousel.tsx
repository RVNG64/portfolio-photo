import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './PhotoCarousel.css';

const PhotoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationSpeedRef = useRef<number>(0.005);

  const createProjectPanel = (imageUrl: string, maxWidth: number, maxHeight: number) => {
    return new Promise<THREE.Mesh>((resolve) => {
      const loader = new THREE.TextureLoader();
      const texture = loader.load(imageUrl, () => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
          const aspectRatio = img.width / img.height;
          const width = maxWidth;
          const height = maxWidth / aspectRatio;

          const geometry = new THREE.PlaneGeometry(width, height);
          const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
          const panel = new THREE.Mesh(geometry, material);
          resolve(panel);
        };
      });
    });
  };

  const positionProjectPanel = (panel: THREE.Mesh, angle: number, distance: number, yOffset: number, rotationY: number) => {
    panel.position.x = Math.cos(angle) * distance;
    panel.position.y = yOffset;
    panel.position.z = Math.sin(angle) * distance;
    panel.rotation.y = rotationY;

    const target = new THREE.Vector3(0, yOffset, 0);
    const direction = target.clone().sub(panel.position).normalize();
    panel.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
  };

  const onDocumentMouseMove = (event: MouseEvent) => {
    updateRotationSpeed(event.clientX);
  };

  const updateRotationSpeed = (clientX: number) => {
    const centerX = window.innerWidth / 2;
    const distanceFromCenter = Math.abs(centerX - clientX);
    const speed = 0.01 + (distanceFromCenter / centerX) * 0.01;
    rotationSpeedRef.current = speed;
  };

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      document.addEventListener('mousemove', onDocumentMouseMove);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });

      renderer.setSize(width, height);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      containerRef.current.appendChild(renderer.domElement);

      const light = new THREE.PointLight(0xffffff, 1, 0);
      light.position.set(0, 0, 10);
      scene.add(light);

      const projectImages = [
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083431/dsc09704-2-copier_l4d1cc.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1682877944/singer_1__wiitrw.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150872/dsc08521-copier_gbkgw4.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150872/dsc08643-copier_dfwtu8.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684083448/dsc00545-copier_lik3lb.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150884/dsc08904-copier_pc36hq.webp",
        "https://res.cloudinary.com/dvzsvgucq/image/upload/v1684150881/dsc01437-copier_a3qlrq.webp",
      ];

      const distance = 3;
      const angleStep = (2 * Math.PI) / projectImages.length;
      const loadPanels = async () => {
        const panelPromises = projectImages.map((imageUrl) =>
          createProjectPanel(imageUrl, 2, 1.5)
        );

        const panels = await Promise.all(panelPromises);

        camera.position.z = 5;

        let yOffset = 0;
        panels.forEach((panel, index) => {
          const rotationY = angleStep * index;
          positionProjectPanel(panel, rotationY, distance, yOffset, rotationY);
          scene.add(panel);
        });
      };

      loadPanels();

      const animate = () => {
        requestAnimationFrame(animate);
        scene.rotation.y += rotationSpeedRef.current;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
        document.removeEventListener('mousemove', onDocumentMouseMove);
      };
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return <div className="photo-carousel-container" ref={containerRef}></div>;
};

export default PhotoCarousel;
