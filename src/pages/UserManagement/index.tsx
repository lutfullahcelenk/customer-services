import React from "react";
import Sidebar from "../../components/Sidebar";

type IUserManagement = {
  isOpen: boolean;
  setIsOpen: any;
};

const UserManagement = ({ isOpen, setIsOpen }: IUserManagement) => {
  return (
    <div className="flex h-screen gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full justify-start flex flex-col px-4 py-8 sm:py-20 shadow-md sm:rounded-lg">
        
      </div>
    </div>
  );
};

export default UserManagement;
