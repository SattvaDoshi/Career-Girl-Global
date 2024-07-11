import heart from '../images/your-heart.jpeg';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current;

    gsap.fromTo(title, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 50%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 65%",
            end: "top 65%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.2
        }
      );
    });

  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col items-center min-h-screen bg-beige-500 p-8">
      <div className="flex items-center mb-8">

      </div>
      <h1 ref={titleRef} className="lg:text-6xl md:text-4xl text-3xl text-pink-500 font-bold mb-4">What we Bring to You ..</h1>
      <hr className="border-t-2 border-purple-100 w-16 mb-8" />
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-8">
        {[1, 2, 3].map((_, index) => (
          <div 
            key={index} 
            ref={el => cardsRef.current[index] = el}
            className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 max-w-xs mx-auto"
          >
            <div >
              <img
                src={heart}
                alt="Mentorship Programs"
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-pink-600 mt-6 mb-4">Mentorship Programs</h2>
            <p className="text-center text-gray-700 mb-6">
              Our experienced mentors provide guidance and support to help you navigate your early career challenges.
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-full hover:bg-pink-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;