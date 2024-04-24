import React from "react";
import { jobs } from "../jobs.json";
import { useState } from "react";

export const JobListing = () => {
  return (
    <>
      {jobs.map((job) => (
        <div key={job.id} className="container bg-white rounded-2xl px-4 py-6">
          <h3 className="text-gray-400">{job.type}</h3>
          <h2 className="font-semibold py-2">{job.title}</h2>
          <p className="pb-4">{job.description}</p>
          <h3 className="py-1">{job.salary}</h3>
          <div className="flex flex-row justify-between border-t-2 pt-4">
            <div>{job.location}</div>
            <button className="bg-indigo-500 rounded-md p-2 text-white">Read more</button>
          </div>
        </div>
      ))}
    </>
  );
};
