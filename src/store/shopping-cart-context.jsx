// Key: shopping-cart-context.jsx works
// like utility file where you are able to
// export necessary functions
import { createContext, useReducer } from "react";
import { PRODUCTS } from "../products.js";

// Using Cartcontext to pass the items and functions to
// the components
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

// Function to add items and update the items
function shoppingCartReducer(state, action) {
  // If Add items to the cart
  if (action.type === "ADD_ITEM") {
    // copy arr to updatedItems
    const updatedItems = [...state.items];

    // Find the new item in the updatedItems arr
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );

    // Get the new item in the updatedItems arr
    const existingCartItem = updatedItems[existingCartItemIndex];

    // Check if the current item is already in the cart
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      // Find the product in the PRODUCTS arr
      const product = PRODUCTS.find((product) => product.id === action.payload);

      // Add the new item to the updatedItems arr
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }
    // Return the updatedItems arr
    return {
      ...state,
      items: updatedItems,
    };
  }

  // If update items to the cart
  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    // Find the existing item in the updatedItems arr by id
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    // Get the existing item in the updatedItems arr
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    // Update the quantity
    updatedItem.quantity += action.payload.amount;

    // If the quantity is less than or equal to 0, remove the item
    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      // Update the item in the updatedItems arr
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

// CartContextProvider function to pass the items and functions
// to the components
// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  // useReducer to manage the state of the cart
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  // function to add items to the cart
  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  // function to update the items in the cart
  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: { productId, amount },
    });
  }

  // Store the items and functions in the CartContext
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
