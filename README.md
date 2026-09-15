# Member Match Exercise

## Intro

You are free to write your solution in TypeScript or pseudocode. The goal is to see how you think through a problem. Ask clarifying questions and talk through your reasoning. A working solution matters less than a good discussion about the problem.

Some requirements in this exercise are intentionally open. State the assumption you make, and explain why. Good luck!

- Use only core language features. Do not use a third-party library.
- Write your solution in TypeScript, in pseudocode, or in a common
  object-oriented language.
- Disable any AI assistance in your editor.

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

Write a function that takes a `MemberProfile` from a frontend client that searches for a matching member record and returns `true` if there is a match. The primary key for a member in our database is `firstName`, `lastName`, and `dateOfBirth`. This client sided function will call `checkMatchingProfile` which is an api endpoint for the purposes of this assessment.

### The database API

`checkMatchingProfile` is an api call that checks for the member in the mock database, for
the purpose of this exercise:

- The function only compares data. It does not not modify or mutate any data that is passed into it. It will only handle strict equality between the data and what is in the mock database.
- The function does an exact, case-sensitive match on the given fields.
  It does not trim whitespace, and it does not normalize the date
  format for you.
- Either form is a viable way to solve the problem. The choice is part
  of your design.

### Input details

The input, member profile, comes from an external client-facing form. The form always
submits all three fields: `firstName`, `lastName`, and `dateOfBirth`.

Name Fields (`firstName`, `lastName`):
The form **DOES NOT** validate the name fields.
Meaning, a client-supplied first or last name may differ from the name in the mock database in case, or have extra surrounding whitespace, even when it refers to
the same member. You should account for this.

Date Field (`dateOfBirth`):
The form **DOES** validate the date field before it submits. Because of this,
`dateOfBirth` always arrives in the input as `YYYY/MM/DD`. 

Our database stores the date as a string, in one of three formats:
- `YYYY/MM/DD`
- `MM/DD/YYYY`
- `YY/MM/DD`

### Example

Input:

```
{ firstName: 'bob', lastName: 'Smith', dateOfBirth: '1946/06/12' }
```

Records in our DB:

| firstName | lastName | dateOfBirth |
| --------- | -------- | ----------- |
| Bob       | Smith    | 46/06/12    | <------- BOB EXISTS HERE
| Mary      | Jane     | 1980/12/01  |
| Peter     | Parker   | 01/02/1999  |

Expected output: `true`

The full set of sample records is in `src/your-code/mockDatabase.ts`.
