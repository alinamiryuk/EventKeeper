import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from './actionTypes'

export const createNote = (title, text) => {
  return {
    type: CREATE_NOTE,
    payload: { title, text }
  }
}

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export const editNote = (id, newTitle, newText) => {
  return {
    type: EDIT_NOTE,
    payload: {id, newTitle, newText}
  }
}
