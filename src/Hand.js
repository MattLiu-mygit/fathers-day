import React from 'react';

const Hand = (props) => {
    return <div style = {{position: 'relative'}}>
        <img className = 'hand' src = {props.img} alt = 'oops, hand not found'/>
    </div>
}
export default Hand;