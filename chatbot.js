const routes = {
    "wuse-maitama": {
        start_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Hausa: Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            hausa_description: "Hausa: Ɗauki Adetokunbo Ademola Crescent zuwa Maitama. ~4 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["200-300"],
            time: "10-15 mins",
            hausa_time: "Hausa: Minti 10-15",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        alternative_route: {
            description: "Via Aminu Kano Crescent to Maitama. ~5 km.",
            hausa_description: "Hausa: Ta Aminu Kano Crescent zuwa Maitama. ~5 km.",
            transport: ["Bus", "Keke"],
            fares: ["150-250"],
            time: "15-20 mins",
            hausa_time: "Hausa: Minti 15-20",
            traffic: "Light",
            hausa_traffic: "Hausa: Haske"
        },
        ehailing_advisory: {
            description: "Use Bolt or Uber for quick trips, especially at night.",
            hausa_description: "Hausa: Yi amfani da Bolt ko Uber don tafiya cikin sauri, musamman da dare."
        },
        alighting_points: {
            description: "Maitama Roundabout, walk 100m.",
            hausa_description: "Hausa: Maitama Roundabout, ka tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Maitama, near Maitama Roundabout",
            hausa_description: "Hausa: Maitama, kusa da Maitama Roundabout",
            map_link: "https://maps.google.com/?q=Maitama,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "garki-asokoro": {
        start_address_details: {
            description: "Garki, near Garki Market",
            hausa_description: "Hausa: Garki, kusa da Kasuwar Garki",
            map_link: "https://maps.google.com/?q=Garki,+Abuja",
            distance_to_bus_stop: 0.3
        },
        main_route: {
            description: "Take Ahmadu Bello Way to Asokoro. ~5 km.",
            hausa_description: "Hausa: Ɗauki Ahmadu Bello Way zuwa Asokoro. ~5 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["150-250"],
            time: "15 mins",
            hausa_time: "Hausa: Minti 15",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        alternative_route: {
            description: "Via Area 1 to AYA Roundabout. ~6 km.",
            hausa_description: "Hausa: Ta Area 1 zuwa AYA Roundabout. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["100-200"],
            time: "20 mins",
            hausa_time: "Hausa: Minti 20",
            traffic: "Heavy during rush",
            hausa_traffic: "Hausa: Mai nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Bolt for short trips.",
            hausa_description: "Hausa: Bolt don gajerun tafiye-tafiye."
        },
        alighting_points: {
            description: "Asokoro District, walk 200m.",
            hausa_description: "Hausa: Asokoro District, ka tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Asokoro, near AYA Roundabout",
            hausa_description: "Hausa: Asokoro, kusa da AYA Roundabout",
            map_link: "https://maps.google.com/?q=Asokoro,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: true
        }
    },
    "nyanya-karu": {
        start_address_details: {
            description: "Nyanya, near Nyanya Bridge",
            hausa_description: "Hausa: Nyanya, kusa da Gadar Nyanya",
            map_link: "https://maps.google.com/?q=Nyanya,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take Karu Road to Karu Market. ~2 km.",
            hausa_description: "Hausa: Ɗauki Karu Road zuwa Kasuwar Karu. ~2 km.",
            transport: ["Mini Bus", "Keke"],
            fares: ["100-150"],
            time: "5-10 mins",
            hausa_time: "Hausa: Minti 5-10",
            traffic: "Light",
            hausa_traffic: "Hausa: Haske"
        },
        alternative_route: {
            description: "Via Nyanya Underpass to Karu. ~3 km.",
            hausa_description: "Hausa: Ta Nyanya Underpass zuwa Karu. ~3 km.",
            transport: ["Keke"],
            fares: ["100-150"],
            time: "10 mins",
            hausa_time: "Hausa: Minti 10",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Use Indrive for cheap local rides.",
            hausa_description: "Hausa: Yi amfani da Indrive don tafiye-tafiye masu arha."
        },
        alighting_points: {
            description: "Karu Market, walk 50m.",
            hausa_description: "Hausa: Kasuwar Karu, ka tafi mita 50.",
            distance_to_destination: 0.05,
            single_mode: true
        },
        end_address_details: {
            description: "Karu, near Karu Market",
            hausa_description: "Hausa: Karu, kusa da Kasuwar Karu",
            map_link: "https://maps.google.com/?q=Karu,+Abuja",
            distance_from_bus_stop: 0.05,
            security_concerns: false
        }
    },
    "lugbe-airport": {
        start_address_details: {
            description: "Lugbe, near Lugbe FHA",
            hausa_description: "Hausa: Lugbe, kusa da Lugbe FHA",
            map_link: "https://maps.google.com/?q=Lugbe,+Abuja",
            distance_to_bus_stop: 0.4
        },
        main_route: {
            description: "Take Airport Road to Nnamdi Azikiwe International Airport. ~10 km.",
            hausa_description: "Hausa: Ɗauki Titin Filin Jirgin Sama zuwa Nnamdi Azikiwe International Airport. ~10 km.",
            transport: ["Bus", "Taxi"],
            fares: ["300-500"],
            time: "20-30 mins",
            hausa_time: "Hausa: Minti 20-30",
            traffic: "Heavy",
            hausa_traffic: "Hausa: Mai nauyi"
        },
        alternative_route: {
            description: "Via Lugbe Central to Airport. ~12 km.",
            hausa_description: "Hausa: Ta Lugbe Central zuwa Filin Jirgin Sama. ~12 km.",
            transport: ["Keke", "Shared Taxi"],
            fares: ["250-400"],
            time: "25-35 mins",
            hausa_time: "Hausa: Minti 25-35",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Use Uber for airport reliability.",
            hausa_description: "Hausa: Yi amfani da Uber don aminci a filin jirgin sama."
        },
        alighting_points: {
            description: "Airport Terminal, walk 150m.",
            hausa_description: "Hausa: Tashar Filin Jirgin Sama, ka tafi mita 150.",
            distance_to_destination: 0.15,
            single_mode: true
        },
        end_address_details: {
            description: "Nnamdi Azikiwe International Airport",
            hausa_description: "Hausa: Nnamdi Azikiwe International Airport",
            map_link: "https://maps.google.com/?q=Nnamdi+Azikiwe+International+Airport,+Abuja",
            distance_from_bus_stop: 0.15,
            security_concerns: false
        }
    }
};

// Route normalization function
function normalizeRouteInput(input) {
    const normalized = input.toLowerCase()
        .replace(/\s+/g, '')           // "wuse 2-asokoro" -> "wuse2-asokoro"
        .replace(/[^a-z0-9\-]/g, '');  // Remove other symbols
    const [start, end] = normalized.split('-');
    if (routes[normalized]) {
        return { key: normalized, isReverse: false };
    }
    const reverseKey = `${end}-${start}`;
    if (routes[reverseKey]) {
        return { key: reverseKey, isReverse: true };
    }
    return { key: normalized, isReverse: false };
}

// UI helpers
function showMessage(msg, sender = "bot", lang = "en") {
    const chatBox = document.getElementById("chat-box");
    const wrapper = document.createElement("div");
    wrapper.className = sender === "user" ? "user-bubble chat-bubble" : "bot-bubble chat-bubble";
    if (lang === "hausa" && sender === "bot") wrapper.classList.add("hausa");
    wrapper.textContent = msg; // Use textContent for security
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = new Date().toLocaleTimeString();
    wrapper.appendChild(timestamp);
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Main route lookup and response logic
function chatbotResponse(userInput, selectedLanguage = "english") {
    try {
        if (typeof routes === "undefined") {
            console.error("Routes object is not defined");
            return selectedLanguage === "hausa"
                ? "Kai! Ba a bayyana hanyoyin ba. Sake gwadawa daga baya."
                : "Oops! Routes data is missing. Try again later.";
        }

        const { key, isReverse } = normalizeRouteInput(userInput);
        const route = routes[key];

        if (!route) {
            const supportedRoutes = Object.keys(routes)
                .map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$1 to $2"))
                .join(", ");
            return selectedLanguage === "hausa"
                ? `Kayi hakuri, ban gane hanyar ba. Zaka iya gwadawa kamar: <b>Wuse to Maitama</b>. Hanyoyin da ake goyon baya: ${supportedRoutes}`
                : `Sorry, I couldn't find a route for that. Try e.g. <b>Wuse to Maitama</b>. Supported routes: ${supportedRoutes}`;
        }

        let response = "";
        let start = key.split('-')[0] || "";
        let end = key.split('-')[1] || "";
        if (isReverse) {
            [start, end] = [end, start];
        }
        const distance = route.main_route?.description?.match(/~(\d+)\s*km/)?.[1];

        // Greeting
        response += selectedLanguage === "hausa"
            ? `Sannu! Hanyarka daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)} shine kamar ${distance || '?'} km. Ga shawarata:<br>`
            : `Hey! Your trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} is about ${distance || '?'} km. Here’s my suggestion:<br>`;

        // Night & Security
        const currentHour = new Date().getHours();
        const isNightTrip = currentHour < 6 || currentHour >= 20;
        const hasSecurityConcerns = route.end_address_details?.security_concerns;
        const isSingleModeClose = route.alighting_points?.distance_to_destination <= 0.5 && route.alighting_points?.single_mode;

        // Start Address
        if (route.start_address_details && typeof route.start_address_details.distance_to_bus_stop === "number") {
            const startDetails = isReverse ? route.end_address_details : route.start_address_details;
            response += selectedLanguage === "hausa"
                ? `<b>Fara Adireshi:</b> ${startDetails.hausa_description} <a href="${startDetails.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Starting Point:</b> ${startDetails.description} <a href="${startDetails.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        // Main Route
        if (route.main_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Hanyar Babba:</b> ${isReverse ? route.main_route.hausa_description.replace(`${start} zuwa ${end}`, `${end} zuwa ${start}`) : route.main_route.hausa_description}<br>
                  <b>Motoci:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                  <b>Kudi (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                  <b>Lokaci:</b> ${route.main_route.hausa_time || ""}<br>
                  <b>Zirga-zirga:</b> ${route.main_route.hausa_traffic || ""}<br><br>`
                : `<b>Main Route:</b> ${isReverse ? route.main_route.description.replace(`${start} to ${end}`, `${end} to ${start}`) : route.main_route.description}<br>
                  <b>Transport:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                  <b>Fares (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                  <b>Time:</b> ${route.main_route.time || ""}<br>
                  <b>Traffic:</b> ${route.main_route.traffic || ""}<br><br>`;
        }

        // Alternative Route
        if (route.alternative_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Wata Hanya:</b> ${isReverse ? route.alternative_route.hausa_description.replace(`${start} zuwa ${end}`, `${end} zuwa ${start}`) : route.alternative_route.hausa_description}<br>
                  <b>Motoci:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                  <b>Kudi (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                  <b>Lokaci:</b> ${route.alternative_route.hausa_time || ""}<br>
                  <b>Zirga-zirga:</b> ${route.alternative_route.hausa_traffic || ""}<br><br>`
                : `<b>Alternative Route:</b> ${isReverse ? route.alternative_route.description.replace(`${start} to ${end}`, `${end} to ${start}`) : route.alternative_route.description}<br>
                  <b>Transport:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                  <b>Fares (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                  <b>Time:</b> ${route.alternative_route.time || ""}<br>
                  <b>Traffic:</b> ${route.alternative_route.traffic || ""}<br><br>`;
        }

        // E-hailing Advisory
        if ((isNightTrip && !isSingleModeClose) || hasSecurityConcerns) {
            if (route.ehailing_advisory) {
                response += selectedLanguage === "hausa"
                    ? `<b>Nasiha ta E-hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
                    : `<b>E-hailing Advisory:</b> ${route.ehailing_advisory.description}<br>`;
            }
        }

        // Alighting Points
        if (route.alighting_points && typeof route.alighting_points.distance_to_destination === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Sauka:</b> ${isReverse ? route.alighting_points.hausa_description.replace(`${end}`, `${start}`) : route.alighting_points.hausa_description}<br>`
                : `<b>Drop-Off Point:</b> ${isReverse ? route.alighting_points.description.replace(`${end}`, `${start}`) : route.alighting_points.description}<br>`;
        }

        // End Address
        if (route.end_address_details && typeof route.end_address_details.distance_from_bus_stop === "number") {
            const endDetails = isReverse ? route.start_address_details : route.end_address_details;
            response += selectedLanguage === "hausa"
                ? `<b>Adireshin Ƙarshe:</b> ${endDetails.hausa_description} <a href="${endDetails.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Destination:</b> ${endDetails.description} <a href="${endDetails.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        // Goodbye
        response += selectedLanguage === "hausa"
            ? "Na gode! Kana bukatar ƙarin taimako?"
            : "All set! Need more help?";

        return response;
    } catch (error) {
        console.error("Error in chatbotResponse:", error);
        return selectedLanguage === "hausa"
            ? "Wani matsala ta faru. Sake gwadawa daga baya."
            : "An error occurred. Please try again later.";
    }
}

// --- DOM & Event Handling ---
let selectedLanguage = "english";

// Language toggle function
document.getElementById("toggle-lang-btn").onclick = function () {
    selectedLanguage = selectedLanguage === "english" ? "hausa" : "english";
    const chatBox = document.getElementById("chat-box");
    const messages = chatBox.getElementsByClassName("chat-bubble");
    for (let msg of messages) {
        if (msg.classList.contains("bot-bubble")) {
            msg.classList.toggle("hausa", selectedLanguage === "hausa");
            msg.textContent = msg.textContent; // Forces re-render to apply styles
        }
    }
    showMessage(
        selectedLanguage === "hausa"
            ? "Harshe ya canza zuwa Hausa!"
            : "Language changed to English!",
        "bot",
        selectedLanguage
    );
};

// Language selection
document.getElementById("change-lang-btn").onclick = function () {
    const selected = document.querySelector('input[name="language"]:checked');
    selectedLanguage = selected ? selected.value : "english";
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("chat-box").style.display = "block";
    document.getElementById("input-container").style.display = "block";
    document.getElementById("toggle-lang-btn").style.display = "inline-block";
    document.getElementById("welcome-message")?.remove();

    // Welcome message
    showMessage(
        selectedLanguage === "hausa"
            ? "Sannu da zuwa Shekwoni Abuja Guide! Tambayi hanyarka: misali, 'Wuse to Maitama'"
            : "Welcome to Shekwoni Abuja Guide! Ask for your route, e.g., 'Wuse to Maitama'.",
        "bot",
        selectedLanguage
    );
};

// Send message logic
document.getElementById("send-btn").onclick = function () {
    const input = document.getElementById("user-input");
    const value = input.value.trim();
    if (!value) return;
    showMessage(value, "user");
    input.value = "";
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    document.getElementById("chat-box").appendChild(spinner);
    setTimeout(() => {
        spinner.remove();
        const reply = chatbotResponse(value, selectedLanguage);
        showMessage(reply, "bot", selectedLanguage);
    }, 500);
};

// Enter key sends message
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});
