import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { capitalize } from 'lodash';

import { Message } from '../../store/email/email.models';
import { Modal } from '../../components/Modal/Modal';
import { setMessagesRead } from '../../store/email/email.actions';
import {
  selectAllMessagesOrdered,
  selectCurrentMessages,
  selectUnreadMessages
} from '../../store/email/email.selectors';
import { TableRow } from '../../components/TableRow/TableRow';

type MessageType = 'inbox' | 'outbox';

export const Email: React.FC = () => {
  const [ modalId, setModalId ] = useState('');

  const path: MessageType = useLocation().pathname.substr(1) as MessageType;
  const currentMessages = useSelector((selectCurrentMessages(path)));
  const unreadMessages = useSelector(selectUnreadMessages);
  const allMessagesOrdered = useSelector((selectAllMessagesOrdered(modalId)));
  const dispatch = useDispatch();

  const handleToggleModal = (id: string) => {
    return () => {
      setModalId(id);
      dispatch(setMessagesRead(id));
    };
  };

  return (
    <div className="inbox-page">
      {modalId.length ? <Modal messages={allMessagesOrdered} onClose={handleToggleModal}/> : null}
      <table>
        <caption>{capitalize(path)}</caption>
        <tbody>
        {currentMessages.length
          ? currentMessages.map((currentMessage: Message) => (
            <TableRow message={currentMessage} onClick={handleToggleModal} unreadMessages={unreadMessages}/>
          ))
          : <span className="inbox-page__empty">There are no messages yet!</span>
        }
        </tbody>
      </table>
    </div>
  );
};
