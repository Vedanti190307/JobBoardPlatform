import { useState } from "react";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "job_seeker",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:8000/api/users/register/", form);

      alert("Registration Successful!");
    } catch (error) {
      alert("Registration Failed!");
      console.log(error.response?.data);
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <h2>Register</h2>

      <form onSubmit={registerUser}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        /><br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        /><br /><br />

        <select
          name="role"
          onChange={handleChange}
        >
          <option value="job_seeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;