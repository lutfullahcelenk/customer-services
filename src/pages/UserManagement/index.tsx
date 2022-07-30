import React, { useState } from "react";
//components
import Filter from "../../components/Filter";
import Sidebar from "../../components/Sidebar";
//constants
import {users} from "../../constants/users"

type IUserManagement = {
  isOpen: boolean;
  setIsOpen: any;
};

const UserManagement = ({ isOpen, setIsOpen }: IUserManagement) => {
  const [userStatus, setUserStatus] = useState("");

  // filter function
  const handleFilter = (event: any) => {
    setUserStatus(event.target.value);
  };

  // filtered orders
   const filteredUsers = users.filter(
     (user) => user?.role === userStatus || userStatus === ""
   );

  return (
    <div className="flex h-screen gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full justify-start flex flex-col px-4 py-8 sm:py-20 shadow-md sm:rounded-lg">
        <Filter
          handleFilter={handleFilter}
          value={userStatus}
          isFilter="userManagements"
        />

        <div className="overflow-x-auto ">
          <table className="w-full mt-6 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Kullanıcı Adı
                </th>
                <th scope="col" className="py-3 px-6">
                  Kullanıcı Soyadı
                </th>
                <th scope="col" className="py-3 px-6">
                  Kullanıcı Email Adresi
                </th>
                <th scope="col" className="py-3 px-6">
                  Kullanıcı Kayıt Tarihi
                </th>
                <th scope="col" className="py-3 px-6">
                  Kullanıcı Rolü
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {user.name}
                  </th>
                  <td className="py-4 px-6">{user.surname}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.date}</td>
                  <td className="py-4 px-6">{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
