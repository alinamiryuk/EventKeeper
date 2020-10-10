import React from 'react'
import { useSelector } from 'react-redux'
import { NoteListElement } from '../NoteListElement/NoteListElement'

export const NoteList = () => {
const notes = useSelector(store => store)

  return (
    <>
    <ul>
      {notes.map(note => (<NoteListElement key={note.id} note={note} />))}
    </ul>
    </>
  )
}
