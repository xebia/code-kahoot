import React from 'react';
import style from './style.module.css';

export default function Challenge({ challenge, id }: any) {
    console.log({challenge});
    return (
        <div className={style.container}>
            <h5>Challenge: {id}</h5>
            <h6>{challenge.description || 'no description'}</h6>
            <p>{challenge.unitTests}</p>
        </div>
    )
}