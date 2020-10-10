import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../redux/actions'

export const NoteCreator = () => {
  const [input, setInput] = useState('')
  const [textarea, setTextarea] = useState('')
  const dispatch = useDispatch()

  return (
    <div class="container center-align">
      <input
        value={input}
        placeholder="TITLE"
        onChange={(e) => setInput(e.target.value)}
      />
      <textarea
        value={textarea}
        placeholder="NOTE"
        onChange={(e) => setTextarea(e.target.value)}
      />
      <button
        onClick={() => dispatch(createNote(input, textarea))}
        class="btn-floating btn-large waves-effect waves-light blue-grey darken-4"
      >
        <i class="material-icons">add</i>
      </button>
    </div>
  )
}
