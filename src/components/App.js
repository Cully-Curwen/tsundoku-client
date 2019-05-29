import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import UserLogin from './UserLogin';
import UserSignup from './UserSignup';
import CuratorLogin from './CuratorLogin';
import CuratorSignup from './CuratorSignup';
import Welcome from './Welcome';
import User from './User';
import Curator from './Curator';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Reseverd for Mr Header</h1>
      </div>
      <div className="body">
        <Switch>
            <Route exact path="/user/login" render={UserLogin} />
            <Route exact path="/user/signup" render={UserSignup} />
            <Route exact path="/curator/login" render={CuratorLogin} />
            <Route exact path="/curator/signup" render={CuratorSignup} />
            <Route path="/user" render={User} />
            <Route path="/curator" render={Curator} />
            <Route path="/" render={Welcome} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
