import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './hooks/useRoutes'
import 'materialize-css'

function App() {
  const token = JSON.parse(localStorage.getItem('user'))
  const checkAuth = !!token
  const routes = useRoutes(checkAuth)
  console.log(token, checkAuth);
 
  return (
    <BrowserRouter>
      <div className="container">{routes}</div>
    </BrowserRouter>
  )
}

export default App
