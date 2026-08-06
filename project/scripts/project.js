document.addEventListener("DOMContentLoaded", () => {
    // --------------------------------------------------------------------------
    // 1. DATA SOURCE (Array of Objects)
    // --------------------------------------------------------------------------
    const trails = [
        {
            id: "t1",
            name: "Mount Kanlaon Ridge",
            difficulty: "Hard",
            distance: "14.5 km",
            elevation: "2,435m",
            image: "images/trail1.webp", // Updated to local file
            description: "A challenging high-altitude hike offering panoramic views across Negros Island."
        },
        {
            id: "t2",
            name: "Pine Forest Trail",
            difficulty: "Easy",
            distance: "4.2 km",
            elevation: "320m",
            image: "images/trail2.webp", // Updated to local file
            description: "A shaded, gentle walk perfect for beginners and family outings."
        },
        {
            id: "t3",
            name: "Seven Falls Pass",
            difficulty: "Moderate",
            distance: "8.0 km",
            elevation: "650m",
            image: "images/trail3.webp", // Updated to local file
            description: "Scenic trail featuring river crossings and stunning waterfall views."
        },
        {
            id: "t4",
            name: "Eco-Park Summit Walk",
            difficulty: "Easy",
            distance: "3.0 km",
            elevation: "180m",
            image: "images/trail4.webp", // Can reuse a local file
            description: "Quick, paved trail with fantastic sunset viewpoints over the valley."
        }
    ];

    // --------------------------------------------------------------------------
    // 2. DOM ELEMENTS SELECTION
    // --------------------------------------------------------------------------
    const trailsGrid = document.getElementById("trails-grid");
    const featuredContainer = document.getElementById("featured-trail-container");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const selectElement = document.getElementById("trail-select");
    const contactForm = document.getElementById("contact-form");

    // --------------------------------------------------------------------------
    // 3. DYNAMIC DOM MANIPULATION & TEMPLATE LITERALS
    // --------------------------------------------------------------------------
    function renderTrails(trailArray, container) {
        if (!container) return;
        container.innerHTML = "";

        trailArray.forEach(trail => {
            const isFav = isFavorite(trail.id) ? "❤️ Saved" : "🤍 Save to Favorites";

            // Exclusive use of Template Literals for HTML Output
            const cardHTML = `
                <article class="trail-card">
                    <img src="${trail.image}" alt="${trail.name}" loading="lazy" width="500" height="180">
                    <span class="difficulty-tag difficulty-${trail.difficulty}">${trail.difficulty}</span>
                    <h3>${trail.name}</h3>
                    <p><strong>Distance:</strong> ${trail.distance} | <strong>Elevation:</strong> ${trail.elevation}</p>
                    <p>${trail.description}</p>
                    <button class="fav-btn" data-id="${trail.id}">${isFav}</button>
                </article>
            `;
            container.innerHTML += cardHTML;
        });

        // Add Event Listeners for Favorite Buttons
        const favButtons = container.querySelectorAll(".fav-btn");
        favButtons.forEach(btn => {
            btn.addEventListener("click", (e) => toggleFavorite(e.target.dataset.id));
        });
    }

    // --------------------------------------------------------------------------
    // 4. CONDITIONAL BRANCHING & ARRAY METHODS (Filtering)
    // --------------------------------------------------------------------------
    function filterTrailsByDifficulty(difficulty) {
        if (difficulty === "all") {
            renderTrails(trails, trailsGrid);
        } else {
            // Array Filter Method
            const filtered = trails.filter(trail => trail.difficulty === difficulty);
            renderTrails(filtered, trailsGrid);
        }
    }

    // Filter Buttons Event Delegation
    if (filterButtons) {
        filterButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                filterButtons.forEach(b => b.classList.remove("active-filter"));
                e.target.classList.add("active-filter");
                filterTrailsByDifficulty(e.target.dataset.difficulty);
            });
        });
    }

    // Populate Select Options inside Form
    if (selectElement) {
        trails.forEach(trail => {
            const option = document.createElement("option");
            option.value = trail.id;
            option.textContent = `${trail.name} (${trail.difficulty})`;
            selectElement.appendChild(option);
        });
    }

    // --------------------------------------------------------------------------
    // 5. LOCAL STORAGE MANAGEMENT
    // --------------------------------------------------------------------------
    function getFavorites() {
        return JSON.parse(localStorage.getItem("trailFavorites")) || [];
    }

    function isFavorite(id) {
        const favorites = getFavorites();
        return favorites.includes(id);
    }

    function toggleFavorite(id) {
        let favorites = getFavorites();

        // Conditional Branching
        if (favorites.includes(id)) {
            favorites = favorites.filter(favId => favId !== id);
        } else {
            favorites.push(id);
        }

        localStorage.setItem("trailFavorites", JSON.stringify(favorites));

        // Re-render current view to reflect state change
        if (trailsGrid) {
            const activeFilterBtn = document.querySelector(".filter-btn.active-filter");
            const currentFilter = activeFilterBtn ? activeFilterBtn.dataset.difficulty : "all";
            filterTrailsByDifficulty(currentFilter);
        } else if (featuredContainer) {
            renderTrails(trails.slice(0, 2), featuredContainer);
        }
    }

    // Handle Form Submission Counter in LocalStorage
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let submissionCount = Number(localStorage.getItem("formSubmissions")) || 0;
            submissionCount += 1;
            localStorage.setItem("formSubmissions", submissionCount);

            const feedbackBox = document.getElementById("form-feedback");
            const countDisplay = document.getElementById("submission-count");

            if (countDisplay) countDisplay.textContent = submissionCount;
            if (feedbackBox) feedbackBox.classList.remove("hidden");

            contactForm.reset();
        });
    }

    // --------------------------------------------------------------------------
    // 6. DYNAMIC FOOTER DATA
    // --------------------------------------------------------------------------
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedP = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
    }

    // Initial Page Renders
    if (trailsGrid) renderTrails(trails, trailsGrid);
    if (featuredContainer) renderTrails(trails.slice(0, 2), featuredContainer);
});