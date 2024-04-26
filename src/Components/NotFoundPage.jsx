import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <>
      <section className="text-center flex flex-col  justify-center items-center  mt-8">
        <FaTriangleExclamation   className="size-14 text-yellow-500 mb-3 "/>
        <h1 className="font-extrabold text-2xl mb-2">404 Not Found!</h1>
        <p className="font-bold mb-2">This page does not exit </p>
        <Link to={"/"} className='rounded-lg bg-indigo-600 p-2 my-2 text-white'> Go Back</Link>
      </section>
    </>
  );
}
