import React from 'react';

import ReactEmoji from 'react-emoji'

import './Message.css';

export const Message = ({message: { user, text, immutable }, name}) => {
    let isSentByCurrentUser = false;
    let sent = immutable || false;
    
    const trimmedName = name.trim().toLowerCase()

    if(user === trimmedName) {
        isSentByCurrentUser = true
    }

    return (
        isSentByCurrentUser && sent ? ( /* Current User Submitted Message */
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : !isSentByCurrentUser && !sent ? ( /* Other User Adding Message */
            <div className="messageContainer justifyStart">
                <p className="sentText pr-10">{user}</p>
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : !isSentByCurrentUser && sent ? ( /* Other User Submitted Message */
            <div className="messageContainer justifyStart">
                <p className="sentText pr-10">{user}</p>
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : ( /* Current User Adding Message */
            <div className="word-indicator">
            </div>
        )
    )

};