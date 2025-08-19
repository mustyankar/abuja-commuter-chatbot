const routes = {
    "wuse-maitama": {
        "start_address_details": {
            "description": "Wuse, near Wuse Market",
            "hausa_description": "Hausa: Wuse, near Wuse Market",
            "map_link": "https://maps.google.com/?q=Wuse,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            "hausa_description": "Hausa: Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["200-300"],
            "time": "10-15 mins",
            "hausa_time": "Hausa: 10-15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Aminu Kano Crescent to Maitama. ~5 km.",
            "hausa_description": "Hausa: Via Aminu Kano Crescent to Maitama. ~5 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["150-250"],
            "time": "15-20 mins",
            "hausa_time": "Hausa: 15-20 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Use Bolt or Uber for quick trips, especially at night.",
            "hausa_description": "Hausa: Use Bolt or Uber for quick trips, especially at night."
        },
        "alighting_points": {
            "description": "Maitama Roundabout, walk 100m to destination.",
            "hausa_description": "Hausa: Maitama Roundabout, walk 100m to destination.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "garki-asokoro": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "hausa_description": "Hausa: Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["100-200"],
            "time": "15 mins",
            "hausa_time": "Hausa: 15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Area 1 to AYA. ~6 km.",
            "hausa_description": "Hausa: Via Area 1 to AYA. ~6 km.",
            "transport": ["Keke", "Bus"],
            "fares": ["150-250"],
            "time": "20 mins",
            "hausa_time": "Hausa: 20 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "ehailing_advisory": {
            "description": "Bolt for short trips.",
            "hausa_description": "Hausa: Bolt for short trips."
        },
        "alighting_points": {
            "description": "Asokoro District, walk 200m.",
            "hausa_description": "Hausa: Asokoro District, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": true
        }
    },
    "nyanya-karu": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Karu Road to Karu Market. ~2 km.",
            "hausa_description": "Hausa: Take Karu Road to Karu Market. ~2 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "5-10 mins",
            "hausa_time": "Hausa: 5-10 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Nyanya Underpass to Karu. ~3 km.",
            "hausa_description": "Hausa: Via Nyanya Underpass to Karu. ~3 km.",
            "transport": ["Keke"],
            "fares": ["100-150"],
            "time": "10 mins",
            "hausa_time": "Hausa: 10 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Use Indrive for cheap local rides.",
            "hausa_description": "Hausa: Use Indrive for cheap local rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 50m.",
            "hausa_description": "Hausa: Karu Market, walk 50m.",
            "distance_to_destination": 0.05,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.05,
            "security_concerns": false
        }
    },
    "lugbe-airport": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "hausa_description": "Hausa: Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-500"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Idu to Airport. ~12 km.",
            "hausa_description": "Hausa: Via Idu to Airport. ~12 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["400-600"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "kubwa-bwari": {
        "start_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Bwari Road to Bwari Town. ~15 km.",
            "hausa_description": "Hausa: Take Bwari Road to Bwari Town. ~15 km.",
            "transport": ["Bus", "Mini Bus"],
            "fares": ["200-400"],
            "time": "30 mins",
            "hausa_time": "Hausa: 30 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Dutse to Bwari. ~17 km.",
            "hausa_description": "Hausa: Via Dutse to Bwari. ~17 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["250-450"],
            "time": "35 mins",
            "hausa_time": "Hausa: 35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Bolt for rural areas.",
            "hausa_description": "Hausa: Bolt for rural areas."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "ushafa-shere": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Shere Road from Ushafa. ~20 km.",
            "hausa_description": "Hausa: Take Shere Road from Ushafa. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Shere. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Shere. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Shere Village, walk 300m.",
            "hausa_description": "Hausa: Shere Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Shere Village",
            "hausa_description": "Hausa: Shere Village",
            "map_link": "https://maps.google.com/?q=Shere,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "wuse-kubwa": {
        "start_address_details": {
            "description": "Wuse, near Berger Junction",
            "hausa_description": "Hausa: Wuse, near Berger Junction",
            "map_link": "https://maps.google.com/?q=Wuse,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Kubwa Expressway from Wuse. ~20 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway from Wuse. ~20 km.",
            "transport": ["BRT Bus", "Mini Bus"],
            "fares": ["150-300"],
            "time": "30-60 mins",
            "hausa_time": "Hausa: 30-60 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~22 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~22 km.",
            "transport": ["Shared Taxi", "Bolt"],
            "fares": ["200-400"],
            "time": "40-70 mins",
            "hausa_time": "Hausa: 40-70 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort, fares 1500-3000.",
            "hausa_description": "Hausa: Uber or Bolt for comfort, fares 1500-3000."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "mpape-kawu": {
        "start_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Bwari Road to Kawu Village. ~25 km.",
            "hausa_description": "Hausa: Take Bwari Road to Kawu Village. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Ushafa to Kawu. ~27 km.",
            "hausa_description": "Hausa: Via Ushafa to Kawu. ~27 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["450-650"],
            "time": "50 mins",
            "hausa_time": "Hausa: 50 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited in remote areas; negotiate local taxis.",
            "hausa_description": "Hausa: Limited in remote areas; negotiate local taxis."
        },
        "alighting_points": {
            "description": "Kawu Village Center, walk 300m.",
            "hausa_description": "Hausa: Kawu Village Center, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kawu Village",
            "hausa_description": "Hausa: Kawu Village",
            "map_link": "https://maps.google.com/?q=Kawu,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    }
};

// Rest of the code remains the same

function normalizeRouteInput(input) {
    if (!input) return "";
    return input
        .toLowerCase()
        .replace(/\s*to\s*/g, '-')     // "wuse 2 to asokoro" -> "wuse 2-asokoro"
        .replace(/\s+/g, '')           // "wuse 2-asokoro" -> "wuse2-asokoro"
        .replace(/[^a-z0-9\-]/g, '');  // Remove other symbols
}

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

function chatbotResponse(userInput, selectedLanguage = "english") {
    try {
        if (typeof routes === "undefined") {
            console.error("Routes object is not defined");
            return selectedLanguage === "hausa"
                ? "Kai! Ba a bayyana hanyoyin ba. Sake gwadawa daga baya."
                : "Oops! Routes data is missing. Try again later.";
        }

        const key = normalizeRouteInput(userInput);
        const route = routes[key];

        if (!route) {
            const supportedRoutes = Object.keys(routes)
                .map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$1 to $2"))
                .join(", ");
            return selectedLanguage === "hausa"
                ? "Kayi hakuri, ban gane hanyar ba. Zaka iya gwadawa kamar: <b>Wuse to Maitama</b>. Hanyoyin da ake goyon baya: " + supportedRoutes
                : "Sorry, I couldn't find a route for that. Try e.g. <b>Wuse to Maitama</b>. Supported routes: " + supportedRoutes;
        }

        let response = "";
        const start = key.split('-')[0] || "";
        const end = key.split('-')[1] || "";
        const distance = route.main_route?.description?.match(/~(\d+)\s*km/)?.[1];

        response += selectedLanguage === "hausa"
            ? `Sannu! Hanyarka daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)} shine kamar ${distance || '?'} km. Ga shawarata:<br>`
            : `Hey! Your trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} is about ${distance || '?'} km. Here’s my suggestion:<br>`;

        const currentHour = new Date().getHours();
        const isNightTrip = currentHour < 6 || currentHour >= 20;
        const hasSecurityConcerns = route.end_address_details?.security_concerns;
        const isSingleModeClose = route.alighting_points
            && route.alighting_points.distance_to_destination <= 0.5
            && route.alighting_points.single_mode;

        if (route.start_address_details && typeof route.start_address_details.distance_to_bus_stop === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Fara Adireshi:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Starting Point:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        if (route.main_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Hanyar Babba:</b> ${route.main_route.hausa_description}<br>
                   <b>Motoci:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                   <b>Kudi (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                   <b>Lokaci:</b> ${route.main_route.hausa_time || ""}<br>
                   <b>Zirga-zirga:</b> ${route.main_route.hausa_traffic || ""}<br><br>`
                : `<b>Main Route:</b> ${route.main_route.description}<br>
                   <b>Transport:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                   <b>Fares (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                   <b>Time:</b> ${route.main_route.time || ""}<br>
                   <b>Traffic:</b> ${route.main_route.traffic || ""}<br><br>`;
        }

        if (route.alternative_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Wata Hanya:</b> ${route.alternative_route.hausa_description}<br>
                   <b>Motoci:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                   <b>Kudi (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                   <b>Lokaci:</b> ${route.alternative_route.hausa_time || ""}<br>
                   <b>Zirga-zirga:</b> ${route.alternative_route.hausa_traffic || ""}<br><br>`
                : `<b>Alternative Route:</b> ${route.alternative_route.description}<br>
                   <b>Transport:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                   <b>Fares (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                   <b>Time:</b> ${route.alternative_route.time || ""}<br>
                   <b>Traffic:</b> ${route.alternative_route.traffic || ""}<br><br>`;
        }

        if ((isNightTrip && !isSingleModeClose) || hasSecurityConcerns) {
            if (route.ehailing_advisory) {
                response += selectedLanguage === "hausa"
                    ? `<b>Shawara E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
                    : `<b>E-Hailing Tip:</b> ${route.ehailing_advisory.description}<br>`;
            }
        }

        if (route.alighting_points && typeof route.alighting_points.distance_to_destination === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Sauka:</b> ${route.alighting_points.hausa_description}<br>`
                : `<b>Drop-Off Point:</b> ${route.alighting_points.description}<br>`;
        }

        if (route.end_address_details && typeof route.end_address_details.distance_from_bus_stop === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        response += selectedLanguage === "hausa"
            ? "Na gode! Kana bukatar ƙarin taimako?"
            : "All set! Need more help?";

        return response;
    } catch (e) {
        console.error('chatbotResponse Error:', e.message);
        return selectedLanguage === "hausa"
            ? `Kai! Wani kuskure ya faru. Sake gwadawa! <span class="text-red-600">Kuskure: ${e.message}</span>`
            : `Oops, something went wrong. Try again! <span class="text-red-600">Error: ${e.message}</span>`;
    }
}

// --- DOM & Event Handling ---

let selectedLanguage = "english";

document.getElementById("change-lang-btn").onclick = function () {
    const selected = document.querySelector('input[name="language"]:checked');
    selectedLanguage = selected ? selected.value : "english";
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("chat-box").style.display = "";
    document.getElementById("input-container").style.display = "";
    document.getElementById("toggle-lang-btn").style.display = "inline-block";
    document.getElementById("welcome-message")?.remove();

    showMessage(
        selectedLanguage === "hausa"
            ? "Sannu da zuwa Shekwoni Abuja Guide! Tambayi hanyarka: misali, 'Wuse to Maitama'"
            : "Welcome to Shekwoni Abuja Guide! Ask for your route, e.g., 'Wuse to Maitama'.",
        "bot",
        selectedLanguage
    );
};

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

document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});

document.getElementById("toggle-lang-btn").onclick = function () {
    document.getElementById("language-selection").style.display = "";
    document.getElementById("chat-box").style.display = "none";
    document.getElementById("input-container").style.display = "none";
    document.getElementById("toggle-lang-btn").style.display = "none";
};
