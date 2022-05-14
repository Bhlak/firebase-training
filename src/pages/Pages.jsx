import React, { useState } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import NewUser from "./NewUser";
import Login from "./Login";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Pages() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (isUser) => {
    setUser(isUser);
  });
  return (
    <Routes>
      <Route path={"/"} element={user ? <Home /> : <Login />} />
      <Route path={"/signup"} element={<NewUser />} />
      <Route path={"/signin"} element={<Login />} />
    </Routes>
  );
}

export default Pages;
