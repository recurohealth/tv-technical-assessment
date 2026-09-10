import { checkMatchingProfile } from './checkMatchingProfile';

export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

// Example input
// { firstName: 'bob', lastName: 'Smith', dateOfBirth: '1946/06/12' } --YYYY/MM/DD
// DOB FORMATS:
// - YYYY/MM/DD
// - MM/DD/YYYY
// - YY/MM/DD

export const isMemberMatch = (memberProfile: MemberProfile): boolean => {
  // Write your code here.
  // Call checkMatchingProfile with a single MemberProfile, or with a
  // MemberProfile[] if you build more than one candidate to check.

  // return checkMatchingProfile(memberProfile);
  // return checkMatchingProfile([memberProfile, memberProfile, memberProfile]);
}
