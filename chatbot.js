const routes = {
    "wuse-maitama": {
        start_address_details: { description: "Wuse, near Wuse Market", hausa_description: "Hausa: Wuse, kusa da Kasuwar Wuse", map_link: "https://maps.google.com/?q=Wuse,+Abuja", distance_to_bus_stop: 0.2 },
        main_route: { description: "Take Adetokunbo Ademola Crescent to Maitama. ~4 km.", hausa_description: "Hausa: Ɗauki Adetokunbo Ademola Crescent zuwa Maitama. ~4 km.", transport: ["Shared Taxi", "Keke"], fares: ["200-300"], time: "10-15 mins", hausa_time: "Hausa: Minti 10-15", traffic: "Moderate", hausa_traffic: "Hausa: Matsakaici" },
        alighting_points: { description: "Maitama Roundabout, walk 100m.", hausa_description: "Hausa: Maitama Roundabout, ka tafi mita 100.", distance_to_destination: 0.1 },
        end_address_details: { description: "Maitama, near Maitama Roundabout", hausa_description: "Hausa: Maitama, kusa da Maitama Roundabout", map_link: "https://maps.google.com/?q=Maitama,+Abuja", distance_from_bus_stop: 0.1 }
    },
    "garki-asokoro": {
        start_address_details: { description: "Garki, near Garki Market", hausa_description: "Hausa: Garki, kusa da Kasuwar Garki", map_link: "https://maps.google.com/?q=Garki,+Abuja", distance_to_bus_stop: 0.3 },
        main_route: { description: "Take Ahmadu Bello Way to Asokoro. ~5 km.", hausa_description: "Hausa: Ɗauki Ahmadu Bello Way zuwa Asokoro. ~5 km.", transport: ["Bus", "Shared Taxi"], fares: ["150-250"], time: "15 mins", hausa_time: "Hausa: Minti 15", traffic: "Moderate", hausa_traffic: "Hausa: Matsakaici" },
        alighting_points: { description: "Asokoro District, walk 200m.", hausa_description: "Hausa: Asokoro District, ka tafi mita 200.", distance_to_destination: 0.2 },
        end_address_details: { description: "Asokoro, near AYA Roundabout", hausa_description: "Hausa: Asokoro, kusa da AYA Roundabout", map_link: "https://maps.google.com/?q=Asokoro,+Abuja", distance_from_bus_stop: 0.2 }
    },
    "nyanya-karu": {
        start_address_details: { description: "Nyanya, near Nyanya Bridge", hausa_description: "Hausa: Nyanya, kusa da Gadar Nyanya", map_link: "https://maps.google.com/?q=Nyanya,+Abuja", distance_to_bus_stop: 0.1 },
        main_route: { description: "Take Karu Road to Karu Market. ~2 km.", hausa_description: "Hausa: Ɗauki Karu Road zuwa Kasuwar Karu. ~2 km.", transport: ["Mini Bus", "Keke"], fares: ["100-150"], time: "5-10 mins", hausa_time: "Hausa: Minti 5-10", traffic: "Light", hausa_traffic: "Hausa: Haske" },
        alighting_points: { description: "Karu Market, walk 50m.", hausa_description: "Hausa: Kasuwar Karu, ka tafi mita 50.", distance_to_destination: 0.05 },
        end_address_details: { description: "Karu, near Karu Market", hausa_description: "Hausa: Karu, kusa da Kasuwar Karu", map_link: "https://maps.google.com/?q=Karu,+Abuja", distance_from_bus_stop: 0.05 }
    },
    "lugbe-airport": {
        start_address_details: { description: "Lugbe, near Lugbe FHA", hausa_description: "Hausa: Lugbe, kusa da Lugbe FHA", map_link: "https://maps.google.com/?q=Lugbe,+Abuja", distance_to_bus_stop: 0.4 },
        main_route: { description: "Take Airport Road to Nnamdi Azikiwe International Airport. ~10 km.", hausa_description: "Hausa: Ɗauki Titin Filin Jirgin Sama zuwa Nnamdi Azikiwe International Airport. ~10 km.", transport: ["Bus", "Taxi"], fares: ["300-500"], time: "20-30 mins", hausa_time: "Hausa: Minti 20-30", traffic: "Heavy", hausa_traffic: "Hausa: Mai nauyi" },
        alighting_points: { description: "Airport Terminal, walk 150m.", hausa_description: "Hausa: Tashar Filin Jirgin Sama, ka tafi mita 150.", distance_to_destination: 0.15 },
        end_address_details: { description: "Nnamdi Azikiwe International Airport", hausa_description: "Hausa: Nnamdi Azikiwe International Airport", map_link: "https://maps.google.com/?q=Nnamdi+Azikiwe+International+Airport,+Abuja", distance_from_bus_stop: 0.15 }
    }
};

function normalizeRouteInput(input) {
    const normalized = input.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9\-]/g, '');
    const [start, end] = normalized.split('-');
    if (routes[normalized]) return { key: normalized, isReverse: false };
    const reverseKey = `${end}-${start}`;
    if (routes[reverseKey]) return { key: reverseKey, isReverse: true };
    return { key: normalized, isReverse: false };
}

function showMessage(msg, sender = "bot", lang = "en") {
    const chatBox = document.getElementById("chat-box");
    const wrapper = document.createElement("div");
    wrapper.className = `chat-bubble ${sender === "user" ? "user-bubble" : "bot-bubble"}`;
    if (lang === "hausa" && sender === "bot") wrapper.classList.add("hausa");
    wrapper.textContent = msg;
    const timestamp = document.createElement("div");
    timestamp.className = "timestamp";
    timestamp.textContent = new Date().toLocaleTimeString();
    wrapper.appendChild(timestamp);
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function chatbotResponse(userInput, lang = "english") {
    const { key, isReverse } = normalizeRouteInput(userInput);
    const route = routes[key];
    if (!route) {
        const supported = Object.keys(routes).map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$1 to $2")).join(", ");
        return lang === "hausa" ? `Kayi hakuri, ban gane hanyar ba. Gwada: <b>Wuse to Maitama</b>. Hanyoyi: ${supported}` : `Sorry, route not found. Try: <b>Wuse to Maitama</b>. Routes: ${supported}`;
    }
    let [start, end] = key.split('-');
    if (isReverse) [start, end] = [end, start];
    const distance = route.main_route.description.match(/~(\d+)\s*km/)?.[1] || "?";
    const desc = lang === "hausa" ? route.main_route.hausa_description : route.main_route.description;
    const time = lang === "hausa" ? route.main_route.hausa_time : route.main_route.time;
    return `${lang === "hausa" ? "Sannu! " : "Hey! "}Trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} (~${distance} km):<br>${desc}<br>Time: ${time}`;
}

let selectedLanguage = "english";

// Toggle language
document.getElementById("toggle-lang-btn").onclick = function () {
    selectedLanguage = selectedLanguage === "english" ? "hausa" : "english";
    const chatBox = document.getElementById("chat-box");
    const messages = chatBox.getElementsByClassName("chat-bubble");
    for (let msg of messages) {
        if (msg.classList.contains("bot-bubble")) {
            msg.classList.toggle("hausa", selectedLanguage === "hausa");
            msg.textContent = msg.textContent;
        }
    }
    showMessage(selectedLanguage === "hausa" ? "Harshe ya canza zuwa Hausa!" : "Language changed to English!", "bot", selectedLanguage);
};

// Send message
document.getElementById("send-btn").onclick = function () {
    const input = document.getElementById("user-input");
    const value = input.value.trim();
    if (!value) return;
    showMessage(value, "user");
    input.value = "";
    const reply = chatbotResponse(value, selectedLanguage);
    showMessage(reply, "bot", selectedLanguage);
};

// Enter key sends message
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") document.getElementById("send-btn").click();
});
