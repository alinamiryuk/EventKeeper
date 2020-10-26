import React from 'react'
import { useSelector } from 'react-redux'
import { NoteListElement } from '../NoteListElement/NoteListElement'

export const NoteList = () => {
  const notes = useSelector((store) => store.notes)
  const creator = JSON.parse(localStorage.getItem('user'))
  const usersNotes = notes.filter((note) => note.creator === creator.username)
  console.log(usersNotes)

  return (
    <>
      <ul class="collection center-align">
        {usersNotes.map((note) => (
          <NoteListElement key={note.id} note={note} />
        ))}
      </ul>
    </>
  )
}
