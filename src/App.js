import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { useAuthState } from "./context/AuthContext";

import Feed from "./components/Feed";
import Durbuy from "./pages/Durbuy";
import London from "./pages/London";
import Garmisch from "./pages/Garmisch";
import Deauville from "./pages/Deauville";
import Hattem from "./pages/Hattem";

function App() {
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
                        <div className="app_body">
                            <Feed />
                        </div>

                        <div>
                            {isAuthenticated ? <Profile /> : <Redirect to="/signin" />}
                        </div>
                    </Route>

                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/Durbuy">
                        <Durbuy />
                    </Route>
                    <Route path="/London">
                        <London />
                    </Route>
                    <Route path="/Garmisch">
                        <Garmisch />
                    </Route>
                    <Route path="/Deauville">
                        <Deauville />
                    </Route>
                    <Route path="/Hattem">
                        <Hattem />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;

