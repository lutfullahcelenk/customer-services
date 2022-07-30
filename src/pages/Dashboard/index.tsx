import React from "react";
import { useAppSelector } from "../../app/hooks";
import Card from "../../components/Card";
import Sidebar from "../../components/Sidebar";
import { SelectDashboard } from "../../features/dashboardSlice";

type IDashboard = {
  isOpen: boolean;
  setIsOpen: any;
};

const Dashboard = ({ isOpen, setIsOpen }: IDashboard) => {
  const data = useAppSelector(SelectDashboard);

  return (
    <div className="flex h-full gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="grid w-full h-screen gap-5 p-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((item: any) => (
          <Card key={item.name} name={item.name} count={item.count} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
