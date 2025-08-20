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
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Ahmadu Bello Way to Asokoro. ~6 km.",
            hausa_description: "Ta Ahmadu Bello Way zuwa Asokoro. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["150-250"],
            time: "25 mins",
            hausa_time: "Minti 25",
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
    "berger to kubwa": {
        start_address_details: {
            description: "Berger Junction",
            hausa_description: "Berger Junction",
            map_link: "https://maps.google.com/?q=Berger,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take a direct bus from Berger Junction to Kubwa. ~10 km.",
            hausa_description: "Hau bus kai tsaye daga Berger Junction zuwa Kubwa. ~10 km.",
            transport: ["Bus"],
            fares: ["200-300"],
            time: "30 mins",
            hausa_time: "Minti 30",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Dutse to Kubwa. ~12 km.",
            hausa_description: "Ta Dutse zuwa Kubwa. ~12 km.",
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
            description: "Kubwa Market, walk 100m.",
            hausa_description: "Kasuwar Kubwa, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Kubwa, near Kubwa Market",
            hausa_description: "Kubwa, kusa da Kasuwar Kubwa",
            map_link: "https://maps.google.com/?q=Kubwa,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "garki to maitama": {
        start_address_details: {
            description: "Garki, near Garki Market",
            hausa_description: "Garki, kusa da Kasuwar Garki",
            map_link: "https://maps.google.com/?q=Garki,+Abuja",
            distance_to_bus_stop: 0.3
        },
        main_route: {
            description: "Board a taxi or keke from Garki to Maitama. ~4 km.",
            hausa_description: "Hau taxi ko keke daga Garki zuwa Maitama. ~4 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["200-300"],
            time: "15 mins",
            hausa_time: "Minti 15",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Area 1 to Maitama. ~5 km.",
            hausa_description: "Ta Area 1 zuwa Maitama. ~5 km.",
            transport: ["Bus", "Keke"],
            fares: ["150-250"],
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Bolt for short trips.",
            hausa_description: "Bolt don gajerun tafiye-tafiye."
        },
        alighting_points: {
            description: "Maitama Roundabout, walk 100m.",
            hausa_description: "Maitama Roundabout, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Maitama, near Maitama Roundabout",
            hausa_description: "Maitama, kusa da Maitama Roundabout",
            map_link: "https://maps.google.com/?q=Maitama,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "central area to gwarinpa": {
        start_address_details: {
            description: "Central Area, near terminal",
            hausa_description: "Central Area, kusa da tasha",
            map_link: "https://maps.google.com/?q=Central+Area,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Board a bus from Central Area terminal to Gwarinpa. ~8 km.",
            hausa_description: "Hau bus daga tashar Central Area zuwa Gwarinpa. ~8 km.",
            transport: ["Bus"],
            fares: ["200-300"],
            time: "25 mins",
            hausa_time: "Minti 25",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Katampe to Gwarinpa. ~9 km.",
            hausa_description: "Ta Katampe zuwa Gwarinpa. ~9 km.",
            transport: ["Keke", "Bus"],
            fares: ["250-350"],
            time: "30 mins",
            hausa_time: "Minti 30",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Uber for comfort.",
            hausa_description: "Yi amfani da Uber don jin daɗi."
        },
        alighting_points: {
            description: "Gwarinpa Estate Gate, walk 150m.",
            hausa_description: "Ƙofar Gwarinpa Estate, tafi mita 150.",
            distance_to_destination: 0.15,
            single_mode: true
        },
        end_address_details: {
            description: "Gwarinpa, near Estate Gate",
            hausa_description: "Gwarinpa, kusa da Ƙofar Estate",
            map_link: "https://maps.google.com/?q=Gwarinpa,+Abuja",
            distance_from_bus_stop: 0.15,
            security_concerns: false
        }
    },
    "nyanya to utako": {
        start_address_details: {
            description: "Nyanya, near Nyanya Park",
            hausa_description: "Nyanya, kusa da Nyanya Park",
            map_link: "https://maps.google.com/?q=Nyanya,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take a bus from Nyanya Park to Utako. ~7 km.",
            hausa_description: "Hau bus daga Nyanya Park zuwa Utako. ~7 km.",
            transport: ["Bus"],
            fares: ["150-250"],
            time: "25 mins",
            hausa_time: "Minti 25",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Mararaba to Utako. ~8 km.",
            hausa_description: "Ta Mararaba zuwa Utako. ~8 km.",
            transport: ["Keke", "Bus"],
            fares: ["200-300"],
            time: "30 mins",
            hausa_time: "Minti 30",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Use Indrive for cheap rides.",
            hausa_description: "Yi amfani da Indrive don tafiye-tafiye masu rahusa."
        },
        alighting_points: {
            description: "Utako Market, walk 100m.",
            hausa_description: "Kasuwar Utako, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Utako, near Utako Market",
            hausa_description: "Utako, kusa da Kasuwar Utako",
            map_link: "https://maps.google.com/?q=Utako,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "lugbe to area 1": {
        start_address_details: {
            description: "Lugbe, near FHA Bus Stop",
            hausa_description: "Lugbe, kusa da Tashar FHA",
            map_link: "https://maps.google.com/?q=Lugbe,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take a bus from FHA Bus Stop to Area 1. ~6 km.",
            hausa_description: "Hau bus daga Tashar FHA zuwa Area 1. ~6 km.",
            transport: ["Bus"],
            fares: ["150-250"],
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Airport Road to Area 1. ~7 km.",
            hausa_description: "Ta Hanyar Airport zuwa Area 1. ~7 km.",
            transport: ["Keke", "Bus"],
            fares: ["200-300"],
            time: "25 mins",
            hausa_time: "Minti 25",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Bolt for quick trips.",
            hausa_description: "Yi amfani da Bolt don tafiye-tafiye cikin sauri."
        },
        alighting_points: {
            description: "Area 1 Roundabout, walk 150m.",
            hausa_description: "Area 1 Roundabout, tafi mita 150.",
            distance_to_destination: 0.15,
            single_mode: true
        },
        end_address_details: {
            description: "Area 1, near Area 1 Roundabout",
            hausa_description: "Area 1, kusa da Area 1 Roundabout",
            map_link: "https://maps.google.com/?q=Area+1,+Abuja",
            distance_from_bus_stop: 0.15,
            security_concerns: false
        }
    },
    "apo to wuse": {
        start_address_details: {
            description: "Apo, near Apo Roundabout",
            hausa_description: "Apo, kusa da Apo Roundabout",
            map_link: "https://maps.google.com/?q=Apo,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Board a bus from Apo Roundabout to Wuse Market. ~5 km.",
            hausa_description: "Hau bus daga Apo Roundabout zuwa Kasuwar Wuse. ~5 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["100-200"],
            time: "18 mins",
            hausa_time: "Minti 18",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Gudu to Wuse. ~6 km.",
            hausa_description: "Ta Gudu zuwa Wuse. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["150-250"],
            time: "22 mins",
            hausa_time: "Minti 22",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Uber for comfort.",
            hausa_description: "Yi amfani da Uber don jin daɗi."
        },
        alighting_points: {
            description: "Wuse Market, walk 100m.",
            hausa_description: "Kasuwar Wuse, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "gwarinpa to gwarinpa": {
        start_address_details: {
            description: "Gwarinpa, near Estate Gate",
            hausa_description: "Gwarinpa, kusa da Ƙofar Estate",
            map_link: "https://maps.google.com/?q=Gwarinpa,+Abuja",
            distance_to_bus_stop: 0
        },
        main_route: {
            description: "You're already in Gwarinpa.",
            hausa_description: "Kana riga a Gwarinpa.",
            transport: [],
            fares: [],
            time: "0 mins",
            hausa_time: "Minti 0",
            traffic: "None",
            hausa_traffic: "Babu"
        },
        alternative_route: {
            description: "No alternative route needed.",
            hausa_description: "Babu wata hanya da ake bukata.",
            transport: [],
            fares: [],
            time: "0 mins",
            hausa_time: "Minti 0",
            traffic: "None",
            hausa_traffic: "Babu"
        },
        ehailing_advisory: {
            description: "No e-hailing needed.",
            hausa_description: "Babu bukatar e-hailing."
        },
        alighting_points: {
            description: "You're at your destination.",
            hausa_description: "Kana wurin da kake so.",
            distance_to_destination: 0,
            single_mode: true
        },
        end_address_details: {
            description: "Gwarinpa, near Estate Gate",
            hausa_description: "Gwarinpa, kusa da Ƙofar Estate",
            map_link: "https://maps.google.com/?q=Gwarinpa,+Abuja",
            distance_from_bus_stop: 0,
            security_concerns: false
        }
    },
    "wuse to maitama": {
        start_address_details: {
            description: "Wuse, near Wuse Market",
            hausa_description: "Wuse, kusa da Kasuwar Wuse",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            hausa_description: "Hau Adetokunbo Ademola Crescent zuwa Maitama. ~4 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["200-300"],
            time: "10-15 mins",
            hausa_time: "Minti 10-15",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Aminu Kano Crescent to Maitama. ~5 km.",
            hausa_description: "Ta Aminu Kano Crescent zuwa Maitama. ~5 km.",
            transport: ["Bus", "Keke"],
            fares: ["150-250"],
            time: "15-20 mins",
            hausa_time: "Minti 15-20",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        ehailing_advisory: {
            description: "Use Bolt or Uber for quick trips, especially at night.",
            hausa_description: "Yi amfani da Bolt ko Uber don tafiye-tafiye cikin sauri, musamman da daddare."
        },
        alighting_points: {
            description: "Maitama Roundabout, walk 100m.",
            hausa_description: "Maitama Roundabout, tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Maitama, near Maitama Roundabout",
            hausa_description: "Maitama, kusa da Maitama Roundabout",
            map_link: "https://maps.google.com/?q=Maitama,+Abuja",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "garki to asokoro": {
        start_address_details: {
            description: "Garki, near Garki Market",
            hausa_description: "Garki, kusa da Kasuwar Garki",
            map_link: "https://maps.google.com/?q=Garki,+Abuja",
            distance_to_bus_stop: 0.3
        },
        main_route: {
            description: "Take Ahmadu Bello Way to Asokoro. ~5 km.",
            hausa_description: "Hau Ahmadu Bello Way zuwa Asokoro. ~5 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["100-200"],
            time: "15 mins",
            hausa_time: "Minti 15",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        alternative_route: {
            description: "Via Area 1 to AYA. ~6 km.",
            hausa_description: "Ta Area 1 zuwa AYA. ~6 km.",
            transport: ["Keke", "Bus"],
            fares: ["150-250"],
            time: "20 mins",
            hausa_time: "Minti 20",
            traffic: "Heavy during rush",
            hausa_traffic: "Nauyi a lokacin cunkoso"
        },
        ehailing_advisory: {
            description: "Bolt for short trips.",
            hausa_description: "Bolt don gajerun tafiye-tafiye."
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
    "nyanya to karu": {
        start_address_details: {
            description: "Nyanya, near Nyanya Bridge",
            hausa_description: "Nyanya, kusa da Gadar Nyanya",
            map_link: "https://maps.google.com/?q=Nyanya,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take Karu Road to Karu Market. ~2 km.",
            hausa_description: "Hau Karu Road zuwa Kasuwar Karu. ~2 km.",
            transport: ["Mini Bus", "Keke"],
            fares: ["100-200"],
            time: "5-10 mins",
            hausa_time: "Minti 5-10",
            traffic: "Light",
            hausa_traffic: "Sauƙi"
        },
        alternative_route: {
            description: "Via Nyanya Underpass to Karu. ~3 km.",
            hausa_description: "Ta Nyanya Underpass zuwa Karu. ~3 km.",
            transport: ["Keke"],
            fares: ["100-150"],
            time: "10 mins",
            hausa_time: "Minti 10",
            traffic: "Moderate",
            hausa_traffic: "Matsakaici"
        },
        ehailing_advisory: {
            description: "Use Indrive for cheap local rides.",
            hausa_description: "Yi amfani da Indrive don tafiye-tafiye masu rahusa."
        },
        alighting_points: {
            description: "Karu Market, walk 50m.",
            hausa_description: "Kasuwar Karu, tafi mita 50.",
            distance_to_destination: 0.05,
            single_mode: true
        },
        end_address_details: {
            description: "Karu, near Karu Market",
            hausa_description: "Karu, kusa da Kasuwar Karu",
            map_link: "https://maps.google.com/?q=Karu,+Abuja",
            distance_from_bus_stop: 0.05,
            security_concerns: false
        }
    }
};

let selectedLanguage = localStorage.getItem('language') || 'english';
const chatArea = document.getElementById("chat-area");
const inputForm = document.getElementById("input-form");
const textInput = document.getElementById("textInput");
const langBtn = document.getElementById("lang-btn");
const suggestionsDiv = document.getElementById("suggestions");
const clearBtn = document.getElementById("clear-btn");
const loadingDiv = document.getElementById("loading");

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

function getRouteKey(input) {
    const normalized = normalizeInput(input);
    if (!normalized) return null;
    
    // Split input into words for better matching
    const inputWords = normalized.split(' ').filter(word => word);
    if (inputWords.length < 2) return null; // Require at least two words (start and end)

    let bestKey = null;
    let minDist = Infinity;
    Object.keys(routes).forEach(key => {
        const keyWords = key.split(' to ');
        if (keyWords.length !== 2) return;

        // Calculate distance for start and end points
        const startDist = Math.min(
            levenshteinDistance(inputWords[0], keyWords[0]),
            levenshteinDistance(inputWords[inputWords.length - 1], keyWords[0])
        );
        const endDist = Math.min(
            levenshteinDistance(inputWords[0], keyWords[1]),
            levenshteinDistance(inputWords[inputWords.length - 1], keyWords[1])
        );
        const totalDist = startDist + endDist;

        // Stricter threshold: max 2 edits per word
        if (totalDist < minDist && startDist <= 2 && endDist <= 2) {
            minDist = totalDist;
            bestKey = key;
        }
    });

    return minDist < 5 ? bestKey : null; // Threshold for total distance
}

function getRouteSuggestions(input) {
    const normalized = normalizeInput(input);
    if (!normalized) return [];
    return Object.keys(routes)
        .map(key => ({
            key,
            dist: levenshteinDistance(normalized, key)
        }))
        .filter(item => item.dist <= Math.max(3, normalized.length / 2))
        .sort((a, b) => a.dist - b.dist)
        .slice(0, 5)
        .map(item => item.key);
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

function formatRoute(route, lang) {
    const isHausa = lang === 'hausa';
    const start = route.start_address_details.description.split(',')[0];
    const end = route.end_address_details.description.split(',')[0];
    const distance = route.main_route.description.match(/~(\d+)\s*km/)?.[1] || '?';
    
    let response = isHausa 
        ? `Sannu! Hanyarka daga ${start} zuwa ${end} shine kamar ${distance} km. Ga shawarata:<br>`
        : `Hey! Your trip from ${start} to ${end} is about ${distance} km. Here’s my suggestion:<br>`;

    // Start details
    response += isHausa 
        ? `<b>Fara Adireshi:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
        : `<b>Starting Point:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;

    // Main route
    const main = route.main_route;
    response += isHausa 
        ? `<b>Hanyar Babba:</b> ${main.hausa_description}<br><b>Motoci:</b> ${main.transport.join(", ") || "None"}<br><b>Kudi (NGN):</b> ${main.fares.join(", ") || "N/A"}<br><b>Lokaci:</b> ${main.hausa_time}<br><b>Zirga-zirga:</b> ${main.hausa_traffic}<br><br>`
        : `<b>Main Route:</b> ${main.description}<br><b>Transport:</b> ${main.transport.join(", ") || "None"}<br><b>Fares (NGN):</b> ${main.fares.join(", ") || "N/A"}<br><b>Time:</b> ${main.time}<br><b>Traffic:</b> ${main.traffic}<br><br>`;

    // Alternative route
    const alt = route.alternative_route;
    response += isHausa 
        ? `<b>Wata Hanya:</b> ${alt.hausa_description}<br><b>Motoci:</b> ${alt.transport.join(", ") || "None"}<br><b>Kudi (NGN):</b> ${alt.fares.join(", ") || "N/A"}<br><b>Lokaci:</b> ${alt.hausa_time}<br><b>Zirga-zirga:</b> ${alt.hausa_traffic}<br><br>`
        : `<b>Alternative Route:</b> ${alt.description}<br><b>Transport:</b> ${alt.transport.join(", ") || "None"}<br><b>Fares (NGN):</b> ${alt.fares.join(", ") || "N/A"}<br><b>Time:</b> ${alt.time}<br><b>Traffic:</b> ${alt.traffic}<br><br>`;

    // E-hailing
    const currentHour = new Date().getHours();
    const isNight = currentHour < 6 || currentHour >= 20;
    const hasSecurity = route.end_address_details.security_concerns;
    const isSingleMode = route.alighting_points.distance_to_destination <= 0.5 && route.alighting_points.single_mode;
    if ((isNight && !isSingleMode) || hasSecurity) {
        response += isHausa 
            ? `<b>Shawara E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
            : `<b>E-Hailing Tip:</b> ${route.ehailing_advisory.description}<br>`;
    }

    // Alighting
    response += isHausa 
        ? `<b>Sauka:</b> ${route.alighting_points.hausa_description}<br>`
        : `<b>Drop-Off Point:</b> ${route.alighting_points.description}<br>`;

    // End
    response += isHausa 
        ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
        : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;

    response += isHausa ? "Na gode! Kana bukatar ƙarin taimako?" : "All set! Need more help?";
    return response;
}

function showSuggestions(input) {
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
}

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
    renderMessage(input, "user");
    loadingDiv.style.display = 'block';
    try {
        const routeKey = getRouteKey(input);
        let reply = "";
        if (routeKey && routes[routeKey]) {
            reply = formatRoute(routes[routeKey], selectedLanguage);
        } else {
            reply = selectedLanguage === "english"
                ? "Sorry, I couldn't find that route. Try another or check your spelling."
                : "Yi hakuri, ban sami wannan hanyar ba. Gwada wata ko duba rubutunka.";
        }
        setTimeout(() => {
            loadingDiv.style.display = 'none';
            renderMessage(reply, "bot");
        }, 400);
    } catch (error) {
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

// Initial setup
window.addEventListener("DOMContentLoaded", () => {
    langBtn.value = selectedLanguage;
    renderMessage(
        selectedLanguage === "english"
            ? "Hello! Ask me for public transport directions in Abuja. For example, type: <i>from Wuse to Asokoro</i>."
            : "Sannu! Tambaye ni game da hanyoyin sufuri a Abuja. Misali, rubuta: <i>daga Wuse zuwa Asokoro</i>.",
        "bot"
    );
});
