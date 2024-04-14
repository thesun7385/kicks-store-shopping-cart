import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

import Cart from "./Cart.jsx";

// eslint-disable-next-line react/prop-types
const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  // Using ref to access the modal
  const dialog = useRef();
  // Using imperative handle to open the modal
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  // Render inside the id modal
  return createPortal(
    <dialog
      className="bg-white shadow-lg rounded-lg overflow-hidden w-96"
      id="modal"
      ref={dialog}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
        <h1 className="text-lg font-bold">{title}</h1>
        <span className="text-gray-600 pr-3">Items</span>
      </div>

      {/* Render current items in the cart */}
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;
