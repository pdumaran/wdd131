window.addEventListener("load", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified-date").textContent = document.lastModified;

    const temperatureCelsius = 8; // Condition check constraints (<= 10 °C)
    const windSpeedKmH = 15;      // Condition check constraints (> 4.8 km/h)

    const windchillContainer = document.getElementById("windchill-value");

    const calculateWindChill = (temp, wind) =>
        (13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16))).toFixed(1);

    if (temperatureCelsius <= 10 && windSpeedKmH > 4.8) {
        const computedIndex = calculateWindChill(temperatureCelsius, windSpeedKmH);
        windchillContainer.textContent = `${computedIndex} °C`;
    } else {
        // Display Not Applicable
        windchillContainer.textContent = "N/A";
    }
});