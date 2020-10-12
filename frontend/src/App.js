import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './hooks/useRoutes'
import 'materialize-css'

function App() {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
    <div className="container">
      {routes}
    </div>
    </BrowserRouter>
  )
}

export default App
