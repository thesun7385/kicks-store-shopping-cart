import { useRef, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";
import CartModal from "./CartModal.jsx";

export default function Header() {
  // Using ref to access the modal
  const modal = useRef();
  // Using contecxt to get the items in the cart
  // Importing for the CartContext
  const { items } = useContext(CartContext);
  const cartQuntity = items.length;

  // Function to open the cart after clicking
  function handleOpenCartClick() {
    modal.current.open();
  }

  // Actions to be displayed in the modal
  let modalActions = (
    <div className="flex m-3 gap-3 justify-end">
      <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
        Close
      </button>
    </div>
  );

  if (cartQuntity > 0) {
    modalActions = (
      <>
        <div className="flex m-3 gap-3 justify-end">
          <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
            Checkout
          </button>
          <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">
            Close
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="Shopping Cart" actions={modalActions} />
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <h1 className="font-mono text-dark-600 uppercase font-bold text-5xl">
              The kicks store
            </h1>
          </div>

          <button
            className="hover:bg-gray-200  text-black
            font-mono  py-3 px-3 border border-none rounded-lg text-xl "
            onClick={handleOpenCartClick}
          >
            Cart({cartQuntity})
          </button>
        </nav>
      </header>
    </>
  );
}
