import React from "react";
import { Routes, Route } from "react-router-dom";
//pages
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/user-managements" element={<UserManagement />} />
      </Routes>
    </>
  );
}

export default App;
