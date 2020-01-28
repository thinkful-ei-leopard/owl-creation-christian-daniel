import React from 'react';
import participants from './STORE';
import ReactDOM from 'react-dom';
import StageIcon from './StageIcon';

function StageIconDisplay(props) {
    return (
        <div className='stage-display'>
            {props.participants.map((participant) => 
                <StageIcon 
                    key={participant.id}
                    avatar={participant.avatar}
                    onStage={participant.onStage}
                />
            )}
        </div>
    )
}

export default StageIconDisplay;