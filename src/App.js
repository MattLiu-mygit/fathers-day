import React, {useState} from 'react';
import ButtonGame from './ButtonGame';
import './App.css';
import StartScreen from './StartScreen';

function App() {
  const [score, setScore] = useState(0);
  const [gameShown, setGameShown] = useState(0);
  return (
    <div className="App">
      Happy Father's Day!!!
      <div className = 'score'>Attention Points: {score}</div>
      <button onClick = {() => {setGameShown(0);}}>Start Screen</button>
      <button onClick = {() => {setGameShown(1);}}>Button Game</button>
      {
        gameShown === 0 ?
        <StartScreen />
        : gameShown === 1 ?
        <ButtonGame score = {score} setScore = {setScore}/>
        : null
      }
      </div>
  );
}

export default App;
