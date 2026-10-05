# Member Match Exercise

## Setup

```
npm install
npm test
```

`npm test` runs `src/your-code/yourFunction.test.ts` against the sample data in `src/your-code/mockDatabase.ts`. Run it often. It gives you pass/fail feedback as you work.

## Where to write your code

- Write your solution in `isMemberMatch` in `src/your-code/yourFunction.ts`. This is the only file to change.
- `src/your-code/checkMatchingProfile.ts` and `src/your-code/mockDatabase.ts` are given. Read them for context. Do not change them.

## Task

Write `isMemberMatch`. It takes a `MemberProfile` and returns `true` when a matching record exists in the database.

A match requires all three fields: `firstName`, `lastName`, and `dateOfBirth`.

Call `checkMatchingProfile` to check the database. You can call it with one profile or with an array of profiles. Both approaches are valid.

## Matching rules

- `checkMatchingProfile` does an exact, case-sensitive match. It does not trim whitespace or normalize date formats.
- The form does not validate `firstName` or `lastName`. A name can differ from the database record in case or in extra whitespace.
- The form validates `dateOfBirth`. The input always arrives as `YYYY/MM/DD`.
- The database stores `dateOfBirth` as a string, in one of three formats: `YYYY/MM/DD`, `MM/DD/YYYY`, or `YY/MM/DD`.

## Example

Input:

```
{ firstName: 'bob', lastName: 'Smith', dateOfBirth: '1946/06/12' }
```

Database records:

| firstName | lastName | dateOfBirth | Match |
| --------- | -------- | ----------- | ----- |
| Bob       | Smith    | 46/06/12    | Yes   |
| Mary      | Jane     | 1980/12/01  |       |
| Peter     | Parker   | 01/02/1999  |       |

Expected output: `true`

The full set of sample records is in `src/your-code/mockDatabase.ts`.
