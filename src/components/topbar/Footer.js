import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="smsFooter">
            <div className="Box1">
              <h3 className='textField'>FOLLOW US ON</h3>
            </div>
            <div className="Box2">
            <h3 className='textField'>CONTACT US</h3>
             <a href="https://www.jamb.gov.ng/support" Using target="_blank" without rel="noreferrer"><img src="https://www.jamb.gov.ng/img/chat_Us.png" alt="pic"/></a>
            </div>
            <div className="Box3">
              <h3 className='textField'>CONTACTS</h3>
              <h5 className='xbn'>Phone: +2348166335513, +2348123658955</h5>
              <h5 className='xbn'>For support: <a href="@"className='todo'>Raise a ticket through our online ticket system</a></h5>
                <div className='Subscribe'>
                    <h2 className='smallSub'>Subscribe to JamBulletin</h2>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer
