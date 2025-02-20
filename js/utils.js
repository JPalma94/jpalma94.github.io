// utils.js - A file to store utility functions for the project

// Function to format dates in 'DD/MM/YYYY' format
export function formatDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-GB', options);
}

// Function to check if a string is empty
export function isEmpty(str) {
    return !str || str.trim() === '';
}

// Function to toggle visibility of an element
export function toggleVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const currentVisibility = window.getComputedStyle(element).display;
        element.style.display = currentVisibility === 'none' ? 'block' : 'none';
    }
}

// Function to generate a random color
export function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to capitalize the first letter of each word in a string
export function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}