import React from "react";
import SignIn from "../components/SignIn";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  let navigate = useNavigate();
  const admitUser = (data) => {
    const { mail, password } = data;
    signInWithEmailAndPassword(auth, mail, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return <SignIn admitUser={admitUser} />;
}

export default Login;
