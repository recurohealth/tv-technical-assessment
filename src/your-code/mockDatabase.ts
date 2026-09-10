import { MemberProfile } from './yourFunction';

export const MOCK_DB: MemberProfile[] = [
  { firstName: 'Bob', lastName: 'Smith', dateOfBirth: '46/06/12' }, // YY/MM/DD
  { firstName: 'Mary', lastName: 'Jane', dateOfBirth: '1980/12/01' }, // YYYY/MM/DD
  { firstName: 'Peter', lastName: 'Parker', dateOfBirth: '01/02/1999' }, // MM/DD/YYYY
  { firstName: 'Bob', lastName: 'Smith', dateOfBirth: '1990/03/22' }, // YYYY/MM/DD
  { firstName: 'Alice', lastName: 'Johnson', dateOfBirth: '1975/02/28' }, // YYYY/MM/DD
  { firstName: 'Mary', lastName: 'Jane', dateOfBirth: '80/12/01' }, // YY/MM/DD
  { firstName: 'Steve', lastName: 'Rogers', dateOfBirth: '07/04/1918' }, // YYYY/MM/DD
  { firstName: 'Tony', lastName: 'Stark', dateOfBirth: '70/05/29' }, // YY/MM/DD
  { firstName: 'Jane', lastName: 'Parker', dateOfBirth: '1999/01/02' }, // YYYY/MM/DD
];
