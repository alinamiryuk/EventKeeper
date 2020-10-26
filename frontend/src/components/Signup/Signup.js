import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { fetchSignupAuth } from '../../redux/authActions'

export const Signup = () => {
  const dispatch = useDispatch()
  const [state, setState] = useForm({ email: '', password: '', userName: '' })

  return (
    <div class="row">
      <div class="input-field col s12 hide-span">
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
      <div class="input-field col s6 hide-span">
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
      <div class="input-field col s6 hide-span">
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
        class="secondary-content btn-floating waves-effect waves-light deep-purple darken-4"
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
