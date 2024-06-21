import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logo from './images/your-logo.png'; // Adjust the path as needed

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
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
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

  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white shadow-md rounded-lg p-8 md:p-16">
        <div ref={leftColumnRef} className="flex flex-col items-center justify-between w-full md:w-2/3 md:mr-8 mb-8 md:mb-0">
          <div className="text-center mb-6">
            <div className="mb-10">
              <h2 className="text-3xl font-bold">Let's Work Together</h2>
            </div>
            <div className="mt-20">
              <p>San Francisco, CA</p>
              <p>info@girlsoncampus.org</p>
              <p>For partnerships and collaborations please fill out the form.</p>
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <a href="#" className="mx-2">
              {/* <img src={instagramIcon} alt="Instagram" className="h-6 w-6" /> */}
            </a>
            <a href="#" className="mx-2">
              {/* <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6" /> */}
            </a>
          </div>
          <img src={logo} alt="Career Girl Global" className="h-60" />
        </div>
        <form ref={formRef} className="space-y-6 w-full md:w-2/3">
          <div className="flex flex-col md:flex-row space-x-0 md:space-x-3">
            <input type="text" name="firstName" placeholder="First Name" className="w-full md:w-1/2 p-3 border rounded-md mb-3 md:mb-0" />
            <input type="text" name="lastName" placeholder="Last Name" className="w-full md:w-1/2 p-3 border rounded-md" />
          </div>
          <input type="email" name="email" placeholder="Email *" className="w-full p-3 border rounded-md" required />
          <textarea name="message" placeholder="Leave us a message... *" className="w-full p-3 border rounded-md" rows="4" required></textarea>
          <button type="submit" className="w-full p-3 bg-pink-500 text-white rounded-md hover:bg-pink-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;