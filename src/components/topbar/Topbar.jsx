import React from 'react'
import "./topbar.css"
import NIG from "../../assests/banner.png"

const Topbar = () => {
  return (
    <div className='container'>
            <img className='imgContainer' src={NIG} alt="Nig" width={1100}/>
    </div>
  )
}

export default Topbar