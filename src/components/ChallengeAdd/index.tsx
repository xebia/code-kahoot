import React, {useState} from 'react';
import style from './style.module.css';

export default function ChallengeAdd({ onSubmit, id }: any) {
    const [description, setDescription] = useState("");
    const [unitTests, setUnittests] = useState<any[]>([]);

    function submit() {
        onSubmit({description, unitTests});
        setDescription("");
        setUnittests([]);
    }

    return (
        <div className={style.container}>
            <input type="text" placeholder="description" onChange={(ev) => setDescription(ev.target.value)} value={description} />
            <input type="text" placeholder="unittests" onChange={(ev) => setUnittests(ev.target.value.split(','))} value={unitTests.join(',')} />
            <button onClick={ () => submit()}>Add challenge</button>
        </div>
    )
}