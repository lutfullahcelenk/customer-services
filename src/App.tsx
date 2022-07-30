/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { useAppSelector } from "./app/hooks";
//components
import Navbar from "./components/Navbar";
//pages
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn } = useAppSelector((state) => state.auth);

  return (
    <div>
      {loggedIn && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}

      <Routes>
        <Route path="/" element={<Navigate to="auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={<Dashboard isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route
          path="/orders"
          element={<Orders isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route
          path="/orders/:id"
          element={<OrderDetail isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
        <Route
          path="/user-managements"
          element={<UserManagement isOpen={isOpen} setIsOpen={setIsOpen} />}
        />
      </Routes>
    </div>
  );
}

export default App;
