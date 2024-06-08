// src/components/Loading.js
import React, { useState, useEffect } from 'react';
import Potato1 from '../Assets/Loading/1.png';
import Potato2 from '../Assets/Loading/2.png';
import Potato3 from '../Assets/Loading/3.png';
import Potato4 from '../Assets/Loading/4.png';
import Potato5 from '../Assets/Loading/5.png';

const images = [Potato1, Potato2, Potato3, Potato4, Potato5];

const Loading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <img 
        className='w-50'
        src={images[currentImageIndex]} 
        alt="potato-loading" />
    </div>
  );
};

export default Loading;
