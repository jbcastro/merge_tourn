import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/database";
//RN
const config = {
  apiKey: "AIzaSyDtxDq41LIC4sslBjdg2Wsu06OJpSbZPOU",
  authDomain: "tournaments-e64c7.firebaseapp.com",
  projectId: "tournaments-e64c7",
  storageBucket: "tournaments-e64c7.appspot.com",
  messagingSenderId: "472537049759",
  appId: "1:472537049759:web:2da87a513e39a25d7690aa",
  measurementId: "G-4SHFNDJ0JE"
};
firebase.initializeApp(config);
export default firebase;
//Demo
// const config = {
//   apiKey: "AIzaSyB_M57XkMRunIKxSMtb-U7Azh7BwizT44w",
//   authDomain: "btg-admin-1.firebaseapp.com",
//   databaseURL: "https://btg-admin-1.firebaseio.com",
//   projectId: "btg-admin-1",
//   storageBucket: "btg-admin-1.appspot.com",
//   messagingSenderId: "287212608439",
//   appId: "1:287212608439:web:e0ea501a00efe140882632",
//   measurementId: "G-WJ927YBH9H"
// };