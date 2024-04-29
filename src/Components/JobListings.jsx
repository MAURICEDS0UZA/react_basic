import React from "react";
import { JobListing } from "./JobListing";
import { useState, useEffect } from "react";

export const JobListings = ({ isHome = false }) => {
  const [jobs, setjobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobUrl = isHome
          ? "http://localhost:8000/jobs?_limit=3"
          : "http://localhost:8000/jobs";
        const res = await fetch(jobUrl);
        const data = await res.json();
        setjobs(data);
      } catch (error) {
        console.error("Error found:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <section className="bg-indigo-100 px-4 py-10">
      <div className="container-xl lg:container m-auto ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? " Recent Jobs" : "Browser Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
