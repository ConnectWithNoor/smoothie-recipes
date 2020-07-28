import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBrdYAn2aCJoseJsFGgM2Uifus6JzQVzEU',
  authDomain: 'smoothie-recipes1.firebaseapp.com',
  databaseURL: 'https://smoothie-recipes1.firebaseio.com',
  projectId: 'smoothie-recipes1',
  storageBucket: 'smoothie-recipes1.appspot.com',
  messagingSenderId: '652025812367',
  appId: '1:652025812367:web:8f0a2a9dacbdf7ca0ca7fa',
  measurementId: 'G-DP78MYZR0J',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
