//@ts-nocheck
import React from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../assets/person.png";
import hamburger from "../../assets/hamburger-menu.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/authSlice";

type INavbar = {
  isOpen: boolean;
  setIsOpen: any;
};

const Navbar = ({ isOpen, setIsOpen }: INavbar) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="flex h-24 px-2 text-white bg-indigo-800">
      <div className="items-center justify-start w-full p-5 md:flex left gap-x-3">
        <div className="hidden md:block">
          <img src={avatar} alt="avatar" />
        </div>

        <span className="hidden p-2 font-bold uppercase md:block">{name}</span>
        <span
          className="block p-2 font-bold md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={hamburger} alt="avatar" style={{ width: "20%" }} />
        </span>
      </div>

      <div className={"flex pr-4 mx-4 my-3"}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
