import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HomeCards from "./Components/HomeCards";
import { JobListings } from "./Components/JobListings";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
    </>
  );
}
