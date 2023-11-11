document.getElementById("goButton").addEventListener("click", function () {
    var selectedMechanic = document.getElementById("mechanicDropdown").value;
    var selectedStation = document.getElementById("stationDropdown").value;

    selectedMechanic = selectedMechanic.toUpperCase().replace(" ", "_");
    selectedStation = selectedStation.toUpperCase().replace(" ", "_");

    var baseRedirectURL = "https://web.miniextensions.com/c8PrY0xXNNhsDJQQeLCI?prefill_Mechanic=" + selectedMechanic;

    var redirectionURLs = {
        "A1": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A2": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A3": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A4": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A5": baseRedirectURL + "&prefill_Station=" + selectedStation,
        "A6": baseRedirectURL + "&prefill_Station=" + selectedStation
    };

    if (redirectionURLs[selectedStation]) {
        window.location.href = redirectionURLs[selectedStation];
    } else {
        alert("Please select both a mechanic and a station before clicking Go.");
    }
});
