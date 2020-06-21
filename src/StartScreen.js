import React, {useState} from 'react';
import dad1 from './dad1.JPG';
import grandpa from './grandpa.JPG';
import kevin from './Cute_Kevin.JPG';
import matt from './MattLiuWise.JPG';
import kevin_graduation from './kevin_graduation.JPG';
import birthday from './birthday.JPG';

const StartScreen = (props) => {

    const handleClick = () => {
        if(props.score >= 5){
            props.setNoticed(props.noticed+1);
            props.setScore(props.score-5);
        }
    }

    return <div>
        <img className = 'dad1' src = {dad1} alt = 'dad pic not found'/>
        <div className = 'letter'>
        <div>Dear dad,</div>
        <div>Happy father's day! Thank you for all the effort you put into helping me with computer science, for always helping me with math, for playing basketball and taking walks with us, and being a supportive parent who is always there for us.</div>
        <div>Thank you for showing us so much care by personally teaching and supporting us. Thank you for putting in so much time and effort when mom wouldn't. Thank you for doing a lot of the cooking, almost all the cleaning, and fixing everything in the house.</div>
        <div>I will always love and be there for you.</div>
        <div>~ Matt</div>
        </div>
        <div className = 'game_instructions'>
            <div>Let's do a fun game to celebrate father's day! Try out the button and shoulder game and get enough attention points to get noticed!</div>
            <div>Once you have enough points, click on the button below to unlock the noticed reward!</div>
        </div>
        <button onClick = {handleClick}>Get Noticed! (Costs 5 attention points)</button>
        {
            props.noticed === 1 ? 
            <div><img src = {grandpa} alt = 'grandpa not found'/></div>
            : props.noticed === 2 ? 
            <div><img src = {kevin} alt = 'kevin not found'/></div>
            : props.noticed === 3 ? 
            <div><img src = {matt} alt = 'Matt not found'/></div>
            : props.noticed === 4 ? 
            <div><img src = {kevin_graduation} alt = 'Kevin graduation not found'/></div>
            : props.noticed === 5 ? 
            <div><img src = {birthday} alt = 'birthday not found'/></div>
            :null
        }
    </div>
}
export default StartScreen;