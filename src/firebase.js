import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFWbveBkflxUyGd7go1ZSzhjq0Htyl7ZY",
  authDomain: "clone-fccf1.firebaseapp.com",
  projectId: "clone-fccf1",
  storageBucket: "clone-fccf1.appspot.com",
  messagingSenderId: "932101055791",
  appId: "1:932101055791:web:2d327e26dfecec6df2adda",
  measurementId: "G-P780VG8CES",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebase.auth();

