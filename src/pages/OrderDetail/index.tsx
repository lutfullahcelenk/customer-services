import React from "react";
import Sidebar from "../../components/Sidebar";

type IOrderDetail = {
  isOpen: boolean;
  setIsOpen: any;
};

const OrderDetail = ({ isOpen, setIsOpen }: IOrderDetail) => {
  return (
    <div className="flex h-screen gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  );
};

export default OrderDetail;
