import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import JoinCommunity from './components/Join';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services/>
      <JoinCommunity />
    <AboutSection/>
      <Contact />  
    <Footer/>
    
    </div>
  );
}

export default App;



