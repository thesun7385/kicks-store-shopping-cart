import Header from "./components/Header";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop";
import { PRODUCTS } from "./products.js";
import Footer from "./components/Footer";
import CartContextProvider from "./store/shopping-cart-context.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Home />
      <Shop>
        <div
          className="p-3 grid  gap-x-8 gap-y-4                
                      sm:grid-cols-1 
                      md:grid-cols-2                    
                      lg:grid-cols-3
                      "
        >
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
