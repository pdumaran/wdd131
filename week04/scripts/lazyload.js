// Display current year and last modification date in the footer
document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Set the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});