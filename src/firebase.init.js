// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEI0gLuQJKG4baiT5kFOCmvAfMB4Ao7Ec",
  authDomain: "car-washing-center-d6fac.firebaseapp.com",
  projectId: "car-washing-center-d6fac",
  storageBucket: "car-washing-center-d6fac.appspot.com",
  messagingSenderId: "205493766264",
  appId: "1:205493766264:web:94fa3956b248a7afa0858d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;