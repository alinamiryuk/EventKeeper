import React from 'react'

export const Signup = () => {
  return (
    <div class="row">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" placeholder="EMAIL" />
      </div>
      <div class="input-field col s6">
        <input
          id="password"
          type="password"
          class="validate"
          placeholder="PASSWORD"
        />
      </div>
      <div class="input-field col s6">
        <input
          placeholder="USERNAME"
          id="userName"
          type="text"
          class="validate"
        />
      </div>
    </div>
  )
}
