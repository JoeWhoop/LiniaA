document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    // Konwersja nazwiska mechanika na wielkie litery i zamiana spacji na podkreślenia
    selectedMechanic = selectedMechanic.toUpperCase().replace(/ /g, "_");
    
    // Konwersja nazwy stacji na wielkie litery i zamiana spacji na podkreślenia
    selectedStation = selectedStation.toUpperCase().replace(/ /g, "_");

    var baseRedirectURL = "https://web.miniextensions.com/c8PrY0xXNNhsDJQQeLCl?prefill_Mechanic=" + selectedMechanic;

    var redirectionURLs = {
        "A1": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A2": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A3": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A4": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A5": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A6": baseRedirectURL + "&prefill_Station=" + selectedStation
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation
