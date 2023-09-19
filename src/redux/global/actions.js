import API from '../../endpoints'
import Cookies from 'js-cookie'

import {
  FETCH_TOPNAV_PRODUCT_LIST,
  FETCH_TOPNAV_PRODUCT_LIST_SUCCESS,
  FETCH_TOPNAV_PRODUCT_LIST_FAILED,
  GET_CARD_DETAILS,
  GET_CARD_DETAILS_FAILED,
  GET_CARD_DETAILS_SUCCESS,
  SELECT_CARD,
  FETCH_NAVIGATION,
  FETCH_NAVIGATION_FAILED,
  FETCH_NAVIGATION_SUCCESS,
  TOGGLE_HEADER,
  FETCH_ORDER,
  FETCH_ORDER_SUCCESS,
  BRAND_SEARCH,
  BRAND_SEARCH_SUCCESS,
  HOME_PAGE_CONTENT_FAILED,
  HOME_PAGE_CONTENT,
  HOME_PAGE_CONTENT_SUCCESS,
  ALL_ORDERS,
  ALL_ORDERS_FAILED,
  ALL_ORDERS_SUCCESS,
  ALL_BRANDS,
  ALL_BRANDS_FAILED,
  ALL_BRANDS_SUCCESS,
  RESEND_VOUCHER,
  FETCH_BRAND_PURPOSE,
  FETCH_BRAND_PURPOSE_FAILED,
  FETCH_BRAND_PURPOSE_SUCCESS,
  RESEND_VOUCHER_FAILED,
  RESEND_VOUCHER_SUCCESS,
  FETCH_PURPOSE_DETAIL,
  FETCH_PURPOSE_DETAIL_SUCCESS,
  FETCH_PURPOSE_DETAIL_FAILED,
  CREATE_TICKET,
  CREATE_TICKET_FAILED,
  CREATE_TICKET_SUCCESS,
  GET_PROMOCODES,
  GET_PROMOCODES_FAILED,
  GET_PROMOCODES_SUCCESS,
} from './actionType'
import { postHeaders } from '../../Util/GlobalFuntion'

export function getBrandSearchInfo() {
  return {
    type: BRAND_SEARCH,
  }
}

export function getBrandSearchInfoSuccess(payload) {
  return {
    type: BRAND_SEARCH_SUCCESS,
    payload,
  }
}

export function getCardInfo() {
  return {
    type: GET_CARD_DETAILS,
  }
}

export function getCardInfoSuccess(payload) {
  return {
    type: GET_CARD_DETAILS_SUCCESS,
    payload,
  }
}

export function getOrderInfo() {
  return {
    type: FETCH_ORDER,
  }
}

export function getOrderInfoSuccess(payload) {
  return {
    type: FETCH_ORDER_SUCCESS,
    payload,
  }
}

export function getCardInfoFailed(payload) {
  return {
    type: GET_CARD_DETAILS_FAILED,
    payload,
  }
}

export function saveSelectedCard(payload) {
  return {
    type: SELECT_CARD,
    payload,
  }
}

export function getNavigationInfo() {
  return {
    type: FETCH_NAVIGATION,
  }
}

export function getNavigationInfoSuccess(payload) {
  return {
    type: FETCH_NAVIGATION_SUCCESS,
    payload,
  }
}

export function getNavigationInfoFailed(payload) {
  return {
    type: FETCH_NAVIGATION_FAILED,
    payload,
  }
}

export function fetchTopNavProductList() {
  return {
    type: FETCH_TOPNAV_PRODUCT_LIST,
  }
}

export function fetchTopNavProductListSuccess(payload) {
  return {
    type: FETCH_TOPNAV_PRODUCT_LIST_SUCCESS,
    payload,
  }
}

export function fetchTopNavProductListFailed(payload) {
  return {
    type: FETCH_TOPNAV_PRODUCT_LIST_FAILED,
    payload,
  }
}

export function toggleHeader(payload) {
  return {
    type: TOGGLE_HEADER,
    payload,
  }
}

export function homePageContent() {
  return {
    type: HOME_PAGE_CONTENT,
  }
}

export function homePageContentSuccess(payload) {
  return {
    type: HOME_PAGE_CONTENT_SUCCESS,
    payload,
  }
}

export function homePageContentFailed(payload) {
  return {
    type: HOME_PAGE_CONTENT_FAILED,
    payload,
  }
}

export function getPromoCodes() {
  return {
    type: GET_PROMOCODES,
  }
}

export function getPromoCodesSuccess(payload) {
  return {
    type: GET_PROMOCODES_SUCCESS,
    payload,
  }
}

export function getPromoCodesFailed(payload) {
  return {
    type: GET_PROMOCODES_FAILED,
    payload,
  }
}

export function fetchTransaction() {
  return {
    type: ALL_ORDERS,
  }
}

export function fetchTransactionSuccess(payload) {
  return {
    type: ALL_ORDERS_SUCCESS,
    payload,
  }
}

export function fetchTransactionFailed(payload) {
  return {
    type: ALL_ORDERS_FAILED,
    payload,
  }
}

export function getAllBrands() {
  return {
    type: ALL_BRANDS,
  }
}

export function getAllBrandSuccess(payload) {
  return {
    type: ALL_BRANDS_SUCCESS,
    payload,
  }
}

export function getAllBrandFailed(payload) {
  return {
    type: ALL_BRANDS_FAILED,
    payload,
  }
}

export function resendGV() {
  return {
    type: RESEND_VOUCHER,
  }
}

export function resendGVSuccess(payload) {
  return {
    type: RESEND_VOUCHER_SUCCESS,
    payload,
  }
}

export function resendGVFailed(payload) {
  return {
    type: RESEND_VOUCHER_FAILED,
    payload,
  }
}

export function getAllBrandAndPurpose() {
  return {
    type: FETCH_BRAND_PURPOSE,
  }
}

export function getAllBrandAndPurposeSuccess(payload) {
  return {
    type: FETCH_BRAND_PURPOSE_SUCCESS,
    payload,
  }
}

export function getAllBrandAndPurposeFailed(payload) {
  return {
    type: FETCH_BRAND_PURPOSE_FAILED,
    payload,
  }
}

export function getAllPurposeDetail() {
  return {
    type: FETCH_PURPOSE_DETAIL,
  }
}

export function getAllPurposeDetailSuccess(payload) {
  return {
    type: FETCH_PURPOSE_DETAIL_SUCCESS,
    payload,
  }
}

export function getAllPurposeDetailFailed(payload) {
  return {
    type: FETCH_PURPOSE_DETAIL_FAILED,
    payload,
  }
}

export function createCustomerTicket() {
  return {
    type: CREATE_TICKET,
  }
}

export function createCustomerTicketSuccess(payload) {
  return {
    type: CREATE_TICKET_SUCCESS,
    payload,
  }
}

export function createCustomerTicketFailed(payload) {
  return {
    type: CREATE_TICKET_FAILED,
    payload,
  }
}

export const getCardDetails = () => async (dispatch, getState, api) => {
  dispatch(getCardInfo())
  const response = await api.get(API.GetCards)
  if (response.data.code === 200) {
    dispatch(getCardInfoSuccess(response.data.data))
  } else {
    dispatch(getCardInfoFailed(response.data.data))
  }
}

export const saveCard = (payload) => async (dispatch, getState, api) => {
  const response = await api.post(API.CreateUser, {})
  if (response.data.code === 200) {
    Cookies.set('loyalty_rewardz_user', response.data.data, { expires: 30 })
    Cookies.set('card', payload.card_name, { expires: 30 })
    Cookies.set('rate', payload.conversion_rate, { expires: 30 })
    Cookies.set('cardid', payload.id, { expires: 30 })
    dispatch(
      saveSelectedCard({
        user: response.data.data,
        card: payload.card_name,
        rate: payload.conversion_rate,
        cardid: payload.id,
      }),
    )
  } else {
    dispatch(
      saveSelectedCard({
        user: response.data.data,
        card: payload.card_name,
        rate: payload.conversion_rate,
        cardid: payload.id,
      }),
    )
  }
}

export const renderExistingUser = (payload) => async (dispatch, getState, api) => {
  dispatch(saveSelectedCard({ user: payload.user, card: payload.card, rate: payload.rate }))
}

export const getNavigationDetails = () => async (dispatch, getState, api) => {
  dispatch(getNavigationInfo())
  dispatch(fetchHomePageContent())
  const response = await api.get(API.TopNavListUrl)
  if (response.data.code === 200) {
    dispatch(getNavigationInfoSuccess(response.data.data))
  } else {
    dispatch(getNavigationInfoFailed(response.data.data))
  }
}

export const getOrderDetails = (payload) => async (dispatch, getState, api) => {
  const token = Cookies.get('loyalty_rewardz_user')
  dispatch(getOrderInfo())
  const response = await api.post(API.FetchParticularOrderUrl, payload, postHeaders(token))
  if (response.data.code === 200) {
    dispatch(getOrderInfoSuccess(response.data))
  } else {
    dispatch(getOrderInfoSuccess(response.data))
  }
}

export const brandSearchDetail = (payload) => async (dispatch, getState, api) => {
  dispatch(getBrandSearchInfo())
  const response = await api.post(API.BrandSearch, payload)
  if (response.data.code === 200) {
    dispatch(getBrandSearchInfoSuccess(response.data.data))
  } else {
    dispatch(getBrandSearchInfoSuccess(response.data.data))
  }
}

export const fetchHomePageContent = () => async (dispatch, getState, api) => {
  dispatch(homePageContent())
  const response = await api.get(API.HomeContent)
  if (response.data.code === 200) {
    dispatch(homePageContentSuccess(response.data))
  } else {
    dispatch(homePageContentFailed(response.data))
  }
}

export const fetchAllTransaction = () => async (dispatch, getState, api) => {
  dispatch(fetchTransaction())
  const token = Cookies.get('loyalty_rewardz_user')
  const response = await api.post(API.AllTransactions, { user_id: token })
  if (response.data.code === 200) {
    dispatch(fetchTransactionSuccess(response.data))
  } else {
    dispatch(fetchTransactionFailed(response.data))
  }
}
export const fetchAllBrands = () => async (dispatch, getState, api) => {
  dispatch(getAllBrands())
  const response = await api.post(API.AllBrands, {})
  if (response.data.code === 200) {
    dispatch(getAllBrandSuccess(response.data))
  } else {
    dispatch(getAllBrandFailed(response.data))
  }
}

export const resendVoucher = (payload) => async (dispatch, getState, api) => {
  dispatch(resendGV())
  const response = await api.post(API.ResendVoucherUrl, payload)
  if (response.data === 'SUCCESSFULLY SENT SMS') {
    dispatch(resendGVSuccess({ code: 200, data: response.data }))
  } else {
    dispatch(resendGVFailed({ code: 400, data: response.data }))
  }
}

export const fetchAllBrandAndPurpose = () => async (dispatch, getState, api) => {
  dispatch(getAllBrandAndPurpose())
  const response = await api.post(API.GetBrandListandPurpose, {})
  if (response.data.code === 200) {
    dispatch(getAllBrandAndPurposeSuccess(response.data))
  } else {
    dispatch(getAllBrandAndPurposeFailed(response.data))
  }
}

export const fetchPurposeDetail = (payload) => async (dispatch, getState, api) => {
  dispatch(getAllPurposeDetail())
  const response = await api.post(API.GetPurposeDetail, payload)
  if (response.data.code === 200) {
    dispatch(getAllPurposeDetailSuccess(response.data))
  } else {
    dispatch(getAllPurposeDetailFailed(response.data))
  }
}

export const createHDFCTicket = (payload) => async (dispatch, getState, api) => {
  dispatch(createCustomerTicket())
  const response = await api.post(API.CreateTicket, payload)
  if (response.data.code === 200) {
    dispatch(createCustomerTicketSuccess(response.data))
  } else {
    dispatch(createCustomerTicketFailed(response.data))
  }
}

export const getPromoCodesDetails = () => async (dispatch, getState, api) => {
  dispatch(getPromoCodes())
  const response = await api.get(API.GetPromocodes)
  if (response.data.code === 200) {
    dispatch(getPromoCodesSuccess(response.data))
  } else {
    dispatch(getPromoCodesFailed(response.data))
  }
}
