import {
  FETCH_BRAND,
  FETCH_BRAND_FAILED,
  FETCH_BRAND_SUCCESS,
  PRODUCT_SUCCESS,
  QUANTITY_CHANGE_SUCCESS,
  STORE_LOCATOR_SUCCESS,
  STORE_LOCATOR_FAILED,
  STORE_LOCATOR,
} from './actionType'

const initialState = {
  brand: null,
  products: null,
  stores: null,
  storesError: null,
}

function BrandReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BRAND:
      return {
        ...state,
        brand: null,
      }
    case FETCH_BRAND_FAILED:
      return {
        ...state,
        brand: action.payload,
      }
    case FETCH_BRAND_SUCCESS:
      return {
        ...state,
        brand: action.payload,
      }
    case STORE_LOCATOR:
      return {
        ...state,
        storesError: null,
        stores: null,
      }
    case STORE_LOCATOR_SUCCESS:
      return {
        ...state,
        stores: action.payload,
        storesError: null,
      }
    case STORE_LOCATOR_FAILED:
      return {
        ...state,
        storesError: action.payload,
        stores: null,
      }
    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }
    case QUANTITY_CHANGE_SUCCESS:
      return {
        ...state,
        products: action.payload,
      }

    default:
      return state
  }
}

export default BrandReducer
