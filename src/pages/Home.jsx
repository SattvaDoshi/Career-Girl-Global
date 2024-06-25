import React from 'react'
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import JoinCommunity from '../components/home/Join';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Metrics from '../components/home/Metrics';


const Home = () => {
  return (
    <div>
        <HeroSection />
      <Services/>
      <Metrics/>
      <JoinCommunity />
    <AboutSection/>
      <Contact />  
    </div>
  )
}

export default Home