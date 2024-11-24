// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Acción para agregar al carrito
export const addToCart = (product: { id: number, name: string, price: number }) => ({
  type: ADD_TO_CART,
  payload: product
});

// Acción para eliminar del carrito
export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id
});
