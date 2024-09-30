import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URL } from "../../const";
import toast from 'react-hot-toast';

const RemoteInternships = () => {
  const [internships, setInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchInternships = async () => {
    const loading = toast.loading("Loading Please Wait !!")
    try {
      const response = await axios.get(`${URL}/all-internships`, {
        withCredentials: true
      });
      setInternships(response.data.internships);
      toast.success("All Internships", { id: loading });
    } catch (e) {
      console.error('Error fetching internships:', e);
    } 
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-500 mb-6" style={{ fontFamily: 'Abril FatFace' }}>Remote Internships</h1>
        <div className="relative max-w-lg mx-auto mb-10">
          <input
            type="text"
            placeholder="Search for roles..."
            className="w-full py-2 px-4 rounded-full border-2 border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute top-1/2 transform -translate-y-1/2 right-4 text-pink-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m-2.65-1.15a7 7 0 111.88-1.88M17 10a7 7 0 10-2.65 1.15L21 21z" />
            </svg>
          </div>
        </div>
      </div>

      {filteredInternships.length === 0 ? (
        <div className="text-center mt-10">No internships found matching your search.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship) => (
            <div key={internship._id} className="bg-white border-2 border-pink-400 rounded-lg p-4 shadow-md">
              <h2 className="text-pink-500 text-lg md:text-xl font-bold mb-2" style={{ fontFamily: 'Abril FatFace' }}>{internship.title}</h2>
              <p className="text-gray-700" style={{ fontFamily: 'Montserrat' }}>{internship.company}</p>
              <p className="text-gray-500" style={{ fontFamily: 'Montserrat' }}>{internship.mode}</p>
              <p className="text-gray-500" style={{ fontFamily: 'Montserrat' }}>Posted on: {new Date(internship.jobPostedOn).toLocaleDateString()}</p>
              <p className="text-gray-500" style={{ fontFamily: 'Montserrat' }}>Duration: {internship.duration}</p>
              <p className="text-pink-500 font-bold mt-2" style={{ fontFamily: 'Montserrat' }}>Salary: {internship.fixedSalary
                      ? internship.fixedSalary
                      : `${internship.salaryFrom} - ${internship.salaryTo}`}</p>
              <div className="flex items-center justify-between mt-4">
                <span className={`text-sm ${internship.expired ? 'text-red-500' : 'text-green-500'}`}>
                  {internship.expired ? 'Expired' : 'Active'}
                </span>
                <a 
                  href={internship.link.startsWith('http') ? internship.link : `https://${internship.link}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-500 text-white py-2 px-8 rounded-full text-xs md:text-sm hover:bg-pink-600"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(internship.link.startsWith('http') ? internship.link : `https://${internship.link}`, '_blank');
                  }}
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RemoteInternships;