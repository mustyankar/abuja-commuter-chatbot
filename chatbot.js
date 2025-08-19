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
            description: "Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            hausa_description: "Hausa: Ɗauki Airport Road zuwa Nnamdi Azikiwe Airport. ~10 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["300-500"],
            time: "20-30 mins",
            hausa_time: "Hausa: Minti 20-30",
            traffic: "Heavy near airport",
            hausa_traffic: "Hausa: Mai nauyi kusa da filin jirgin sama"
        },
        alternative_route: {
            description: "Via Idu to Airport. ~12 km.",
            hausa_description: "Hausa: Ta Idu zuwa Airport. ~12 km.",
            transport: ["Train from Idu", "Bus"],
            fares: ["400-600"],
            time: "25-35 mins",
            hausa_time: "Hausa: Minti 25-35",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Uber or Bolt for airport transfers.",
            hausa_description: "Hausa: Uber ko Bolt don canja wurin filin jirgin sama."
        },
        alighting_points: {
            description: "Airport Terminal, walk 100m.",
            hausa_description: "Hausa: Tashar Filin Jirgin Sama, ka tafi mita 100.",
            distance_to_destination: 0.1,
            single_mode: true
        },
        end_address_details: {
            description: "Nnamdi Azikiwe International Airport",
            hausa_description: "Hausa: Nnamdi Azikiwe International Airport",
            map_link: "https://maps.google.com/?q=Abuja+Airport",
            distance_from_bus_stop: 0.1,
            security_concerns: false
        }
    },
    "kubwa-bwari": {
        start_address_details: {
            description: "Kubwa, near Kubwa Gate",
            hausa_description: "Hausa: Kubwa, kusa da Kubwa Gate",
            map_link: "https://maps.google.com/?q=Kubwa,+Abuja",
            distance_to_bus_stop: 0.3
        },
        main_route: {
            description: "Take Bwari Road to Bwari Town. ~15 km.",
            hausa_description: "Hausa: Ɗauki Bwari Road zuwa Bwari Town. ~15 km.",
            transport: ["Bus", "Mini Bus"],
            fares: ["200-400"],
            time: "30 mins",
            hausa_time: "Hausa: Minti 30",
            traffic: "Light to moderate",
            hausa_traffic: "Hausa: Haske zuwa matsakaici"
        },
        alternative_route: {
            description: "Via Dutse to Bwari. ~17 km.",
            hausa_description: "Hausa: Ta Dutse zuwa Bwari. ~17 km.",
            transport: ["Shared Taxi", "Keke"],
            fares: ["250-450"],
            time: "35 mins",
            hausa_time: "Hausa: Minti 35",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Bolt for rural areas.",
            hausa_description: "Hausa: Bolt don yankunan karkara."
        },
        alighting_points: {
            description: "Bwari Town Center, walk 200m.",
            hausa_description: "Hausa: Tsakiyar Garin Bwari, ka tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Bwari Town Center",
            hausa_description: "Hausa: Tsakiyar Garin Bwari",
            map_link: "https://maps.google.com/?q=Bwari,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: false
        }
    },
    "ushafa-shere": {
        start_address_details: {
            description: "Ushafa, near Ushafa Village",
            hausa_description: "Hausa: Ushafa, kusa da Ƙauyen Ushafa",
            map_link: "https://maps.google.com/?q=Ushafa,+Abuja",
            distance_to_bus_stop: 0.5
        },
        main_route: {
            description: "Take Shere Road from Ushafa. ~20 km.",
            hausa_description: "Hausa: Ɗauki Shere Road daga Ushafa. ~20 km.",
            transport: ["Mini Bus", "Motorcycle"],
            fares: ["300-500"],
            time: "40 mins",
            hausa_time: "Hausa: Minti 40",
            traffic: "Light",
            hausa_traffic: "Hausa: Haske"
        },
        alternative_route: {
            description: "Via Bwari Town to Shere. ~22 km.",
            hausa_description: "Hausa: Ta Bwari Town zuwa Shere. ~22 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["350-550"],
            time: "45 mins",
            hausa_time: "Hausa: Minti 45",
            traffic: "Low",
            hausa_traffic: "Hausa: Karancin zirga-zirga"
        },
        ehailing_advisory: {
            description: "Limited e-hailing in remote areas; use local options.",
            hausa_description: "Hausa: E-hailing yana da iyaka a yankunan nesa; yi amfani da zaɓuɓɓukan gida."
        },
        alighting_points: {
            description: "Shere Village, walk 300m.",
            hausa_description: "Hausa: Ƙauyen Shere, ka tafi mita 300.",
            distance_to_destination: 0.3,
            single_mode: true
        },
        end_address_details: {
            description: "Shere Village",
            hausa_description: "Hausa: Ƙauyen Shere",
            map_link: "https://maps.google.com/?q=Shere,+Abuja",
            distance_from_bus_stop: 0.3,
            security_concerns: true
        }
    },
    "mpape-kawu": {
        start_address_details: {
            description: "Mpape, near Mpape Hill",
            hausa_description: "Hausa: Mpape, kusa da Dutsen Mpape",
            map_link: "https://maps.google.com/?q=Mpape,+Abuja",
            distance_to_bus_stop: 0.4
        },
        main_route: {
            description: "Take Bwari Road to Kawu Village. ~25 km.",
            hausa_description: "Hausa: Ɗauki Bwari Road zuwa Ƙauyen Kawu. ~25 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["400-600"],
            time: "45 mins",
            hausa_time: "Hausa: Minti 45",
            traffic: "Light to moderate",
            hausa_traffic: "Hausa: Haske zuwa matsakaici"
        },
        alternative_route: {
            description: "Via Ushafa to Kawu. ~27 km.",
            hausa_description: "Hausa: Ta Ushafa zuwa Kawu. ~27 km.",
            transport: ["Mini Bus", "Motorcycle"],
            fares: ["450-650"],
            time: "50 mins",
            hausa_time: "Hausa: Minti 50",
            traffic: "Low",
            hausa_traffic: "Hausa: Karancin zirga-zirga"
        },
        ehailing_advisory: {
            description: "Limited in remote areas; negotiate local taxis.",
            hausa_description: "Hausa: E-hailing yana da iyaka a yankunan nesa; tattauna da taksi na gida."
        },
        alighting_points: {
            description: "Kawu Village Center, walk 300m.",
            hausa_description: "Hausa: Tsakiyar Ƙauyen Kawu, ka tafi mita 300.",
            distance_to_destination: 0.3,
            single_mode: true
        },
        end_address_details: {
            description: "Kawu Village",
            hausa_description: "Hausa: Ƙauyen Kawu",
            map_link: "https://maps.google.com/?q=Kawu,+Abuja",
            distance_from_bus_stop: 0.3,
            security_concerns: true
        }
    },
    "wuse-kubwa": {
        start_address_details: {
            description: "Wuse, near Berger Junction",
            hausa_description: "Hausa: Wuse, kusa da Berger Junction",
            map_link: "https://maps.google.com/?q=Wuse,+Abuja",
            distance_to_bus_stop: 0.2
        },
        main_route: {
            description: "Take Kubwa Expressway from Wuse. ~20 km.",
            hausa_description: "Hausa: Ɗauki Kubwa Expressway daga Wuse. ~20 km.",
            transport: ["BRT Bus", "Mini Bus"],
            fares: ["150-300"],
            time: "30-60 mins",
            hausa_time: "Hausa: Minti 30-60",
            traffic: "Heavy during peak",
            hausa_traffic: "Hausa: Mai nauyi a lokacin cunkoso"
        },
        alternative_route: {
            description: "Via Gwarimpa to Kubwa. ~22 km.",
            hausa_description: "Hausa: Ta Gwarimpa zuwa Kubwa. ~22 km.",
            transport: ["Shared Taxi", "Bolt"],
            fares: ["200-400"],
            time: "40-70 mins",
            hausa_time: "Hausa: Minti 40-70",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Uber or Bolt for comfort, fares 1500-3000.",
            hausa_description: "Hausa: Uber ko Bolt don jin daɗi, kudi 1500-3000."
        },
        alighting_points: {
            description: "Kubwa Gate, walk 200m.",
            hausa_description: "Hausa: Kubwa Gate, ka tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Kubwa, near Kubwa Gate",
            hausa_description: "Hausa: Kubwa, kusa da Kubwa Gate",
            map_link: "https://maps.google.com/?q=Kubwa,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: false
        }
    },
    "maitama-shere": {
        start_address_details: {
            description: "Maitama, near Maitama Roundabout",
            hausa_description: "Hausa: Maitama, kusa da Maitama Roundabout",
            map_link: "https://maps.google.com/?q=Maitama,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take Kubwa Expressway to Bwari, then Shere Road. ~30 km.",
            hausa_description: "Hausa: Ɗauki Kubwa Expressway zuwa Bwari, sannan Shere Road. ~30 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["400-600"],
            time: "50-60 mins",
            hausa_time: "Hausa: Minti 50-60",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        alternative_route: {
            description: "Via Mpape to Shere. ~32 km.",
            hausa_description: "Hausa: Ta Mpape zuwa Shere. ~32 km.",
            transport: ["Mini Bus", "Motorcycle"],
            fares: ["450-650"],
            time: "55-65 mins",
            hausa_time: "Hausa: Minti 55-65",
            traffic: "Light",
            hausa_traffic: "Hausa: Haske"
        },
        ehailing_advisory: {
            description: "Limited e-hailing in Shere; use local taxis.",
            hausa_description: "Hausa: E-hailing yana da iyaka a Shere; yi amfani da taksi na gida."
        },
        alighting_points: {
            description: "Shere Village, walk 300m.",
            hausa_description: "Hausa: Ƙauyen Shere, ka tafi mita 300.",
            distance_to_destination: 0.3,
            single_mode: true
        },
        end_address_details: {
            description: "Shere Village",
            hausa_description: "Hausa: Ƙauyen Shere",
            map_link: "https://maps.google.com/?q=Shere,+Abuja",
            distance_from_bus_stop: 0.3,
            security_concerns: true
        }
    },
    "airport-bwari": {
        start_address_details: {
            description: "Nnamdi Azikiwe International Airport",
            hausa_description: "Hausa: Nnamdi Azikiwe International Airport",
            map_link: "https://maps.google.com/?q=Abuja+Airport",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take Airport Road to Kubwa, then Bwari Road. ~25 km.",
            hausa_description: "Hausa: Ɗauki Airport Road zuwa Kubwa, sannan Bwari Road. ~25 km.",
            transport: ["Bus", "Shared Taxi"],
            fares: ["400-600"],
            time: "40-50 mins",
            hausa_time: "Hausa: Minti 40-50",
            traffic: "Moderate to heavy",
            hausa_traffic: "Hausa: Matsakaici zuwa mai nauyi"
        },
        alternative_route: {
            description: "Via Idu to Bwari. ~27 km.",
            hausa_description: "Hausa: Ta Idu zuwa Bwari. ~27 km.",
            transport: ["Train from Idu", "Mini Bus"],
            fares: ["450-650"],
            time: "45-55 mins",
            hausa_time: "Hausa: Minti 45-55",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Matsakaici"
        },
        ehailing_advisory: {
            description: "Uber or Bolt for airport-to-Bwari trips.",
            hausa_description: "Hausa: Uber ko Bolt don tafiye-tafiye daga filin jirgin sama zuwa Bwari."
        },
        alighting_points: {
            description: "Bwari Town Center, walk 200m.",
            hausa_description: "Hausa: Tsakiyar Garin Bwari, ka tafi mita 200.",
            distance_to_destination: 0.2,
            single_mode: true
        },
        end_address_details: {
            description: "Bwari Town Center",
            hausa_description: "Hausa: Tsakiyar Garin Bwari",
            map_link: "https://maps.google.com/?q=Bwari,+Abuja",
            distance_from_bus_stop: 0.2,
            security_concerns: false
        }
    }
};

function normalizeRouteInput(input) {
    if (!input) return "";
    const normalized = input
        .toLowerCase()
        .replace(/\s*to\s*/g, '-')     // "wuse to maitama" -> "wuse-maitama"
        .replace(/\s+/g, '')           // "wuse 2-maitama" -> "wuse2-maitama"
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

        const { key, isReverse } = normalizeRouteInput(userInput);
        const route = routes[key];

        if (!route) {
            const supportedRoutes = Object.keys(routes)
                .map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$1 to $2"))
                .concat(Object.keys(routes).map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$2 to $1")))
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
            const startDetails = isReverse ? route.end_address_details : route.start_address_details;
            response += selectedLanguage === "hausa"
                ? `<b>Fara Adireshi:</b> ${startDetails.hausa_description} <a href="${startDetails.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Starting Point:</b> ${startDetails.description} <a href="${startDetails.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

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

        if ((isNightTrip && !isSingleModeClose) || hasSecurityConcerns) {
            if (route.ehailing_advisory) {
                response += selectedLanguage === "hausa"
                    ? `<b>Shawara E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
                    : `<b>E-Hailing Tip:</b> ${route.ehailing_advisory.description}<br>`;
            }
        }

        if (route.alighting_points && typeof route.alighting_points.distance_to_destination === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Sauka:</b> ${isReverse ? route.alighting_points.hausa_description.replace(`${end}`, `${start}`) : route.alighting_points.hausa_description}<br>`
                : `<b>Drop-Off Point:</b> ${isReverse ? route.alighting_points.description.replace(`${end}`, `${start}`) : route.alighting_points.description}<br>`;
        }

        if (route.end_address_details && typeof route.end_address_details.distance_from_bus_stop === "number") {
            const endDetails = isReverse ? route.start_address_details : route.end_address_details;
            response += selectedLanguage === "hausa"
                ? `<b>Adireshin Ƙarshe:</b> ${endDetails.hausa_description} <a href="${endDetails.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Destination:</b> ${endDetails.description} <a href="${endDetails.map_link}" target="_blank">[Check Google Maps]</a><br>`;
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
