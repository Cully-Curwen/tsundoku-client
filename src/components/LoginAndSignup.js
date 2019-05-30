import React, { useState } from 'react';
import { Route, Link, Redirect, } from "react-router-dom";
import { AUTH_TOKEN } from '../constants';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const USER_SIGNUP_MUTATION = gql`
  mutation userSignup($email: String!, $password: String!, $name: String!) {
    userSignup(email: $email, password: $password, name: $name) {
      token
      user{
        id
        name
        email
      }
    }
  }
`;

const USER_LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      user{
        id
        name
        email
      }
    }
  }
`;

const CURATOR_SIGNUP_MUTATION = gql`
  mutation curatorSignup($email: String!, $password: String!, $name: String!, $img: String, $blurb: String) {
    curatorSignup(email: $email, password: $password, name: $name, img: $img, blurb: $blurb) {
      token
      badge
      curator
    }
  }
`;

const CURATOR_LOGIN_MUTATION = gql`
  mutation curatorLogin($email: String!, $password: String!) {
    curatorLogin(email: $email, password: $password) {
      token
      badge
      curator
    }
  }
`;

function LoginAndSignup(props) {
  const [curator, setCurator] = useState(false);
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [blurb, setBlurb] = useState('');

  const userLogin = useMutation(USER_LOGIN_MUTATION, {
    update: (proxy, mutationResult) => {
      console.log(mutationResult)
    },
    variables: { email, password }
  });
  const userSignup = useMutation(USER_SIGNUP_MUTATION, {
    variables: { email, password, name }
  });
  const curatorLogin = useMutation(CURATOR_LOGIN_MUTATION, {
    variables: { email, password }
  });
  const curatorSignup = useMutation(CURATOR_SIGNUP_MUTATION, {
    variables: { email, password, name, img, blurb }
  });

  const handleSubmit = event => {
    event.preventDefault();
    // user login
    if (!signup && !curator) {
      userLogin();
    }
    // user signup
    if (signup && curator) {
      userSignup();
    }
    // curator login
    if (signup && curator) {
      curatorLogin();
    }
    // curator signup
    if (signup && curator) {
      curatorSignup();
    }
  }

  return (
    <div className="login_and_signup-form">
      <div className="account-type">
        <label htmlFor="user">User</label>
        <input 
          type="radio"
          name="user"
          id="user"
          checked={!curator}
          onChange={() => setCurator(!curator)}
        />
        <label htmlFor="curator">Curator</label>
        <input 
          type="radio"
          name="curator"
          id="curator"
          checked={curator}
          onChange={() => setCurator(!curator)}
        />
      </div>
      <br/>
      <form className="form-inputs" onSubmit={event => handleSubmit(event)}>
        {signup && 
          <>
          <label htmlFor="name">Name: </label>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={name}
          onChange={event => setName(event.target.value)}
          />
          <br/>
          </>
        }
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <br/>
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          name="password" 
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <br/>
        {signup && curator &&
          <>
          <label htmlFor="img">Image Url: </label>
          <input
            type="url" 
            name="img" 
            id="img"
            value={img}
            onChange={event => setImg(event.target.value)}
          />
          <br/>
          </>
        }
        {signup && curator &&
          <>
          <label htmlFor="blurb">Blurb: </label>
          <input
            type="url" 
            name="blurb" 
            id="blurb"
            value={blurb}
            onChange={event => setBlurb(event.target.value)}
          />
          <br/>
          </>
        }
        <br/>
        <input type="submit" value={signup ? "Signup" : "Login"}/>
      </form>
      <br/>
      <button
        className="toggle-signup"
        onClick={() => setSignup(!signup)}
      >{signup ? "Already have an Account" : "Register an Account"}</button>
    </div>
  );
};

export default LoginAndSignup;