// Takes a single member profile and returns True if any record matches
//checkMatchingProfile(MemberProfile): boolean

// Takes an array of member profiles and returns True if ANY element in the array matches with ANY record in the DB
//checkMatchingProfile(MemberProfile[]): boolean

// Input DOB format: `YYYY/MM/DD`

// Our DOB formats: `YYYY/MM/DD, MM/DD/YYYY, YY/MM/DD`

export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};

function isMemberMatch(memberProfile: MemberProfile): boolean {
  // write your code here
  // Use either
  // return checkMatchingProfile(memberProfile);
  // or
  // return checkMatchingProfile(memberProfileArray);
}
