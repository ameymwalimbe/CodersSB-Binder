import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDKdutbSK5TyQf5_BkRfTD6YfqTt2pFYFI",
    authDomain: "binder-app-a3bb9.firebaseapp.com",
    databaseURL: "https://binder-app-a3bb9-default-rtdb.firebaseio.com",
    projectId: "binder-app-a3bb9",
    storageBucket: "binder-app-a3bb9.appspot.com",
    messagingSenderId: "854801832959",
    appId: "1:854801832959:web:a173befecca6e5df19e5ca",
    measurementId: "G-TZWVGRS618"
  }; 

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;