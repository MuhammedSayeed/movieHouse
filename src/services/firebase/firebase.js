import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCaR6Q6D2c6guaUJ7rEQVNMX_IX3LUXz4s",
    authDomain: "movie-house-34d53.firebaseapp.com",
    databaseURL: "https://movie-house-34d53-default-rtdb.firebaseio.com",
    projectId: "movie-house-34d53",
    storageBucket: "movie-house-34d53.appspot.com",
    messagingSenderId: "214966256868",
    appId: "1:214966256868:web:c8d931c6a5ba26e42cd8f1",
    measurementId: "G-P4D8PRHB9B"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);