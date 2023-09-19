import {
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILED,
  FETCH_USERS_CART,
  FETCH_USERS_CART_SUCCESS,
  FETCH_USERS_CART_FAILED,
  DELETE_ITEM_FROM_CART,
  DELETE_ITEM_FROM_CART_SUCCESS,
  DELETE_ITEM_FROM_CART_FAILED,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILED,
  RESET_CART_STATUS,
  PAYMENT_PROCESSING_STATUS,
  SUBMIT_PAYMENT_DATA,
  READY_FOR_CHECKOUT,
  SET_DELETION_OBJECT,
  FETCH_CART_DETAILS,
  GENERATE_OTP_SUCCESS,
  GENERATE_OTP,
} from './actionType'

const initialState = {
  cart: [],
  cartStatus: null,
  addToCartStatus: null,
  deleteFromCartStatus: null,
  otp: null,
  tempCart: [],
  tempCartList: [],
  createOrderStatus: null,
  paymentData: null,
  paymentFormmdata: null,
  directCheckOutStatus: false,
  addressChangeObj: null,
  addressChangeObjIndex: null,
  changeAddressStatus: null,
  directCheckOutObject: null,
  readyForCheckOut: false,
  deletionObject: null,
  userLoggingIn: false,
  cartInfo: null,
  gyftrPayToggle: 0,
  reviewTempCart: null,
  saveLater: null,
  repriceCart: null,
  saveLaterCartItem: null,
  moveToCartOrSaveLater: null,
}

function userCartDetailReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_CART:
      return {
        ...state,
        cart: [],
        cartStatus: null,
      }
    case FETCH_USERS_CART_SUCCESS:
      return {
        ...state,
        cart: action.payload,
        cartStatus: action.payload,
        userLoggingIn: false,
      }
    case FETCH_USERS_CART_FAILED:
      return {
        ...state,
        cartStatus: action.payload,
        userLoggingIn: false,
      }
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        addToCartStatus: action.payload,
      }
    case FETCH_CART_DETAILS:
      return {
        ...state,
        cartInfo: action.payload,
      }
    case ADD_ITEM_TO_CART_FAILED:
      return {
        ...state,
        addToCartStatus: action.payload,
      }
    case DELETE_ITEM_FROM_CART_FAILED:
      return {
        ...state,
        deleteFromCartStatus: action.payload,
      }
    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        deleteFromCartStatus: null,
      }
    case DELETE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        deleteFromCartStatus: action.payload,
      }
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrderStatus: action.payload,
      }
    case CREATE_ORDER_FAILED:
      return {
        ...state,
        createOrderStatus: action.payload,
      }
    case RESET_CART_STATUS:
      return {
        ...state,
        createOrderStatus: null,
      }
    case PAYMENT_PROCESSING_STATUS:
      return {
        ...state,
        paymentData: action.payload,
      }
    case SUBMIT_PAYMENT_DATA:
      return {
        ...state,
        paymentFormmdata: action.payload,
      }

    case READY_FOR_CHECKOUT:
      return {
        ...state,
        readyForCheckOut: true,
      }
    case SET_DELETION_OBJECT:
      return {
        ...state,
        deletionObject: action.payload,
      }
    case GENERATE_OTP:
      return {
        ...state,
        otp: null,
      }
    case GENERATE_OTP_SUCCESS:
      return {
        ...state,
        otp: action.payload,
      }
    default:
      return state
  }
}

export default userCartDetailReducer
