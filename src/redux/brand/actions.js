import qs from 'qs'
import API from '../../endpoints'
import {
  FETCH_BRAND,
  FETCH_BRAND_FAILED,
  FETCH_BRAND_SUCCESS,
  QUANTITY_CHANGE_SUCCESS,
  PRODUCT_SUCCESS,
  STORE_LOCATOR,
  STORE_LOCATOR_FAILED,
  STORE_LOCATOR_SUCCESS,
} from './actionType'
import { postHeaders } from '../../Util/GlobalFuntion'

export function getBrand() {
  return {
    type: FETCH_BRAND,
  }
}

export function getBrandSuccess(payload) {
  return {
    type: FETCH_BRAND_SUCCESS,
    payload,
  }
}

export function getBrandProductSuccess(payload) {
  return {
    type: PRODUCT_SUCCESS,
    payload,
  }
}

export function getBrandFailed(payload) {
  return {
    type: FETCH_BRAND_FAILED,
    payload,
  }
}

export function QuantityChangeSuccess(payload) {
  return {
    type: QUANTITY_CHANGE_SUCCESS,
    payload,
  }
}

export function locatingStore() {
  return {
    type: STORE_LOCATOR,
  }
}

export function locateStoreSuccess(payload) {
  return {
    type: STORE_LOCATOR_SUCCESS,
    payload,
  }
}

export function locateStoreFailed(payload) {
  return {
    type: STORE_LOCATOR_FAILED,
    payload,
  }
}

export const getBrandDetails = (payload) => async (dispatch, getState, api) => {
  dispatch(getBrand())
  let ProductsArray = []
  let FilteredArray = []
  const response = await api.get(API.BrandDetail + payload)
  if (response.data.code === 200) {
    ProductsArray = response.data.data.products
    await ProductsArray.forEach((item) => {
      if (item.available_qty > 0) {
        FilteredArray.push(item)
      }
    })
    await FilteredArray.forEach((item) => {
      item.quantity = 0
      item.max_voucher_limit = 10
    })
    dispatch(getBrandProductSuccess(FilteredArray))
    dispatch(getBrandSuccess(response.data.data.brand))
  } else {
    dispatch(getBrandFailed(response.data))
  }
}

export const getUpdatedBillingTable = (payload) => async (dispatch, getState, api) => {
  let billableProductsList = getState().brand.products
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
  dispatch(QuantityChangeSuccess(billableProductsList))
}

export const locateStore = (payload) => async (dispatch, getState, api) => {
  dispatch(locatingStore())
  const response = await api.post(API.LocateStoreUrl, payload)
  if (response.data.code === 200 && response.data.data !== [] && response.data.data.length > 0) {
    dispatch(locateStoreSuccess(response.data.data))
  } else {
    dispatch(locateStoreFailed(response.data))
  }
}
