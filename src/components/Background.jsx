import React, { useEffect, useState } from 'react';
import { useStateContext } from '../context';
import Clear from '../assets/images/Clear.jpg';
import Cloudy from '../assets/images/Cloudy.webp';
import Rainy from '../assets/images/rainy.avif';
import Wind from '../assets/images/Wind.jpg';
import Fog from '../assets/images/fog.webp';
import Snow from '../assets/images/snow.avif';
import Stromy from '../assets/images/stromy.webp';
import Sunny from '../assets/images/sunny.jpg';

const Background = () => {
  const { weather } = useStateContext();
  const [images, setImages] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes('clear')) {
        setImages(Clear);
      } else if (imageString.toLowerCase().includes('cloud')){
        setImages(Cloudy);
      } else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower')){
        setImages(Rainy);
      } else if (imageString.toLowerCase().includes('wind')){
        setImages(Wind);
      } else if (imageString.toLowerCase().includes('fog')){
        setImages(Fog);
      } else if (imageString.toLowerCase().includes('snow')){
        setImages(Snow);
      } else if (imageString.toLowerCase().includes('stromy') || imageString.toLowerCase().includes('thunder')){
        setImages(Stromy);
      } else if (imageString.toLowerCase().includes('sunny')){
        setImages(Sunny);
      }
    }
  }, [weather]);

  return (
    <img src={images} alt='weather images' className='w-full h-screen fixed left-0 top-0 -z-[10]' />
  );
};

export default Background;
