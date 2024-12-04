import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login";
import ShoppingLists from "./components/ShoppingLists";
import Dashboard from "./components/dashboard";
import Users from "./components/user";

function App() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/shopping-lists"
          element={token ? <ShoppingLists /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/users"
          element={token ? <Users /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
