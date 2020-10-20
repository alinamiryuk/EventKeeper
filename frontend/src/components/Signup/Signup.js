import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchSignupAuth } from '../../redux/actions'
import style from '../Signup/Signup.module.css'

export const Signup = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const status = useSelector((state) => state.user?.success)
  const [state, setState] = useForm({ email: '', password: '', userName: '' })

  useEffect(() => {
    if (status) history.push('/')
  }, [status])

  return (
    <div class="row">
      <div class="input-field col s12" className={`${style.hide} input-field col s12`}>
        <input
          id="email"
          type="email"
          name="email"
          class="validate"
          placeholder="EMAIL"
          value={state.email}
          onChange={setState}
        />
      </div>
      <div class="input-field col s6" className={`${style.hide} input-field col s6`}>
        <input
          id="password"
          type="password"
          name="password"
          class="validate"
          placeholder="PASSWORD"
          value={state.password}
          onChange={setState}
        />
      </div>
      <div class="input-field col s6" className={`${style.hide} input-field col s6`}>
        <input
          placeholder="USERNAME"
          id="userName"
          type="text"
          name="userName"
          class="validate"
          value={state.userName}
          onChange={setState}
        />
      </div>
      <button
        class="secondary-content btn-floating waves-effect waves-light blue-grey darken-4"
        onClick={(e) => {
          e.preventDefault()
          dispatch(fetchSignupAuth(state))
        }}
      >
        <i class="material-icons">add</i>
      </button>
    </div>
  )
}
