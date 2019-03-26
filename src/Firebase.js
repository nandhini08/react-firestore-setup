import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCEGBbq_bfy76QeF2A1IHmQICMGMThKFN8",
    authDomain: "react-blog-1357c.firebaseapp.com",
    databaseURL: "https://react-blog-1357c.firebaseio.com",
    projectId: "react-blog-1357c",
    storageBucket: "react-blog-1357c.appspot.com",
    messagingSenderId: "300224507230"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;