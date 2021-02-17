export type Message = {
  id: string;
  name: string;
  messageType: 'Inbox' | 'Outbox';
  title: string;
  body: string;
  read?: boolean;
  createdAt: number;
}
