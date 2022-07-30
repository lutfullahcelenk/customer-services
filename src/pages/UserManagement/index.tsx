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
      
    </div>
  );
};

export default UserManagement;
