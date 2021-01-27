import { combineReducers } from 'redux'
import testReducer from './test_store/testReducer'
import modalHandler from './modal/modalReducer'
import preloaderReducer from './preloader/preloaderReducer'
import cartReducer from "./cart/cartReducer";
import modalTypes from './modalTypes/modalTypesReducer'

const rootReducer = combineReducers({
  testProduct: testReducer,
  modalHandler: modalHandler,
  preloader: preloaderReducer,
  cart: cartReducer,
  modalTypes: modalTypes
})

export default rootReducer
