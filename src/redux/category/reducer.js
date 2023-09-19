import {
  FETCH_BRAND_BY_CATEGORY,
  FETCH_BRAND_BY_CATEGORY_FAILED,
  FETCH_BRAND_BY_CATEGORY_SUCCESS,
  FETCH_TRENDING_BY_CATEGORY_SUCCESS,
  FETCH_OFFERS_BY_CATEGORY_FAILED,
  FETCH_OFFERS_BY_CATEGORY_SUCCESS,
  FETCH_TRENDING_BY_CATEGORY_FAILED,
  FETCH_TRENDING_BY_CATEGORY,
  FETCH_OFFERS_BY_CATEGORY,
  FETCH_SUB_CATEGORY_SUCCESS,
  FETCH_SUB_CATEGORY_FAILED,
  FETCH_SUB_CATEGORY,
  FETCH_COMBO_OFFER_BY_CATEGORY_FAILED,
  FETCH_COMBO_OFFER_BY_CATEGORY_SUCCESS,
  FETCH_COMBO_OFFER_BY_CATEGORY,
  QUANTITY_CHANGE_SUCCESS,
} from './actionType'

const initialState = {
  category: null,
  offers: null,
  trending: null,
  subCategory: null,
  combo: null,
}

function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUB_CATEGORY:
      return {
        ...state,
        subCategory: null,
      }
    case FETCH_SUB_CATEGORY_SUCCESS:
      return {
        ...state,
        subCategory: action.payload,
      }
    case FETCH_SUB_CATEGORY_FAILED:
      return {
        ...state,
        subCategory: action.payload,
      }
    case FETCH_BRAND_BY_CATEGORY:
      return {
        ...state,
        category: null,
      }
    case FETCH_BRAND_BY_CATEGORY_FAILED:
      return {
        ...state,
        category: action.payload,
      }
    case FETCH_BRAND_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload,
      }
    case FETCH_OFFERS_BY_CATEGORY:
      return {
        ...state,
        offers: null,
      }
    case FETCH_OFFERS_BY_CATEGORY_FAILED:
      return {
        ...state,
        offers: action.payload,
      }
    case FETCH_OFFERS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        offers: action.payload,
      }
    case FETCH_TRENDING_BY_CATEGORY:
      return {
        ...state,
        trending: null,
      }
    case FETCH_TRENDING_BY_CATEGORY_FAILED:
      return {
        ...state,
        trending: action.payload,
      }
    case FETCH_TRENDING_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        trending: action.payload,
      }
    case FETCH_COMBO_OFFER_BY_CATEGORY:
      return {
        ...state,
        combo: null,
      }
    case FETCH_COMBO_OFFER_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        combo: action.payload,
      }
    case FETCH_COMBO_OFFER_BY_CATEGORY_FAILED:
      return {
        ...state,
        combo: action.payload,
      }
    case QUANTITY_CHANGE_SUCCESS:
      return {
        ...state,
        combo: action.payload,
      }
    default:
      return state
  }
}

export default GlobalReducer
