// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMP6swsjdtTvNtiYtbW-0eTxYR2V_nFPI",
  authDomain: "quicks-dashboard.firebaseapp.com",
  projectId: "quicks-dashboard",
  storageBucket: "quicks-dashboard.appspot.com",
  messagingSenderId: "987507893023",
  appId: "1:987507893023:web:fdfb407594b10612bbc62a",
  measurementId: "G-30NVWKQP57",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const firestore = getFirestore(app)
export { firestore }
