import API from '../../endpoints'
import {
  CHECK_MOBILE,
  CHECK_MOBILE_FAILED,
  CHECK_MOBILE_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER,
  CLEAR_DATA,
  SAVE_MOBILE,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  FORGET_PASSWORD,
  FORGET_PASSWORD_FAILED,
  FORGET_PASSWORD_SUCCESS,
} from './actionType'
import Cookies from 'js-cookie'
import { postHeaders } from '../../Util/GlobalFuntion'

function resetData() {
  return {
    type: CLEAR_DATA,
  }
}

function checkMobileNumber() {
  return {
    type: CHECK_MOBILE,
  }
}

function checkMobileNumberSuccess(payload) {
  return {
    type: CHECK_MOBILE_SUCCESS,
    payload,
  }
}

function checkMobileNumberFailed(payload) {
  return {
    type: CHECK_MOBILE_FAILED,
    payload,
  }
}

function loginUser() {
  return {
    type: LOGIN_USER,
  }
}

function loginUserSuccess(payload) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  }
}

function loginUserFailed(payload) {
  return {
    type: LOGIN_USER_FAILED,
    payload,
  }
}

function registerUser() {
  return {
    type: REGISTER_USER,
  }
}

function registerUserSuccess(payload) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload,
  }
}

function registerUserFailed(payload) {
  return {
    type: REGISTER_USER_FAILED,
    payload,
  }
}

function resetPin() {
  return {
    type: RESET_PASSWORD,
  }
}

function resetPinSuccess(payload) {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload,
  }
}

function resetPinFailed(payload) {
  return {
    type: RESET_PASSWORD_FAILED,
    payload,
  }
}

function forgetPin() {
  return {
    type: FORGET_PASSWORD,
  }
}

function forgetPinSuccess(payload) {
  return {
    type: FORGET_PASSWORD_SUCCESS,
    payload,
  }
}

function forgetPinFailed(payload) {
  return {
    type: FORGET_PASSWORD_FAILED,
    payload,
  }
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

function saveMobile(payload) {
  return {
    type: SAVE_MOBILE,
    payload,
  }
}

export const checkUser = (payload) => async (dispatch, getState, api) => {
  dispatch(checkMobileNumber())
  dispatch(saveMobile(payload.mobile))
  const response = await api.post(API.CheckMobile, payload)
  if (response.data.code === 200) {
    dispatch(checkMobileNumberSuccess(response.data))
  } else {
    dispatch(checkMobileNumberFailed(response.data))
  }
}

export const login = (payload) => async (dispatch, getState, api) => {
  dispatch(loginUser())
  const response = await api.post(API.LoginUser, payload)
  if (response.data.code === 200) {
    Cookies.set('loyalty_rewardz_user', response.data.apikey)
    dispatch(loginUserSuccess(response.data))
  } else {
    dispatch(loginUserFailed(response.data))
  }
}

export const ssoLogin = (payload) => async (dispatch, getState, api) => {
  dispatch(loginUser())
  const response = await api.post(API.SSOLoginUser, payload)
  if (response.data.code === 200) {
    Cookies.set('loyalty_rewardz_user', response.data.apikey, { expires: 30 })
    Cookies.set('sso_user', 1, { expires: 30 })
    dispatch(loginUserSuccess(response.data))
  } else {
    dispatch(loginUserFailed(response.data))
  }
}

export const register = (payload) => async (dispatch, getState, api) => {
  dispatch(registerUser())
  const response = await api.post(API.RegisterUser, payload)
  if (response.data.code === 200) {
    dispatch(registerUserSuccess(response.data))
  } else {
    dispatch(registerUserFailed(response.data))
  }
}

export const updateUserDetail = (payload) => async (dispatch, getState, api) => {
  dispatch(updateUser())
  const response = await api.post(API.UpdateProfile + payload.id, payload.detail)
  if (response.data.code === 200) {
    dispatch(updateUserSuccess(response.data))
  } else {
    dispatch(updateUserFailed(response.data))
  }
}

export const getUserDetail = (payload) => async (dispatch, getState, api) => {
  dispatch(loginUser())
  const response = await api.post(API.GetProfile, postHeaders())
  if (response.data.code === 200) {
    Cookies.set('loyalty_rewardz_user', response.data.apikey, { expires: 30 })
    dispatch(loginUserSuccess(response.data))
  } else {
    dispatch(loginUserFailed(response.data))
  }
}

export const getResetPin = (payload) => async (dispatch, getState, api) => {
  dispatch(resetPin())
  const response = await api.post(API.ResetPassword, payload)
  if (response.data.code === 200) {
    dispatch(resetPinSuccess(response.data))
  } else {
    dispatch(resetPinFailed(response.data))
  }
}
export const getForgetPin = (payload) => async (dispatch, getState, api) => {
  dispatch(forgetPin())
  const response = await api.post(API.ForgetPin, payload)
  if (response.data.code === 200) {
    dispatch(forgetPinSuccess(response.data))
  } else {
    dispatch(forgetPinFailed(response.data))
  }
}

export const clearData = () => async (dispatch, getState, api) => {
  dispatch(resetData())
}
