import {
  CHECK_MOBILE,
  CHECK_MOBILE_SUCCESS,
  CHECK_MOBILE_FAILED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  CLEAR_DATA,
  SAVE_MOBILE,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  FORGET_PASSWORD,
  FORGET_PASSWORD_FAILED,
  FORGET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
} from './actionType'

const initialState = {
  checkMobile: null,
  userProfile: null,
  registerUser: null,
  updateUser: null,
  resetPassword: null,
  forgetPin: null,
  mobileNumber: null,
}

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_MOBILE:
      return {
        ...state,
        mobileNumber: action.payload,
      }
    case CLEAR_DATA:
      return {
        ...state,
        checkMobile: null,
      }
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: null,
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: action.payload,
      }
    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        resetPassword: action.payload,
      }
    case FORGET_PASSWORD:
      return {
        ...state,
        forgetPin: null,
      }
    case FORGET_PASSWORD_FAILED:
      return {
        ...state,
        forgetPin: action.payload,
      }
    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        forgetPin: action.payload,
      }
    case CHECK_MOBILE:
      return {
        ...state,
        checkMobile: null,
      }
    case CHECK_MOBILE_SUCCESS:
      return {
        ...state,
        checkMobile: action.payload,
      }
    case CHECK_MOBILE_FAILED:
      return {
        ...state,
        checkMobile: action.payload,
      }
    case LOGIN_USER:
      return {
        ...state,
        userProfile: null,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
      }
    case LOGIN_USER_FAILED:
      return {
        ...state,
        userProfile: action.payload,
      }
    case REGISTER_USER:
      return {
        ...state,
        registerUser: null,
      }
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        registerUser: action.payload,
      }
    case REGISTER_USER_FAILED:
      return {
        ...state,
        registerUser: action.payload,
      }
    case UPDATE_USER:
      return {
        ...state,
        updateUser: null,
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUser: action.payload,
      }
    case UPDATE_USER_FAILED:
      return {
        ...state,
        updateUser: action.payload,
      }
    default:
      return state
  }
}

export default AuthReducer
