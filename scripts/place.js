// Single-line formula to calculate wind chill index
const calculateWindChill = (temp, wind) =>
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);


// 2. Wait for the DOM to fully load before executing UI updates
document.addEventListener("DOMContentLoaded", () => {

    // 3. Configuration & Static Context Data
    const temperatureCelsius = 8;
    const windSpeedKmH = 15;

    // 4. DOM Elements Selection
    const currentYearContainer = document.getElementById("current-year");
    const lastModifiedContainer = document.getElementById("last-modified-date");
    const windchillContainer = document.getElementById("windchill-value");

    // 5. Update Footer Metadata
    if (currentYearContainer) {
        currentYearContainer.textContent = new Date().getFullYear();
    }
    if (lastModifiedContainer) {
        lastModifiedContainer.textContent = document.lastModified;
    }

    // 6. Validate Constraints and Calculate Wind Chill
    if (windchillContainer) {
        // Temperature must be <= 10°C AND wind speed must be > 4.8 km/h
        if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
            const computedIndex = calculateWindChill(temperatureCelsius, windSpeedKmH);
            windchillContainer.textContent = `${computedIndex} °C`;
        } else {
            // Constraints not met
            windchillContainer.textContent = "N/A";
        }
    }
});