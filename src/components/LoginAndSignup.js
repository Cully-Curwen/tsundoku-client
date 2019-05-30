import React, { useState } from 'react';
import { Route, Link, Redirect, } from "react-router-dom";

function LoginAndSignup(props) {

  const [curator, setCurator] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [blurb, setBlurb] = useState('');

  return (
    <div className="login_and_signup-form">
      <input 
        type="radio"
        name="user"
        id="user"
        checked={!curator}
        onChange={() => setCurator(!curator)}
      />
      <input 
        type="radio"
        name="user"
        id="user"
        checked={curator}
        onChange={() => setCurator(!curator)}
      />
    </div>
  );
};

export default LoginAndSignup;