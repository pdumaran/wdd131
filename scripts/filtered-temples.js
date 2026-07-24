document.addEventListener("DOMContentLoaded", () => {
    // Array of Temple Objects. 3 Added
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // --- 3 Added Temples. Updated Image URLs ---
        {
            templeName: "Barranquilla Colombia",
            location: "Barranquilla, Colombia",
            dedicated: "2018, December, 9",
            area: 25349,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/1280x800/3-Barranquilla-Columblia-Temple-2135198.jpg"
        },
        {
            templeName: "Anchorage Alaska",
            location: "Anchorage, Alaska, United States",
            dedicated: "1999, January, 9",
            area: 11937,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/320x180/anchorage-temple-lds-253274-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 382207,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669.jpg"
        }
    ];

    // DOM Elements
    const galleryGrid = document.querySelector("#gallery-grid");
    const galleryTitle = document.querySelector("#gallery-title");
    const navLinks = document.querySelectorAll(".navigation a");
    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    // Hamburger Menu Toggle
    if (hamButton && navigation) {
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    }

    // Create and Render Temple Cards
    function displayTemples(filteredTemples) {
        galleryGrid.innerHTML = ""; // Clear existing cards

        filteredTemples.forEach((temple) => {
            const card = document.createElement("figure");

            // Do not lazy-load the first image (above the fold)
            const loadingAttr = index === 0
                ? 'loading="eager" fetchpriority="high"'
                : 'loading="lazy"';

            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" 
                     alt="${temple.templeName} Temple" 
                     loading="lazy" 
                     width="400" 
                     height="250">
            `;

            galleryGrid.appendChild(card);
        });
    }

    // Helper to extract dedication year for filtering
    function getDedicationYear(dedicatedString) {
        const yearMatch = dedicatedString.match(/\d{4}/);
        return yearMatch ? parseInt(yearMatch[0], 10) : 0;
    }

    // Navigation Filter Listeners
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // Update active state CSS class
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            const filterId = link.id;
            galleryTitle.textContent = link.textContent;

            // Apply Array Filters
            switch (filterId) {
                case "old":
                    displayTemples(temples.filter((t) => getDedicationYear(t.dedicated) < 1900));
                    break;
                case "new":
                    displayTemples(temples.filter((t) => getDedicationYear(t.dedicated) > 2000));
                    break;
                case "large":
                    displayTemples(temples.filter((t) => t.area > 90000));
                    break;
                case "small":
                    displayTemples(temples.filter((t) => t.area < 10000));
                    break;
                case "home":
                default:
                    displayTemples(temples);
                    break;
            }

            // Close mobile menu on selection
            if (navigation.classList.contains("open")) {
                navigation.classList.remove("open");
                hamButton.classList.remove("open");
            }
        });
    });

    // Display all temples
    displayTemples(temples);

    // Footer Updates
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;
    }
});