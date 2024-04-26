import React from "react";
import { JobListings } from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";
import Hero from "../Components/Hero";

export default function JobsPage() {
  return (
    <>
      <Hero />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}
