import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './hooks/useRoutes'
import 'materialize-css'
import { useSelector } from 'react-redux'

function App() {
  const checkAuth = useSelector((state) => state.auth.success)
  const routes = useRoutes(checkAuth)

  return (
    <BrowserRouter>
      <div className="container">{routes}</div>
    </BrowserRouter>
  )
}

export default App
