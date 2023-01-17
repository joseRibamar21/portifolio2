
import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0ti9wyoC8Fah-zsfCkskHA48-SsmAx6M",
  authDomain: "portifolio-a3ac3.firebaseapp.com",
  projectId: "portifolio-a3ac3",
  storageBucket: "portifolio-a3ac3.appspot.com",
  messagingSenderId: "545519611983",
  appId: "1:545519611983:web:7d57e387d0f751da1d7a3a",
  measurementId: "G-Z2EDRJJ2YP"
};

/* if(firebase.getApps.length){ */
export const app = firebase.initializeApp(firebaseConfig);
export const database = getFirestore(app);
/* } */
