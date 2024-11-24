import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: { id: number, name: string, price: number }) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map((product: { id: number, name: string, price: number }) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
