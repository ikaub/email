import { SEND_MESSAGE, SendMessageAction, SET_MESSAGES_READ, SetMessagesReadAction } from './email.types';
import { Message } from './email.models';

export const sendMessage = (message: Message): SendMessageAction => ({
  type: SEND_MESSAGE,
  payload: message,
});

export const setMessagesRead = (id: string): SetMessagesReadAction => ({
  type: SET_MESSAGES_READ,
  payload: id,
});
