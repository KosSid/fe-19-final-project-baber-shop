import { ADDING_TO_CART, DELETE_FROM_CART, DECREASE_QUANTITY,INCREASE_QUANTITY,UPDATE_CART } from "./actionTypes";

const initialState = {
  products: {
    products:[]
  }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_TO_CART:
      return {...state, products: {products: [...state.products.products.filter(item => item.product._id !== action.payload.item.product._id),action.payload.item]}}
    case DELETE_FROM_CART:
      console.log("DELETE_FROM_CART",action.payload.id);
      return {...state, products: {products: [...state.products.products.filter(item => item.product._id !== action.payload._id)]}}
    case INCREASE_QUANTITY:
      return {
        ...state,
        products: {products: state.products.products.map(product =>
          product.product._id === action.payload._id
            ? {...product, cartQuantity: product.cartQuantity + 1,
        }
            : product,
        )},
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        products: {products: state.products.products.map(product =>
          product.product._id === action.payload._id
            ? { ...product, cartQuantity: product.cartQuantity - 1,
        }
            : product,
        )},
      };
    case UPDATE_CART:
      return {
        ...state, products: {products: action.payload.updatedCart}
      }
    default:
      return state;
  }
};

export default cartReducer;