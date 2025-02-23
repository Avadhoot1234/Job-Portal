import React from "react";
// import { Briefcase, Calendar, DollarSign, Building } from "lucide-react";
import { FaBriefcase } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaDollarSign } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="w-full max-w-md p-4 shadow-lg border border-blue-500 rounded-lg bg-white">
      <div className="flex flex-col gap-3 p-4">
        <h2 className="text-xl font-semibold text-blue-600 flex items-center gap-2">
          <FaBriefcase size={20} className="text-blue-500" /> {job.title}
        </h2>
        <p className="text-gray-700 flex items-center gap-2">
          <FaBuilding size={18} className="text-blue-400" /> {job.company}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <FaDollarSign size={18} className="text-blue-400" /> {job.salary}
        </p>
        <p className="text-gray-700 flex items-center gap-2">
          <SlCalender size={18} className="text-blue-400" /> Posted on: {job.postedDate}
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg mt-3 w-full">
          Apply Now
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const jobs = [
    {
        title: "Frontend Developer",
        company: "Tech Corp",
        salary: "$70,000 - $90,000",
        postedDate: "Feb 20, 2025",
      },
      {
        title: "Backend Developer",
        company: "Innovate LLC",
        salary: "$80,000 - $100,000",
        postedDate: "Feb 18, 2025",
      },
      {
        title: "Full Stack Engineer",
        company: "Startup Inc.",
        salary: "$90,000 - $110,000",
        postedDate: "Feb 15, 2025",
      },
      {
        title: "Data Scientist",
        company: "AI Solutions",
        salary: "$100,000 - $130,000",
        postedDate: "Feb 10, 2025",
      },
      {
        title: "DevOps Engineer",
        company: "CloudTech",
        salary: "$85,000 - $115,000",
        postedDate: "Feb 12, 2025",
      },
      {
        title: "Mobile App Developer",
        company: "Appify",
        salary: "$75,000 - $95,000",
        postedDate: "Feb 08, 2025",
      },
    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobList;
