import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {

  const navigate = useNavigate();

  const joinClass = () => {
    navigate("/classroom");
  };

  return (
    <div>
      <Navbar />

      <div className="dashboard">
        <h1>Virtual Classroom Dashboard</h1>

        <p>Welcome to the online learning platform.</p>

        <button onClick={joinClass}>
          Join Classroom
        </button>
      </div>

    </div>
  );
}

export default Dashboard;