import React, {useEffect, useState} from 'react'
import style from './client.module.css';
import { write } from '../../gameRepository';

export default function Client({ clientId }: { clientId: string}) {
    const [userId, setUserId] = useState("");

    useEffect(() => {
        console.log("Generate userId");
        setUserId(Date.now() + "");
    }, []);

    function connect(){ 
        write('test', { hello: 'this', ts: Date.now()});
    }

    function writeCode(value: string) {
        write('test', { [clientId]: value});
    }

    return (
        <div className={style.container}>
        <h1 className={style.container}>Let this be a client</h1>
        {/* <button onClick={() => connect()}>Connect</button> */}

        <textarea name="" id="" cols={30} rows={10} onChange={(ev) => writeCode(ev.target.value)}>
            Write code here
        </textarea>
        </div>
    )
}