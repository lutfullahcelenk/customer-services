/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
//pages
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/user-managements" element={<UserManagement />} />
      </Routes>
    </div>
  );
}

export default App;
