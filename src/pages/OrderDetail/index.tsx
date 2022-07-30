import React from "react";
import { useLocation } from "react-router-dom";
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

        <div className="grid gird-cols-1 lg:grid-cols-2 gap-5 w-full md:w-2/3 md:mx-auto text-center">
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Müşteri ismi
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].customer}
            </p>
          </div>
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Sipariş Detayı
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].detail}
            </p>
          </div>
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Sipariş Tarih
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].date}
            </p>
          </div>
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Sipariş Tutarı
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].cost} TL
            </p>
          </div>
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Müşteri Adresi
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].address}
            </p>
          </div>
          <div className="bg-white p-6 rounded-md">
            <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
              Müşteri Notu
            </p>
            <p className="text-gray-500 font-semibold py-4 italic">
              {filteredOrder[0].note}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
