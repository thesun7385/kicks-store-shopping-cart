import Header from "./components/Header";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop";
import { PRODUCTS } from "./products.js";
import Footer from "./components/Footer";
import CartContextProvider from "./store/shopping-cart-context.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        <div className="flex flex-wrap justify-center">
          {PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </div>
      </Shop>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
