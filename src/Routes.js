/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import CountryDetail from './components/CountryDetail'

const Routes = ()  => (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries/:id" component={CountryDetail} />
          <Route path="/home" component={App} />
        </Switch>
    </BrowserRouter>
  )
export default Routes;

