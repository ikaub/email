import { Message } from './email.models';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_MESSAGES_READ = 'SET_MESSAGES_READ';

export interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

export interface SetMessagesReadAction {
  type: typeof SET_MESSAGES_READ;
  payload: string;
}

export type EmailActions = SendMessageAction | SetMessagesReadAction;
