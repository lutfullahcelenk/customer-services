import React from "react";

type IFilter = {
  handleFilter: any;
  value: string;
  isFilter: string;
};

const Filter = ({ handleFilter, value, isFilter }: IFilter) => {
  return (
    <div className="w-full mt-14">
      {isFilter === "orders" && (
        <label className="block">
          <select
            value={value}
            onChange={(e) => handleFilter(e)}
            className="block w-1/2 mt-1 rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Tüm Siparişler</option>
            <option value="Yeni Sipariş">Yeni Siparişler</option>
            <option value="Yolda Olan Sipariş">Yolda Olan Siparişler</option>
            <option value="Tamamlanmış Sipariş">Tamamlanmış Siparişler</option>
          </select>
        </label>
      )}

      {isFilter === "userManagements" && (
        <label className="block">
          <select
            value={value}
            onChange={(e) => handleFilter(e)}
            className="block w-1/2 mt-1 rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="">Tüm Kullanıcılar</option>
            <option value="Admin">Admin</option>
            <option value="Customer Support">Customer Supportler</option>
          </select>
        </label>
      )}
    </div>
  );
};

export default Filter;
