import React from "react";
import { JobListing } from "./JobListing";

export const JobListings = () => {
  return (
    <section className="bg-indigo-100 px-4 py-10">
      <div className="container-xl lg:container m-auto ">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Recent Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobListing />
        </div>
      </div>
    </section>
  );
};
