import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from '../images/your-logo.png'; // Adjust the path as needed

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftColumn = leftColumnRef.current;
    const form = formRef.current;

    gsap.fromTo(leftColumn.children, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 30%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(form.children, 
      { opacity: 0, x: 50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1.5,
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
    

  <div ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <div className="flex flex-col max-w-5xl w-full bg-white shadow-md rounded-lg p-6 md:p-10">
  <div ref={leftColumnRef} className="flex flex-col sm:flex-row items-center justify-between w-full mb-8 px-4">
  <div className="text-center sm:text-left mb-4 sm:mb-0 w-full sm:w-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Let's Work Together</h2>
  </div>
  <div className="w-full sm:w-auto flex justify-center sm:justify-end">
    <img src={logo} alt="Career Girl Global" className="h-32 sm:h-40 w-auto object-contain" />
  </div>
</div>
    <form ref={formRef} className="space-y-4 w-full">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          className="w-full md:w-1/2 p-3 border rounded-md mb-3 md:mb-0" 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          className="w-full md:w-1/2 p-3 border rounded-md" 
        />
      </div>
      <input 
        type="email" 
        name="email" 
        placeholder="Email *" 
        className="w-full p-3 border rounded-md" 
        required 
      />
      <textarea 
        name="message" 
        placeholder="Leave us a message... *" 
        className="w-full p-3 border rounded-md" 
        rows="4" 
        required 
      />
      <button 
        type="submit" 
        className="w-full p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600"
      >
        Submit
      </button>
    </form>
  </div>
</div>
  );
};

export default Contact;