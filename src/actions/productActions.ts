// Action types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// Acción para cargar los productos
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
  payload: [
    { id: 1, name: 'Camiseta', price: 15 },
    { id: 2, name: 'Pantalón', price: 20 },
    { id: 3, name: 'Zapatos', price: 50 },
  ]
});
