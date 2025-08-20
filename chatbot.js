const routes = {
    "wuse to asokoro": {
        start_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take Bus 34 from Wuse Market Park to Asokoro. ~5 km.",
            hausa_description: "Hau Bus 34 daga Wuse Market Park zuwa Asokoro. ~5 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["100-200"],
            time: "15 mins",
            hausa_time: "Minti 15",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Ahmadu Bello Way to Asokoro. ~6 km.",
            hausa_description: "Ta Ahmadu Bello Way zuwa Asokoro. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["150-250"],
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips, especially at night.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri, musamman da daddare."
        },
        alighting_points: {
            description: "Asokoro District, walk 200m.",
            hausa_description: "Gundumar Asokoro, tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Asokoro, near AYA Roundabout",
            hausa_description: "Asokoro, kusa da AYA Roundabout",
            map_link: "https://maps.google.com/?q=Asokoro,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: true
        }
    },
    "berger to nyanya": {
        start_address_details: {
            description: "Berger, near Berger Junction",
            hausa_description: "Berger, kusa da Berger Junction",
            map_link: "https://maps.google.com/?q=Berger,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take AUMTCO bus from Berger to Nyanya. ~15 km.",
            hausa_description: "Hau AUMTCO bus daga Berger zuwa Nyanya. ~15 km.",
            transport: ["Bus"],
            fares: ["150-200"],
            time: "30-45 mins",
            hausa_time: "Minti 30-45",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Wuse to Nyanya. ~16 km.",
            hausa_description: "Ta Wuse zuwa Nyanya. ~16 km.",
            transport: ["Keke", "Bus"],
            fares: ["200-300"],
            time: "35-50 mins",
            hausa_time: "Minti 35-50",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri."
        },
        alighting_points: {
            description: "Nyanya Bridge, walk 100m.",
            hausa_description: "Gadar Nyanya, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Nyanya, near Nyanya Bridge",
            hausa_description: "Nyanya, kusa da Gadar Nyanya",
            map_link: "https://maps.google.com/?q=Nyanya,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "area 1 to nyanya": {
        start_address_details: {
            description: "Area 1, near Area 1 Roundabout",
            hausa_description: "Area 1, kusa da Area 1 Roundabout",
            map_link: "https://maps.google.com/?q=Area+1,+Abuja",
            distance_to_bus_stop: 0.3
        },
        main_route: {
            description: "Take AUMTCO bus from Area 1 to Nyanya. ~10 km.",
            hausa_description: "Hau AUMTCO bus daga Area 1 zuwa Nyanya. ~10 km.",
            transport: ["Bus"],
            fares: ["150-200"],
            time: "20-30 mins",
            hausa_time: "Minti 20-30",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Garki to Nyanya. ~11 km.",
            hausa_description: "Ta Garki zuwa Nyanya. ~11 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["200-300"],
            time: "25-35 mins",
            hausa_time: "Minti 25-35",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri."
        },
        alighting_points: {
            description: "Nyanya Bridge, walk 100m.",
            hausa_description: "Gadar Nyanya, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Nyanya, near Nyanya Bridge",
            hausa_description: "Nyanya, kusa da Gadar Nyanya",
            map_link: "https://maps.google.com/?q=Nyanya,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "idu to airport": {
        start_address_details: {
            description: "Idu, near Idu Station",
            hausa_description: "Idu, kusa da Idu Station",
            map_link: "https://maps.google.com/?q=Idu,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take Abuja Metro Blue Line from Idu to Airport. ~12 km.",
            hausa_description: "Hau Abuja Metro Blue Line daga Idu zuwa Airport. ~12 km.",
            transport: ["Train"],
            fares: ["500-3500"],
            time: "25 mins",
            hausa_time: "Minti 25",
            traffic: "Low (rail avoids road traffic)",
            hausa_traffic: "Sauƙi (rail avoids road traffic)"
        },
        alternative_route: {
            description: "Use bus via Airport Road. ~13 km.",
            hausa_description: "Yi amfani da bus ta Airport Road. ~13 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["300-500"],
            time: "30-40 mins",
            hausa_time: "Minti 30-40",
            traffic: "Heavy near airport",
            hausa_traffic: "Nauyi kusa da airport"
        },
        ehailing_advisory: {
            description: "Uber or Bolt for airport transfers.",
            hausa_description: "Uber ko Bolt don canja wurin airport."
        },
        alighting_points: {
            description: "Airport Station, walk 100m.",
            hausa_description: "Airport Station, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Nnamdi Azikiwe International Airport",
            hausa_description: "Nnamdi Azikiwe International Airport",
            map_link: "https://maps.google.com/?q=Abuja+Airport",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "wuse to garki": {
        start_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take shared taxi from Wuse to Garki. ~3 km.",
            hausa_description: "Hau shared taxi daga Wuse zuwa Garki. ~3 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["100-150"],
            time: "10 mins",
            hausa_time: "Minti 10",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Aminu Kano Crescent to Garki. ~4 km.",
            hausa_description: "Ta Aminu Kano Crescent zuwa Garki. ~4 km.",
            transport: ["Bus", "Keke"],
            fares: ["100-200"],
            time: "15 mins",
            hausa_time: "Minti 15",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri."
        },
        alighting_points: {
            description: "Garki Market, walk 150m.",
            hausa_description: "Kasuwar Garki, tafi mita 150.",
            distance_to_destination: 0.15,
            single_mode: true
        },
        end_address_details: {
            description: "Garki, near Garki Market",
            hausa_description: "Garki, kusa da Kasuwar Garki",
            map_link: "https://maps.google.com/?q=Garki,+Abuja",
            distance_from_bus_stop: 0.15,
            security_concerns: false
        }
    },
    "asokoro to wuse": {
        start_address_details: {
            description: "Asokoro, near AYA Roundabout",
            hausa_description: "Asokoro, kusa da AYA Roundabout",
            map_link: "https://maps.google.com/?q=Asokoro,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take Bus 34 from AYA Roundabout to Wuse. ~5 km.",
            hausa_description: "Hau Bus 34 daga AYA Roundabout zuwa Wuse. ~5 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["100-200"],
            time: "15 mins",
            hausa_time: "Minti 15",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Ahmadu Bello Way to Wuse. ~6 km.",
            hausa_description: "Ta Ahmadu Bello Way zuwa Wuse. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["150-250"],
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri."
        },
        alighting_points: {
            description: "Wuse Market, walk 200m.",
            hausa_description: "Kasuwar Wuse, tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: false
        }
    },
    "kubwa to berger": {
        start_address_details: {
            description: "Kubwa, near Kubwa Market",
            hausa_description: "Kubwa, kusa da Kasuwar Kubwa",
            map_link: "https://maps.google.com/?q=Kubwa,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take direct bus from Kubwa to Berger Junction. ~10 km.",
            hausa_description: "Hau bus kai tsaye daga Kubwa zuwa Berger Junction. ~10 km.",
            transport: ["Bus"],
            fares: ["200-300"],
            time: "30 mins",
            hausa_time: "Minti 30",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Dutse to Berger. ~12 km.",
            hausa_description: "Ta Dutse zuwa Berger. ~12 km.",
            transport: ["Keke", "Bus"],
            fares: ["250-350"],
            time: "35 mins",
            hausa_time: "Minti 35",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Uber for reliable trips.",
            hausa_description: "Yi amfani da Uber don tafiye-tafiye masu aminci."
        },
        alighting_points: {
            description: "Berger Junction, walk 100m.",
            hausa_description: "Berger Junction, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Berger, near Berger Junction",
            hausa_description: "Berger, kusa da Berger Junction",
            map_link: "https://maps.google.com/?q=Berger,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    }
};

// Build graph for dynamic permutations
const graph = {};
Object.keys(routes).forEach(key => {
    const [start, end] = key.split(' to ');
    if (!graph[start]) graph[start] = {};
    graph[start][end] = routes[key];
    // Add reverse if not defined (assume symmetric for simplicity)
    const reverseKey = `${end} to ${start}`;
    if (!routes[reverseKey]) {
        if (!graph[end]) graph[end] = {};
        graph[end][start] = {
            ...routes[key],
            start_address_details: { ...routes[key].end_address_details },
            end_address_details: { ...routes[key].start_address_details },
            main_route: {
                ...routes[key].main_route,
                description: routes[key].main_route.description.replace(start, end).replace(end, start),
                hausa_description: routes[key].main_route.hausa_description.replace(start, end).replace(end, start)
            },
            alternative_route: {
                ...routes[key].alternative_route,
                description: routes[key].alternative_route.description.replace(start, end).replace(end, start),
                hausa_description: routes[key].alternative_route.hausa_description.replace(start, end).replace(end, start)
            }
        };
    }
});

// Variables
let selectedLanguage = localStorage.getItem('language') || 'english';
const chatArea = document.getElementById("chat-area");
const inputForm = document.getElementById("input-form");
const textInput = document.getElementById("textInput");
const langBtn = document.getElementById("lang-btn");
const suggestionsDiv = document.getElementById("suggestions");
const clearBtn = document.getElementById("clear-btn");
const loadingDiv = document.getElementById("loading");
let typingTimeout = null;

// Helper Functions
function levenshteinDistance(s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] = i === 0 ? j : Math.min(
                arr[i - 1][j] + 1,
                arr[i][j - 1] + 1,
                arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
            );
        }
    }
    return arr[t.length][s.length];
}

function normalizeInput(input) {
    return input.toLowerCase()
        .replace(/from\s+/gi, '')
        .replace(/\s+to\s+/gi, ' to ')
        .replace(/[^a-z\s]/g, '')
        .trim();
}

function renderMessage(message, sender) {
    const bubble = document.createElement('div');
    bubble.className = 'chat-bubble ' + (sender === 'user' ? 'user-bubble' : 'bot-bubble');
    bubble.innerHTML = message;
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    timestamp.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    bubble.appendChild(timestamp);
    chatArea.appendChild(bubble);
    chatArea.scrollTop = chatArea.scrollHeight;
}

function getRouteSuggestions(input) {
    const normalized = normalizeInput(input);
    if (!normalized || normalized.split(' ').filter(word => word).length < 2) return [];
    return Object.keys(routes)
        .map(key => ({
            key,
            dist: levenshteinDistance(normalized, key)
        }))
        .filter(item => item.dist <= Math.max(4, normalized.length / 2))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 5)
        .map(item => item.key);
}

function findPath(start, end) {
    if (graph[start] && graph[start][end]) return [[start, end]];
    const queue = [[start, [start]]];
    const visited = new Set();
    while (queue.length) {
        const [current, path] = queue.shift();
        if (visited.has(current)) continue;
        visited.add(current);
        if (current === end) return path;
        for (const neighbor in graph[current] || {}) {
            queue.push([neighbor, [...path, neighbor]]);
        }
    }
    return null;
}

function getRouteKey(input) {
    const normalized = normalizeInput(input);
    if (!normalized) return null;

    const inputWords = normalized.split(' ').filter(word => word);
    if (inputWords.length < 2) return null;

    let bestKey = null;
    let minDist = Infinity;
    Object.keys(routes).forEach(key => {
        const keyWords = key.split(' to ');
        if (keyWords.length !== 2) return;

        const startDist = Math.min(
            levenshteinDistance(inputWords[0], keyWords[0]),
            levenshteinDistance(inputWords[inputWords.length - 1], keyWords[0])
        );
        const endDist = Math.min(
            leveshteinDistance(inputWords[0], keyWords[1]),
            levenshteinDistance(inputWords[inputWords.length - 1], keyWords[1])
        );
        const totalDist = startDist + endDist;

        if (totalDist < minDist && startDist <= 3 && endDist <= 3) {
            minDist = totalDist;
            bestKey = key;
        }
    });

    if (minDist <= 6) return bestKey;

    // Dynamic permutation
    const start = inputWords[0];
    const end = inputWords[inputWords.length - 1];
    const path = findPath(start, end);
    if (path) return path;
    return null;
}

function formatRoute(routeOrPath, lang) {
    if (Array.isArray(routeOrPath)) {
        let response = lang === 'hausa' ? "Babu hanya kai tsaye, amma zaka yi transit ta wadannan hanyoyi:<br>" : "No direct route, but you can transit via these adjoining routes:<br>";
        for (let i = 0; i < routeOrPath.length - 1; i++) {
            const start = routeOrPath[i];
            const end = routeOrPath[i + 1];
            const segment = graph[start][end];
            response += lang === 'hausa' ? `<b>Daga ${start} zuwa ${end}:</b> ${segment.main_route.hausa_description} (Kudi: ${segment.main_route.fares.join(", ")}, Lokaci: ${segment.main_route.hausa_time})<br>` : `<b>From ${start} to ${end}:</b> ${segment.main_route.description} (Fares: ${segment.main_route.fares.join(", ")}, Time: ${segment.main_route.time})<br>`;
        }
        return response;
    } else {
        const isHausa = lang === 'hausa';
        const start = routeOrPath.start_address_details.description.split(',')[0];
        const end = routeOrPath.end_address_details.description.split(',')[0];
        const distance = routeOrPath.main_route.description.match(/~(\d+)\s*km/)?.[1] || '?';
        
        let response = isHausa 
            ? `Sannu! Hanyarka daga ${start} zuwa ${end} shine kamar ${distance} km. Ga shawarata:<br>`
            : `Hey! Your trip from ${start} to ${end} is about ${distance} km. Here’s my suggestion:<br>`;

        response += isHausa 
            ? `<b>Fara Adireshi:</b> ${routeOrPath.start_address_details.hausa_description} <a href="${routeOrPath.start_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
            : `<b>Starting Point:</b> ${routeOrPath.start_address_details.description} <a href="${routeOrPath.start_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;

        const main = routeOrPath.main_route;
        response += isHausa 
            ? `<b>Hanyar Babba:</b> ${main.hausa_description}<br><b>Motoci:</b> ${main.transport.join(", ") || "Babu"}<br><b>Kudi (NGN):</b> ${main.fares.join(", ") || "N/A"}<br><b>Lokaci:</b> ${main.hausa_time}<br><b>Zirga-zirga:</b> ${main.hausa_traffic}<br><br>`
            : `<b>Main Route:</b> ${main.description}<br><b>Transport:</b> ${main.transport.join(", ") || "None"}<br><b>Fares (NGN):</b> ${main.fares.join(", ") || "N/A"}<br><b>Time:</b> ${main.time}<br><b>Traffic:</b> ${main.traffic}<br><br>`;

        const alt = routeOrPath.alternative_route;
        response += isHausa 
            ? `<b>Wata Hanya:</b> ${alt.hausa_description}<br><b>Motoci:</b> ${alt.transport.join(", ") || "Babu"}<br><b>Kudi (NGN):</b> ${alt.fares.join(", ") || "N/A"}<br><b>Lokaci:</b> ${alt.hausa_time}<br><b>Zirga-zirga:</b> ${alt.hausa_traffic}<br><br>`
            : `<b>Alternative Route:</b> ${alt.description}<br><b>Transport:</b> ${alt.transport.join(", ") || "None"}<br><b>Fares (NGN):</b> ${alt.fares.join(", ") || "N/A"}<br><b>Time:</b> ${alt.time}<br><b>Traffic:</b> ${alt.traffic}<br><br>`;

        const currentHour = new Date().getHours();
        const isNight = currentHour < 6 || currentHour >= 20;
        const hasSecurity = routeOrPath.end_address_details.security_concerns;
        const isSingleMode = routeOrPath.alighting_points.distance_to_destination <= 0.5 && routeOrPath.alighting_points.single_mode;
        if ((isNight && !isSingleMode) || hasSecurity) {
            response += isHausa 
                ? `<b>Shawara E-Hailing:</b> ${routeOrPath.ehailing_advisory.hausa_description}<br>`
                : `<b>E-Hailing Tip:</b> ${routeOrPath.ehailing_advisory.description}<br>`;
        }

        response += isHausa 
            ? `<b>Sauka:</b> ${routeOrPath.alighting_points.hausa_description}<br>`
            : `<b>Drop-Off Point:</b> ${routeOrPath.alighting_points.description}<br>`;

        response += isHausa 
            ? `<b>Adireshin Ƙarshe:</b> ${routeOrPath.end_address_details.hausa_description} <a href="${routeOrPath.end_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
            : `<b>Destination:</b> ${routeOrPath.end_address_details.description} <a href="${routeOrPath.end_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;

        response += isHausa ? "Na gode! Kana bukata ƙarin taimako?" : "All set! Need more help?";
        return response;
    }
}

function showSuggestions(input) {
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        const suggestions = getRouteSuggestions(input);
        suggestionsDiv.innerHTML = "";
        if (suggestions.length > 0) {
            suggestionsDiv.classList.remove("hidden");
            suggestions.forEach((key, idx) => {
                const item = document.createElement("div");
                item.className = "suggestion-item" + (idx === 0 ? " active" : "");
                item.textContent = key.replace(/\b\w/g, l => l.toUpperCase());
                item.onclick = () => {
                    textInput.value = key;
                    suggestionsDiv.classList.add("hidden");
                    textInput.focus();
                    inputForm.dispatchEvent(new Event("submit"));
                };
                suggestionsDiv.appendChild(item);
            });
        } else {
            suggestionsDiv.classList.add("hidden");
        }
    }, 300);
}

// Event Listeners
textInput.addEventListener("input", (e) => {
    showSuggestions(e.target.value);
});

textInput.addEventListener("keydown", (e) => {
    const items = suggestionsDiv.querySelectorAll(".suggestion-item");
    let idx = Array.from(items).findIndex(it => it.classList.contains("active"));
    if (["ArrowDown", "ArrowUp"].includes(e.key) && items.length) {
        e.preventDefault();
        items.forEach(it => it.classList.remove("active"));
        if (e.key === "ArrowDown") idx = (idx + 1) % items.length;
        if (e.key === "ArrowUp") idx = (idx - 1 + items.length) % items.length;
        items[idx].classList.add("active");
        items[idx].scrollIntoView({ block: "nearest" });
    }
    if (e.key === "Enter" && idx > -1 && items.length) {
        e.preventDefault();
        textInput.value = items[idx].textContent;
        suggestionsDiv.classList.add("hidden");
        inputForm.dispatchEvent(new Event("submit"));
    }
});

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = textInput.value.trim();
    if (!input) return;
    console.log("Processing input:", input);
    renderMessage(input, "user");
    loadingDiv.style.display = 'block';
    try {
        const routeKeyOrPath = getRouteKey(input);
        console.log("Matched route key or path:", routeKeyOrPath);
        let reply = "";
        if (routeKeyOrPath) {
            reply = formatRoute(routeKeyOrPath, selectedLanguage);
        } else {
            reply = selectedLanguage === "english"
                ? "Sorry, I couldn't find that route or a transit path. Try e-hailing like Bolt/Uber or check AUMTCO for updates."
                : "Yi hakuri, ban sami wannan hanyar ko hanyar transit ba. Gwada e-hailing kamar Bolt/Uber ko duba AUMTCO don sabuntawa.";
        }
        setTimeout(() => {
            loadingDiv.style.display = 'none';
            renderMessage(reply, "bot");
        }, 400);
    } catch (error) {
        console.error("Error in submit handler:", error);
        loadingDiv.style.display = 'none';
        renderMessage(
            selectedLanguage === "english"
                ? "Oops, something went wrong. Please try again."
                : "Kai, wani abu ya faru. Sake gwadawa.",
            "bot"
        );
    }
    textInput.value = "";
    suggestionsDiv.classList.add("hidden");
});

langBtn.addEventListener("change", (e) => {
    selectedLanguage = e.target.value;
    localStorage.setItem('language', selectedLanguage);
    renderMessage(
        selectedLanguage === "english"
            ? "Switched to English."
            : "An sauya zuwa Hausa.",
        "bot"
    );
    textInput.focus();
});

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        chatArea.innerHTML = "";
        renderMessage(
            selectedLanguage === "english"
                ? "Chat cleared! Ask for directions, e.g., <i>from Wuse to Asokoro</i>."
                : "An share sako! Tambayi hanya, misali, <i>daga Wuse zuwa Asokoro</i>.",
            "bot"
        );
        textInput.focus();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    langBtn.value = selectedLanguage;
    renderMessage(
        selectedLanguage === "english"
            ? "Hello! Ask me for public transport directions in Abuja. For example, type: <i>from Wuse to Asokoro</i>."
            : "Sannu! Tambaye ni game da hanyoyin sufuri a Abuja. Misali, rubuta: <i>daga Wuse zuwa Asokoro</i>.",
        "bot"
    );
});
