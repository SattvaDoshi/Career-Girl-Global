import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import join from '../images/join.jpeg';
gsap.registerPlugin(ScrollTrigger);

const JoinCommunity = () => {
  const sectionRef = useRef(null);
  const textContentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const textContent = textContentRef.current;
    const image = imageRef.current;

    gsap.fromTo(textContent.children, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(image, 
      { opacity: 0, x: 50 }, // Reduced x value from 100 to 50
      { 
        opacity: 1, 
        x: 0, 
        duration: 2,
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen md:mt-0 mt-16 py-16 md:py-32 px-4 md:px-8 flex flex-col md:flex-row w-full overflow-hidden">
      <div ref={textContentRef} className="md:w-1/2 flex flex-col justify-center items-center bg-white p-8 md:p-16 rounded-lg shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">Join Our Community</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          Empower Your Career, Empower Yourself
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-500 transition-colors duration-300">
          Join Community
        </button>
      </div>
      <div ref={imageRef} className="md:w-1/2 mt-8 md:mt-0 relative shadow-2xl overflow-hidden">
        <img
          src={join}
          alt="Laptops on a table"
          className="object-cover w-full h-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default JoinCommunity;