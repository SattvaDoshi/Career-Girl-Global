import React from 'react';

const WorkWithUs = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-pink-50">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 bg-white shadow-lg">
        <h2 className="text-pink-600 text-4xl font-extrabold mb-10">Work With Us</h2>
        <form className="w-full max-w-lg space-y-6">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <div>
            <textarea
              placeholder="Leave us a message..*"
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold p-3 rounded-md hover:bg-pink-600 transition-all duration-300 ease-in-out shadow-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Illustration */}
      <div className="flex justify-center items-center w-full lg:w-1/2 bg-pink-500">
        {/* Replace this with your actual illustration/image */}
        <span className="text-black text-lg">DESKTOP ILLUSTRATION</span>
      </div>
    </div>
  );
};

export default WorkWithUs;
