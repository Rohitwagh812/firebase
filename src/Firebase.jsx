import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCvhzjoId_yrEy1KTeZ5if0-F7o-rMiK98",

  authDomain: "fir-react-40012.firebaseapp.com",

  projectId: "fir-react-40012",

  storageBucket: "fir-react-40012.appspot.com",

  messagingSenderId: "75223855737",

  appId: "1:75223855737:web:818d3ac07af16f2a75daa8"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);