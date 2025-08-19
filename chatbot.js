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
                ? "Kayi hakuri, ban gane hanyar ba. Zaka iya gwadawa kamar: <b>Wuse2 to Asokoro</b>. Hanyoyin da ake goyon baya: " + supportedRoutes
                : "Sorry, I couldn't find a route for that. Try e.g. <b>Wuse2 to Asokoro</b>. Supported routes: " + supportedRoutes;
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
            ? "Na gode! Kana bukata ƙarin taimako?"
            : "All set! Need more help?";

        return response;
    } catch (e) {
        console.error('chatbotResponse Error:', e.message);
        return selectedLanguage === "hausa"
            ? `Kai! Wani kuskure ya faru. Sake gwadawa! <span class="text-red-600">Kuskure: ${e.message}</span>`
            : `Oops, something went wrong. Try again! <span class="text-red-600">Error: ${e.message}</span>`;
    }
}

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
            ? "Sannu da zuwa Shekwoni Abuja Guide! Tambayi hanyarka: misali, 'Wuse2 to Asokoro'"
            : "Welcome to Shekwoni Abuja Guide! Ask for your route, e.g., 'Wuse2 to Asokoro'.",
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
