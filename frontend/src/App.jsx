import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ApplyJob from "./pages/ApplyJob";
import MyApplications from "./pages/MyApplications";
import CreateJob from "./pages/CreateJob";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/jobs" element={<Jobs />} />
<Route path="/apply/:id" element={<ApplyJob />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/my-applications" element={<MyApplications />}/>
<Route path="/create-job" element={<CreateJob />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;