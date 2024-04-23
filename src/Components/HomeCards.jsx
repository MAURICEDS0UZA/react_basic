import React from "react";
import Card from "./Card";
export default function HomeCards() {
  return (
    <section className="py-4 bg-white">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card bg='bg-gray-100'>
            <h1 className="text-2xl font-bold">For Developer</h1>
            <p className="mt-2 mb-4">
              Browser our React job and start your carrier
            </p>
            <a className="bg-black text-white rounded-md p-1">Browser Jobs</a>
          </Card>
          <Card>
            <h1 className="text-2xl font-bold">For Employers</h1>
            <p className="mt-2 mb-4">List your job for perfect match</p>
            <a className="bg-black text-white rounded-md p-1">Add jobs</a>
          </Card>
        </div>
      </div>
    </section>
  );
}
