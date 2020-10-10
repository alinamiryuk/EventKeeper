import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNote } from '../../redux/actions'

export const NoteCreator = () => {
  const [input, setInput] = useState('')
  const [textarea, setTextarea] = useState('')
  const dispatch = useDispatch()

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <textarea
        value={textarea}
        onChange={(e) => setTextarea(e.target.value)}
      />
      <button onClick={() => dispatch(createNote(input, textarea))}>
        CREATE NOTE
      </button>
    </>
  )
}
