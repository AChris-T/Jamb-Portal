import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import  './dropdown.css'
import { Link } from 'react-router-dom' 

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) =>{
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
export default Dropdown