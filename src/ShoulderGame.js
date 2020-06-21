import React, {useState, useEffect} from 'react';
import Hand from './Hand';
import Back from './Back';
import left_hand from './left-hand.png';
import right_hand from './right-hand.png';

const ShoulderGame = (props) => {
    const [handLocation, setHandLocation] = useState(1);
    const [leftCold, setLeftCold] = useState(true);
    const [rightCold, setRightCold] = useState(true);
    const [leftSecondsLeft, setLeftSecondsLeft] = useState(5);
    const [rightSecondsLeft, setRightSecondsLeft] = useState(5);
    const [gameSecondsLeft, setGameSecondsLeft] = useState(3000);

    let leftColor = 'blue';
    let rightColor = 'blue';

    if (leftCold) {
        leftColor = 'blue';
    }
    else {
        leftColor = '#e9692c';
    }

    if (rightCold) {
        rightColor = 'blue';
    }
    else {
        rightColor = '#e9692c';
    }


    useEffect(() => {
        if (gameSecondsLeft > 0) {
            const timerId = setTimeout(()=> {

                if (leftSecondsLeft > 0 && handLocation === 0) {
                    setLeftSecondsLeft(leftSecondsLeft - 1);
                    if (leftCold) {
                        props.setScore(props.score+1);
                    }
                }
                else if (handLocation === 0 && leftSecondsLeft === 0) {
                    setLeftCold(false);
                    setRightCold(true);
                }
    
                if (rightSecondsLeft > 0 && handLocation === 2) {
                    setRightSecondsLeft(rightSecondsLeft - 1);
                    if (rightCold) {
                        props.setScore(props.score+1);
                    }
                }
                else if (handLocation === 2 && rightSecondsLeft === 0) {
                    setLeftCold(true);
                    setRightCold(false);
                }
                
                return setGameSecondsLeft(gameSecondsLeft - 1)}, 1000);
            return () => clearTimeout(timerId);
        }
    });

    // Have a warm and cold region. if hand is in cold region, gain points every sec. Otherwise, don't gain points.
    const handleLeftClick = () => {
        setHandLocation(0);
        setLeftSecondsLeft(5);
    }

    const handleRightClick = () => {
        setHandLocation(2);
        setRightSecondsLeft(5);
    }

    return <div className = 'ShoulderGame'>
        <div>timer = {gameSecondsLeft}</div>
        <div>Keep your hand on the cold (blue) side to get points!</div>
        {
        gameSecondsLeft !== 0 ?
        <div className = 'shoudler_started'>
        {
        handLocation === 0 ? 
            <div>
                <Back/>
                <div className = 'left' style = {{backgroundColor: leftColor}}>
                <div className = 'left_hand'><Hand color = {leftColor} img = {right_hand}/></div>
                </div>
                <div className = 'right' style = {{backgroundColor: rightColor}}>
                <button className = 'right_button' onClick = {handleRightClick}>Touch</button>
                </div>
            </div>
        : handLocation === 2 ?
            <div>
                <Back/>
                <div className = 'left' style = {{backgroundColor: leftColor}}>
                <button  className = 'left_button' onClick = {handleLeftClick}>Touch</button>
                </div>
                <div className = 'right' style = {{backgroundColor: rightColor, marginTop: 8+'rem'}}>
                <div className = 'right_hand'><Hand color = {rightColor} img = {left_hand}/></div>
                </div>
            </div>
        : <div>
            <Back/>
            <div className = 'left' style = {{backgroundColor: leftColor}}>
            <button className = 'left_button' onClick = {handleLeftClick}>Touch</button>
            </div>
            <div className = 'right' style = {{backgroundColor: rightColor}}>
            <button className = 'right_button' onClick = {handleRightClick}>Touch</button>
            </div>
        </div>
        }
        </div>
        : <div>Nice! Try another game or redeem your attention points!</div>
        }
    </div>
}
export default ShoulderGame;