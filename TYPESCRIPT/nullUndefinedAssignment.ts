// Define Profile type
type Profile = {
  username: string;
  bio: string | null;
  avatarUrl?: string;
};

// Profile 1: null bio, no avatar
let profile1: Profile = {
  username: "Sam",
  bio: null
};

// Profile 2: all fields present
let profile2: Profile = {
  username: "Riya",
  bio: "Frontend Developer",
  avatarUrl: "https://example.com/avatar.jpg"
};

// Function to display profile
function showProfile(profile: Profile): void {
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