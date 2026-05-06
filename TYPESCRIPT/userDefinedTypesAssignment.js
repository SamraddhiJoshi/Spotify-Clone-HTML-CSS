"use strict";
// Enum for staff roles
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Nurse"] = 1] = "Nurse";
    Role[Role["Admin"] = 2] = "Admin";
})(Role || (Role = {}));
// Array of staff members
let staffMembers = [
    { id: 1, name: "Dr. Sharma", role: Role.Doctor },
    { id: 2, name: "Nurse Priya", role: Role.Nurse },
    { id: 3, name: "Admin Raj", role: Role.Admin }
];
// Function to print staff summary
function printStaffSummary(staffList) {
    console.log("Staff Summary:");
    for (let staff of staffList) {
        console.log(`${staff.name} - ${Role[staff.role]}`);
    }
}
// Call the function
printStaffSummary(staffMembers);
