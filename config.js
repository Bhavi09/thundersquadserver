import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnhSWcR_vBH9pepZKFKxUmpIo4yV3H6og",
    authDomain: "thunder-squad.firebaseapp.com",
    databaseURL: "https://thunder-squad-default-rtdb.firebaseio.com",
    projectId: "thunder-squad",
    storageBucket: "thunder-squad.appspot.com",
    messagingSenderId: "754792910631",
    appId: "1:754792910631:web:ddf5cd887d39b67e32a302"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db as db};

