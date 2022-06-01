import React, { useState } from 'react'
import Dropdown from '../Dropdown'
import "./navbar.css"
import { VscHome,VscSymbolFile } from 'react-icons/vsc'
import { FcAbout } from 'react-icons/fc'
import { FaAward } from 'react-icons/fa'
import { CgToolbox } from 'react-icons/cg'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import DropAbout from '../DropAbout'


const  Navbar = () => {
  const[click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [dropabout, setDropAbout] = useState(false)

  const handleClick = () => setClick(!click)
 
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
  var onMouse =()=>{
    if(window.innerWidth < 960){
      setDropAbout(false)
    }else{
      setDropAbout(true)
    }
  };
  
    var onMouseL =()=>{
      if(window.innerWidth < 960){
        setDropAbout(false)
      }else{
        setDropAbout(false)
      }
    }
  
  
  return (
    <>
        <nav className='navbar'>
            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <div className='list'>
              <ul className={click ? 'text-list active' : 'text-list'}>
                <li className='smallText'><VscHome className='icons'/>Home</li>
                <li className='smallText'
                 onMouseEnter = {onMouseEnter}
                 onMouseLeave = {onMouseLeave }>
                <VscSymbolFile className='icons'/>Quick Links {dropdown && <Dropdown/>}</li>
                <li className='smallText'
                onMouseEnter = {onMouse}
                onMouseLeave = {onMouseL }><FcAbout className='icons'/>About {dropabout && <DropAbout/>}</li>
                <li className='smallText'><VscSymbolFile className='icons'/>News&Events</li>
                <li className='smallText'><FaAward className='icons'/>Candidates/Stakeholders</li>
                <li className='smallText'><FaAward className='icons'/>FOI</li>
                <li className='smallText'><CgToolbox className='icons'/>Archives</li>
                <li className='smallText'><AiOutlineCloudDownload className='icons'/>Intranet</li>
                <li className='smallText'><CgToolbox className='icons'/>Mail</li>
              </ul>
            </div>
        </nav>
    </>
  
    )
}

export default Navbar;

