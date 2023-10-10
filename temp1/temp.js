function convertTemperature() {
    var temperatureInput = document.getElementById("temperature").value;
    var fromUnit = document.getElementById("fromUnit").value;
    var resultElement = document.getElementById("result");

    // Convert temperature to the other two units based on the entered unit
    var convertedUnits = {};

    if (fromUnit === "celsius") {
        convertedUnits.fahrenheit = (parseFloat(temperatureInput) * 9 / 5) + 32;
        convertedUnits.kelvin = parseFloat(temperatureInput) + 273.15;
    } else if (fromUnit === "fahrenheit") {
        convertedUnits.celsius = (parseFloat(temperatureInput) - 32) * 5 / 9;
        convertedUnits.kelvin = (parseFloat(temperatureInput) - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === "kelvin") {
        convertedUnits.celsius = parseFloat(temperatureInput) - 273.15;
        convertedUnits.fahrenheit = (parseFloat(temperatureInput) - 273.15) * 9 / 5 + 32;
    }

    var result = "";

    for (var unit in convertedUnits) {
        result += "<p><strong>" + capitalizeFirstLetter(unit) + ":</strong> " + convertedUnits[unit].toFixed(2) + " " + unit.charAt(0).toUpperCase() + unit.slice(1) + "</p>";
    }

    resultElement.innerHTML = "<p>Converted Temperatures:</p>" + result;
    resultElement.style.display = "block"; // Add this line to show the result box
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}