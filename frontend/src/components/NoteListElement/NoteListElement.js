import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote, editNote } from '../../redux/notesActions'

export const NoteListElement = ({ note }) => {
  const dispatch = useDispatch()
  const [editArea, setEditArea] = useState(false)
  const [newTitle, setNewTitle] = useState(note.title)
  const [newText, setNewText] = useState(note.text)

  return (
    <>
      <li class="collection-item">
        <div class="container center-align">
          <button
            onClick={() => dispatch(deleteNote(note.id))}
            class="secondary-content btn-floating waves-effect waves-light deep-purple darken-4"
          >
            <i class="material-icons">delete</i>
          </button>
          <button
            onClick={() => setEditArea((state) => !state)}
            class="secondary-content btn-floating waves-effect waves-light deep-purple darken-4"
          >
            <i class="material-icons">edit</i>
          </button>
          <h5>{note.title} </h5>
          <h6>{note.text}</h6>

          {editArea ? (
            <div class="container center-align">
              <div class="input-field col s12 hide-span">
                <input
                  value={newTitle}
                  type="text"
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
              <button
                onClick={() => setEditArea((state) => !state)}
                class="btn-floating waves-effect waves-light deep-purple darken-4"
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
                class="btn-floating waves-effect waves-light deep-purple darken-4"
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
