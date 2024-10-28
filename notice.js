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

// Function to manage visibility and animations for the notice page container
function checkNoticePageVisibility() {
    const noticePageContainer = document.querySelector('.notice-page-container');

    if (noticePageContainer) {
        const showThreshold = 20; // 20% to show
        const hideThreshold = 15; // 15% to hide

        if (isElementPartiallyInViewport(noticePageContainer, showThreshold)) {
            noticePageContainer.classList.add('visible'); // Add visible class to trigger animation
        } else if (!isElementPartiallyInViewport(noticePageContainer, hideThreshold)) {
            noticePageContainer.classList.remove('visible'); // Remove visible class to reset animation
        }
    }
}

// Add scroll event listener
window.addEventListener('scroll', function() {
    checkNoticePageVisibility(); // Check visibility for the notice page container
});

// Call the function on page load to check visibility
window.addEventListener('load', function() {
    checkNoticePageVisibility(); // Check visibility on load for the notice page container
});
