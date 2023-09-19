import {
  GET_CARD_DETAILS,
  GET_CARD_DETAILS_SUCCESS,
  GET_CARD_DETAILS_FAILED,
  SELECT_CARD,
  FETCH_NAVIGATION,
  FETCH_NAVIGATION_FAILED,
  FETCH_NAVIGATION_SUCCESS,
  TOGGLE_HEADER,
  FETCH_ORDER,
  FETCH_ORDER_SUCCESS,
  POINT_RANGE_SUCCESS,
  POINT_RANGE,
  BRAND_SEARCH_SUCCESS,
  BRAND_SEARCH,
  HOME_PAGE_CONTENT_SUCCESS,
  HOME_PAGE_CONTENT,
  HOME_PAGE_CONTENT_FAILED,
  ALL_ORDERS_FAILED,
  ALL_ORDERS_SUCCESS,
  ALL_ORDERS,
  ALL_BRANDS_FAILED,
  ALL_BRANDS_SUCCESS,
  ALL_BRANDS,
  RESEND_VOUCHER,
  RESEND_VOUCHER_SUCCESS,
  RESEND_VOUCHER_FAILED,
  FETCH_BRAND_PURPOSE_FAILED,
  FETCH_BRAND_PURPOSE_SUCCESS,
  FETCH_BRAND_PURPOSE,
  FETCH_PURPOSE_DETAIL,
  FETCH_PURPOSE_DETAIL_FAILED,
  FETCH_PURPOSE_DETAIL_SUCCESS,
  CREATE_TICKET,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAILED,
  GET_PROMOCODES,
  GET_PROMOCODES_SUCCESS,
  GET_PROMOCODES_FAILED,
} from './actionType'

const initialState = {
  content: null,
  card: null,
  allOrders: null,
  selectedCard: null,
  navigation: null,
  showHeader: true,
  orderDetail: null,
  pointRange: null,
  brandSearch: [],
  loading: false,
  pointLow: '',
  pointHigh: '',
  allBrands: null,
  resendVoucher: null,
  purposeBrands: null,
  promoCode: null,
  purposeDetailBrands: null,
  ticket: null,
}

function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case BRAND_SEARCH:
      return {
        ...state,
        brandSearch: [],
      }
    case BRAND_SEARCH_SUCCESS:
      return {
        ...state,
        brandSearch: action.payload,
      }
    case ALL_BRANDS:
      return {
        ...state,
        allBrands: null,
      }
    case ALL_BRANDS_SUCCESS:
      return {
        ...state,
        allBrands: action.payload,
      }
    case ALL_BRANDS_FAILED:
      return {
        ...state,
        allBrands: action.payload,
      }
    case ALL_ORDERS:
      return {
        ...state,
        allOrders: null,
      }
    case ALL_ORDERS_SUCCESS:
      return {
        ...state,
        allOrders: action.payload,
      }
    case ALL_ORDERS_FAILED:
      return {
        ...state,
        allOrders: action.payload,
      }
    case GET_CARD_DETAILS:
      return {
        ...state,
        card: null,
      }
    case GET_CARD_DETAILS_SUCCESS:
      return {
        ...state,
        card: action.payload,
      }
    case GET_CARD_DETAILS_FAILED:
      return {
        ...state,
        card: action.payload,
      }
    case HOME_PAGE_CONTENT:
      return {
        ...state,
        content: null,
      }
    case HOME_PAGE_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.payload,
      }
    case HOME_PAGE_CONTENT_FAILED:
      return {
        ...state,
        content: action.payload,
      }
    case SELECT_CARD: {
      return {
        ...state,
        selectedCard: action.payload,
      }
    }
    case FETCH_NAVIGATION:
      return {
        ...state,
        navigation: null,
      }
    case FETCH_NAVIGATION_SUCCESS:
      return {
        ...state,
        navigation: action.payload,
      }
    case FETCH_NAVIGATION_FAILED:
      return {
        ...state,
        navigation: action.payload,
      }
    case RESEND_VOUCHER:
      return {
        ...state,
        resendVoucher: null,
      }
    case RESEND_VOUCHER_SUCCESS:
      return {
        ...state,
        resendVoucher: action.payload,
      }
    case RESEND_VOUCHER_FAILED:
      return {
        ...state,
        resendVoucher: action.payload,
      }
    case TOGGLE_HEADER:
      return {
        ...state,
        showHeader: action.payload,
      }
    case FETCH_ORDER:
      return {
        ...state,
        orderDetail: null,
      }
    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        orderDetail: action.payload,
      }
    case POINT_RANGE:
      return {
        ...state,
        pointRange: null,
        loading: true,
        pointLow: '',
        pointHigh: '',
      }
    case POINT_RANGE_SUCCESS:
      return {
        ...state,
        pointRange: action.payload,
        loading: false,
        pointLow: action.point.from,
        pointHigh: action.point.to,
      }
    case FETCH_BRAND_PURPOSE:
      return {
        ...state,
        purposeBrands: null,
      }
    case FETCH_BRAND_PURPOSE_SUCCESS:
      return {
        ...state,
        purposeBrands: action.payload,
      }
    case FETCH_BRAND_PURPOSE_FAILED:
      return {
        ...state,
        purposeBrands: action.payload,
      }
    case FETCH_PURPOSE_DETAIL:
      return {
        ...state,
        purposeDetailBrands: null,
      }
    case FETCH_PURPOSE_DETAIL_FAILED:
      return {
        ...state,
        purposeDetailBrands: action.payload,
      }
    case FETCH_PURPOSE_DETAIL_SUCCESS:
      return {
        ...state,
        purposeDetailBrands: action.payload,
      }
    case CREATE_TICKET:
      return {
        ...state,
        ticket: null,
      }
    case CREATE_TICKET_FAILED:
      return {
        ...state,
        ticket: action.payload,
      }
    case CREATE_TICKET_SUCCESS:
      return {
        ...state,
        ticket: action.payload,
      }
    case GET_PROMOCODES:
      return {
        ...state,
        promoCode: null,
      }
    case GET_PROMOCODES_SUCCESS:
      return {
        ...state,
        promoCode: action.payload,
      }
    case GET_PROMOCODES_FAILED:
      return {
        ...state,
        promoCode: null,
      }
    default:
      return state
  }
}

export default GlobalReducer
