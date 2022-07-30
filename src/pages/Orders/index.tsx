import React from "react";
import Sidebar from "../../components/Sidebar";

type IOrders = {
  isOpen: boolean;
  setIsOpen: any;
};

const Orders = ({ isOpen, setIsOpen }: IOrders) => {
  return (
    <div className="flex h-screen gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div>
        
      </div>
    </div>
  );
};

export default Orders;
