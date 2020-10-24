import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AppPage } from '../pages/AppPage/AppPage'
import { AuthPage } from '../pages/AuthPage/AuthPage'

export const useRoutes = (auth) => {
  if (auth) {
    return (
      <Switch>
        <Route path="/" exact>
          <AppPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }
}
