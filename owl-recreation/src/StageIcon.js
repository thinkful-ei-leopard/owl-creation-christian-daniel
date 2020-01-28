import React from 'react';

function StageIcon(props) {
    return (
        <div className='stageIcon'>
            <img alt='stage icon' src={props.avatar} />
            <p>{props.name}</p>
            <div className={props.onStage ? 'onStage' : 'notOnStage'}></div>
        </div>
    )
}

export default StageIcon;