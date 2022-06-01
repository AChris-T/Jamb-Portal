import React from 'react'

function Dot({activeIndex, onClick, ImgSlider}) {
  return (
    <div className='all-dots'>
       {ImgSlider.map((slide, index) => (
         <span key={index} className = {`${activeIndex === index ? "dot active-dot" : "dot"}`}
         onClick={() => onClick(index)}
         ></span>
       ))}
    </div>
  )
}

export default Dot;
