import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import image1 from "./Omegon_Brightsky_no_reddot_all_en.jpg";
import image2 from "./Slider_EN_5_Questions_all.jpg";
import image3 from "./Slider_EN_Guide_Kids_all.jpg";
import image4 from "./unistellar-evscope2_all_en.jpg";

const MyCarousel = () => (
    <div className="Slides"
    style={{ width: "800px", margin: "auto", padding: "30px"}}>
  <Carousel  plugins={['arrows', 'infinite', 
  {
      resolve: autoplayPlugin,
      options: {
      interval: 5000,
      }
    },
  ]}
  animationSpeed={1000}
  >
    <img src={image1} alt="slide"/>
    <img src={image2} alt="slide"/>
    <img src={image3} alt="slide"/>
    <img src={image4} alt="slide"/>
    
  </Carousel>
  </div>
);

export default MyCarousel;