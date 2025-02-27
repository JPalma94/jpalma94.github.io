document.addEventListener("DOMContentLoaded", function () {
    console.log("Personal Website");

    function showSection(sectionId, updateURL = true) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('hidden');
        });

        // Show the selected section
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.classList.remove('hidden');
        }
        
        // Update URL without reloading the page
        history.pushState({ section: sectionId }, "", `/${sectionId}`);
    }

    // Handle browser Back/Forward navigation
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.section) {
            showSection(event.state.section, false);
        } else {
            showSection("home", false);
        }
    });

    // Load the correct section on page load based on the URL
    const path = window.location.hash.replace("#", ""); 
    if (path) {
        showSection(path, false);
    } else {
        showSection("home", false);
    }

    // Add event listeners to links
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            showSection(this.id.replace("-link", ""));
        });
    });
});
