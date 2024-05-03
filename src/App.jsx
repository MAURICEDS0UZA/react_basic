import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./Components/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const addJobList = ({ newJob }) => {
  fetch("/api/jobs", {
    method: "post",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
};

// const deleteJobList=()
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route exact path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route exact path="/jobs" element={<JobsPage />} />
      <Route
        exact
        path={`/jobs/:id`}
        element={<JobPage />}
        loader={jobLoader}
      />
      <Route
        exact
        path={"/add-job"}
        element={<AddJobPage addJobToList={addJobList} />}
      />
      <Route exact path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
