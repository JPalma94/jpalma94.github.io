import { isEmpty } from './utils.js';

document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to my personal website!");

    function showSection(sectionId, sectionName) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        document.getElementById(sectionId).classList.remove('hidden');

        // Update the URL without reloading the page
        //history.pushState(null, "", `/${sectionName}`);
    }

    // Add event listeners to links
    document.getElementById("home-link").addEventListener("click", function () {
        showSection("home", "home");
    });

    document.getElementById("education-link").addEventListener("click", function () {
        showSection("education", "education");
    });

    document.getElementById("experience-link").addEventListener("click", function () {
        showSection("experience", "experience");
    });

    document.getElementById("certifications-link").addEventListener("click", function () {
        showSection("certifications", "certifications");
    });

    document.getElementById("other-link").addEventListener("click", function () {
        showSection("other", "other");
    });

    document.getElementById("skills-link").addEventListener("click", function () {
        showSection("skills", "skills");
    });

    document.getElementById("contacts-link").addEventListener("click", function () {
        showSection("contacts", "contacts");
    });
});


// Example usage:
/*
const emptyCheck = isEmpty('  ');
console.log(emptyCheck);  // Output: true
*/