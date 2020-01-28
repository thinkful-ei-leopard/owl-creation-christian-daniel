import React from 'react';
import participants from './STORE';

function Chat(chatEvent) {
    <div className='chatEvent'>
        <img alt='participant avatar' src={FindParticipantById(chatEvent.participantId).avatar} />
        <p>{FindParticipantById(chatEvent.participantId).name}</p>
<p className='timestamp'>{new Date(chatEvent.timestamp)}</p>
<p className='chat-message'>{generateMessage(chatEvent.type, chatEvent.message)}</p>
    </div>
};

function FindParticipantById(id) {
    return participants.find(participant => participant.id === id)
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