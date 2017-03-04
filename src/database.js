import firebase from 'firebase';

// Make sure you swap this out with your Firebase app's config
const config = {  
  apiKey: "AIzaSyCKVl4dyJM59an6sX5CcqVHSLgXfVvHTjM",
  authDomain: "taylor-fuqua.firebaseapp.com",
  databaseURL: "https://taylor-fuqua.firebaseio.com",
  storageBucket: "taylor-fuqua.appspot.com",
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;