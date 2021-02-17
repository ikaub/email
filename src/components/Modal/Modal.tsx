import React from 'react';

import { Message } from '../Message/Message';
import { Message as MessageType } from '../../store/email/email.models';

type ModalProps = {
  onClose: (...args: any[]) => () => void;
  messages: MessageType[];
}

export const Modal: React.FC<ModalProps> = ({ onClose, messages }: ModalProps) => {

  return (
    <>
      <div className="modal-overlay"/>
      <div className="modal">
        <div className="modal__header">
          <div className="modal__title">
            Messages
          </div>
          <div onClick={onClose('')} className="modal__close-icon">
            &#x2715;
          </div>
        </div>

        <div className="modal__body">
          {messages.map(message => (
            <Message key={message.id} message={message}/>
          ))}
        </div>
      </div>
    </>
  );
};
