// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDotMeHzheu4OX73uE1BZ9x8jvpfwD_mbw",
    authDomain: "clone-a82f3.firebaseapp.com",
    projectId: "clone-a82f3",
    storageBucket: "clone-a82f3.appspot.com",
    messagingSenderId: "394910995462",
    appId: "1:394910995462:web:801efe77d8bac1a627df87",
    measurementId: "G-RV007XDG86"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db= firebaseApp.firestore();
   const auth = firebase.auth();


    export  {db,auth};