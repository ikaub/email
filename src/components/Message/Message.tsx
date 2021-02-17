import React from 'react';
import { Message as MessageType } from '../../store/email/email.models';

type MessageProps = {
  message: MessageType;
}

export const Message: React.FC<MessageProps> = ({ message }: MessageProps) => {

  return (
    <div className={`message message-${message.messageType === 'Inbox' ? 'left' : 'right'}`}>
      <span className="message__title">
        {message.title}
      </span>
      <span className="message__body">
        {message.body}
      </span>
    </div>
  );
};
