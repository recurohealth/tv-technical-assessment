# This file is not covered by npm test. Use it only if you choose to
# write your solution in Python.

from dataclasses import dataclass


@dataclass
class MemberProfile:
    first_name: str
    last_name: str
    date_of_birth: str


# Example input
# MemberProfile(first_name="bob", last_name="Smith", date_of_birth="1946/06/12")
# DOB FORMATS:
# - YYYY/MM/DD
# - MM/DD/YYYY
# - YY/MM/DD


def is_member_match(member_profile: MemberProfile) -> bool:
    # Write your code here.
    # Call check_matching_profile with a single MemberProfile, or with a
    # list[MemberProfile] if you build more than one candidate to check.
    # Assume check_matching_profile exists. It has the two forms shown
    # in yourFunction.ts.

    # return check_matching_profile(member_profile)
    # return check_matching_profile([member_profile, member_profile, member_profile])
    pass
