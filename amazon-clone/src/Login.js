import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if(auth){
                    history.push('/')
                }
            })
            .catch((error) => alert(error.message))
    }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          alt=""
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freelogodesign.org%2Ffile%2Fapp%2Fblog%2F20180911090509731amazon_logo_RGB.jpg&f=1&nofb=1"
        />
      </Link>
      <div className="login__container">
        <form>
          <h1>Sign-In</h1>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange=
            {e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange=
            {e => setPassword(e.target.value)} />
          <button onClick={signIn} className="login__signInButton" type="submit">Sign In</button>
          <p className="">
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login__registerButton">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
