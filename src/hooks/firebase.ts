// src/hooks/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfSsUdqhwhYdG3SpGkHDgcOVW5P0YGiGM",
  authDomain: "jaykay-b990b.firebaseapp.com",
  databaseURL: "https://jaykay-b990b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jaykay-b990b",
  storageBucket: "jaykay-b990b.firebasestorage.app",
  messagingSenderId: "387124074806",
  appId: "1:387124074806:web:554a5c91b6815a6599bb97",
  measurementId: "G-PYP2GSR90E"
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)

export { firestore }