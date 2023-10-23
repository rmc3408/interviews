import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from 'store/store'
import MapPage from 'pages/Map'
import StartPage from 'pages/Start'



const Routes = () => {
  const hasStarted = useAppSelector(state => state.gameStarted.hasStarted)

  let componentLoaded = hasStarted ? MapPage : StartPage

  return (
    <BrowserRouter>
      <Switch>
        <Route component={componentLoaded} path='/map' />
        <Route path='*' render={() => <Redirect to='/map' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
