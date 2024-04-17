// eslint-disable-next-line react/prop-types
import { useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";

// eslint-disable-next-line react/prop-types
export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      {/* Product card goes here */}
      <div className=" bg-white border border-gray-200 rounded-xl shadow-2">
        <img className="rounded-xl fit " src={image} alt={title} />
        <div className="p-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">
            ${price}
          </h4>
          <p className="mb-3 font-normal text-gray-700">{description}</p>

          <div className="flex button justify-end">
            <button
              onClick={() => addItemToCart(id)}
              className="text-white
               bg-gray-800
               hover:bg-gray-900 
               dark:bg-gray-800
               dark:hover:bg-gray-700
               dark:focus:ring-gray-700
               dark:border-gray-700
               focus:outline-none focus:ring-4
               focus:ring-gray-300 font-medium 
               rounded-lg text-sm                     
               px-3 py-2.5"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
