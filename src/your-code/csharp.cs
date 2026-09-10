// This file is not covered by npm test. Use it only if you choose to
// write your solution in C#.

using System;

public record MemberProfile(string FirstName, string LastName, string DateOfBirth);

public static class YourFunction
{
    // Example input
    // new MemberProfile("bob", "Smith", "1946/06/12")
    // DOB FORMATS:
    // - YYYY/MM/DD
    // - MM/DD/YYYY
    // - YY/MM/DD

    public static bool IsMemberMatch(MemberProfile memberProfile)
    {
        // Write your code here.
        // Call CheckMatchingProfile with a single MemberProfile, or with a
        // MemberProfile[] if you build more than one candidate to check.
        // Assume CheckMatchingProfile exists. It has the two forms shown
        // in yourFunction.ts.

        // return CheckMatchingProfile(memberProfile);
        // return CheckMatchingProfile(new[] { memberProfile, memberProfile, memberProfile });

        throw new NotImplementedException();
    }
}
