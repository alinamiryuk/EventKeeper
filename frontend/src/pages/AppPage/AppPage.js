import React from 'react'
import { NoteList } from '../../components/NoteList/NoteList'
import { NoteCreator } from '../../components/NoteCreator/NoteCreator'

export const AppPage = () => {
  return (
    <>
      <NoteCreator />
      <NoteList />
    </>
  )
}
