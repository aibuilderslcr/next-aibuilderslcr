/*
  Member profiles shown on /members. To add yourself, append an entry and
  open a pull request — see the instructions on the page itself.
  Keep the list in alphabetical order by name to make merges painless.
*/
export type Member = {
  /** Display name. */
  name: string;
  /** GitHub username, without the @. Used for the avatar and profile link. */
  github: string;
  /** One line on what you build. Max ~120 characters. */
  tagline: string;
  /** Optional personal site, portfolio or LinkedIn. */
  url?: string;
};

export const MEMBERS: Member[] = [];
