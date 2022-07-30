import React from "react";
import Sidebar from "../../components/Sidebar";

type IDashboard = {
  isOpen: boolean;
  setIsOpen: any;
};

const Dashboard = ({ isOpen, setIsOpen }: IDashboard) => {
  return (
    <div className="flex h-screen gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  );
};

export default Dashboard;
