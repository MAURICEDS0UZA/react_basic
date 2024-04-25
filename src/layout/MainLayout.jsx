import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import { Outlet } from "react-router-dom";
export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  );
}
