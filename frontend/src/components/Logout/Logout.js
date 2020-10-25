import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAuth } from '../../redux/actions'

export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div class="container">
      <button
        onClick={() => {
          dispatch(logoutAuth())
          localStorage.removeItem('user')
          history.push('/auth')
        }}
        class="secondary-content btn-floating waves-effect waves-light deep-purple darken-4"
      >
        <i class="material-icons">exit_to_app</i>
      </button>
    </div>
  )
}
