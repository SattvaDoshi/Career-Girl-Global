
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
      className="lg:min-h-screen md:h-[60vh] min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center pt-8 pb-10 md:py-0"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="min-h-screen flex items-center justify-center py-12 px-4 ">
        <div className="max-w-7xl w-full space-y-8">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="animate-in text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600">
                Empowering Women's Careers
              </h1>
              <p className="animate-in text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
                Welcome to CGG, a community where young women are empowered to achieve their
                career aspirations. Join us and gain access to invaluable resources, career guidance, and a
                supportive network that will help you navigate and excel in your professional journey.
              </p>
              <button className="animate-in hover-grow bg-pink-500 text-white px-8 py-2 rounded-full hover:bg-pink-600 transition-colors duration-300 text-lg">
                <a href="/home">Join Us</a>
              </button>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <img
                  src={logo}
                  alt="Career Girl Global"
                  className="w-full h-auto object-contain 
               min-h-[200px] max-h-[300px] 
               sm:max-h-[350px] 
               md:max-h-[400px] 
               lg:max-h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GirlsOnCampus;
