import { Button } from '@material-ui/core';
import React from 'react';
import './login.scss';

import { auth, provider } from '../firebase';


// Sign in using Firebase Auth
function login() {
  const signIn = () => {

    auth.signInWithPopup(provider)
      .catch((error) => alert(error.message));
  }

  return (
    <div className='login'>

      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b7/Discord_logo_svg.svg"
          alt=""
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default login;
