document.addEventListener("DOMContentLoaded", () => {
    // Required Product Array Data Source
    const products = [
        { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
        { id: "fc-2050", name: "power laces", averagerating: 4.7 },
        { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
        { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
        { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
    ];

    // Populate Product Name Dropdown Options Dynamically
    const selectElement = document.getElementById("product-name");

    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id; // Uses product.id as required by the assignment
            option.textContent = capitalizeWords(product.name); // Formats display nicely
            selectElement.appendChild(option);
        });
    }

    // Helper Function to Capitalize Product Names
    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
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