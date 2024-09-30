import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { URL } from "../../const";

const MyJobs = () => {
    const [myJobs, setMyJobs] = useState([]);
    const [editingMode, setEditingMode] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const { data } = await axios.get(`${URL}/all-internships`, { withCredentials: true });
                console.log(data.internships);
                setMyJobs(data.internships || []); 
            } catch (error) {
                toast.error(error.response?.data?.message || "Failed to fetch jobs");
                setMyJobs([]);
            }
        };
        fetchJobs();
    }, []);

    const handleEnableEdit = (jobId) => {
        setEditingMode(jobId);
    };

    const handleDisableEdit = () => {
        setEditingMode(null);
    };

    const handleUpdateJob = async (jobId) => {
        const updatedJob = myJobs.find((job) => job._id === jobId);
        if (!updatedJob) {
            toast.error("Job not found");
            return;
        }
        try {
            const res = await axios.put(`${URL}/edit-internship/${jobId}`, updatedJob, { withCredentials: true });
            if (res.data?.message) {
                toast.success(res.data.message);
                setMyJobs((prevJobs) =>
                    prevJobs.map((job) => (job._id === jobId ? { ...job, ...updatedJob } : job))
                );
                setEditingMode(null);
            } else {
                throw new Error("Unexpected response from server");
            }
        } catch (error) {
            console.error("Error updating job:", error);
            toast.error(error.response?.data?.message || "Failed to update job");
        }
    };

    const handleDeleteJob = async (jobId) => {
        const confirmed = window.confirm("Are you sure you want to delete this internship?");
        if (!confirmed) {
            return;
        }
    
        try {
            const response = await axios.delete(`${URL}/delete-internship/${jobId}`, { withCredentials: true });
            toast.success(response.data?.message || "Internship deleted successfully");
            setMyJobs((prevJobs) => prevJobs.filter((job) => job._id !== jobId));
        } catch (error) {
            console.error("Error deleting internship:", error);
            toast.error(error.response?.data?.message || "Failed to delete internship");
        }
    };

    const handleInputChange = (jobId, field, value) => {
        setMyJobs((prevJobs) =>
            prevJobs.map((job) =>
                job._id === jobId ? { ...job, [field]: field === 'expired' ? value === 'true' : value } : job
            )
        );
    };

  return (
    <div className="myJobs mt-16 md:mt-1 page bg-gray-50 min-h-screen py-12">
      <div className="mx-auto px-2 md:px-6">
        {myJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myJobs.map((element) => (
              <div
                className="card bg-white border border-gray-200 rounded-lg shadow-lg 
                hover:shadow-xl transition-shadow duration-300"
                key={element._id}
              >
                <div className="content p-6">
                  <div className="short_fields space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="block w-24 font-medium">Title:</span>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled={editingMode !== element._id}
                        value={element.title}
                        onChange={(e) =>
                          handleInputChange(element._id, 'title', e.target.value)
                        }
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="block w-24 font-medium">Company:</span>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled={editingMode !== element._id}
                        value={element.company}
                        onChange={(e) =>
                          handleInputChange(element._id, 'company', e.target.value)
                        }
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="block w-24 font-medium">Mode of Internship:</span>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled={editingMode !== element._id}
                        value={element.mode}
                        onChange={(e) =>
                          handleInputChange(element._id, 'mode', e.target.value)
                        }
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="block w-24 font-medium">Duration:</span>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled={editingMode !== element._id}
                        value={element.duration}
                        onChange={(e) =>
                          handleInputChange(element._id, 'duration', e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <span className="block font-medium">Salary:</span>
                      {element.fixedSalary ? (
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md p-2"
                          disabled={editingMode !== element._id}
                          value={element.fixedSalary}
                          onChange={(e) =>
                            handleInputChange(element._id, 'fixedSalary', e.target.value)
                          }
                        />
                      ) : (
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            className="w-1/2 border border-gray-300 rounded-md p-2"
                            disabled={editingMode !== element._id}
                            value={element.salaryFrom}
                            onChange={(e) =>
                              handleInputChange(element._id, 'salaryFrom', e.target.value)
                            }
                          />
                          <input
                            type="text"
                            className="w-1/2 border border-gray-300 rounded-md p-2"
                            disabled={editingMode !== element._id}
                            value={element.salaryTo}
                            onChange={(e) =>
                              handleInputChange(element._id, 'salaryTo', e.target.value)
                            }
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="long_field space-y-4 mt-6">
                    <div>
                      <span className="block font-medium">Expired:</span>
                      <select
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={element.expired.toString()}
                        onChange={(e) =>
                          handleInputChange(element._id, 'expired', e.target.value)
                        }
                        disabled={editingMode !== element._id}
                      >
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                      </select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="block w-24 font-medium">Link:</span>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-2"
                        disabled={editingMode !== element._id}
                        value={element.link}
                        onChange={(e) =>
                          handleInputChange(element._id, 'link', e.target.value)
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="button_wrapper flex justify-between items-center p-4
                 bg-gray-50 border-t border-gray-200 py-6">
                  <div className="edit_btn_wrapper flex space-x-2">
                    {editingMode === element._id ? (
                      <>
                        <button
                          onClick={() => handleUpdateJob(element._id)}
                          className="check_btn px-6 bg-green-600 text-white rounded-full p-2
                           hover:bg-green-700 transition duration-300"
                        >
                          Done
                        </button>
                        <button
                          onClick={() => handleDisableEdit()}
                          className="cross_btn px-6 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition duration-300"
                        >
                         Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleEnableEdit(element._id)}
                        className="edit_btn px-8 bg-pink-600 text-white rounded-full p-2 
                        hover:bg-pink-700 transition duration-300"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => handleDeleteJob(element._id)}
                    className="delete_btn px-8 bg-red-600 text-white rounded-full p-2
                     hover:bg-red-700 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            You've not posted any job or may have deleted all of your jobs!
          </p>
        )}
      </div>
    </div>
  );
};

export default MyJobs;