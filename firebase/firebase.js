import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';

let app

const firebaseConfig = {
    apiKey: "AIzaSyBxfc3KRJZpsGueZ6I_rL6glouozjhbkS0",
    authDomain: "linkedin-project-2e2a1.firebaseapp.com",
    projectId: "linkedin-project-2e2a1",
    storageBucket: "linkedin-project-2e2a1.appspot.com",
    messagingSenderId: "366707873479",
    appId: "1:366707873479:web:f33f2b4c4554fb964f90e2"
};

if (getApps().length) {
    app = getApp()
}
else {
    app = initializeApp(firebaseConfig)
}

const db = getFirestore()

export { app, db }