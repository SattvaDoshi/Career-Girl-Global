
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import logo from '../images/your-logo.png'; // Adjust the path as needed
import backgroundImage from '../images/your-background.jpeg'; // Adjust the path as needed

const GirlsOnCampus = () => {
  const componentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate in the content
      gsap.from(".animate-in", {
        y: 50,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Animate the logo
      gsap.from(".logo", {
        x: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
      });

      // Add hover effect to button
      gsap.utils.toArray(".hover-grow").forEach(button => {
        button.addEventListener("mouseenter", () => gsap.to(button, { scale: 1.1, duration: 0.3 }));
        button.addEventListener("mouseleave", () => gsap.to(button, { scale: 1, duration: 0.3 }));
      });
    }, componentRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={componentRef} 
      className="lg:min-h-screen md:h-[60vh] min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center pt-8 md:py-0"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8">
        <div className="md:w-1/2 lg:w-2/3">
          <h1 className="animate-in text-4xl md:text-6xl lg:text-7xl font-bold text-pink-600 mb-6">Empowering Women's Careers</h1>
          <p className="animate-in text-lg md:text-xl lg:text-xl text-gray-700 mb-10">  
            Welcome to CGG, a community where young women are empowered to achieve their
            career aspirations. Join us and gain access to invaluable resources, career guidance, and a
            supportive network that will help you navigate and excel in your professional journey.
          </p>
          <button className="animate-in hover-grow mt-6 bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
            Join Us
          </button>
        </div>
        <div className="md:w-1/2 lg:w-1/3 flex justify-center mb-8 md:mb-0">
          <div className="relative">
            <img src={logo} alt="Career Girl Global" className="logo h-auto mb-40" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GirlsOnCampus;
