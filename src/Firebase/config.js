import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtw9WrPw134pt2IEEVIDlgH_t_uqu-BKM",
    authDomain: "fir-86606.firebaseapp.com",
    projectId: "fir-86606",
    storageBucket: "fir-86606.appspot.com",
    messagingSenderId: "567909394896",
    appId: "1:567909394896:web:6e07dd59f614e9302ef1d5",
    measurementId: "G-2JLGRYMNH8"
  };

export default firebase.initializeApp(firebaseConfig)