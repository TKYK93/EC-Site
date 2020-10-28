import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxHuMKnCm-4c6psCOPyXnKqnS8oXp14M0",
    authDomain: "test-ecsite.firebaseapp.com",
    databaseURL: "https://test-ecsite.firebaseio.com",
    projectId: "test-ecsite",
    storageBucket: "test-ecsite.appspot.com",
    messagingSenderId: "545462390948",
    appId: "1:545462390948:web:c1827e95d789bc446a9631",
    measurementId: "G-D63QJR4G10"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
//   initialize detabase
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};