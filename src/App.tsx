/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
//components
import Navbar from "./components/Navbar";
//pages
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import OrderDetail from "./pages/OrderDetail";
import Orders from "./pages/Orders";
import UserManagement from "./pages/UserManagement";
//constants
import { users } from "./constants/users";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { loggedIn, fullName } = useAppSelector((state) => state.auth);

  //control mechanism
  useEffect(() => {
    users.find(
      (user) =>
        user.fullName.toLocaleLowerCase() === fullName.toLocaleLowerCase() &&
        user.role === "Admin"
    )
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, [fullName]);

  return (
    <div>
      {loggedIn && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/" element={<Auth />} />
        {loggedIn && (
          <>
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
            {isAdmin &&<Route
              path="/user-managements"
              element={<UserManagement isOpen={isOpen} setIsOpen={setIsOpen} />}
            />}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
