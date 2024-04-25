import React from 'react'
import HomeCards from '../Components/HomeCards'
import  {JobListings}  from '../Components/JobListings'
import ViewAllJobs from "../Components/ViewAllJobs"

export default function HomePage() {
  return (
   <>
   <HomeCards/>
   <JobListings/>
   <ViewAllJobs/>
   </>
  )
}
