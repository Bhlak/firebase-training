import "./App.css";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  onAuthStateChanged(auth, (userz) => {
    if (userz) {
      console.log("logged in");
    } else {
      console.log("logged out");
    }
  });
  return <Router>{<Pages />} </Router>;
}

export default App;
