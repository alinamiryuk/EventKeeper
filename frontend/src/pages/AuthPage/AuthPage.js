import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../../components/Login/Login'
import { Signup } from '../../components/Signup/Signup'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'

export const AuthPage = () => {
  const history = useHistory()
  const status = useSelector((state) => state.auth.success)
  useEffect(() => {
    if (status) history.push('/')
  }, [])

  return (
    <>
    <Navbar />
    <div class="card">
      <div class="card-tabs ">
        <ul class="tabs tabs-fixed-width ">
          <li class="tab ">
            <Link to="#link-login">Login</Link>
          </li>
          <li class="tab">
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
    </>
  )
}
