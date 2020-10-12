import { STATES } from 'mongoose'
import { useState } from 'react'

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState)

  const changeField = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value

    setState({ ...STATES, [name]: value })
  }
  return [state, changeField]
}
