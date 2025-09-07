import React, { useState, useEffect } from 'react';
import { CarouselContainer, Slide, Image, TextOverlay, Title, WelcomeTextWrapper } from './styles'; // --- MODIFIED: Added WelcomeTextWrapper ---

import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';

const images = [
  { src: image1, text: 'Making your moment, Picture Perfect!' },
  { src: image2, text: 'Create Lasting Memories' },
  { src: image3, text: 'Capture Perfection' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <CarouselContainer>
      {/* --- ADDED: Welcome Text --- */}
      <WelcomeTextWrapper>
        Welcome to Klickks
      </WelcomeTextWrapper>
      {/* --- END ADDITION --- */}

      {images.map((image, index) => (
        <Slide key={index} $isActive={index === currentIndex}>
          <Image src={image.src} alt={`Slide ${index + 1}`} />
          <TextOverlay>
            <Title>{image.text}</Title>
          </TextOverlay>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;