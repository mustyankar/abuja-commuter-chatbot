const routes = {
    "wuse to asokoro": {
        english: "To get from Wuse to Asokoro, take Bus 34 from Wuse Market Park. The journey typically takes 20 minutes depending on traffic.",
        hausa: "Don tafiya daga Wuse zuwa Asokoro, hau Bus 34 daga Wuse Market Park. Tafiyar tana ɗaukar kusan minti 20 idan babu cunkoso."
    },
    "berger to kubwa": {
        english: "Take a direct bus from Berger Junction to Kubwa. Buses are frequent and the trip is about 30 minutes.",
        hausa: "Hau bus kai tsaye daga Berger Junction zuwa Kubwa. Ana samun bus akai-akai kuma tafiyar tana ɗaukar kusan minti 30."
    },
    "garki to maitama": {
        english: "From Garki, board a taxi or keke to Maitama. Expected travel time is 15 minutes.",
        hausa: "Daga Garki, hau taxi ko keke zuwa Maitama. Tafiya tana ɗaukar kusan minti 15."
    },
    "central area to gwarinpa": {
        english: "Board a bus from Central Area terminal to Gwarinpa. Buses are available every 10 minutes.",
        hausa: "Hau bus daga tashar Central Area zuwa Gwarinpa. Ana samun bus kowane minti 10."
    },
    "nyanya to utako": {
        english: "Take a bus from Nyanya Park heading to Utako. The journey is about 25 minutes.",
        hausa: "Hau bus daga Nyanya Park zuwa Utako. Tafiya tana ɗaukar kusan minti 25."
    },
    "lugbe to area 1": {
        english: "From Lugbe, take a bus to Area 1. The buses are usually available and the trip is around 20 minutes.",
        hausa: "Daga Lugbe, hau bus zuwa Area 1. Ana samun bus sau da yawa kuma tafiyar tana ɗaukar minti 20."
    },
    "apo to wuse": {
        english: "Board a bus from Apo Roundabout to Wuse Market. The trip takes approximately 18 minutes.",
        hausa: "Hau bus daga Apo Roundabout zuwa Wuse Market. Tafiya tana ɗaukar kusan minti 18."
    },
    "gwarinpa to gwarinpa": {
        english: "You're already in Gwarinpa.",
        hausa: "Kana riga kana Gwarinpa."
    }
};

let selectedLanguage = "english";
const chatArea = document.getElementById("chat-area");
const inputForm = document.getElementById("input-form");
const textInput = document.getElementById("textInput");
const langBtn = document.getElementById("lang-btn");
const suggestionsDiv = document.getElementById("suggestions");
const clearBtn = document.getElementById("clear-btn");

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

function getRouteKey(input) {
    input = input.trim().toLowerCase();
    let bestMatch = null, maxScore = 0;
    for (const key in routes) {
        let score = 0;
        if (input.includes(key)) score += 3;
        key.split(" ").forEach(word => {
            if (input.includes(word)) score++;
        });
        if (score > maxScore) {
            maxScore = score;
            bestMatch = key;
        }
    }
    return maxScore > 0 ? bestMatch : null;
}

function getRouteSuggestions(input) {
    input = input.trim().toLowerCase();
    if (!input) return [];
    return Object.keys(routes)
        .filter(key => key.includes(input) || input.split(" ").some(word => key.includes(word)))
        .slice(0, 5);
}

function showSuggestions(input) {
    const suggestions = getRouteSuggestions(input);
    if (suggestions.length > 0) {
        suggestionsDiv.innerHTML = "";
        suggestionsDiv.classList.remove("hidden");
        suggestions.forEach((key, idx) => {
            const item = document.createElement("div");
            item.className = "suggestion-item" + (idx === 0 ? " active" : "");
            item.textContent = key.replace(/\b\w/g, l => l.toUpperCase());
            item.onclick = () => {
                textInput.value = key;
                suggestionsDiv.classList.add("hidden");
                textInput.focus();
            };
            suggestionsDiv.appendChild(item);
        });
    } else {
        suggestionsDiv.classList.add("hidden");
        suggestionsDiv.innerHTML = "";
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
    }
});

inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = textInput.value.trim();
    if (!input) return;
    renderMessage(input, "user");
    const routeKey = getRouteKey(input);
    let reply = "";
    if (routeKey) {
        reply = routes[routeKey][selectedLanguage];
    } else {
        reply = selectedLanguage === "english"
            ? "Sorry, I couldn't find that route. Try another or check your spelling."
            : "Yi hakuri, ban sami wannan hanyar ba. Gwada wata ko duba rubutunka.";
    }
    setTimeout(() => renderMessage(reply, "bot"), 400);
    textInput.value = "";
    suggestionsDiv.classList.add("hidden");
});

langBtn.addEventListener("change", (e) => {
    selectedLanguage = e.target.value;
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

// Initial greeting
window.addEventListener("DOMContentLoaded", () => {
    renderMessage(
        selectedLanguage === "english"
            ? "Hello! Ask me for public transport directions in Abuja. For example, type: <i>from Wuse to Asokoro</i>."
            : "Sannu! Tambaye ni game da hanyoyin sufuri a Abuja. Misali, rubuta: <i>daga Wuse zuwa Asokoro</i>.",
        "bot"
    );
});
