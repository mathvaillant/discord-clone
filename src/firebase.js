import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB5Wfev6Rr8GUIQPkvEPMf6BGMz6BRTViU",
  authDomain: "discord-react-redux-clone.firebaseapp.com",
  projectId: "discord-react-redux-clone",
  storageBucket: "discord-react-redux-clone.appspot.com",
  messagingSenderId: "1043764919658",
  appId: "1:1043764919658:web:d81d769a9b1d44d6b37913"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;