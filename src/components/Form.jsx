import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import toast from 'react-hot-toast';

const Form = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const formRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showForm) {
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(formRef.current, { scale: 0.8, opacity: 0 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
        .to(formRef.current, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
    }
  }, [showForm]);

  const handleClose = () => {
    const tl = gsap.timeline();
    tl.to(formRef.current, { scale: 0.8, opacity: 0, duration: 0.3 })
      .to(overlayRef.current, { opacity: 0, duration: 0.3 })
      .then(() => setShowForm(false));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'https://career-girl-global.onrender.com/register',
        { name, email, country },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      )
      setCountry('')
      setName('')
      setEmail('')
      toast.success(data.message);
      setShowForm(false)
    }
    catch (e) {
      console.log(e);
      toast.error(e.response.data.message)
    }

  };

  if (!showForm) return null;

  return (
    <div ref={overlayRef} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div ref={formRef} className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-pink-500">Connect with Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="country" className="block text-gray-700 mb-2">Country</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={e => setCountry(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;