import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDE1M0iLmq0Owumo1r1UTb9zUluRZRdY4I",
    authDomain: "amplitudo-projekat.firebaseapp.com",
    databaseURL: "https://amplitudo-projekat.firebaseio.com",
    projectId: "amplitudo-projekat",
    storageBucket: "amplitudo-projekat.appspot.com",
    messagingSenderId: "976446058602",
    appId: "1:976446058602:web:943dfbe03a666495045a13"
});

export default app;