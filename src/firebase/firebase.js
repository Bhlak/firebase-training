import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLnlN0W9u-umofebpalWksO45O2aK2t6E",

  authDomain: "testing-18843.firebaseapp.com",

  projectId: "testing-18843",

  storageBucket: "testing-18843.appspot.com",

  messagingSenderId: "160031928370",

  appId: "1:160031928370:web:7c4083f848d78fbabecc2b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
