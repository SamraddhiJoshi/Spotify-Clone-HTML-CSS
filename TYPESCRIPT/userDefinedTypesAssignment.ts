// Enum for staff roles
enum Role {
  Doctor,
  Nurse,
  Admin
}

// Interface for Staff
interface Staff {
  id: number;
  name: string;
  role: Role;
}

// Array of staff members
let staffMembers: Staff[] = [
  { id: 1, name: "Dr. Sharma", role: Role.Doctor },
  { id: 2, name: "Nurse Priya", role: Role.Nurse },
  { id: 3, name: "Admin Raj", role: Role.Admin }
];

// Function to print staff summary
function printStaffSummary(staffList: Staff[]): void {
  console.log("Staff Summary:");

  for (let staff of staffList) {
    console.log(`${staff.name} - ${Role[staff.role]}`);
  }
}

// Call the function
printStaffSummary(staffMembers);