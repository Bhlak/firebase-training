import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import NewUser from "./NewUser";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Authenticate() {
  const [isUser] = useAuthState(auth);
  return (
    <Routes>
      <Route path={"/signup"} element={<NewUser />} />
      <Route path={"/signin"} element={<Login />} />
      {console.log("Authe")}
    </Routes>
  );
}

export default Authenticate;
