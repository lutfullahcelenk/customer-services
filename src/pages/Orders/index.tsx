import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//components
import Filter from "../../components/Filter";
import Sidebar from "../../components/Sidebar";
//constants
import { orders } from "../../constants/orders";
import useResponsive from "../../hooks/useMediaQuery";

type IOrders = {
  isOpen: boolean;
  setIsOpen: any;
};

const Orders = ({ isOpen, setIsOpen }: IOrders) => {
  const navigate = useNavigate();
  const { xs } = useResponsive();
  const [orderName, setOrderName] = useState("");

  // filter function
  const handleFilter = (event: any) => {
    setOrderName(event.target.value);
  };

  // filtered orders
  const filteredOrders = orders.filter(
    (order) => order?.detail === orderName || orderName === ""
  );

  return (
    <div className="flex h-full gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full justify-start flex flex-col p-2 shadow-md sm:rounded-lg">
        <Filter handleFilter={handleFilter} value={orderName} isFilter="orders" />

        <div className="overflow-x-auto ">
          <table className="w-full mt-6 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Müşteri Adı
                </th>
                <th scope="col" className="py-3 px-6">
                  Sipariş Tarihi
                </th>
                <th scope="col" className="py-3 px-6">
                  Sipariş Tutarı
                </th>
                <th scope="col" className="py-3 px-6">
                  Sipariş Detayı
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {order.customer}
                  </th>
                  <td className="py-4 px-6">{order.date}</td>
                  <td className="py-4 px-6">{order.cost} TL</td>
                  <td className="py-4 px-6 flex justify-between">
                    {order.detail}
                    <button
                      type="button"
                      className="border bg-indigo-700 text-white px-2 ml-4 py-1 rounded-lg"
                      onClick={() =>
                        navigate(`/orders/${order.id}`, {
                          state: { id: order.id },
                        })
                      }
                    >
                      {xs ? "Detay" : "Sipariş Detayı"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
