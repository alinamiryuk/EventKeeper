import {
  CREATE_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  LOGIN_AUTH,
  SIGNUP_AUTH,
} from './actionTypes'

export const createNote = (title, text) => {
  return {
    type: CREATE_NOTE,
    payload: { title, text },
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  }
}

export const editNote = (id, newTitle, newText) => {
  return {
    type: EDIT_NOTE,
    payload: { id, newTitle, newText },
  }
}

export const loginAuth = (success, user) => {
  return {
    type: LOGIN_AUTH,
    payload: { success, user },
  }
}

export const signupAuth = (success, user) => {
  return {
    type: SIGNUP_AUTH,
    payload: { success, user },
  }
}
