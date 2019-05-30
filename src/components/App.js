import React from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom'
import LoginAndSignup from './LoginAndSignup';
import UserSignup from './UserSignup';
import CuratorLogin from './CuratorLogin';
import CuratorSignup from './CuratorSignup';
import Splash from './Splash';
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
            {/* <Route exact path="/user/login" render={LoginAndSignup} />
            <Route exact path="/user/signup" render={UserSignup} />
            <Route exact path="/curator/login" render={CuratorLogin} />
            <Route exact path="/curator/signup" render={CuratorSignup} /> */}
            <Route exact path="/user" render={User} />
            <Route exact path="/curator" render={Curator} />
            <Route path="/" render={Splash} />
            <Route render={props => <h1>404 - Not Found</h1>}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
