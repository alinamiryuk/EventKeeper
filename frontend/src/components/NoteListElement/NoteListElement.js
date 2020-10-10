import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, editNote } from '../../redux/actions'

export const NoteListElement = ({ note }) => {
  const dispatch = useDispatch()
  const [editArea, setEditArea] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newText, setNewText] = useState('')

  return (
    <>
      <li class="collection-item">
        <div class="container center-align">
          <h5>{note.title} </h5>
          <p>{note.text}</p>
          <button
            onClick={() => dispatch(deleteNote(note.id))}
            class="secondary-content btn-floating waves-effect waves-light blue-grey darken-4"
          >
            <i class="material-icons">delete</i>
          </button>
          <button
            onClick={() => setEditArea((state) => !state)}
            class="secondary-content btn-floating waves-effect waves-light blue-grey darken-4"
          >
            <i class="material-icons">edit</i>
          </button>

          {editArea ? (
            <div class="container center-align">
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                onClick={() => setEditArea((state) => !state)}
                class="btn-floating waves-effect waves-light blue-grey darken-4"
              >
                <i class="material-icons">close</i>
              </button>
              <button
                onClick={() => {
                  dispatch(editNote(note.id, newTitle, newText))
                  setEditArea((state) => !state)
                  setNewTitle('')
                  setNewText('')
                }}
                class="btn-floating waves-effect waves-light blue-grey darken-4"
              >
                <i class="material-icons">save</i>
              </button>
            </div>
          ) : null}
        </div>
      </li>
    </>
  )
}
