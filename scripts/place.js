document.addEventListener("DOMContentLoaded", () => {
    // 1. Display current year and last modified date
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified-date").textContent = document.lastModified;

    // 2. Define static context data defining the weather conditions
    const temperatureCelsius = 8;
    const windSpeedKmH = 15;

    // Target tracking viewport text containers
    const windchillContainer = document.getElementById("windchill-value");

    // 3. Single-line calculation formulation requirement [cite: Metric Formula Parameters]
    const calculateWindChill = (temp, wind) =>
        (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);

    // 4. Validate operating constraints limits before invoking operations
    if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
        // Invoke function and display result
        const computedIndex = calculateWindChill(temperatureCelsius, windSpeedKmH);
        windchillContainer.textContent = `${computedIndex} °C`;
    } else {
        // Display Not Applicable
        windchillContainer.textContent = "N/A";
    }
});