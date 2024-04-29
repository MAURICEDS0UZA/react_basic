import React from "react";
import HomeCards from "../Components/HomeCards";
import { JobListings } from "../Components/JobListings";
import ViewAllJobs from "../Components/ViewAllJobs";
import Hero from "../Components/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs isHome={true} />
    </>
  );
}
