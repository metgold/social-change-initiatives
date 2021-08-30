import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAHX8pEolSKZ98WqUFJp2lOPm9-IWpOcW8",
    authDomain: "social-change-initiatives.firebaseapp.com",
    projectId: "social-change-initiatives",
    storageBucket: "social-change-initiatives.appspot.com",
    messagingSenderId: "327350671352",
    appId: "1:327350671352:web:1d89d707e595d9b8e6e80d",
    measurementId: "G-HZX0JSTQZB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;