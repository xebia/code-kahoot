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