import React from 'react'

export const Login = () => {
  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <input
            placeholder="USERNAME"
            id="userName"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s12">
          <input
            id="password"
            type="password"
            class="validate"
            placeholder="PASSWORD"
          />
        </div>
      </div>
    </>
  )
}
