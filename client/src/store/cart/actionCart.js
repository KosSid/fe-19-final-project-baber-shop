import {ADDING_TO_CART,DELETE_FROM_CART,DECREASE_QUANTITY,INCREASE_QUANTITY} from "./actionTypes"
import Ajax from '../../services/Ajax'

const { deleteRequest, put } = Ajax


export const addToCart = (item,_id, isAuthenticated)  => {
  if(isAuthenticated){
    put('/cart/',_id).then(r => console.log(r.products))
  }
  return {
    type: ADDING_TO_CART,
    payload: {item}
  }
}

export const deleteFromCart = (id, isAuth)  => {
  if (isAuth) {
    deleteRequest('/cart', id).then(r => console.log(r.products))
  }
  return {
    type: DELETE_FROM_CART,
    payload: {id}
  }
}

export const increaseQuantity = (_id, isAuth) => {
  if (isAuth) {
    put('/cart/', _id).then(r => console.log(r.products))
  }
  return {
    type: INCREASE_QUANTITY,
    payload: {_id}
  }
}

export const decreaseQuantity = (_id, isAuth) => {
  if (isAuth) {
    deleteRequest('/cart/product', _id).then(r => console.log(r.products))
  }
  return {
    type: DECREASE_QUANTITY,
    payload: {_id}
  }
}
//
// export const updateCart = (updatedProducts) =>{
//   return {
//     type: UPDATE_CART,
//     payload: {updatedProducts}
//   }
// }

