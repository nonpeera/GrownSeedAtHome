import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import './Signin.css';
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
        <h1 className="textcomment">GROWNSEED</h1>
        <h1 className="textcomment">@HOME</h1>
      <form onSubmit={signIn}>
        <h3 className="textcomment">Email address</h3>
        <input className="rounded-textfield"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <h3 className="textcomment">Password</h3>
        <input className="rounded-textfield"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <h3></h3>
        <button type="submit" className="grownseed-button">Log In</button>
        
      </form>
    </div>
  );
};

export default SignIn;