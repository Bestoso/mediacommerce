import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDXC9p4jt_atdQ957_b49tpFUaY4A6ccl0",
    authDomain: "media-commerce-6e2f5.firebaseapp.com",
    projectId: "media-commerce-6e2f5",
    storageBucket: "media-commerce-6e2f5.appspot.com",
    messagingSenderId: "70798212298",
    appId: "1:70798212298:web:e76ca7d6385f09f6ffc833",
    measurementId: "G-WQ0GM4CE4X"
};

const app = initializeApp(firebaseConfig);

export const fireStoreInit = () => app;