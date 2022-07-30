/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Modal from "../Modal";

type IOrderDetailCard = {
  data: any;
};

const OrderDetailCard = ({ data }: IOrderDetailCard) => {
  const [completed, setCompleted] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    data.detail === "Tamamlanmış Sipariş"
      ? setCompleted(true)
      : setCompleted(false);
  }, []);

  return (
    <div className="grid gird-cols-1 lg:grid-cols-2 gap-5 w-full md:w-2/3 md:mx-auto">
      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Müşteri ismi
        </p>
        <p className="text-gray-500 font-semibold py-4 italic">
          {data.customer}
        </p>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Sipariş Detayı
        </p>
        <div className="text-gray-500 font-semibold py-4 italic flex flex-col xl:flex-row justify-between">
          <p className="mb-2">{data.detail}</p>
          {!completed && (
            <button
              className="border px-2 py-1 bg-indigo-800 text-white rounded-lg"
              onClick={() => setOpenModal(true)}
            >
              Siparişi Tamamla
            </button>
          )}
          {openModal && <Modal setOpenModal={setOpenModal} />}
        </div>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Sipariş Tarih
        </p>
        <p className="text-gray-500 font-semibold py-4 italic">{data.date}</p>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Sipariş Tutarı
        </p>
        <p className="text-gray-500 font-semibold py-4 italic">
          {data.cost} TL
        </p>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Müşteri Adresi
        </p>
        <p className="text-gray-500 font-semibold py-4 italic">
          {data.address}
        </p>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Müşteri Notu
        </p>
        <p className="text-gray-500 font-semibold py-4 italic">{data.note}</p>
      </div>

      <div className="bg-white p-6 rounded-md">
        <p className="font-bold text-xl md:text-2xl py-4 tracking-wide uppercase text-indigo-800">
          Sipariş İçeriği
        </p>
        <div className="text-gray-500 font-semibold py-4 italic">
          {data.content.map((item: any) => (
            <p> {item.order} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailCard;
