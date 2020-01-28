import React from 'react';
import participants from './STORE';
import ReactDOM from 'react-dom';
import Participant from './Participant';

function ParticipantList(props) {
    return (
        <div className='participant-list'>
            {props.participants.map((participant) => 
                <Participant 
                    key={participant.id}
                    avatar={participant.avatar}
                    inSession={participant.inSession}
                    onStage={participant.onStage}
                />
            )}
        </div>
    )
}

export default ParticipantList;