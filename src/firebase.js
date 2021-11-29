import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAcFfUhJAtjTdGuEHVuVQM5fzbhEWeDTNs",
  authDomain: "project-management-app-9ff5e.firebaseapp.com",
  projectId: "project-management-app-9ff5e",
  storageBucket: "project-management-app-9ff5e.appspot.com",
  messagingSenderId: "528549670230",
  appId: "1:528549670230:web:b3a213010e7e3e2bc87af7",
  measurementId: "G-XQX0RE7CQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
db.settings({ timestampsInSnapshots: true });




export default db;