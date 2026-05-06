export {};
// Basic types
type Learner = { id: string; quizzesCompleted: number };
type Instructor = { id: string; coursesTaught: number };
type Admin = { id: string; accessLevel: "basic" | "super" };

// 1. Union Type (Instructor OR Admin)
type InstructorOrAdmin = Instructor | Admin;

// Example usage
function printRole(user: InstructorOrAdmin): void {
  if ("coursesTaught" in user) {
    console.log(`Instructor teaches ${user.coursesTaught} courses`);
  } else {
    console.log(`Admin access level: ${user.accessLevel}`);
  }
}

// 2. Readonly Type
type Assignment = {
  title: string;
  dueDate: Date;
  points: number;
};

type ReadonlyAssignment = Readonly<Assignment>;

const task: ReadonlyAssignment = {
  title: "TypeScript Project",
  dueDate: new Date(),
  points: 100
};

// 3. Mapped Type
type LearnerStats = {
  quizzes: number;
  videos: number;
  assignments: number;
};

type StatsAsStrings = {
  [K in keyof LearnerStats]: string;
};

// Example usage
const stats: StatsAsStrings = {
  quizzes: "10",
  videos: "5",
  assignments: "3"
};

// ---- Test Calls ----
printRole({ id: "1", coursesTaught: 3 });
printRole({ id: "2", accessLevel: "super" });

console.log("Readonly Assignment:", task);
console.log("Stats as strings:", stats);