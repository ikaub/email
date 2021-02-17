import { Message } from './email.models';
import { EmailActions, SEND_MESSAGE, SendMessageAction, SET_MESSAGES_READ } from './email.types';
import { Reducer } from 'redux';

export interface UnreadMessage {
  id: string;
  messagesNumber: number;
}

export interface MailEntities {
  currentMessages: Message[];
  historyMessages: Message[];
}

export interface EmailState extends Record<string, any> {
  inbox: MailEntities;
  outbox: MailEntities;
  unreadMessages: UnreadMessage[];
}

const initialState: EmailState = {
  inbox: {
    currentMessages: [],
    historyMessages: [],
  },
  outbox: {
    currentMessages: [],
    historyMessages: [],
  },
  unreadMessages: [],
};

const updateInboxOutbox = (
  state: EmailState,
  action: SendMessageAction,
  messageType: string,
  message: Message | undefined
): MailEntities => {
  const historyMessages = [ ...state[messageType].historyMessages ];
  if (message) historyMessages.push(message);
  const currentMessages = [
    { ...action.payload, createdAt: Date.now() },
    ...state[messageType].currentMessages.filter((message: Message) => message.id !== action.payload.id),
  ];
  return {
    ...state[messageType],
    historyMessages,
    currentMessages,
  };
};

const updateUnreadMessages = (
  state: EmailState,
  action: SendMessageAction,
  messageType: string,
  message: Message | undefined,
): UnreadMessage[] => {
  if (messageType === 'outbox') return [ ...state.unreadMessages ];
  if (message) return state.unreadMessages.map(unread => unread.id !== message.id ? unread : {
    id: unread.id,
    messagesNumber: unread.messagesNumber + 1,
  });
  return [ ...state.unreadMessages, { id: action.payload.id, messagesNumber: 1, } ];
};

export const emailReducer: Reducer<EmailState, EmailActions> =
  (state: EmailState = initialState, action: EmailActions): EmailState => {
    switch (action.type) {
      case SEND_MESSAGE:
        const messageType = action.payload.messageType.toLowerCase();
        const message: Message | undefined = state[messageType].currentMessages.find(
          (m: Message) => m.id === action.payload.id
        );
        return {
          ...state,
          [messageType]: updateInboxOutbox(state, action, messageType, message),
          unreadMessages: updateUnreadMessages(state, action, messageType, message),
        };
      case SET_MESSAGES_READ:
        return {
          ...state,
          unreadMessages: state.unreadMessages.map(unread => unread.id === action.payload ? {
            id: action.payload,
            messagesNumber: 0
          } : unread),
        };
      default:
        return state;
    }
  };
