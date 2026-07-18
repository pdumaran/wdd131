// Single-line formula to calculate wind chill index
const calculateWindChill = (temp, wind) =>
    (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);

document.addEventListener("DOMContentLoaded", () => {
    const temperatureCelsius = 8;
    const windSpeedKmH = 15;

    // DOM Elements Selection
    const currentYearContainer = document.getElementById("current-year");
    const lastModifiedContainer = document.getElementById("last-modified-date");
    const windchillContainer = document.getElementById("windchill-value");

    requestAnimationFrame(() => {
        if (currentYearContainer) {
            currentYearContainer.textContent = new Date().getFullYear();
        }
        if (lastModifiedContainer) {
            lastModifiedContainer.textContent = document.lastModified;
        }

        if (windchillContainer) {
            if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
                const computedIndex = calculateWindChill(temperatureCelsius, windSpeedKmH);
                windchillContainer.textContent = `${computedIndex} °C`;
            } else {
                windchillContainer.textContent = "N/A";
            }
        }
    });
});