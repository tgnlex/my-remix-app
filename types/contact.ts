export interface ContactRecord {
  first: string, 
  last: string,
  avatar: string; 
  url : string | undefined;
  notes: string[] | string | null;
  twitter: string | null;
  favorite: boolean;
}

export type Avatar = { 
  url: string;
}

