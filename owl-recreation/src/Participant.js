import React from 'react';
import participants from './STORE';

function Participant(participant) {
    return (
        <div className='Participant'>
            <img alt='participant avatar' src={participant.avatar} />
            <p>{participant.name}</p>
            <div className={participant.inSession ? 'inSession' : 'notInSession'}></div>
            <div className={participant.onStage ? 'onStage' : 'notOnStage'}></div>
        </div>
    )
}

export default Participant;