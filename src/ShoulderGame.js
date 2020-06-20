import React, {useState, useEffect} from 'react';
import Hand from './Hand';
import Back from './Back';

const ShoulderGame = (props) => {
    const [handLocation, setHandLocation] = useState(1);
    const [leftCold, setLeftCold] = useState(true);
    const [rightCold, setRightCold] = useState(true);
    const [leftSecondsLeft, setLeftSecondsLeft] = useState(5);
    const [rightSecondsLeft, setRightSecondsLeft] = useState(5);

    useEffect(() => {
        if (leftSecondsLeft > 0 && handLocation === 0) {
            const timerId = setTimeout(()=> {
                if (leftCold) {
                    props.setScore(props.score+1);
                }
                return setLeftSecondsLeft(leftSecondsLeft - 1)}, 1000);
            return () => clearTimeout(timerId);
        }

        if (rightSecondsLeft > 0 && handLocation === 2) {
            const timerId = setTimeout(()=> {
                if(rightCold) {
                    props.setScore(props.score+1);
                }
                return setRightSecondsLeft(rightSecondsLeft - 1)}, 1000);
            return () => clearTimeout(timerId);
        }
    });

    // Have a warm and cold region. if hand is in cold region, gain points every sec. Otherwise, don't gain points.
    const handleLeftClick = () => {
        if (rightSecondsLeft === 0) {
            setLeftCold(true);
        }
        setHandLocation(0);
        setLeftSecondsLeft(5);
        setRightCold(false);
    }

    const handleRightClick = () => {
        if (leftSecondsLeft === 0) {
            setRightCold(true);
        }
        setHandLocation(2);
        setRightSecondsLeft(5);
        setLeftCold(false);
    }

    return <div>
        leftTimer = {leftSecondsLeft}
        rightTimer = {rightSecondsLeft}
        {
        handLocation === 0 ? 
            <div>
                <div className = 'left_hand'><Hand/></div>
                <Back/>
                <button className = 'right_button' onClick = {handleRightClick}>Touch</button>
            </div>
        : handLocation === 2 ?
            <div>
                <button  className = 'left_button' onClick = {handleLeftClick}>Touch</button>
                <Back/>
                <div className = 'right_hand'><Hand/></div>
            </div>
        : <div>
            <button className = 'left_button' onClick = {handleLeftClick}>Touch</button>
            <Back/>
            <button className = 'right_button' onClick = {handleRightClick}>Touch</button>
        </div>
        }
    </div>
}
export default ShoulderGame;