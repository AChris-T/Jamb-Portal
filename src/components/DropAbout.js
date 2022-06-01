import React, { useState } from 'react'
import { MenuAbout } from './MenuAbout'
import Subdrop from './Subdrop'
import  './dropabout.css'
import { Link } from 'react-router-dom' 
import {MdKeyboardArrowRight} from "react-icons/md"

function DropAbout() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    const [subdrop, setDropdown] = useState(false)

    var onMouseEnter = ()=>{
        if(window.innerWidth < 960) {
          setDropdown(false)
        }else{
          setDropdown(true);
        }
      }; 
      var onMouseLeave = ()=>{
        if(window.innerWidth < 960) {
          setDropdown(false)
        }else{
          setDropdown(false);
        }
      }; 
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-men clicked' : 'dropdown-men'}>
            <ul className='subdown'>
            <li className='down'
            onMouseEnter = {onMouseEnter}
            onMouseLeave = {onMouseLeave }>
            JAMB Act <MdKeyboardArrowRight className='icon'/>{subdrop && <Subdrop/>}</li>
            </ul>
                {MenuAbout.map((item, index) =>{
                    return (
                        <li key={index} className='test'>
                            <Link className={item.cName} to={item.Path} onClick={() => setClick(false)}>{item.tittle}</Link> 
                        </li>
                    )
                } )}
            </ul>
        </>
    )
}
export default DropAbout