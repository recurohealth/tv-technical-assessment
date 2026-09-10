# Member Match Exercise

## Intro

You are free to write your solution in TypeScript or pseudocode. The goal is to see how you think through a problem. Ask clarifying questions and talk through your reasoning. A working solution matters less than a good discussion about the problem.

Some requirements in this exercise are intentionally open. State the assumption you make, and explain why. Good luck!

## Setup

```
npm install
npm test
```

`npm test` runs `src/your-code/yourFunction.test.ts` against the sample data in `src/your-code/mockDatabase.ts`. Run it as often as you like while you work: it gives you real pass/fail feedback instead of only a talked-through answer.

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

Each profile looks like this:

```ts
export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
};
```

### Constraints

- Use only core language features. Do not use a third-party library.
- Write your solution in TypeScript, in pseudocode, or in a common
  object-oriented language.
- If you use pseudocode or another language, assume you have functions
  equivalent to the TypeScript core library.
- Disable any AI assistance in your editor.

### The database API

`checkMatchingProfile` stands in for a call to our member database, for
the purpose of this exercise:

```ts
checkMatchingProfile(profile: MemberProfile): boolean;
checkMatchingProfile(profiles: MemberProfile[]): boolean;
```

- The first form takes one profile and checks it against the database.
- The second form takes an array of profiles. It returns `true` if any
  profile in the array matches any record in the database.
- The function only compares data. It does not add, change, or remove
  any record.
- The function does an exact, case-sensitive match on the given fields.
  It does not trim whitespace, and it does not normalize the date
  format for you.
- Either form is a viable way to solve the problem. The choice is part
  of your design.

### Input details

The profile comes from an external client-facing form. The form always
submits all three fields: `firstName`, `lastName`, and `dateOfBirth`.
Do not add a check for a missing field.

The form validates the date field before it submits. Because of this,
`dateOfBirth` always arrives as `YYYY/MM/DD`. The form does not validate
the name fields. A client-supplied name can differ from the stored name
in case, or have extra surrounding whitespace, even when it refers to
the same member.

Our database stores the date as a string, in one of three formats:

- `YYYY/MM/DD`
- `MM/DD/YYYY`
- `YY/MM/DD`

Your matching logic must account for both the date format and the name
difference.

### Example

Input:

```
{ firstName: 'bob', lastName: 'Smith', dateOfBirth: '1946/06/12' }
```

Records in our DB:

| firstName | lastName | dateOfBirth |
| --------- | -------- | ----------- |
| Bob       | Smith    | 46/06/12    |
| Mary      | Jane     | 1980/12/01  |
| Peter     | Parker   | 01/02/1999  |

Expected output: `true`

The full set of sample records is in `src/your-code/mockDatabase.ts`.
