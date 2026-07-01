import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-3xl font-bold">
          JobBoard
        </h1>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>

          <Link to="/jobs">Jobs</Link>

          <Link to="/create-job">Create Job</Link>

          <Link to="/my-applications">Applications</Link>

          <Link to="/dashboard">Dashboard</Link>

          <button
            onClick={logout}
            className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;