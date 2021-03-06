import React, {useState} from 'react';
import ButtonGame from './ButtonGame';
import './App.css';
import StartScreen from './StartScreen';
import ShoulderGame from './ShoulderGame';

function App() {
  const [score, setScore] = useState(0);
  const [gameShown, setGameShown] = useState(0);
  const [noticed, setNoticed] = useState(0);
  return (
    <div className="App">
      <h1 className = 'happy'>Happy Father's Day!!!</h1>
      <div className = 'score'>Attention Points: {score}</div>
      <div className = 'title_buttons'>
      <button onClick = {() => {setGameShown(0);}}>Start Screen</button>
      <button onClick = {() => {setGameShown(1);}}>Button Game</button>
      <button onClick = {() => {setGameShown(2);}}>Shoulder Game</button>
      </div>
      {
        gameShown === 0 ?
        <StartScreen score = {score} setScore = {setScore} noticed = {noticed} setNoticed = {setNoticed}/>
        : gameShown === 1 ?
        <ButtonGame score = {score} setScore = {setScore}/>
        : gameShown === 2 ?
        <ShoulderGame score = {score} setScore = {setScore}/>
        : null
      }
      </div>
  );
}

export default App;
