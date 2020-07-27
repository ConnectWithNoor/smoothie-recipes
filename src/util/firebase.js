import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDVi9pXGHJA8ykAi3_alUGnIGnx-u_ejOw',
  authDomain: 'smoothi-recipes.firebaseapp.com',
  databaseURL: 'https://smoothi-recipes.firebaseio.com',
  projectId: 'smoothi-recipes',
  storageBucket: 'smoothi-recipes.appspot.com',
  messagingSenderId: '32919884700',
  appId: '1:32919884700:web:1cf7593175715649ccae59',
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
