import { createSelector } from 'reselect';
import { RootState } from '../store';
import { EmailState } from './email.reducer';

const selectEmailSlice = (state: RootState) => state.email;

export const selectCurrentMessages = (messageType: 'inbox' | 'outbox') => createSelector(
  selectEmailSlice,
  (email: EmailState) => email[messageType].currentMessages,
);

export const selectHistoryMessages = (messageType: 'inbox' | 'outbox') => createSelector(
  selectEmailSlice,
  (email: EmailState) => email[messageType].historyMessages,
);

export const selectUnreadMessages = createSelector(
  selectEmailSlice,
  (email: EmailState) => email.unreadMessages,
);

export const selectAllMessagesOrdered = (id: string) => createSelector(
  selectEmailSlice,
  ({ inbox, outbox }: EmailState) => [
    ...inbox.historyMessages,
    ...inbox.currentMessages,
    ...outbox.historyMessages,
    ...outbox.currentMessages
  ]
    .filter(message => message.id === id)
    .sort((m1, m2) => m1.createdAt - m2.createdAt),
);
