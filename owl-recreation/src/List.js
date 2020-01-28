import React from 'react';
import participants from './STORE';

function Participant(participant) {
    return (
        <div className='Participant'>
            <img src={participant.avatar} 
        </div>
    )
}

export default Participant;