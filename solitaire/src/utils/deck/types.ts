export interface Suite {
  suite: string;
  color: string;
}

export interface Card extends Suite {
  id: string;
  value: string;
}