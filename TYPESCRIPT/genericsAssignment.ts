// 1. Generic Class
class FeedbackBox<T> {
  private feedbacks: T[] = [];

  addFeedback(feedback: T): void {
    this.feedbacks.push(feedback);
  }

  getAllFeedback(): T[] {
    return [...this.feedbacks];
  }
}

// Using generic class with string
const quizFeedback = new FeedbackBox<string>();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");

// Using generic class with object
type LessonFeedback = {
  rating: number;
  comment: string;
};

const lessonFeedback = new FeedbackBox<LessonFeedback>();
lessonFeedback.addFeedback({ rating: 5, comment: "Excellent lesson!" });

// 2. Generic Function
function getFirstItem<T>(items: T[]): T | undefined {
  return items[0];
}

// ---- Test Calls ----
console.log("Quiz Feedback:", quizFeedback.getAllFeedback());
console.log("Lesson Feedback:", lessonFeedback.getAllFeedback());

console.log("First Quiz Feedback:", getFirstItem(quizFeedback.getAllFeedback()));
console.log("First Lesson Feedback:", getFirstItem(lessonFeedback.getAllFeedback())); 