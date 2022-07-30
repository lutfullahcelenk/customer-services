import React from "react";
import { useLocation } from "react-router-dom";
import OrderDetailCard from "../../components/OrderDetailCard";
//components
import Sidebar from "../../components/Sidebar";
//constants
import { orders } from "../../constants/orders";

type IOrderDetail = {
  isOpen: boolean;
  setIsOpen: any;
};

const OrderDetail = ({ isOpen, setIsOpen }: IOrderDetail) => {
  const { state } = useLocation();

  //@ts-ignore
  const filteredOrder = orders?.filter((order) => state.id === order.id);

  return (
    <div className="flex h-full gradient">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="w-full justify-start flex flex-col px-4 py-8 sm:py-20 shadow-md sm:rounded-lg">
        <h2 className="font-bold text-center text-indigo-700 text-xl sm:text-3xl pb-10 uppercase">
          Sipariş Detay Sayfası
        </h2>
        <p className="w-full md:w-2/3 md:mx-auto text-justify font-semibold pb-8 sm:pb-20 text-lg sm:text-2xl">
          Bu sekmeye siparişlerim bölümünde bulunan sipariş tablosundaki ilgili
          siparişin karşısında bulunan sipariş detayı butonuna tıklayarak
          gelmektesiniz. Burada detayına girdiğiniz siparişin detayları
          sergilenmektedir. Siparişe ait bilgilerden sipariş detayı, siparişi
          veren müşterinin isim ve soyisim bilgileri, siparişin verildiği tarih
          ve siparişin tutarı gösterilmektedir.
        </p>

       <OrderDetailCard data={filteredOrder[0]} />
      </div>
    </div>
  );
};

export default OrderDetail;
