export interface Email {
  email: string;
  primary: boolean;
  verified: boolean;
  unverified: boolean;
  default: boolean;
}

export const emails: Email[] = [
  {
    email: 'hello@example.com',
    primary: true,
    verified: true,
    unverified: false,
    default: true,
  },
  {
    email: 'alternative@example.com',
    primary: false,
    verified: true,
    unverified: false,
    default: false,
  },
  {
    email: 'alternative-unverified@example.com',
    primary: false,
    verified: false,
    unverified: true,
    default: false,
  },
];
