import {combineReducers} from "redux"

import authentificationReducer from "./authentificationReducer"
import homeReducer from "./homeReducer"
import productDetailReducer from "./productDetailReducer"
import cartReducer from "./cartReducer"
import cartAddReducer from "./cartAddReducer"
import cartDeleteReducer from "./cartDeleteReducer"


const appReducer = combineReducers({
  authentificationReducer,
  homeReducer,
  productDetailReducer,
  cartReducer,
  cartAddReducer,
  cartDeleteReducer

})

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer;
