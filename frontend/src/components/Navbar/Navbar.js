import React from 'react'
import { useSelector } from 'react-redux'
import { Logout } from '../Logout/Logout'

export const Navbar = () => {
  const checkAuth = useSelector((state) => state.auth.success)
  if (checkAuth) {
    return (
      <div class="nav-container">
        <img class="img-small" src="/images/logo.png" />
        <h2>EVENT KEEPER</h2>
        <Logout />
      </div>
    )
  } else {
    return (
      <div class="nav-container">
        <img class="img-huge" src="/images/logo.png" />
        <div class="span-huge-text">
          <span class="huge-text">EVENT</span>
          <span class="huge-text">KEEPER</span>
        </div>
      </div>
    )
  }
}
