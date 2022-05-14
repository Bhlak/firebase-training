import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Home() {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      Home
      <br />
      <Link to={"/signup"}>Sign Up</Link>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
