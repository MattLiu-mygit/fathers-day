import React, {useState, useEffect} from 'react';

const ButtonGame = (props) => {
    const [secondsLeft, setSecondsLeft] = useState(10);
    const [randX, setRandX] = useState(30);
    const [randY, setRandY] = useState(30);

    useEffect(() => {
        if (secondsLeft > 0) {
            const timerId = setTimeout(()=> setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
        }
    });

    const randNum = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

    const handleClick = () => {
        props.setScore(props.score+1);
        setRandX(randNum(-100, 100));
        setRandY(randNum(0, 50));
    }

    return <div>
        <div className = 'timer'>Time left: {secondsLeft}</div>
        {
        secondsLeft > 0 ?
        <button style = {{marginLeft: randX + 'rem', marginTop: randY + 'rem'}} onClick = {handleClick}>WaWa!</button>
        : <div>Nice! Try another game or redeem your attention points!</div>
        }
    </div>
}
export default ButtonGame;