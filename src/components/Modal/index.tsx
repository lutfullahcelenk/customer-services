import React from "react";

type IModal = {
  setOpenModal: any;
};

const Modal = ({ setOpenModal }: IModal) => {
  return (
    <div className="absolute border py-10 bg-indigo-400 text-white top-1/2 left-1/2 -translate-x-1/2 text-center rounded-xl">
      <p className="py-4 px-2">
        Sipariş tamamlama işlemi yalnızca kuryeler tarafından gerçekleştirilir.
      </p>
      <button
        onClick={() => setOpenModal(false)}
        className="border bg-indigo-700 px-4 py-2 rounded-xl"
      >
        Kapat
      </button>
    </div>
  );
};

export default Modal;
