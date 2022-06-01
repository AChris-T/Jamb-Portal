import React from 'react'
import Information from '../../components/information/Information'
import Mandate from '../../components/Mandate'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/Slider'
import SupportItem from '../../components/SupportItem'
import Footer from '../../components/topbar/Footer'
import Topbar from '../../components/topbar/Topbar'


const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Information />
      <Slider/>
      <Mandate/>
      <SupportItem/>
      <Footer/>
    </>
  )
}

export default Home