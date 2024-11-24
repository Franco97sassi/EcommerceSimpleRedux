import { FETCH_PRODUCTS } from "../actions/productActions";

const initialState = {
  products: []
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
