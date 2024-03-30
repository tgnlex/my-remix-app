export type ContactMutation = {
  id?: string;
  first?: string;
  last?: string;
  nickname?: string;
  phone?: string;
  avatar?: string;
  notes?: string | string[];
  favorite?: boolean;
}