import React, { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import JoinCommunity from '../components/home/Join';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Metrics from '../components/home/Metrics';
import axios from 'axios';
import { URL } from '../const';


const Home = () => {

  const startServer = async () =>{
    try {
      const data = await axios.get(`${URL}/testing`);
      console.log(data.data.message);
      
    } 
    catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    startServer();
})

  return (
    <div>
      <HeroSection />
      <Services />
      <Metrics />
      <JoinCommunity />
      <AboutSection />
      <Contact />
    </div>
  )
}

export default Home