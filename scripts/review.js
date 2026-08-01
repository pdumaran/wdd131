document.addEventListener("DOMContentLoaded", () => {
    const counterDisplay = document.getElementById("review-counter");

    // LocalStorage Review Counter Logic
    let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;
    numReviews++;
    window.localStorage.setItem("numReviews-ls", numReviews);

    if (counterDisplay) {
        counterDisplay.textContent = numReviews;
    }

    // Dynamic Footer Data
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
    }
});