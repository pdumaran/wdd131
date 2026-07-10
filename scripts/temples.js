// Wait until the HTML webpage is fully loaded before running any code
document.addEventListener("DOMContentLoaded", () => {

    // 1. Select the menu button and the navigation links
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    // Make sure both elements actually exist on the page before adding the click event
    if (hamButton && navigation) {
        // When the menu button is clicked, turn the 'open' class on or off
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    }

    // 2. Select the blank areas in the footer
    const currentYearSpan = document.getElementById('currentyear');
    const lastModifiedParagraph = document.getElementById('lastModified');

    // If the year span exists, inject the current 4-digit year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // If the last modified paragraph exists, inject the date the file was saved
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});