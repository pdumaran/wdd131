(() => {
    // Populates before rendering completes 
    document.getElementById("current-year").textContent = new Date().getFullYear();
    // Populates before rendering completes 
    document.getElementById("last-modified-date").textContent = document.lastModified;
})();

setTimeout(() => {
    const temperatureCelsius = 8;
    const windSpeedKmH = 15;

    // Target tracking viewport text container
    const windchillContainer = document.getElementById("windchill-value");

    // Single-line calculation formulation requirement 
    const calculateWindChill = (temp, wind) =>
        (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);

    if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
        const computedIndex = calculateWindChill(temperatureCelsius, windSpeedKmH);
        windchillContainer.textContent = `${computedIndex} °C`;
    } else {
        windchillContainer.textContent = "N/A";
    }
}, 1);