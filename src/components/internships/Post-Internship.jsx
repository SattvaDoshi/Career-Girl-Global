import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { URL } from "../../const";


const PostInternship = () => {
  const [title, setTitle] = useState("");
  const [company, setcompany] = useState("");
  const [mode, setMode] = useState("");
  const [link, setLink] = useState("");
  const [duration, setDuration] = useState("")
  const [salaryFrom, setSalaryFrom] = useState("");
  const [salaryTo, setSalaryTo] = useState("");
  const [fixedSalary, setFixedSalary] = useState("");
  const [salaryType, setSalaryType] = useState("default");


  const handleJobPost = async (e) => {
    e.preventDefault();
    const loaading = toast.loading("Creating Please Wait !!")
    if (salaryType === "Fixed Salary") {
      setSalaryFrom("");
      setSalaryFrom("");
    } else if (salaryType === "Ranged Salary") {
      setFixedSalary("");
    } else {
      setSalaryFrom("");
      setSalaryTo("");
      setFixedSalary("");
    }
    await axios
      .post(
        `${URL}/post-internship`,
        fixedSalary.length >= 1
          ? {
            title,
            company,
            mode,
            link,
            duration,
            fixedSalary,
          }
          : {
            title,
            company,
            mode,
            link,
            duration,
            salaryFrom,
            salaryTo,
          },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success("Internship Created Successfully ",{id:loaading});
      })
      .catch((err) => {
        toast.error("Something went Wrong ",{id:loaading});
      });
  };

  return (
    <div className="job_post min-h-screen page bg-pink-50 py-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold mb-6 text-pink-900">Post New Internship</h3>
      <form onSubmit={handleJobPost} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Internship Title"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
              type="text"
              value={company}
              onChange={(e) => setcompany(e.target.value)}
              placeholder="Company Name"
            />
          </div>
        </div>
  
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
              type="text"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              placeholder="Mode of Internship"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Duration of Internship"
            />
          </div>
        </div>
  
        <div className="salary_wrapper mb-6 md:w-[25vw]">
          <select
            className="appearance-none border rounded-lg w-full py-3 px-6 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
            value={salaryType}
            onChange={(e) => setSalaryType(e.target.value)}
          >
            <option value="default">Select Salary Type</option>
            <option value="Fixed Salary">Fixed Salary</option>
            <option value="Ranged Salary">Ranged Salary</option>
          </select>
  
          <div className="mt-2">
            {salaryType === "default" ? (
              <p className="text-red-500 text-sm">Please provide Salary Type *</p>
            ) : salaryType === "Fixed Salary" ? (
              <input
                className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500 mt-2"
                type="text"
                placeholder="Enter Fixed Salary"
                value={fixedSalary}
                onChange={(e) => setFixedSalary(e.target.value)}
              />
            ) : (
              <div className="ranged_salary flex mt-2">
                <input
                  className="appearance-none border rounded-lg w-1/2 py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500 mr-2"
                  type="text"
                  placeholder="Salary From"
                  value={salaryFrom}
                  onChange={(e) => setSalaryFrom(e.target.value)}
                />
                <input
                  className="appearance-none border rounded-lg w-1/2 py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
                  type="text"
                  placeholder="Salary To"
                  value={salaryTo}
                  onChange={(e) => setSalaryTo(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
  
        <div className="mb-6">
          <input
            className="appearance-none border rounded-lg w-full py-3 px-3 text-pink-900 border-pink-300 focus:outline-none focus:border-pink-500"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link of Internship"
          />
        </div>
  
        <div className="flex justify-end">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
  
      
  );
};

export default PostInternship;
