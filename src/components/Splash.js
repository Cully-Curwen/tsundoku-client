import React, {  } from 'react';
import { Route, Link, Redirect, } from "react-router-dom";
import { AUTH_TOKEN, BADGE } from '../constants';
import LoginAndSignup from "./LoginAndSignup";

function Splash(props) {
  const authToken = localStorage.getItem(AUTH_TOKEN)
  const badge = localStorage.getItem(BADGE)

  return (
    <div>
      {authToken 
        ? badge 
            ? <Redirect to='/curator' />
            : <Redirect to='/user' />
        : <LoginAndSignup to='/user/login' />
      } 
    </div>
  );
};

export default Splash;  