import React from 'react';
import participants from './STORE';

function Chat(props) {
    return (<div className='chatEvent'>
        <img alt='participant avatar' src={FindParticipantById(props.participantId).avatar} />
        <p>{FindParticipantById(props.participantId).name}</p>
<p className='timestamp'>{new Date(props.timestamp).toString()}</p>
<p className='chat-message'>{generateMessage(props.type, props.message)}</p>
    </div>)
};

function FindParticipantById(id) {
    return participants.find(participant => {
       return participant.id === id ;
    });
};

function generateMessage(type, message) {
    if (type === 'thumbs-up') {
        return 'gave a thumbs up';
    }
    else if (type === 'thumbs-down') {
        return 'gave a thumbs down';
    }
    else if (type === 'message') {
        return message;
    }
    else {
        return 'clap';
    }
};
export default Chat;