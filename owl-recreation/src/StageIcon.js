import React from 'react';

function StageIcon(participant) {
    return (
        <div className='stageIcon'>
            <img alt='stage icon' src={participant.avatar} />
            <p>{participant.name}</p>
            <div className={participant.onStage ? 'onStage' : 'notOnStage'}></div>
        </div>
    )
}

export default StageIcon;