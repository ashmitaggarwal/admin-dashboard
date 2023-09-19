import { combineReducers } from 'redux'
import GlobalReducer from './global/reducer'
import AuthReducer from './auth/reducer'
import CategoryReducer from './category/reducer'
import BrandReducer from './brand/reducer'
import CartReducer from './cart/reducer'

export default combineReducers({
  global: GlobalReducer,
  auth: AuthReducer,
  category: CategoryReducer,
  brand: BrandReducer,
  order: CartReducer,
})
