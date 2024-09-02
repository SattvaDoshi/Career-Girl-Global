import React ,{useEffect} from 'react'
import HeroSection from '../components/home/HeroSection';
import JoinCommunity from '../components/home/Join';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';
import Metrics from '../components/home/Metrics';
import Ebooks from '../components/home/Ebook';
import Insta from '../components/home/Instagram';
import Strap from '../components/about_us/Strap'
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
        <Ebooks/>
        <Strap/>
      <Services/>
      {/* <Metrics/> */}
      {/* <JoinCommunity /> */}
    {/* <AboutSection/> */}
    <Insta/>
      <Contact />  
      {/* <Animate/> */}
       {/* <Book/> */}
       {/* <AboutUs/> */}

    </div>
  )
}

export default Home