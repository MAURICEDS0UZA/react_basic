import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
const UpdatePage = ({ updateJobList }) => {
  const { id } = useParams();
  const job = useLoaderData();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobType: job.type,
    jobTitle: job.title,
    description: job.description,
    salaryRange: job.salary,
    location: job.location,
    company: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateJob = {
      id: id,
      title: `${formData.jobTitle}`,
      type: `${formData.jobType}`,
      location: `${formData.location}`,
      description: `${formData.description}`,
      salary: `${formData.salaryRange}`,
      company: {
        name: `${formData.company}`,
        description: `${formData.companyDescription}`,
        contactEmail: `${formData.contactEmail}`,
        contactPhone: `${formData.contactPhone}`,
      },
    };

    updateJobList({ updateJob });
    navigate("/jobs");
  };

  return (
    <>
      <div className=" bg-indigo-200 pb-24 pt-1">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-gray-50 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <h3 className="text-center font-extrabold text-2xl   text-gray-700">
              Edit job
            </h3>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="mb-4">
                <label
                  htmlFor="jobType"
                  className="block font-medium text-gray-700"
                >
                  Job Type
                </label>
                <select
                  name="jobType"
                  id="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="">Select</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="intern">Intern</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="jobTitle"
                  className="block font-medium text-gray-700"
                >
                  Job Title
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  placeholder="eg: Software Developer"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm   focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm h-20 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="salaryRange"
                  className="block font-medium text-gray-700"
                >
                  Salary Range
                </label>
                <select
                  name="salaryRange"
                  id="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder={"Company Location"}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="company" className="block text-gray-700  mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700  mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="companyDescription"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  onChange={handleChange}
                  value={formData.companyDescription}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contactEmail"
                  className="block text-gray-700  mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={formData.contactEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contactPhone"
                  className="block text-gray-700  mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contactPhone"
                  name="contactPhone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={formData.contactPhone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
