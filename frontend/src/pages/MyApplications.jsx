import { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem("access");

        const response = await axios.get(
          "http://127.0.0.1:8000/api/applications/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Applications
      </h1>

      {applications.length === 0 ? (
        <p>No Applications Yet.</p>
      ) : (
        applications.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow rounded-lg p-6 mb-4"
          >
            <h2 className="text-xl font-bold">
              Job ID: {app.job}
            </h2>

            <p>Status: {app.status}</p>

            <p>
              Applied On:{" "}
              {new Date(app.applied_at).toLocaleString()}
            </p>
          </div>
        ))
      )}

    </div>
  );
}

export default MyApplications;