import { ADD_TO_CART } from '../actionTypes';

export const cartAction = (product) => ({
    type: ADD_TO_CART,
    payload: product
})