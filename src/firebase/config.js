import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRDR7lnW-VCnFX_IXn47mA9EOJaK605Rk",
  authDomain: "instagram-ish-7e08d.firebaseapp.com",
  projectId: "instagram-ish-7e08d",
  storageBucket: "instagram-ish-7e08d.appspot.com",
  messagingSenderId: "316099777689",
  appId: "1:316099777689:web:9017381a17df9e3eb69408",
  databaseURL: "https://instagram-ish-7e08d-default-rtdb.firebaseio.com",};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore, timestamp};
