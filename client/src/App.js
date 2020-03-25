import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

import './App.css';

import ProtectedRoute from './components/ProtectedRoute';
import FetchUser from './components/FetchUser';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profiles from './pages/Profiles'
import MyProfiles from './pages/MyProfiles';

function App() {
  return (
    <Fragment>
      <Navbar />
      <FetchUser> 
      <Container> 
        <Switch>
          <ProtectedRoute Route exact path='/' component={Home} />
          <ProtectedRoute Route exact path='/profile' component={Profile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <ProtectedRoute exact path='/profiles' component={Profiles} />
          <ProtectedRoute exact path='/my_profiles' component={MyProfiles} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
      </FetchUser>
    </Fragment>
  );
}

export default App;
