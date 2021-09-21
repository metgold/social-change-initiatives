import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDDlWi5Y-O1RnRdm757oXwc93V-AfdfSsQ",
    authDomain: "socialapp-ae5fc.firebaseapp.com",
    projectId: "socialapp-ae5fc",
    storageBucket: "socialapp-ae5fc.appspot.com",
    messagingSenderId: "617457598364",
    appId: "1:617457598364:web:af13583dddc316c365d259",
    measurementId: "G-9000B5BVYQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;