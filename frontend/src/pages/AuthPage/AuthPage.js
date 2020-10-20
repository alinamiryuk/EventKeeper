import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../components/Login/Login'
import { Signup } from '../../components/Signup/Signup'
import style from '../AuthPage/AuthPage.module.css'

export const AuthPage = () => {
  return (
    <div class="card">
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width" className="tabs">
          <li class="tab" className="tab">
            <Link to="#link-login">Login</Link>
          </li>
          <li class="tab" className="tab">
            <Link to="#link-signup">Signup</Link>
          </li>
        </ul>
      </div>
      <div class="card-content grey lighten-4">
        <div id="link-login">
          <Login />
        </div>
        <div id="link-signup">
          <Signup />
        </div>
      </div>
    </div>
  )
}
