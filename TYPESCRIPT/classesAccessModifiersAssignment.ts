export {};
// Abstract base class
abstract class Content {
  public readonly title: string;
  public readonly author: string;
  private published: boolean = false;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  public publish(): void {
    this.published = true;
  }

  protected isPublished(): boolean {
    return this.published;
  }

  abstract getType(): string;
}

// Assignment class (Your Task)
class Assignment extends Content {
  private dueDate: Date;

  constructor(title: string, author: string, dueDate: Date) {
    super(title, author);
    this.dueDate = dueDate;
  }

  // Only instructor can update before publishing
  public setDueDate(newDate: Date, isInstructor: boolean): void {
    if (!this.isPublished() && isInstructor) {
      this.dueDate = newDate;
    } else {
      throw new Error("Cannot update due date after publishing or if not an instructor.");
    }
  }

  public getDueDate(): Date {
    return this.dueDate;
  }

  getType(): string {
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