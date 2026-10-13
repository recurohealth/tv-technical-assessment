import { checkMatchingProfileApi } from './checkMatchingProfileApi';

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
  // Call checkMatchingProfileApi with a single MemberProfile, or with a
  // MemberProfile[] if you build more than one candidate to check.

  // return checkMatchingProfileApi(memberProfile);
  // return checkMatchingProfileApi([memberProfile, memberProfile, memberProfile]);
}
