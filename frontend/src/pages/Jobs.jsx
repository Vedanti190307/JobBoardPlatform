import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/jobs/");
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Available Jobs
      </h1>

      {jobs.length === 0 ? (
        <h3 className="text-center text-xl">
          No Jobs Available
        </h3>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Jobs;