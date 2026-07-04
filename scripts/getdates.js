// Target the current year container and inject the four-digit year
const currentYearSpan = document.querySelector("#currentyear");
currentYearSpan.textContent = new Date().getFullYear();

// Target the lastModified paragraph and inject document metadata properties
const lastModifiedParagraph = document.querySelector("#lastModified");
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;