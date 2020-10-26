import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from './actionTypes'

const initialState = []

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NOTE:
      const creator = JSON.parse(localStorage.getItem('user'))
      return [
        ...state,
        {
          id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
          title: action.payload.title,
          text: action.payload.text,
          creator: creator.username,
        },
      ]

    case DELETE_NOTE:
      return state.filter((note) => note.id !== action.payload)

    case EDIT_NOTE:
      return state.map((note) =>
        note.id === action.payload.id
          ? {
              ...note,
              title: action.payload.newTitle,
              text: action.payload.newText,
            }
          : note
      )
    default:
      return state
  }
}
