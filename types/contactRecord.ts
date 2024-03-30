import type { ContactMutation } from './contactMutation';

export type ContactRecord = ContactMutation & {
  id: string; 
  createdAt: string;
}