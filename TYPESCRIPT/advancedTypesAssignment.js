"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example usage
function printRole(user) {
    if ("coursesTaught" in user) {
        console.log(`Instructor teaches ${user.coursesTaught} courses`);
    }
    else {
        console.log(`Admin access level: ${user.accessLevel}`);
    }
}
const task = {
    title: "TypeScript Project",
    dueDate: new Date(),
    points: 100
};
// Example usage
const stats = {
    quizzes: "10",
    videos: "5",
    assignments: "3"
};
// ---- Test Calls ----
printRole({ id: "1", coursesTaught: 3 });
printRole({ id: "2", accessLevel: "super" });
console.log("Readonly Assignment:", task);
console.log("Stats as strings:", stats);
