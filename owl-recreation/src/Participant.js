import React from 'react';
import participants from './STORE';

function Participant(props) {
    return (
        <div className='Participant'>
            <img alt='participant avatar' src={props.avatar} />
            <p>{props.name}</p>
            <div className={props.inSession ? 'inSession' : 'notInSession'}></div>
            <div className={props.onStage ? 'onStage' : 'notOnStage'}></div>
        </div>
    )
}

export default Participant;