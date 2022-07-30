// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
//assets
import close from "../../assets/close.png";
//constants
import { users } from "../../constants/users";
import {
  sidebarItemsAdmin,
  sidebarItemsOthers,
} from "../../constants/sidebarItems";

type ISidebar = {
  isOpen: boolean;
  setIsOpen: any;
};

const Sidebar = ({ isOpen, setIsOpen }: ISidebar) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const { name } = useAppSelector((state) => state.auth);

  useEffect(() => {
    users.find(
      (user) =>
        user.fullName.toLocaleLowerCase() === name.toLocaleLowerCase() &&
        user.role === "Admin"
    )
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, [name]);

  return (
    <div
      className={`${
        isOpen ? "block z-10" : "hidden"
      } min-h-screen absolute w-full bg-indigo-800 md:block md:w-80 md:relative`}
    >
      <div className="flex items-center justify-between p-5">
        <div className="text-2xl font-bold tracking-wide text-gray-200 capitalize">
          Lutfullah Projects
        </div>
        <div
          className={`${isOpen ? "block" : "hidden"} md:hidden p-4 `}
          onClick={() => setIsOpen(false)}
        >
          <img src={close} alt="cross" />
        </div>
      </div>

      <div className="fixed">
        <div className="p-5 text-lg font-semibold text-gray-200 uppercase">
          Pages
        </div>

        {(isAdmin ? sidebarItemsAdmin : sidebarItemsOthers).map((item: any) => (
          <div
            key={item.id}
            className="flex items-center m-3 mt-2 cursor-pointer"
            onClick={() => {
              navigate(item.path);
              setIsOpen(false);
            }}
          >
            <img src={item.image} alt="icons" />
            <div className="mx-3 text-white">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
