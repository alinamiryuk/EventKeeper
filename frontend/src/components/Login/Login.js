import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchLoginAuth } from '../../redux/actions'
import style from '../Login/Login.module.css'

export const Login = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ userName: '', password: '' })

  return (
    <>
      <div class="row">
        <div className={`${style.hideSpan} input-field col s12`}>
          <input
            placeholder="USERNAME"
            id="userName"
            type="text"
            name="userName"
            // className={`${style.userName} validate`}
            class="validate"
            value={state.userName}
            onChange={setState}
          />
        </div>
        <div className={`${style.hideSpan} input-field col s12`}>
          <input
            id="password"
            type="password"
            class="validate"
            name="password"
            placeholder="PASSWORD"
            value={state.password}
            onChange={setState}
          />
        </div>
        <button
          class="secondary-content btn-floating waves-effect waves-light blue-grey darken-4"
          onClick={(e) => {
            e.preventDefault()
            dispatch(fetchLoginAuth(state))
          }}
        >
          <i class="material-icons">check</i>
        </button>
      </div>
    </>
  )
}
