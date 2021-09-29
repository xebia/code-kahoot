import React, {useState } from 'react'
import style from './server.module.css';
import { subscribe } from '../../gameRepository';

export default function Server() {

    const [game, setGame] = useState({});

    function createGame() {
        subscribe("test", (data: Object) => {
            console.log({data});
            setGame(data);
        })
    }
    return (
        <div className={style.container}>
            <h1 >Let this be a server</h1>
            <h2>Status: idle</h2>

            <button onClick={(ev) => createGame()}>Create game</button>

            
        </div>
    )
}