import React from "react";
import { JobListing } from "./JobListing";
import { jobs } from "../jobs.json";

export const JobListings = ({isHome}) => {
  return (
    <section className="bg-indigo-100 px-4 py-10">
      <div className="container-xl lg:container m-auto ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
         {isHome?" Recent Jobs":"Browser Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job)=>(
          <JobListing isHome={isHome} job={job}/>
          ))}
        </div>
      </div>
    </section>
  );
};
