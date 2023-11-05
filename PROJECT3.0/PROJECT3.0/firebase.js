
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAopLPlDWSd_zz7GSL_ggxIB5eK4RnaEIA",
  authDomain: "booking-e266e.firebaseapp.com",
  projectId: "booking-e266e",
  storageBucket: "booking-e266e.appspot.com",
  messagingSenderId: "504852743426",
  appId: "1:504852743426:web:2d52a360599f1f1bf8ae1b",
  measurementId: "G-BGYLPGB81H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const auth = getAuth(app)

const db = getFirestore()

export {auth,db}