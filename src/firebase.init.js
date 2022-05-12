import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDviurgOvQoObFIrqUrkqIIC2mJNEr9_W4",
    authDomain: "learning-doctors-portal.firebaseapp.com",
    projectId: "learning-doctors-portal",
    storageBucket: "learning-doctors-portal.appspot.com",
    messagingSenderId: "625428466097",
    appId: "1:625428466097:web:8e862d29f8e3bd787dd590"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;