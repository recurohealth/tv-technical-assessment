# Member Match Exercise

## Intro

You are free to write your solution in TypeScript or pseudocode. The goal
is to see how you think through a problem. Ask clarifying questions and
talk through your reasoning. A working solution matters less than a good
discussion about the problem. Good luck!

## Setup

```
npm install
npm test
```

`npm test` runs `src/your-code/yourFunction.test.ts` against the sample
data in `src/your-code/mockDatabase.ts`. Run it as often as you like while
you work: it gives you real pass/fail feedback instead of only a
talked-through answer.

## Where to write your code

- `src/your-code/yourFunction.ts` — write your solution in `isMemberMatch`.
  This is the only file you need to change.
- `src/your-code/checkMatchingProfile.ts` and `src/your-code/mockDatabase.ts`
  are given. Read them for context, but you should not need to change them.

## Prompt

Write a function that takes a member profile object from an external
client, searches for a matching member record in our database, and
returns `true` if there is a match. The primary key for a member in our
database is `firstName`, `lastName`, and `dateOfBirth`.

Use only core language features: no third-party libraries. You may write
your solution in TypeScript, in pseudocode, or in any popular
object-oriented language; if you use pseudocode or another language,
assume you have access to functions equivalent to TypeScript's core
library. You must disable any AI assistance in your editor.

Each profile looks like this:

```ts
export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};
```

The client always sends `dateOfBirth` as `YYYY/MM/DD`, but our database
stores it inconsistently. The formats we have in our DB are `YYYY/MM/DD`,
`MM/DD/YYYY`, and `YY/MM/DD`.

A client-supplied name can also differ in case or have extra surrounding
whitespace, even when it refers to the same member on file. Your matching
logic needs to account for this, not only for the date format.

Assume you have these APIs to query the database. The first takes a
single member profile and checks for an exact match. The second takes an
array of member profiles and returns `true` if any element matches any
record in the DB:

```ts
checkMatchingProfile(profile: MemberProfile): boolean;
checkMatchingProfile(profiles: MemberProfile[]): boolean;
```

Either is a viable way to solve this, depending on your approach.

### Example

Input:

```
{ firstName: 'Bob', lastName: 'Smith', dateOfBirth: '1946/06/12' }
```

Records in our DB:

| firstName | lastName | dateOfBirth |
| --------- | -------- | ----------- |
| Bob       | Smith    | 46/06/12    |
| Mary      | Jane     | 1980/12/01  |
| Peter     | Parker   | 01/02/1999  |

Expected output: `true`

The full set of sample records is in `src/your-code/mockDatabase.ts`.
