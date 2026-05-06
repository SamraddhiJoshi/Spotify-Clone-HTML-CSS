"use strict";
// 1. Check if number is positive (if)
function checkSign(num) {
    if (num > 0) {
        console.log("Number is positive");
    }
}
// 2. Check even or odd (if...else)
function evenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("Even number");
    }
    else {
        console.log("Odd number");
    }
}
// 3. Get grade (if...else if...else)
function getGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
// 4. Provide feedback (switch)
function provideFeedback(grade) {
    switch (grade) {
        case "A":
            console.log("Excellent performance!");
            break;
        case "B":
            console.log("Great job!");
            break;
        case "C":
            console.log("Good effort, keep improving.");
            break;
        case "D":
            console.log("Needs improvement.");
            break;
        case "F":
            console.log("Fail, work harder.");
            break;
        default:
            console.log("Invalid grade");
            break;
    }
}
// Example calls
checkSign(10);
evenOrOdd(7);
let grade = getGrade(85);
console.log("Grade:", grade);
provideFeedback(grade);
