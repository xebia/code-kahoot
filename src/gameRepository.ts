import { getDatabase, ref, set, onValue } from "firebase/database";

export function updatePlayersData(gameId: string, challengeId: string, document: Object) {
    const db = getDatabase();
    set(ref(db, 'game/' + gameId + "/challenges/" + challengeId + "/players"), document);

    console.log({method: 'write', data: document});
}

export function addGame(gameId: string) {
  const db = getDatabase();
  set(ref(db, 'game/' + gameId), {
    UUID: Date.now() + "",
    challenges: [],
    currentChallenge: 0,
    isStarted: false,
    players: {},
  });
}

export function updateGame(gameId: string, document: any) {
  const db = getDatabase();
  set(ref(db, 'game/' + gameId), document);
}

export function updateGameChallenges(gameId: string, challenges: any) {
  console.log("updating game challenges of gameID" + gameId);
  const db = getDatabase();
  set(ref(db, 'game/' + gameId), {
    UUID: Date.now() + "",
    challenges: challenges,
    currentChallenge: 0,
    isStarted: false,
  });
}

export function subscribe(gameId: string, callback: Function) {  
    console.log({method: 'subscribe', gameId});

    const db = getDatabase();
    const gameRef = ref(db, 'game/' + gameId);
    
    onValue(gameRef, (snapshot) => {
      const data = snapshot.val();
      console.log({method: 'readCallback', data: data});
      callback(data);
    });
}