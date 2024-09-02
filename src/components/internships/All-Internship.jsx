import React from 'react';

const internships = [
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  }, {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  }, {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  }, {
    title: "Graphic Design Intern",
    company: "North American Hockey League",
    location: "Remote",
    datePosted: "4 days ago",
    duration: "6-12 months",
    stipend: "$17-$20 per hour",
  },
  // More entries can be added here
];

const RemoteInternships = () => {
  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-700 mb-6">Remote Internships</h1>
        <div className="relative max-w-lg mx-auto mb-10">
          <input
            type="text"
            placeholder="Search for roles..."
            className="w-full py-2 px-4 rounded-full border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m-2.65-1.15a7 7 0 111.88-1.88M17 10a7 7 0 10-2.65 1.15L21 21z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {internships.map((internship, index) => (
          <div key={index} className="bg-white border-2 border-pink-400 rounded-lg p-4 shadow-md">
            <h2 className="text-pink-700 text-lg md:text-xl font-bold mb-2">{internship.title}</h2>
            <p className="text-gray-700">{internship.company}</p>
            <p className="text-gray-500">{internship.location}</p>
            <p className="text-gray-500">{internship.datePosted}</p>
            <p className="text-gray-500">{internship.duration}</p>
            <p className="text-pink-700 font-bold mt-2">{internship.stipend}</p>
            <div className="flex items-center justify-between mt-4">
              <button className="text-pink-500 hover:text-pink-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button className="bg-pink-500 text-white py-2 px-8 rounded-full text-xs md:text-sm hover:bg-pink-600">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RemoteInternships;
