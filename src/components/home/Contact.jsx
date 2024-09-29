import React, { useState } from 'react';
import axios from 'axios';
import illustration from '../images/illustration.png';
import { URL } from '../../const';

const WorkWithUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${URL}/contact-us`, formData);
      setSubmitStatus({ type: 'success', message: 'Form submitted successfully!' });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      console.log(response);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[80vh] bg-pink-50">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-white shadow-lg">
        <h2 className="text-pink-600 text-4xl font-extrabold mb-10" style={{ fontFamily: 'Ultra' }}>
          Work With Us
        </h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6" style={{ fontFamily: 'Montserrat' }}>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="flex-1 w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="flex-1 w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-mail*"
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Leave us a message..*"
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-pink-500 text-white font-semibold p-3 rounded-md hover:bg-pink-600 transition-all duration-300 ease-in-out shadow-md disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {submitStatus && (
            <div className={`text-center p-2 rounded ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="flex justify-center items-center w-full lg:w-1/2 bg-pink-200 min-h-[80vh]">
        <img
          src={illustration}
          alt="Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WorkWithUs;