import React from 'react';
import logo from './images/your-logo.png'; // Adjust the path as needed

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row max-w-5xl w-full bg-white shadow-md rounded-lg p-8 md:p-16">
        <div className="flex flex-col items-center justify-between w-full md:w-2/3 md:mr-8 mb-8 md:mb-0">
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
        <form className="space-y-6 w-full md:w-2/3">
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