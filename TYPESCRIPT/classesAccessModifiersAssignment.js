"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract base class
class Content {
    constructor(title, author) {
        this.published = false;
        this.title = title;
        this.author = author;
    }
    publish() {
        this.published = true;
    }
    isPublished() {
        return this.published;
    }
}
// Assignment class (Your Task)
class Assignment extends Content {
    constructor(title, author, dueDate) {
        super(title, author);
        this.dueDate = dueDate;
    }
    // Only instructor can update before publishing
    setDueDate(newDate, isInstructor) {
        if (!this.isPublished() && isInstructor) {
            this.dueDate = newDate;
        }
        else {
            throw new Error("Cannot update due date after publishing or if not an instructor.");
        }
    }
    getDueDate() {
        return this.dueDate;
    }
    getType() {
        return "Assignment";
    }
}
// ---- Test ----
const assignment = new Assignment("TS Project", "Prof. Sharma", new Date("2026-05-01"));
console.log("Type:", assignment.getType());
console.log("Due Date:", assignment.getDueDate());
// Update due date (allowed)
assignment.setDueDate(new Date("2026-05-10"), true);
// Publish content
assignment.publish();
// Try updating after publish (will throw error)
// assignment.setDueDate(new Date("2026-06-01"), true);
