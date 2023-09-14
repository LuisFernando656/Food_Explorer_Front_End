import { Container } from "./styles";

import { useResponsive } from "../../hooks/useResponsive";

import { FiChevronRight , FiChevronLeft} from 'react-icons/fi'
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export function FoodSection({data, children}) {
  const { isDesktop } = useResponsive()
  const [swiper, setSwiper] = useState(null);
  const [buttonRight, setButtonRight] = useState(true)
  const [buttonLeft, setButtonLeft] = useState(false)

  const handleSlidePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  function hideButtonright() {
    setButtonRight(false)
  }

  function hideButtonLeft() {
    setButtonLeft(false)
  }

  function showButtonrightandLeft() {
    setButtonRight(true)
    setButtonLeft(true)
  }

  return (
    <Container>
      <h3>{data.name}</h3>
      <div>

        <div>
          {isDesktop ?
            <Swiper 
            slidesPerView={'auto'}
            onSwiper={setSwiper}
            spaceBetween={25} 
            centeredSlides={false}
            onReachEnd={hideButtonright}
            onReachBeginning={hideButtonLeft}
            onFromEdge={showButtonrightandLeft}
            freeMode={true}
            >
              {children}
            </Swiper>
         : <div>{children}</div> }
        </div>

        {isDesktop && buttonLeft && (
          <div className="div-button-left">
            <button onClick={handleSlidePrev}>
              <FiChevronLeft />
            </button>
          </div>
        )}
        {isDesktop && buttonRight && (
          <div className="div-button-right"> 
            <button onClick={handleSlideNext}>
              <FiChevronRight />
            </button>
          </div>
        )}
      </div>
    </Container>
  );
}