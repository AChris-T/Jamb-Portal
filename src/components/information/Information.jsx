import React, { useEffect } from 'react'
import './information.css'
import { CgToolbox } from 'react-icons/cg'

const Information = () => {

        useEffect(() => {
            window.addEventListener('scroll', isSticky);
            return () => {
                window.removeEventListener('scroll', isSticky);
            };
        });
               const isSticky = (e) => {
                    const contain = document.querySelector('.contain');
                    const scrollTop = window.scrollY;
                    scrollTop >= 150 ? contain.classList.add('is-sticky') : contain.classList.remove('is-sticky');
                };
  return (
    <div className='contain'>
        <div className="smallContain">
            <ul className="text">
                <li className="smalltext"><CgToolbox className='icons'/> CAPS(Candidates)E-Facility</li>
                <li className="smalltext"><CgToolbox className='icons'/> CAPS(Institution)</li>
                <li className="smalltext"><CgToolbox className='icons'/> Ticket/Support</li>
                <li className="smalltext"><CgToolbox className='icons'/> E-Facility</li>
                <li className="smalltext"><CgToolbox className='icons'/> IBASS</li>
                <li className="smalltext"><CgToolbox className='icons'/> 2022 UTME slip result</li>
            </ul>
        </div>
    </div>
  )
}

export default Information
