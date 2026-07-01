import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300">

      <h2 className="text-2xl font-bold text-blue-700">
        {job.title}
      </h2>

      <p className="text-gray-600 mt-2">
        🏢 {job.company}
      </p>

      <p className="mt-2">
        📍 {job.location}
      </p>

      <p className="mt-2">
        💼 {job.job_type}
      </p>

      <p className="mt-3 text-green-700 font-bold text-xl">
        ₹ {job.salary}
      </p>

      <button
        onClick={() => navigate(`/apply/${job.id}`)}
        className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;