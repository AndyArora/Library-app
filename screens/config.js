import firebase from 'firebase';
require('@firebase/firestore');
 
 const firebaseConfig = {
    apiKey: "AIzaSyBhmP5Tqrf7yM9hzfHOsJTdr4sP6thSUQs",
    authDomain: "wily-app-15de2.firebaseapp.com",
    projectId: "wily-app-15de2",
    storageBucket: "wily-app-15de2.appspot.com",
    messagingSenderId: "719848173043",
    appId: "1:719848173043:web:caebd38206ddbca6a57686"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();