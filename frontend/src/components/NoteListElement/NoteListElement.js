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
      <li>
        <input type="checkbox" />
        {note.title}
        <button onClick={() => dispatch(deleteNote(note.id))}>DELETE</button>
        <button onClick={() => setEditArea(state => !state)}>EDIT</button>

        {editArea ? (
          <>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={() => setEditArea(state => !state)}>CLOSE</button>
            <button
              onClick={() => {
                dispatch(editNote(note.id, newTitle, newText))
                setEditArea(state => !state)
                setNewTitle('')
                setNewText('')
              }}
            >
              SAVE
            </button>
          </>
        ) : null}
      </li>
    </>
  )
}
