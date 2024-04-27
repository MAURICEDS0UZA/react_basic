import React, { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

let listJob = [];

export const JobListing = ({ job, isHome }) => {
  const [showDescriptions, setShowDescriptions] = useState({});

  const toggleDescription = (jobId) => {
    setShowDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [jobId]: !prevDescriptions[jobId],
    }));
  };

  listJob.push(job.id);
  function removeDuplicates(listJob) {
    return listJob.filter((item, index) => listJob.indexOf(item) === index);
  }

  const requiredIds = isHome? removeDuplicates(listJob).slice(0, 3):removeDuplicates(listJob)
  console.log(requiredIds);
  return (
    <>
      {requiredIds.includes(job.id) && (
        <div key={job.id} className="container bg-white rounded-2xl px-4 py-6">
          <h3 className="text-gray-400">{job.type}</h3>
          <h2 className="font-semibold py-2">{job.title}</h2>
          <p className="pb-4">
            {showDescriptions[job.id]
              ? job.description
              : job.description.substring(0, 100) + "..."}
          </p>
          <button
            onClick={() => toggleDescription(job.id)}
            className="text-indigo-400 mb-5 hover:text-indigo-600"
          >
            {showDescriptions[job.id] ? "Less" : "More"}
          </button>
          <h3 className="py-1">{job.salary}</h3>
          <div className="flex flex-row justify-between border-t-2 pt-4">
            <div className="text-orange-700 mb-3">
              <FaMapMarker className="inline mb-1 mr-2" />
              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="bg-indigo-500 rounded-md p-2 text-white"
            >
              Read more
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
