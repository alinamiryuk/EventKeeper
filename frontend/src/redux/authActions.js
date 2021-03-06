import {
  LOGIN_AUTH,
  SIGNUP_AUTH,
  LOGOUT_AUTH,
} from './actionTypes'

export const loginAuth = (user) => {
  return {
    type: LOGIN_AUTH,
    payload: { success: user.success, user },
  }
}

export const signupAuth = (user) => {
  return {
    type: SIGNUP_AUTH,
    payload: { success: user.success, user },
  }
}

export const logoutAuth = () => {
  return {
    type: LOGOUT_AUTH,
    payload: { success: false, registered: false },
  }
}

export const fetchLoginAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const user = await response.json()
  localStorage.setItem('user', JSON.stringify(user))
  dispatch(loginAuth(user))
}

export const fetchSignupAuth = (body) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const user = await response.json()
  localStorage.setItem('user', JSON.stringify(user))
  if (user.success) dispatch(signupAuth(user))
}

