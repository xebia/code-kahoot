import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAqVDvmnmqTnvflvdgHfED7x0sgr4C6Cc",
  authDomain: "code-kahoot.firebaseapp.com",
  databaseURL: "https://code-kahoot-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "code-kahoot",
  storageBucket: "code-kahoot.appspot.com",
  messagingSenderId: "1057041997634",
  appId: "1:1057041997634:web:b352b321463b93a90af2db"
};

const app = initializeApp(firebaseConfig);
console.log("init")

const database = getDatabase();
console.log({database});


function App() {
  
  function writeUserData(gameId) {
    const db = getDatabase();
    console.log({write: true, db});
    set(ref(db, 'game/test'), {
      username: "test",
      email: Math.random(),
      profile_picture : "test"
    });

    console.log("wrote data");
  }

  function readUserData(gameId) {
    console.log("init read watcher");

    const db = getDatabase();
    console.log({db});
    const starCountRef = ref(db, 'game/test');
    
    onValue(starCountRef, (snapshot) => {
      console.log("read callback");
      const data = snapshot.val();
      console.log({data});
    });
  }

}