import { MemberProfile } from './yourFunction';
import { MOCK_DB } from './mockDatabase';

// Given API. Do not change this file.
//
// This stands in for a real database query: it checks for an exact,
// case-sensitive, format-sensitive match against the stored records. It
// does not normalize dates or names on your behalf.
export function checkMatchingProfile(profile: MemberProfile): boolean;

export function checkMatchingProfile(profiles: MemberProfile[]): boolean;

export function checkMatchingProfile(
  input: MemberProfile | MemberProfile[]
): boolean {
  const candidates = Array.isArray(input) ? input : [input];

  return candidates.some((candidate) =>
    MOCK_DB.some(
      (record) =>
        record.firstName === candidate.firstName &&
        record.lastName === candidate.lastName &&
        record.dateOfBirth === candidate.dateOfBirth
    )
  );
}
