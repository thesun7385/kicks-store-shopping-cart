import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Cart() {
  // Using the useContext hook to get the items and updateItemQuantity function from the CartContext
  const { items, updateItemQuantity } = useContext(CartContext);

  // Calculating the total price of the items in the cart starting from 0
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Formatting the total price
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart" className="p-4">
      {/* If there are no items in the cart, display a message */}
      {items.length === 0 && (
        <p className="text-gray-600 text-lg mb-4 ">No items</p>
      )}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;
            return (
              <li key={item.id}>
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <span className="text-gray-600">({formattedPrice})</span>
                  </div>

                  <button
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => updateItemQuantity(item.id, -1)}
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="text-gray-600 hover:text-red-500"
                    onClick={() => updateItemQuantity(item.id, 1)}
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      <path d="M19,13H13v6h-2v-6H5v-2h6V5h2v6h6V13z" />
                    </svg>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {/* Style this with tailwindcss */}
      <div className="p-3 bg-gray-200 rounded-lg">
        <div className="flex justify-between item-center">
          <span className="font-bold text-lg">Total:</span>
          <span className="font-bold text-lg">{formattedTotalPrice}</span>
        </div>
      </div>
    </div>
  );
}

{
  /* <div class="px-4 py-3 bg-gray-200">
  <div class="flex justify-between items-center">
    <span class="font-bold text-lg">Total:</span>
    <span class="font-bold text-lg">$74.97</span>
  </div>
  <button class="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
    Checkout
  </button>
</div>; */
}
