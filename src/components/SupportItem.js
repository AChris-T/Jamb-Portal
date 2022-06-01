import React from 'react'
import "./support.css"
import { VscLayers }from "react-icons/vsc"
import { BsGlobe }from "react-icons/bs"

const SupportItem = () => {
  return (
    <div className='support'>
      <div className="surmon">
      <span className="theme">
        <VscLayers className='newIcon'/> <h4 className='tips'>QUICK LINKS</h4>
      </span>
        <div className="infont">
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/gradcap5.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>JAMB SERVICE WEBSITE (E-FACILITY)</h3>
              <a href='@' className='smallTxT'>Access Candidate login page and payment for online service</a>
            </div>          
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/syllabus1.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>SYLLABUS SYSTEM (IBASS)</h3>
              <a href='@' className='smallTxt'>Access Jamb integrated Brochure and  syllabus system</a>
            </div>            
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/support5.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>CENTRAL ONLINE SUPPORT SYSTEM</h3>
              <a href='@' className='smallTxt'>Access Ticketing System for complains, enquires and helpline</a>
            </div>          
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/gradcap3.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>CENTRAL ADMISSIONS PROCESSING SYSTEM
              </h3>
              <a href='@' className='smallTxTt'>Access Central Admissions Processing System</a>
            </div>          
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/centre2.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>CENTRES MANAGEMENT SYSTEM(E-FACILITY)</h3>
              <a href='@' className='smallTxT'>Acess JAMB Centre Management System</a>
            </div>          
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/stock4.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>JAMB SERVICE WEBSITE(E-FACILITY)</h3>
              <a href='@' className='smallTxT'>Access JAMB Stock Management System</a>
            </div>          
            <div className="infor">
              <div className="Btn">
                <img className='fluid' src="https://www.jamb.gov.ng/assets/global/img/QLimg/report4.png" alt="myPic" />
                <div className="over">
                <BsGlobe className='iconic'/>
                </div>
              </div>
              <h3 className='impo'>JAMB CENTRAL REPORTING SYSTEM</h3>
              <a href='@' className='smallTxt'>Access JAMB Central Reporting System</a>
            </div>          
        </div>
     </div>
    </div>
  )
}

export default SupportItem