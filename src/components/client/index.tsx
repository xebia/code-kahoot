import React, {useEffect, useState} from 'react'
import style from './client.module.css';
import { updatePlayersData, subscribe } from '../../gameRepository';

export default function Client({ clientId }: { clientId: string}) {
    const [userId, setUserId] = useState("");
    const [tempGameId, setTempGameId] = useState("");
    const [gameId, setGameId] = useState("");
    const [game, setGame] = useState<any>({});   

    useEffect(() => {
        console.log("Generate userId");
        setUserId(Date.now() + "");
    }, []);

    function writeCode(value: string) {
        console.log({game});
        let userData = game?.challenges?.[game.currentChallenge]?.players?.[userId] || {};
        const playersData = game.challenges?.[game.currentChallenge]?.players || {};
        userData = { ...userData, solution: value}
        playersData[userId] = userData;
        updatePlayersData(gameId, game.currentChallenge, playersData);
    }

    function joinGame() {
        subscribeToGame(tempGameId);
        setGameId(tempGameId);
    }

    function subscribeToGame(name: string) {
        subscribe(name, (data: any) => {
          setGame(data);
        });
      }

    return (
        <div className={style.container}>
            <h1>Client mode</h1>

            { gameId === "" && 
                <div>
                    <input type="text" placeholder="name" />
                    <input type="text" placeholder="gameId" onChange={(ev) => {setTempGameId(ev.target.value) }} />
                    <button onClick={() => joinGame()}>Join game</button>
                </div>
            }

            { gameId !== "" && 
                <textarea name="" id="" cols={30} rows={10} onChange={(ev) => writeCode(ev.target.value)}>
                </textarea>
            }
        </div>
    )
}