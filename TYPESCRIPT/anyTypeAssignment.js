"use strict";
// Object to store answers
let answers = {};
// Function to record answers
function recordAnswer(questionId, answer) {
    answers[questionId] = answer;
}
// Adding different types of answers
recordAnswer("Q1", "Yes"); // string
recordAnswer("Q2", 10); // number
recordAnswer("Q3", ["Option A", "Option B"]); // array
// Printing all answers
console.log("Recorded Answers:");
for (let key in answers) {
    console.log(key + ": ", answers[key]);
}
