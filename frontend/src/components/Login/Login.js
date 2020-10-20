import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { fetchLoginAuth } from '../../redux/actions'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const status = useSelector((state) => state.user?.success)
  const [state, setState] = useForm({ userName: '', password: '' })

  useEffect(() => {
    if (status) history.push('/')
  }, [status])

  return (
    <>
      <div class="row">
        <div class="input-field col s12">
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
        <div class="input-field col s12">
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
