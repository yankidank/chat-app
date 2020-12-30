import React from 'react';

import 'font-awesome/css/font-awesome.min.css';

import './Input.css';

export const Input = ({ message, setMessage, sendLine, sendMessage }) => (
    <form className="form">
        <input 
            className="input" 
            type="text" 
            placeholder="Type a message..." 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            onKeyPress={e => 
                e.key === ' ' ? sendLine(e) : null ||
                e.key === 'Enter' ? sendMessage(e) : null }
        />
    </form>
);