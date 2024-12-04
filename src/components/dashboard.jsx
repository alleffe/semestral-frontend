import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="button-group">
        <button onClick={() => navigate("/shopping-lists")} className="btn-primary">
          Manage Shopping Lists
        </button>
        <button onClick={() => navigate("/users")} className="btn-primary">
          View Users
        </button>
      </div>
      <button onClick={handleLogout} className="btn-danger">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
