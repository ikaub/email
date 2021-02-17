import React from 'react';
import { UnreadMessage } from '../../store/email/email.reducer';
import { Message } from '../../store/email/email.models';

type TableRowProps = {
  onClick: (...args: any[]) => () => void;
  message: Message;
  unreadMessages: UnreadMessage[];
}

export const TableRow: React.FC<TableRowProps> = ({ onClick, message, unreadMessages }: TableRowProps) => {
  return (
    <tr onClick={onClick(message.id)}>
      {
        unreadMessages
          .filter((unread: UnreadMessage) => unread.id === message.id)
          .map(unread => (
              <th className={`${unread.messagesNumber ? 'th-display' : ''}`}>
                {unread.messagesNumber || ''}
              </th>
            )
          )
      }
      <td>{message.name}</td>
      <td>{message.title}</td>
      <td>{message.body}</td>
    </tr>
  );
};
