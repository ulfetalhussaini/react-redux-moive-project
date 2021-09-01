// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDJz2LcpLaXdiz4ch7yI31_R74i7ix9IVo',
  authDomain: 'movies-709f5.firebaseapp.com',
  projectId: 'movies-709f5',
  storageBucket: 'movies-709f5.appspot.com',
  messagingSenderId: '485563186546',
  appId: '1:485563186546:web:0086a533177ba9675d31eb',
  measurementId: 'G-Z7S9GECHVN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fileStoreDB = getFirestore(app);

export default fileStoreDB;
