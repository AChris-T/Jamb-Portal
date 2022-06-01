import React, { useState, useEffect } from 'react'
import SliderContent from './SliderContent'
import ImgSlider from "./ImgSlider"
import Arrow from './Arrow'
import Dot from './Dot'
import "./sly.css"

const len = ImgSlider.length - 1

function Slider() {
    const [activeIndex, setActiveIndex] =useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5100)
      return () => clearInterval(interval)
    }, [activeIndex]);
  return (
    <div className="containerFluid">
    <div className='sliderContainer'>
    <SliderContent activeIndex={activeIndex} ImgSlider={ImgSlider}/>
    <Arrow prevSlide={()=> setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)}
     nextSlide={()=> setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}/>
     <Dot activeIndex={activeIndex} ImgSlider={ImgSlider} onClick={(activeIndex) => setActiveIndex(activeIndex)}/>   
    </div>
    </div>
  )
}
export default Slider
