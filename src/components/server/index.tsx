import React, {useEffect, useState } from 'react'
import style from './server.module.css';
import { subscribe } from '../../gameRepository';

export default function Server() {

    const [game, setGame] = useState<any>({});
    const [code, setCode] = useState<string[]>([]);


    useEffect(( ) => {
        subscribe("test", (data: any) => {
            console.log({data});
            setGame(data);

            let tempCode = [];
            for (const code in data){
                tempCode.push(data[code]);
            }
            setCode(tempCode);
        });
    }, [])


    return (
        <div className={style.container}>
            <h1 >Let this be a server</h1>
            <h2>Status: idle</h2>

            { code.map(c => 
                <textarea value={c}></textarea>
            )};

        </div>
    )
}

// Example
// const game = new Game("Jethro", [new User("1", "Kishan"), new User("2", "Jurgen"), new User("3", "Dirk")], 
// [new Challenge("This is challenge #1", []), 
// new Challenge("This is challenge #2", []),
// new Challenge("This is challenge #3", [])], "1"
// );

// game.nextChallenge()!.addSolutions(new Solution("1", "This is my solution", 111 ), new Solution("2", "This is my solution", 222 ), new Solution("3", "This is my solution", 333 ));
// game.nextChallenge()!.addSolutions(new Solution("1", "This is my solution", 222 ), new Solution("2", "This is my solution", 111 ), new Solution("3", "This is my solution", 333 ));
// game.nextChallenge()!.addSolutions(new Solution("1", "This is my solution", 111 ), new Solution("2", "This is my solution", 222 ), new Solution("3", "This is my solution", 333 ));