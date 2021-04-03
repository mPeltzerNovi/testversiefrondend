import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import {useAuthState} from "./context/AuthContext";

function App() {
  //Dit hoort bij de Route
  const { isAuthenticated } = useAuthState();

  return (
      <>
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              {isAuthenticated ? (
                  <Profile/>
              ) : (
                  <Redirect to="/signin" />
              )
              }
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </>
  );
}

export default App;

