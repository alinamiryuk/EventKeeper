import { LOGIN_AUTH, SIGNUP_AUTH } from './actionTypes'

const initialState = JSON.parse(localStorage.getItem('user')) || {
  success: false,
  registered: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH:
      return {...state, ...action.payload.user, registered: action.payload.success, success: action.payload.success}
    case SIGNUP_AUTH:
      return {...state, registered: action.payload.success, ...action.payload.user, success: action.payload.success}
    default:
      return state
  }
}
