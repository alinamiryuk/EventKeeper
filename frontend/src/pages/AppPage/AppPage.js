import React from 'react'
import { NoteList } from '../../components/NoteList/NoteList'
import { NoteCreator } from '../../components/NoteCreator/NoteCreator'
import { Logout } from '../../components/Logout/Logout'

export const AppPage = () => {
  return (
    <>
      <Logout />
      <NoteCreator />
      <NoteList />
    </>
  )
}
