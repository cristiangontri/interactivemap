// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMbTqgAUzjxD7fVhxRlzblBqalwdMfjug",
  authDomain: "mapa-interactivo-888ea.firebaseapp.com",
  projectId: "mapa-interactivo-888ea",
  storageBucket: "mapa-interactivo-888ea.appspot.com",
  messagingSenderId: "129737830652",
  appId: "1:129737830652:web:d0312c7577a5a9ee0ae779"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
