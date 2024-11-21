Intro:

For this assessment, you’re free to use either pseudocode or Typescript. The purpose of it is to get an understanding of how you think through a problem. You are encouraged to ask clarifying questions and talk through your thought process! Good luck!

Prompt:

Write a function that takes a member profile object from an external client, searches for a matching member record in our database and returns True if there's a match. Suppose the primary key for a member in our database is the firstName, lastName, and the dateOfBirth. You are not allowed to use any libraries other than core typescript libraries. You may write your solution in either typescript or pseudocode (if you use pseudocode, you can assume you have access to functions that do what the core typescript functions do). You must disable any AI assistance from your IDE. After you've pulled down this project and opened it in a text editor, navigate to `src/your-code/yourFunction.ts`. Begin writing your code there.

Let's say each profile looks like this:

```
export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}
```

The format for dateOfBirth that we receive is YYYY/MM/DD but in our database the format is inconsistent. The formats we in our DB are YYYY/MM/DD, MM/DD/YYYY, and YY/MM/DD. Write a function that will find a matching record if one exists in the database.

Their dob format: `YYYY/MM/DD`

Our DOB formats: `YYYY/MM/DD, MM/DD/YYYY, YY/MM/DD`

Assume you have these apis to query the database. The first one will take a single member profile as an input and query the database to find an exact match. The second will take a list of memberProfiles and returns True if ANY element in the array matches with ANY record in the DB

Your solution will need to use use one of the two methods below. Either is viable depending on your approach to the problem.

```
// Takes a single member profile and returns True if any record matches
checkMatchingProfile(MemberProfile): boolean

// Takes an array of member profiles and returns True if ANY element in the array matches with ANY record in the DB
checkMatchingProfile(MemberProfile[]): boolean
```

Example Flow:

```
Example input: {
  firstName: Bob,
  lastName: Smith,
  dateOfBirth: 1946/06/12
}
```

Example records in our DB:

| firstName | lastName | dateOfBirth |
| --------- | -------- | ----------- |
| Bob       | Smith    | 46/06/12    |
| Mary      | Jane     | 1980/12/01  |
| Peter     | Parker   | 01/02/1999  |

Expected output: True

Scaffold:

```
export type MemberProfile = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

function reformatData(memberProfile: MemberProfile): boolean {

  // write your code here

  // Use either
  // return checkMatchingProfile(memberProfile);
  // or
  // return checkMatchingProfile(memberProfileArray);
}
```
