// Skill Hover Effect - Highlights skills on hover
var skills = document.querySelectorAll("#about h3 + p");
skills.forEach(function(skill) {
    skill.addEventListener('mouseover', function() {
        skill.style.color = '#4CAF50';  // Change color on hover
    });
    skill.addEventListener('mouseout', function() {
        skill.style.color = '#333';  // Revert color when not hovering
    });
});

// Project Filtering - Filters projects based on categories
var projectButtons = document.querySelectorAll('.filter-btn');
var projects = document.querySelectorAll('.project');

projectButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var category = btn.getAttribute('data-category');  // Get the category
        projects.forEach(function(project) {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';  // Show project if it matches the category
            } else {
                project.style.display = 'none';  // Hide project if it doesn't match
            }
        }); // Closing brace for inner 'forEach'
    }); // Closing brace for 'addEventListener' callback function
}); // Closing brace for outer 'forEach'

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {  // Only for internal links
            e.preventDefault();
            var targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'  // Smooth scrolling effect
                });
            }
        }
    });
});

// Interactive Greeting Message - Shows an alert when the page loads
/*window.addEventListener('load', function() {
    alert("Welcome to my portfolio website!");  // Simple greeting message
});*/
