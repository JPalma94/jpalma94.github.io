//import { isEmpty } from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to my personal website!");

    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(sectionId).classList.remove('hidden');
    }


    // Add event listeners to links
    document.getElementById("edu-link").addEventListener("click", function () {
        showSection("education");
    });

    document.getElementById("exp-link").addEventListener("click", function () {
        showSection("experience");
    });

    document.getElementById("hob-link").addEventListener("click", function () {
        showSection("hobbies");
    });

    document.getElementById("contact-link").addEventListener("click", function () {
        showSection("contact");
    });
});


// Example usage:
/*
const emptyCheck = isEmpty('  ');
console.log(emptyCheck);  // Output: true
*/