// Function to check if an element is at least a certain percentage in the viewport
function isElementPartiallyInViewport(el, threshold) {
    const rect = el.getBoundingClientRect();
    const elementHeight = rect.height;
    const elementVisible = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(0, rect.top));
    
    // Calculate the percentage of the element that is visible
    const visiblePercentage = (elementVisible / elementHeight) * 100;

    // Check if the visible percentage meets the threshold
    return visiblePercentage >= threshold;
}

// Function to manage visibility and animations for the aboutmid section
function checkAboutMidVisibility() {
    const aboutMid = document.querySelector('.aboutmid');

    if (aboutMid) {
        const showThreshold = 20; // 20% to show
        const hideThreshold = 15; // 15% to hide

        if (isElementPartiallyInViewport(aboutMid, showThreshold)) {
            aboutMid.classList.add('visible'); // Add visible class to trigger animation
        } else if (!isElementPartiallyInViewport(aboutMid, hideThreshold)) {
            aboutMid.classList.remove('visible'); // Remove visible class to reset animation
        }
    }
}

// Function to manage visibility and animations for the aboutdir section
function checkAboutDirVisibility() {
    const aboutDir = document.querySelector('.aboutdir');

    if (aboutDir) {
        const showThreshold = 20; // 20% to show
        const hideThreshold = 15; // 15% to hide

        if (isElementPartiallyInViewport(aboutDir, showThreshold)) {
            if (!aboutDir.classList.contains('visible')) {
                aboutDir.classList.add('visible'); // Add visible class to trigger animation
            }
        } else if (!isElementPartiallyInViewport(aboutDir, hideThreshold)) {
            aboutDir.classList.remove('visible'); // Remove visible class to reset animation
        }
    }
}

// Function to manage visibility and animations for the chief section
function checkChiefVisibility() {
    const chiefSection = document.querySelector('.chief');

    if (chiefSection) {
        const showThreshold = 20; // 20% to show
        const hideThreshold = 15; // 15% to hide

        if (isElementPartiallyInViewport(chiefSection, showThreshold)) {
            if (!chiefSection.classList.contains('visible')) {
                chiefSection.classList.add('visible'); // Add visible class to trigger animation
            }
        } else if (!isElementPartiallyInViewport(chiefSection, hideThreshold)) {
            chiefSection.classList.remove('visible'); // Remove visible class to reset animation
        }
    }
}


// Function to manage visibility and animations for the chief section
function checkAboutVisibility() {
    const aboutSection = document.querySelector('.about');

    if (aboutSection) {
        const showThreshold = 20; // 20% to show
        const hideThreshold = 15; // 15% to hide

        if (isElementPartiallyInViewport(aboutSection, showThreshold)) {
            if (!aboutSection.classList.contains('visible')) {
                aboutSection.classList.add('visible'); // Add visible class to trigger animation
            }
        } else if (!isElementPartiallyInViewport(aboutSection, hideThreshold)) {
            aboutSection.classList.remove('visible'); // Remove visible class to reset animation
        }
    }
}






// Add scroll event listener
window.addEventListener('scroll', function() {
    checkAboutMidVisibility(); // Check visibility for aboutmid section
    checkAboutDirVisibility();  // Check visibility for aboutdir section
    checkChiefVisibility();      // Check visibility for chief section
    checkAboutVisibility();
});

// Call the function on page load to check visibility
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none'; // Hide loading screen after content is loaded
    checkAboutMidVisibility(); // Check visibility on load for aboutmid
    checkAboutDirVisibility();  // Check visibility on load for aboutdir
    checkChiefVisibility();      // Check visibility on load for chief section
    checkAboutVisibility();
});




document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function () {
        const contentPortion = this.closest('.about-content-text'); // Find the parent '.about-content-text'
        const fullDescription = contentPortion.querySelector('.full-description'); // Select the '.full-description' inside it

        // Toggle the visibility of the full description
        if (fullDescription.classList.contains('hidden')) {
            fullDescription.classList.remove('hidden');
            this.textContent = 'READ LESS'; // Change button text
        } else {
            fullDescription.classList.add('hidden');
            this.textContent = 'READ MORE'; // Change button text back
        }
    });
});

