import React from 'react'
import { NoteList } from '../../components/NoteList/NoteList'
import { NoteCreator } from '../../components/NoteCreator/NoteCreator'
import { Navbar } from '../../components/Navbar/Navbar'

export const AppPage = () => {
  return (
    <>
      <Navbar />
      <NoteCreator />
      <NoteList />
    </>
  )
}
