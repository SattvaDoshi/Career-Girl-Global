import aImage from '../images/AboutImg.jpeg';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    gsap.fromTo(image, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(content.children, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 2,
        stagger: 0.2,
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
    <section ref={sectionRef} className="bg-pink-500 py-20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl md:flex">
          <div ref={imageRef} className="md:w-1/2 h-auto">
            <img 
              src={aImage} 
              alt="About" 
              className="w-full h-full object-cover md:h-auto" 
              style={{ height: '100%', marginBottom: '0' }} // Added to ensure no space below the image
            />
          </div>
          <div ref={contentRef} className="md:w-1/2 p-6">
            <h2 className="text-3xl font-bold text-pink-600 mb-4" style={{ fontFamily: 'Abril FatFace ' }}>
              About Founder
            </h2>
            <hr className="border-t-2 border-pink-500 w-12 mb-4" />
            <p className="text-gray-700 text-lg mb-6" style={{ fontFamily: 'Montserrat' }}>
              Avisha is the visionary behind Career Girl Global (CGG). With a wealth of experience gained through various internships as a graphic designer and marketing intern, she has a deep understanding of the challenges and opportunities women face in their careers.
            </p>
            <p className="text-gray-700 text-lg mb-6" style={{ fontFamily: 'Montserrat' }}>
              Avisha founded Career Girl Global because she sees incredible potential in all women to succeed, no matter the field they choose. Her mission is to create a powerful community where women can support and uplift each other. Through CGG, Avisha aims to build confidence and provide the resources necessary for women to thrive in their professional journeys.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;