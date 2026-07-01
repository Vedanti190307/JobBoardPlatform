import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">

      <div className="text-center text-white">

        <h1 className="text-6xl font-bold mb-6">
          Job Board Platform
        </h1>

        <p className="text-2xl mb-10">
          Find Your Dream Job Today 🚀
        </p>

        <div className="space-x-6">

          <Link
            to="/jobs"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold"
          >
            Browse Jobs
          </Link>

          <Link
            to="/register"
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >
            Get Started
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;