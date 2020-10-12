import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AppPage } from '../pages/AppPage/AppPage'
import { AuthPage } from '../pages/AuthPage/AuthPage'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/">
          <AppPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  )
}
