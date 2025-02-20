import { formatDate, isEmpty, toggleVisibility, getRandomColor, capitalizeWords } from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to my personal website!");
});

// Example usage:
const date = '2024-02-20';
console.log(formatDate(date));  // Output: 20/02/2024

const text = 'hello world';
console.log(capitalizeWords(text));  // Output: Hello World

const randomColor = getRandomColor();
console.log(randomColor);  // Output: #A3B2C9 (random color)

const elementId = 'myElement';
toggleVisibility(elementId);  // Toggle visibility of element with id 'myElement'

const emptyCheck = isEmpty('  ');
console.log(emptyCheck);  // Output: true