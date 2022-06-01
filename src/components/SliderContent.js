import React from 'react'


function SliderContent ({activeIndex, ImgSlider}) {
  return (
       <section>
       {ImgSlider.map((slide, index) =>(
           <div key={index} className={index===activeIndex ? "slides active" : "inactive"}>
            <img className='sliderImage' src={slide.urls} alt={slide.urls} />
            <h2 className='slideTitle'>{slide.title}</h2>
            <h3 className='slideText'>{slide.desc}</h3>
           </div>
       ))}
      </section>
      
  )
}

export default SliderContent;