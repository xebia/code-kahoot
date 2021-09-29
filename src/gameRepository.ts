import { getDatabase, ref, set, onValue } from "firebase/database";

export function write(gameId: string, playerId: string, document: Object) {
    const db = getDatabase();
    set(ref(db, 'game/' + gameId + "/" + playerId), document);

    console.log({method: 'write', data: document});
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