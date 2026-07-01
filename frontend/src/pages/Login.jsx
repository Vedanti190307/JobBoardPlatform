import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username,
          password,
        }
      );

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      alert("Login Successful!");
    } catch (error) {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-8 w-96">

        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Job Board Login
        </h1>

        <form onSubmit={loginUser} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="w-full border rounded-lg p-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;