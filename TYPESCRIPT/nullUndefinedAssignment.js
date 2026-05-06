"use strict";
// Profile 1: null bio, no avatar
let profile1 = {
    username: "Sam",
    bio: null
};
// Profile 2: all fields present
let profile2 = {
    username: "Riya",
    bio: "Frontend Developer",
    avatarUrl: "https://example.com/avatar.jpg"
};
// Function to display profile
function showProfile(profile) {
    let bioInfo = profile.bio === null ? "No bio available" : profile.bio;
    let avatarInfo = profile.avatarUrl ? profile.avatarUrl : "Default avatar";
    console.log(`Username: ${profile.username}`);
    console.log(`Bio: ${bioInfo}`);
    console.log(`Avatar: ${avatarInfo}`);
    console.log("----------------------");
}
// Call function
showProfile(profile1);
showProfile(profile2);
