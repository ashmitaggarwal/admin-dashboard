import Cookies from 'js-cookie'
import API from '../../api/Api'
import {
  FETCH_USERS_CART,
  FETCH_USERS_CART_SUCCESS,
  FETCH_USERS_CART_FAILED,
  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILED,
  DELETE_ITEM_FROM_CART,
  DELETE_ITEM_FROM_CART_SUCCESS,
  DELETE_ITEM_FROM_CART_FAILED,
  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_CART_STATUS,
  PAYMENT_PROCESSING_STATUS,
  SUBMIT_PAYMENT_DATA,
  READY_FOR_CHECKOUT,
  SET_DELETION_OBJECT,
  FETCH_CART_DETAILS,
  GENERATE_OTP,
  GENERATE_OTP_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
} from './actionType'
import { postHeaders } from '../../Util/GlobalFuntion'

export function fetchUsersCart() {
  return {
    type: FETCH_USERS_CART,
  }
}

export function generateOTP() {
  return {
    type: GENERATE_OTP,
  }
}

export function generateOTPSuccess(payload) {
  return {
    type: GENERATE_OTP_SUCCESS,
    payload,
  }
}

export function fetchCartDetails(payload) {
  return {
    type: FETCH_CART_DETAILS,
    payload,
  }
}

export function fetchUsersCartSuccess(payload) {
  return {
    type: FETCH_USERS_CART_SUCCESS,
    payload,
  }
}

export function fetchUsersCartFailed(payload) {
  return {
    type: FETCH_USERS_CART_FAILED,
    payload,
  }
}

export function addToCart(payload) {
  return {
    type: ADD_ITEM_TO_CART,
    payload,
  }
}

export function addToCartSuccess(payload) {
  return {
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload,
  }
}

export function addToCartFailed(payload) {
  return {
    type: ADD_ITEM_TO_CART_FAILED,
    payload,
  }
}

export function deleteFromCart() {
  return {
    type: DELETE_ITEM_FROM_CART,
  }
}

export function deleteFromCartSuccess(payload) {
  return {
    type: DELETE_ITEM_FROM_CART_SUCCESS,
    payload,
  }
}

export function deleteFromCartFailed(payload) {
  return {
    type: DELETE_ITEM_FROM_CART_FAILED,
    payload,
  }
}

export function creatingOrder() {
  return {
    type: CREATE_ORDER,
  }
}

export function createOrderSuccess(payload) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload,
  }
}

export function createOrderFailed(payload) {
  return {
    type: CREATE_ORDER_FAILED,
    payload,
  }
}

export function resetCartStatus() {
  return {
    type: RESET_CART_STATUS,
  }
}

export function paymentProcessingStatus(payload) {
  return {
    type: PAYMENT_PROCESSING_STATUS,
    payload,
  }
}

export function submitPaymentFormData(payload) {
  return {
    type: SUBMIT_PAYMENT_DATA,
    payload,
  }
}

export function readyForCheckout() {
  return {
    type: READY_FOR_CHECKOUT,
  }
}

export function setDeletionObject(payload) {
  return {
    type: SET_DELETION_OBJECT,
    payload,
  }
}

function findDiscount(price, dis) {
  let sellingAmount = price
  if (dis !== null) {
    sellingAmount = price - (price * dis) / 100
  }
  return sellingAmount
}

function customRound(value) {
  return Math.ceil(value)
}

function updateUser() {
  return {
    type: UPDATE_USER,
  }
}

function updateUserSuccess(payload) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  }
}

function updateUserFailed(payload) {
  return {
    type: UPDATE_USER_FAILED,
    payload,
  }
}

function roundPoint(item) {
  var totalPoint = 0
  var totalCash = 0
  if (item.cart_shop_type === 'RS') {
    var unitPrice = item.product_price / 2
    totalPoint =
      totalPoint +
      (findDiscount(unitPrice, item.redeem_point_point_discount) * item.cart_item_qty) /
        (Cookies.get('rate') ? Cookies.get('rate') : 1)
    totalCash =
      totalCash + findDiscount(unitPrice, item.redeem_shop_cash_discount) * item.cart_item_qty
    return {
      point: customRound(totalPoint),
      cash: customRound(totalCash),
    }
  }
  if (item.cart_shop_type === 'R') {
    totalPoint =
      totalPoint +
      (findDiscount(item.product_price, item.redeem_point_discount) * item.cart_item_qty) /
        (Cookies.get('rate') ? Cookies.get('rate') : 1)
    return {
      point: customRound(totalPoint),
      cash: 0,
    }
  }
  if (item.cart_shop_type === 'S') {
    totalCash =
      totalCash + findDiscount(item.product_price, item.shop_cash_discount) * item.cart_item_qty
    return {
      point: 0,
      cash: customRound(totalCash),
    }
  } else
    return {
      point: 0,
      cash: 0,
    }
}

/*
function roundPoint(item) {
    var totalPoint = 0;
    var totalCash = 0;
    if (item.cart_shop_type === "RS") {
        totalPoint = ((totalPoint + item.product_price * item.cart_item_qty) / 2) / (Cookies.get("rate") ? Cookies.get("rate") : 1);
        var roundPoints = Math.round(totalPoint);
        var adjustedPoint = (roundPoints - totalPoint) * (Cookies.get("rate") ? Cookies.get("rate") : 1);
        totalCash = (totalCash + (item.product_price * item.cart_item_qty)) / 2;
        var adjustedCash = (totalCash - adjustedPoint);
        return {
            point: Math.round(findDiscount(roundPoints, item.redeem_point_point_discount)),
            cash: Math.ceil(findDiscount(adjustedCash, item.redeem_shop_cash_discount))
        }
    }
    if (item.cart_shop_type === "R") {
        totalPoint = (totalPoint + item.product_price * item.cart_item_qty) / (Cookies.get("rate") ? Cookies.get("rate") : 1);
        var roundPoints = Math.round(totalPoint);
        if (item.redeem_point_discount !== null) {
            return {
                point: Math.round(findDiscount(roundPoints, item.redeem_point_discount)),
                cash: 0
            }
        } else {
            return {
                point: roundPoints,
                cash: 0
            }
        }
    }
    if (item.cart_shop_type === "S") {
        totalPoint = (totalPoint + item.product_price * item.cart_item_qty);
        var roundPoints = Math.round(totalPoint);
        if (item.shop_cash_discount !== null) {
            return {
                point: 0,
                cash: Math.ceil((findDiscount(roundPoints, item.shop_cash_discount)))
            }
        } else {
            return {
                point: 0,
                cash: Math.ceil(roundPoints.toFixed(2))
            }

        }

    } else return {
        point: 0,
        cash: 0
    }
}
*/
export const getCartItems = (payload) => async (dispatch, getState, api) => {
  dispatch(fetchUsersCart())
  let FilteredArray = []
  let ProductsArray = []
  const token = payload ? payload : Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.GetCartItemsUrl, postHeaders(token))
  if (response.data.code === 200) {
    ProductsArray = response.data.data
    await ProductsArray.forEach((item) => {
      FilteredArray.push(item)
    })

    await FilteredArray.forEach((item) => {
      item.cash = roundPoint(item).cash
      item.points = roundPoint(item).point
    })
    dispatch(fetchUsersCartSuccess(response.data))
    dispatch(fetchCartDetails(FilteredArray))
  } else {
    dispatch(fetchUsersCartFailed(response.data))
    dispatch(fetchCartDetails(FilteredArray))
  }
}

export const removeItemFromCart = (payload) => async (dispatch, getState, api) => {
  dispatch(deleteFromCart())
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(`${API.DeleteCartItemUrl}`, payload, postHeaders(token))
  if (response.data.code === 200) {
    dispatch(deleteFromCartSuccess('Item Removed Successfully'))
    dispatch(getCartItems())
  } else {
    dispatch(deleteFromCartFailed('Something Went Wrong'))
  }
}

export const addCartItems = (payload) => async (dispatch, getState, api) => {
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.AddToCartUrl, payload, postHeaders(token))
  if (response.data.code === 200) {
    dispatch(addToCartSuccess(response.data))
    dispatch(getCartItems())
  } else if (response.data.code === 204 || response.data.code === 400) {
    dispatch(addToCartFailed(response.data))
    dispatch(getCartItems())
  } else {
    dispatch(addToCartFailed(response.data))
  }
}

export const createOrder = (payload) => async (dispatch, getState, api) => {
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.CreateOrderUrl, payload, postHeaders(token))
  if (response.data.code === 200) {
    window.location.href = response.data.data
    // Cookies.set("TransactionId", response.data.data.checkout.TransactionId, {expires: 30});
    dispatch(createOrderSuccess(response.data))
    // dispatch(submitPaymentFormData(response.data));
  } else {
    dispatch(createOrderFailed(response.data))
  }
}

export const changeItemQuantity = (payload) => async (dispatch, getState, api) => {
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.ChangeQuantityUrl, payload, postHeaders(token))
  if (response.data.code === 200) {
    dispatch(getCartItems())
  } else {
    return null
  }
}

export const getGenerateOTP = (payload) => async (dispatch, getState, api) => {
  dispatch(generateOTP())
  const response = await api.post(API.GenerateOTP, payload)
  if (response.data.data) {
    dispatch(generateOTPSuccess(response.data))
  } else {
    dispatch(generateOTPSuccess(response.data))
  }
}

export const updateDeliveryDetail = (payload) => async (dispatch, getState, api) => {
  dispatch(updateUser())
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.UpdateDeliveryDetail, payload, postHeaders(token))
  if (response.data.data) {
    dispatch(updateUserSuccess(response.data))
    dispatch(getCartItems())
  } else {
    dispatch(updateUserFailed(response.data))
  }
}

export const removeBuyNowItemFromCart = (payload) => async (dispatch, getState, api) => {
  dispatch(deleteFromCart())
  const token = payload ? payload : Cookies.get('loyalty_rewardz_user')
  const response = await api.post(`${API.RemoveBuyNOw}`, null, postHeaders(token))
  if (response.data.code === 200) {
    dispatch(deleteFromCartSuccess('Item Removed Successfully'))
    dispatch(getCartItems())
  } else {
    dispatch(deleteFromCartFailed('Something Went Wrong'))
  }
}
