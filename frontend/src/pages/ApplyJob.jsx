import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ApplyJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resume, setResume] = useState(null);

  const applyJob = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access");

    const formData = new FormData();
    formData.append("job", id);
    formData.append("resume", resume);
    formData.append("status", "Pending");

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/applications/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Application Submitted Successfully!");
      navigate("/dashboard");

    } catch (error) {
      console.log(error.response?.data);
      alert("Application Failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[450px]">

        <h1 className="text-3xl font-bold text-center mb-6">
          Apply for Job
        </h1>

        <p className="mb-4">
          <b>Job ID:</b> {id}
        </p>

        <form onSubmit={applyJob}>

          <input
            type="file"
            onChange={(e) => setResume(e.target.files[0])}
            className="mb-6 w-full"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Submit Application
          </button>

        </form>

      </div>

    </div>
  );
}

export default ApplyJob;