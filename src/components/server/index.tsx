import React, {useEffect, useState } from 'react'
import style from './server.module.css';
import { subscribe, addGame, updateGame, updateGameChallenges } from '../../gameRepository';
import Challenge from '../Challenge';
import ChallengeAdd from '../ChallengeAdd';

export default function Server() {

    const [name, setName] = useState<any>("");
    const [gameId, setGameId] = useState<string | undefined>();
    const [game, setGame] = useState<any>({});
    const [code, setCode] = useState<string[]>([]);
    

    // useEffect( () => {
    //   joinExistingGame("test");
    // }, [])

    function createNewGame(name: string) {
      addGame(name);

      subscribeToGame(name);
    }

    function joinExistingGame(name: string) {
      subscribeToGame(name);
    }

    function subscribeToGame(name: string) {
      subscribe(name, (data: any) => {
        setGame(data);

        const players = data?.challenges?.[data?.currentChallenge]?.players || {};
        let tempCode = [];
        for (const code in players){
            tempCode.push(players[code]);
        }
        console.log({players, tempCode});
        setCode(tempCode);
      });
      setGameId(name);
    }

    function startGame(){ 
      updateGame(gameId!, {...game, isStarted: true});
    }
    
    function nextChallenge() {
      const currentChallengeIdx = game.currentChallenge || 0;
      updateGame(gameId!, {...game, currentChallenge: currentChallengeIdx+1});
    }


    function addChallenge(newChallenge: any) {
      const oldChallenges = game.challenges || [];
      updateGameChallenges(gameId!, [...oldChallenges, newChallenge]);
    }

    return (
        <div className={style.container}>
          {!gameId && 
          <section>
            <h1>Host a game</h1>

            <div className={style.section}>
              <input type="text" placeholder="Name of the game" onChange={ev => setName(ev.target.value)}/>
              <button onClick={() => createNewGame(name)}>Create new game</button>
            </div>

            <div className={style.section}>
              <input type="text" placeholder="Name of the game" onChange={ev => setName(ev.target.value)}/>
              <button onClick={() => joinExistingGame(name)}>Host existing game</button>
            </div>
          </section>}

          {gameId &&
          <section>
            <h1>Monitor your game here</h1>

            {!game.isStarted && 
            <div className={style.section}>
              <h3>Game not started yet</h3>
              <button onClick={startGame}>Start Game</button>

              
              <ChallengeAdd onSubmit={(newChallenge: any) => addChallenge(newChallenge)}/>

              { game?.challenges?.map((challenge: any, index: number) => <Challenge challenge={challenge} id={index} />)}
            </div>}

            {game.isStarted && 
              <div>
                <h4>GOOO</h4>
                <button onClick={() => nextChallenge()}>Next Challenge</button>
                { code.map((c: any) => 
                  <div className={style.codeblock}>
                    {c.name ?? 'anonymous'}
                    <pre>{c.solution}</pre>
                  </div>
                )}
              </div>
            }
          </section>
          }
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