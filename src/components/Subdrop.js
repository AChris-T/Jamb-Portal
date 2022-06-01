import React, { useState } from 'react'
import { SubAbout } from './SubAbout'
import  './subdrop.css'
import { Link } from 'react-router-dom' 

function Subdrop() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <ul onClick={handleClick} className={click ? 'subdrop-menu clicked' : 'subdrop-menu'}>
                {SubAbout.map((item, index) =>{
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
export default Subdrop;