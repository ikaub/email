import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import { CreateEmail } from './pages/CreateEmail/CreateEmail';
import { Email } from './pages/Email/Email';
import { Header } from './components/Header/Header';

import './App.scss';

export const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/new">
          <CreateEmail/>
        </Route>
        <Route path={[ '/inbox', '/outbox' ]}>
          <Email/>
        </Route>
        <Route path="*">
          <Redirect to="/new"/>
        </Route>
      </Switch>
    </Router>
  );
};
