import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Client from './components/client/index';
import Server from './components/server/index';

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
const database = getDatabase();

function App() {
  const [mode, setMode] = useState(0);

  if (!app) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div className="App">
      {mode === 0 && 
        <div>
          <button onClick={() => setMode(1)}>Client mode</button>
          <button onClick={() => setMode(2)}>Host mode</button>
        </div>
      }
      { mode === 1 &&
        <div className="clientContainer">
          <Client clientId="player1"></Client>
        </div>
      }
      { mode === 2 &&
        <Server></Server>
      }
    </div>
  );
}

export default App;
