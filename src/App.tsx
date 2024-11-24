import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React Redux E-commerce</h1>
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
