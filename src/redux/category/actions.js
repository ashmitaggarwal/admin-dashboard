import qs from 'qs'
import API from '../../endpoints'
import {
  FETCH_BRAND_BY_CATEGORY,
  FETCH_BRAND_BY_CATEGORY_FAILED,
  FETCH_BRAND_BY_CATEGORY_SUCCESS,
  FETCH_OFFERS_BY_CATEGORY,
  FETCH_OFFERS_BY_CATEGORY_FAILED,
  FETCH_OFFERS_BY_CATEGORY_SUCCESS,
  FETCH_TRENDING_BY_CATEGORY,
  FETCH_TRENDING_BY_CATEGORY_FAILED,
  FETCH_TRENDING_BY_CATEGORY_SUCCESS,
  FETCH_SUB_CATEGORY,
  FETCH_SUB_CATEGORY_FAILED,
  FETCH_SUB_CATEGORY_SUCCESS,
  FETCH_COMBO_OFFER_BY_CATEGORY,
  FETCH_COMBO_OFFER_BY_CATEGORY_FAILED,
  FETCH_COMBO_OFFER_BY_CATEGORY_SUCCESS,
  QUANTITY_CHANGE_SUCCESS,
} from './actionType'

export function getBrandsByCategory() {
  return {
    type: FETCH_BRAND_BY_CATEGORY,
  }
}

export function getBrandsByCategorySuccess(payload) {
  return {
    type: FETCH_BRAND_BY_CATEGORY_SUCCESS,
    payload,
  }
}

export function getBrandsByCategoryFailed(payload) {
  return {
    type: FETCH_BRAND_BY_CATEGORY_FAILED,
    payload,
  }
}

export function getOffersByCategory() {
  return {
    type: FETCH_OFFERS_BY_CATEGORY,
  }
}

export function getOffersByCategorySuccess(payload) {
  return {
    type: FETCH_OFFERS_BY_CATEGORY_SUCCESS,
    payload,
  }
}

export function getOffersByCategoryFailed(payload) {
  return {
    type: FETCH_OFFERS_BY_CATEGORY_FAILED,
    payload,
  }
}

export function getTrendingByCategory() {
  return {
    type: FETCH_TRENDING_BY_CATEGORY,
  }
}

export function getTrendingByCategorySuccess(payload) {
  return {
    type: FETCH_TRENDING_BY_CATEGORY_SUCCESS,
    payload,
  }
}

export function getTrendingByCategoryFailed(payload) {
  return {
    type: FETCH_TRENDING_BY_CATEGORY_FAILED,
    payload,
  }
}

export function getComboOfferByCategory() {
  return {
    type: FETCH_COMBO_OFFER_BY_CATEGORY,
  }
}

export function getComboOfferByCategorySuccess(payload) {
  return {
    type: FETCH_COMBO_OFFER_BY_CATEGORY_SUCCESS,
    payload,
  }
}

export function getComboOfferByCategoryFailed(payload) {
  return {
    type: FETCH_COMBO_OFFER_BY_CATEGORY_FAILED,
    payload,
  }
}

export function getSubCategory() {
  return {
    type: FETCH_SUB_CATEGORY,
  }
}

export function getSubCategorySuccess(payload) {
  return {
    type: FETCH_SUB_CATEGORY_SUCCESS,
    payload,
  }
}

export function getSubCategoryFailed(payload) {
  return {
    type: FETCH_SUB_CATEGORY_FAILED,
    payload,
  }
}

export function QuantityChangeComboSuccess(payload) {
  return {
    type: QUANTITY_CHANGE_SUCCESS,
    payload,
  }
}

export const getBrandsByCategoryDetails = (payload) => async (dispatch, getState, api) => {
  // dispatch(getBrandsByCategory());
  const response = await api.post(API.BrandsByCategory, {
    category_slug: payload.category,
    given_page: 100,
    reward_points: null,
    id: payload.id,
    brand_bogo_status: null,
    brandid: payload.brandid,
    discount_from: payload.from,
    discount_to: payload.to,
  })
  if (response.data.code === 200) {
    dispatch(getBrandsByCategorySuccess(response.data))
  } else {
    dispatch(getBrandsByCategoryFailed(response.data))
  }
}

export const getOffersByCategoryDetails = (payload) => async (dispatch, getState, api) => {
  // dispatch(getOffersByCategory());
  const response = await api.get(API.OffersByCategory + payload + '/100')
  if (response.data.code === 200) {
    dispatch(getOffersByCategorySuccess(response.data))
  } else {
    dispatch(getOffersByCategoryFailed(response.data))
  }
}

export const getTrendingByCategoryDetails = (payload) => async (dispatch, getState, api) => {
  // dispatch(getTrendingByCategory());
  const response = await api.post(API.TrendingByCategory + payload.name + '/100', {
    user_id: payload.user_id,
  })
  if (response.data.code === 200) {
    dispatch(getTrendingByCategorySuccess(response.data))
  } else {
    dispatch(getTrendingByCategoryFailed(response.data))
  }
}

export const getAllComboOffers = (payload) => async (dispatch, getState, api) => {
  let FilteredArray = []
  let ProductsArray = []
  dispatch(getComboOfferByCategory())
  const response = await api.post(API.TrendingByCategory + payload.name + '/100', {
    user_id: payload.user_id,
  })
  if (response.data.code === 200) {
    ProductsArray = response.data.data[2]
    await ProductsArray.forEach((item) => {
      FilteredArray.push(item)
    })
    await FilteredArray.forEach((item) => {
      item.quantity = 0
      item.max_voucher_limit = 10
    })
    dispatch(getComboOfferByCategorySuccess(FilteredArray))
  } else {
    dispatch(getComboOfferByCategoryFailed(FilteredArray))
  }
}

export const getUpdatedBillingTable = (payload) => async (dispatch, getState, api) => {
  let billableProductsList = getState().category.combo
  const productID = parseInt(payload.productId, 10)
  const productQuantity = parseInt(payload.productQuantity, 10)
  billableProductsList = JSON.parse(JSON.stringify(billableProductsList))
  billableProductsList.forEach((item, index) => {
    if (item.id === productID) {
      if (!isNaN(productQuantity)) {
        if (productQuantity >= 10) {
          billableProductsList[index].quantity = 10
        } else {
          billableProductsList[index].quantity = productQuantity
        }
      }
    }
  })
  dispatch(QuantityChangeComboSuccess(billableProductsList))
}

export const fetchSubCategory = (payload) => async (dispatch, getState, api) => {
  // dispatch(getSubCategory());
  const response = await api.post(API.GetSubCategory, payload)
  if (response.data.code === 200) {
    dispatch(getSubCategorySuccess(response.data))
  } else {
    dispatch(getSubCategoryFailed(response.data))
  }
}
