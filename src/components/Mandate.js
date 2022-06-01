import React from 'react'
import "./mandate.css"

const Mandate = () => {
  return (
    <div className='smallContainer'>
        <div className="sms">
            <h4 className='intro'>MEET THE REGISTRAR</h4>
            <div className="imgContain">
                <img className='imgBox' src="https://www.jamb.gov.ng/assets/global/img/Registrar.png" alt="jam" width={400} height={400} />
            </div>
            <span className='details'>PROF. IS-HAQ OLANREWAJU OLOYEDE</span>
            <h5 className='info'>
             Is-haq Olanrewaju Oloyede is a Professor of Islamics and a Fellow of the Islamic Academy of 
             Cambridge, United Kingdom; Fellow, Academy of Entrepreneurship; Fellow, Nigerian Institute of
             Management; Fellow, Institute of Arabic and Islamic Studies and Fellow, Association of Islamic 
             Religious Studies and a Fellow, Nigerian Academic of Letters. He won the Arab League Prize for 
             Best Final Year Certificate Student in Islamic Studies from the University of Ibadan in 1977.
             <p className='nms'>
             He won Federal Government Undergraduate Merit Award (University of Ilorin)
             in 1981 and many other laurels both home and abroad. He has a first class degree 
             in Arabic Language and Literature, a Masters degree in Islamic Studies and a Ph.D in 
             Islamic jurisprudence. He also holds a Post-Graduate Diploma in Education from University of Ilorin
             <li className='refre'>...read more</li>
             </p>
            </h5>
        </div>
        <div className='fulid'>
        <div className="flid">
          <h4 className="inform">THE JAMB MANDATE</h4>
          <div className="news">
          The legal instrument establishing the Board was promulgated by the Act (No. 2 of 1978) of the
          Federal Military Government on 13th February, 1978. By August 1988, the Federal Executive Council
          amended Decree No. 2 of 1978. The amendments have since been codified into Decree No. 33 of 1989,
          which took effect from 7th December, 1989. Decree No. 2 of 1978 
          (amended by Decree No. 33 of 1989) empowered the Joint Admissions and Matriculation Board to:
          <li className='list'>(a) conduct Matriculation Examination for entry into all Universities, 
          Polytechnics and Colleges of Education (by whatever name called) in Nigeria
          </li>
          <li className='list'> (b.) appoint Examiners, Moderators, Invigilators, members of the Subject Panels
               and committees and other persons with respect to
                matriculation examinations and any other matters incidental thereto or connected therewith.</li>
           <li className='list'> (c.) place suitably qualified candidates in the tertiary institutions after 
           having taken into account:</li>
          <li className='list'> (i) the vacancies available in each tertiary institution</li>
                <li className='list'>(ii) the guidelines approved for each tertiary institution by its 
                proprietors or other competent authorities
                </li>
                <li className='list'> (iii) the preference expressed or otherwise indicated by the 
                candidates for certain tertiary institutions and courses
                </li>
               <li className='list'> (iv) such other matters as the Board may be directed by the Honorable
                Minister to consider or the Board itself may consider appropriate in the circumstances.
               </li>
               <li className='list'> (d) collate and disseminate information on all matters relating to 
               admissions into tertiary institutions or any other matter relevant to the discharge of 
               functions of the board.
               </li>
               <li className='list'> (e) carry out other activities as are necessary or expedient for 
               the full discharge of all or any of the functions conferred on it under or pursuant to this Decree .
               </li>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default Mandate