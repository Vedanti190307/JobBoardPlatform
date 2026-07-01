import { useState } from "react";
import axios from "axios";

function CreateJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    job_type: "Internship",
  });

  const handleChange = (e) => {
    setJob({
      ...job,
      [e.target.name]: e.target.value,
    });
  };

  const createJob = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/jobs/",
        job,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Job Created Successfully!");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
      });

    } catch (error) {
      console.log(error.response?.data);
      alert("Failed to Create Job!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={createJob}
        className="bg-white p-8 rounded-xl shadow-lg w-[500px] space-y-4"
      >
        <h1 className="text-3xl font-bold">Create Job</h1>

        <input name="title" placeholder="Job Title" value={job.title} onChange={handleChange} className="w-full border p-2 rounded" />

        <input name="company" placeholder="Company" value={job.company} onChange={handleChange} className="w-full border p-2 rounded" />

        <input name="location" placeholder="Location" value={job.location} onChange={handleChange} className="w-full border p-2 rounded" />

        <input name="salary" placeholder="Salary" value={job.salary} onChange={handleChange} className="w-full border p-2 rounded" />

        <textarea
          name="description"
          placeholder="Description"
          value={job.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded"
        >
          Create Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;