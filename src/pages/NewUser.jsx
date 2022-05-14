import SignUp from "../components/SignUp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function NewUser(user) {
  const makeUser = (info) => {
    const { mail, password } = info;
    createUserWithEmailAndPassword(auth, mail, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  };

  return <SignUp makeUser={makeUser} />;
}

export default NewUser;
