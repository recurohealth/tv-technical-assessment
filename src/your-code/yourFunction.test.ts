import { describe, expect, test } from 'vitest';
import { isMemberMatch } from './yourFunction';

describe('isMemberMatch', () => {
  test('matches a record stored in YY/MM/DD format', () => {
    expect(
      isMemberMatch({
        firstName: 'Bob',
        lastName: 'Smith',
        dateOfBirth: '1946/06/12',
      })
    ).toBe(true);
  });

  test('matches a record stored in YYYY/MM/DD format', () => {
    expect(
      isMemberMatch({
        firstName: 'Mary',
        lastName: 'Jane',
        dateOfBirth: '1980/12/01',
      })
    ).toBe(true);
  });

  test('matches a record stored in MM/DD/YYYY format', () => {
    expect(
      isMemberMatch({
        firstName: 'Peter',
        lastName: 'Parker',
        dateOfBirth: '1999/01/02',
      })
    ).toBe(true);
  });

  test('returns false for Bob Smith with dateOfBirth 1999/01/01', () => {
    expect(
      isMemberMatch({
        firstName: 'Bob',
        lastName: 'Smith',
        dateOfBirth: '1999/01/01',
      })
    ).toBe(false);
  });

  test('returns false when no record matches', () => {
    expect(
      isMemberMatch({
        firstName: 'John',
        lastName: 'Doe',
        dateOfBirth: '1985/05/15',
      })
    ).toBe(false);
  });

  test('matches despite different case and surrounding whitespace in the name', () => {
    expect(
      isMemberMatch({
        firstName: '  Alice  ',
        lastName: 'JOHNSON',
        dateOfBirth: '1975/02/28',
      })
    ).toBe(true);
  });

  test('returns false for John Parker with dateOfBirth 1999/01/02', () => {
    expect(
      isMemberMatch({
        firstName: 'John',
        lastName: 'Parker',
        dateOfBirth: '1999/01/02',
      })
    ).toBe(false);
  });
});
