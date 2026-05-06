"use strict";
// 1. Generic Class
class FeedbackBox {
    constructor() {
        this.feedbacks = [];
    }
    addFeedback(feedback) {
        this.feedbacks.push(feedback);
    }
    getAllFeedback() {
        return [...this.feedbacks];
    }
}
// Using generic class with string
const quizFeedback = new FeedbackBox();
quizFeedback.addFeedback("Great quiz!");
quizFeedback.addFeedback("Too hard!");
const lessonFeedback = new FeedbackBox();
lessonFeedback.addFeedback({ rating: 5, comment: "Excellent lesson!" });
// 2. Generic Function
function getFirstItem(items) {
    return items[0];
}
// ---- Test Calls ----
console.log("Quiz Feedback:", quizFeedback.getAllFeedback());
console.log("Lesson Feedback:", lessonFeedback.getAllFeedback());
console.log("First Quiz Feedback:", getFirstItem(quizFeedback.getAllFeedback()));
console.log("First Lesson Feedback:", getFirstItem(lessonFeedback.getAllFeedback()));
