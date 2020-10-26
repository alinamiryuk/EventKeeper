import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../redux/notesActions'

export const NoteCreator = () => {
  const [input, setInput] = useState('')
  const [textarea, setTextarea] = useState('')
  const dispatch = useDispatch()

  return (
    <div class="container center-align">
      <div class="input-field col s12 hide-span">
        <input
          value={input}
          type="text"
          placeholder="TITLE"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div class="input-field hide-span">
        <textarea
          value={textarea}
          placeholder="NOTE"
          onChange={(e) => setTextarea(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          dispatch(createNote(input, textarea))
          setInput('')
          setTextarea('')
        }}
        class="btn-floating btn-large waves-effect waves-light deep-purple darken-4"
      >
        <i class="material-icons">add</i>
      </button>
    </div>
  )
}
