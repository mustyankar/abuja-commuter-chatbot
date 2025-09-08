const routes = {
    "wuse2-asokoro": {
        start_address_details: "Trek or use Along to Wuse Market (50-100 NGN).",
        end_address_details: "Take Along or Bus from Aya bus stop (200-300 NGN).",
        alighting_points: "Alight at Aya, trek or use Along (200-300 NGN).",
        ehailing_advisory: "Use e-hailing at night (after 8 PM): Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN).",
        main_route: {
            transport: ["Along", "Bus"],
            fares: [200, 250],
            description: "Trek or Along to Wuse Market, then Along or Bus to Aya bus stop.",
            hausa_description: "Tafiya ko Along zuwa Kasuwar Wuse, sannan Along ko Bus zuwa Aya bus stop.",
            time: "25-35 mins",
            hausa_time: "lokacin 25-35 mins",
            traffic: "Moderate; avoid 7-9 AM peaks.",
            hausa_traffic: "Matsakaici; guji 7-9 AM cunkoso."
        }
    },
    "maitama-nyanya": {
        start_address_details: "Trek or use Along to Maitama Junction (50-100 NGN).",
        end_address_details: "Take Bus or Along from Nyanya Bridge (200-300 NGN).",
        alighting_points: "Alight at Nyanya Market, trek or use Along (200-300 NGN).",
        ehailing_advisory: "Use e-hailing at night (after 8 PM): Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN).",
        main_route: {
            transport: ["Bus", "Along"],
            fares: [300, 1500],
            description: "Trek or Along to Maitama Junction, then Bus or Along to Nyanya Bridge.",
            hausa_description: "Tafiya ko Along zuwa Maitama Junction, sannan Bus ko Along zuwa Nyanya Bridge.",
            time: "40-50 mins",
            hausa_time: "lokacin 40-50 mins",
            traffic: "Heavy on Nyanya-Maraba road 5-8 PM; expect delays.",
            hausa_traffic: "Mai nauyi a Nyanya-Maraba 5-8 PM; sa ran jinkiri."
        }
    },
    "wuse2-gwagwalada": {
        start_address_details: "Trek or use Along to Wuse Market (50-100 NGN).",
        end_address_details: "Take Bus or Along from Gwagwalada Market (200-300 NGN).",
        alighting_points: "Alight at Gwagwalada Park, trek or use Along (200-300 NGN).",
        ehailing_advisory: "Use e-hailing at night (after 8 PM): Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN).",
        main_route: {
            transport: ["Bus", "Along"],
            fares: [500, 2000],
            description: "Trek or Along to Wuse Market, then Bus or Along to Gwagwalada Market.",
            hausa_description: "Tafiya ko Along zuwa Kasuwar Wuse, sannan Bus ko Along zuwa Kasuwar Gwagwalada.",
            time: "60-80 mins",
            hausa_time: "lokacin 60-80 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours.",
            hausa_traffic: "Mai nauyi 4-7 PM; guji lokutan cunkoso."
        }
    },
    // [Other routes can follow this pattern if added later]
    // ...
};

// Fuzzy matching function (unchanged)
function suggestLocation(words) {
    const locationKeywords = {
        "wuse": ["wuse", "wuse2"],
        "asokoro": ["asokoro"],
        "maitama": ["maitama"],
        "nyanya": ["nyanya"],
        "gwagwalada": ["gwagwalada"]
    };

    for (let key in locationKeywords) {
        if (words.some(word => locationKeywords[key].includes(word))) {
            return `wuse2-${key}`; // Assuming wuse2 as a common start point for simplicity
        }
    }
    return null;
}

// Chatbot response function (unchanged)
function chatbotResponse(input) {
    const lang = document.getElementById('lang-toggle').checked ? 'hausa' : 'en';
    let response = "Sorry, I couldn't understand your request. Please try again or use a format like 'From Wuse 2 to Asokoro'.";
    const words = input.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    const routeKey = suggestLocation(words);

    if (routeKey) {
        const route = routes[routeKey];
        const start = route.start_address_details;
        const end = route.end_address_details;
        const alight = route.alighting_points;
        const ehailing = route.ehailing_advisory;
        const main = route.main_route;
        const transport = main.transport;
        const fares = main.fares;
        const time = lang === 'hausa' ? main.hausa_time : main.time;
        const traffic = lang === 'hausa' ? main.hausa_traffic : main.traffic;

        response = `${start}\n${end}\n${alight}\n${ehailing}\nMain Route: ${main.description} (Options: ${transport.join(', ')}, Fares: ${fares.join(', ')} NGN, Time: ${time})${traffic ? `\nTraffic: ${traffic}` : ''}`;
    }

    showMessage(response, 'bot');
    return response;
}

// Show message function (unchanged)
function showMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const bubble = document.createElement('div');
    bubble.classList.add('chat-bubble', sender === 'user' ? 'user-bubble' : 'bot-bubble');
    bubble.textContent = message;
    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.textContent = new Date().toLocaleTimeString();
    bubble.appendChild(timestamp);
}

// Event listeners with debug and safeguard
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const langToggle = document.getElementById('lang-toggle');

    if (!userInput || !sendBtn || !langToggle) {
        console.error('One or more DOM elements not found:', { userInput, sendBtn, langToggle });
        return;
    }

    sendBtn.addEventListener('click', () => {
        const input = userInput.value.trim();
        if (input) {
            showMessage(input, 'user');
            const response = chatbotResponse(input);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && userInput.value.trim()) {
            showMessage(userInput.value.trim(), 'user');
            const response = chatbotResponse(userInput.value.trim());
            userInput.value = '';
        }
    });

    langToggle.addEventListener('change', () => {
        const chatBox = document.getElementById('chat-box');
        if (chatBox) chatBox.innerHTML = ''; // Clear chat on language switch
        showMessage("Language switched. Ask me anything!", 'bot');
    });
});
