I understand that the Abuja Commuter Chatbot is still stuck on the language selection page, where the "Confirm Language" button is not responding, and you want to update the prompt text to replace "Shekoni" with "Shekwoni". The previous response updated the prompt to "Welcome to Shekoni Abuja Guide. Please select your preferred language:" and included fixes for the language selection issue, but it seems those changes didn’t fully resolve the problem. The issue likely persists due to a JavaScript error in the `change-lang-btn` event listener or DOM manipulation in `chatbot.js`. Additionally, the previous fixes for removing the "loading frequent routes" implication and ensuring responsiveness should be retained.

### Fault Detection
1. **Language Confirmation Not Responding**:
   - The `change-lang-btn` event listener in `chatbot.js` is responsible for validating the radio button selection, setting the language, and transitioning from the language selection UI to the chat interface.
   - Potential issues:
     - The event listener may not be binding correctly if the DOM element `#change-lang-btn` is not found or if the DOM isn’t fully loaded.
     - The `setLanguage` function might be throwing an uncaught error, possibly due to `localStorage` issues or missing DOM elements, despite the try-catch block.
     - The radio button validation (`input[name="language"]:checked`) might fail if no default selection is set or if the radio buttons are not properly rendered.
     - The UI transition (hiding `#language-selection` and showing `#chat-box` and `#input-container`) might fail if the DOM elements are manipulated incorrectly.
   - The previous fix added validation and a `DOMContentLoaded` listener, but the issue persists, suggesting a deeper problem, such as an unhandled edge case or browser-specific behavior (e.g., `localStorage` restrictions in private mode).

2. **Prompt Text Update**:
   - The prompt in `index.html` needs to change from "Welcome to Shekoni Abuja Guide. Please select your preferred language:" to "Welcome to Shekwoni Abuja Guide. Please select your preferred language."
   - The Hausa prompt in `chatbot.js` needs to update from "Maraba da Shekoni Abuja Jagora. Zaɓi yaren da kake so:" to "Maraba da Shekwoni Abuja Jagora. Zaɓi yaren da kake so."

3. **Retaining Previous Fixes**:
   - Keep the generalized welcome message to avoid implying frequent routes.
   - Preserve error handling in `chatbotResponse` and `fuzzyMatch` for responsiveness.
   - Maintain Hausa enhancements (RTL, translations, ARIA labels, fuzzy matching).
   - Retain the completed `key` assignment in `chatbotResponse` to ensure route lookups work.
   - Keep the `DOMContentLoaded` listener and radio button validation from the previous fix, but enhance them to address the persistent issue.

### Reconciliation Plan
1. **Fix Language Confirmation Issue**:
   - **Enhance Event Listener**:
     - Ensure the `change-lang-btn` event listener is robust by checking for the button’s existence before binding.
     - Use `addEventListener` with a named function for better debugging and to prevent multiple bindings.
     - Add a fallback to trigger `setLanguage('english')` if no radio button is selected, ensuring the UI progresses.
   - **Improve `setLanguage` Function**:
     - Add explicit checks for all DOM elements before manipulation.
     - Wrap `localStorage` operations in a separate try-catch to isolate failures.
     - Log errors to the console (commented out for production) to aid debugging.
     - Ensure the UI transition (hiding/showing elements) is foolproof by checking element existence and using `style.display` consistently.
   - **Force Default Selection**:
     - Set the English radio button as checked by default in `index.html` to prevent `undefined` errors if no radio button is selected.
     - Validate radio button selection in JavaScript and display a clear error message if the user clicks "Confirm Language" without selecting a language.
   - **Debounce Clicks**:
     - Add a simple debounce mechanism to prevent multiple rapid clicks on the "Confirm Language" button from causing issues.
   - **Browser Compatibility**:
     - Test for `localStorage` availability explicitly and handle private browsing mode gracefully.

2. **Update Prompt Text**:
   - Update `index.html` to change "Shekoni" to "Shekwoni" in the English prompt.
   - Update `chatbot.js` to change "Shekoni" to "Shekwoni" in the Hausa prompt.
   - Ensure the prompt updates dynamically when switching languages.

3. **Retain Previous Fixes**:
   - Keep the generalized welcome message to avoid implying frequent routes.
   - Preserve error handling in `chatbotResponse` and `fuzzyMatch`.
   - Maintain Hausa enhancements (RTL, translations, ARIA labels, fuzzy matching).
   - Retain the completed `key` assignment in `chatbotResponse`.

4. **Deployment**:
   - Provide instructions to update both `index.html` and `chatbot.js` on GitHub Pages to ensure the changes take effect.

Below are the updated files, reusing the `artifact_id` values from the previous response since these are updates to the same files.

### File 1: `index.html`
**Changes**:
- Updated the `#lang-prompt` paragraph to "Welcome to Shekwoni Abuja Guide. Please select your preferred language."
- Ensured the English radio button is checked by default to prevent `undefined` errors.
- No other changes, as the language confirmation issue is primarily handled in `chatbot.js`.

<xaiArtifact artifact_id="46a29245-ce4f-4c89-80da-96ca09818e2f" artifact_version_id="c1173358-6001-44fe-8e8c-3b77c380d872" title="index.html" contentType="text/html">
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Abuja Commuter Chatbot</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f4f4f4; }
        #chat-container { max-width: 600px; margin: auto; background: white; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        #chat-box { height: 400px; overflow-y: scroll; padding: 10px; border-bottom: 1px solid #ddd; }
        #chat-box p { margin: 5px 0; }
        .user { text-align: right; color: #2c3e50; }
        .bot { color: #005577; }
        #input-container { display: flex; padding: 10px; }
        #user-input { flex: 1; padding: 8px; border: 1px solid #333; border-radius: 4px; font-size: 16px; }
        #send-btn { padding: 8px 16px; margin-left: 10px; background: #005577; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 16px; }
        #send-btn:hover { background: #003d55; }
        .error { color: #d32f2f; }
        #language-selection { padding: 10px; text-align: center; }
        #language-selection label { margin: 0 10px; }
        #change-lang-btn { padding: 8px 16px; background: #555; color: #fff; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
        #change-lang-btn:hover { background: #333; }
        .hausa { direction: rtl; text-align: right; font-family: 'Noto Sans Arabic', Arial, sans-serif; }
        @media (max-width: 600px) {
            #chat-container { width: 90%; }
            #user-input { font-size: 14px; }
            #send-btn { font-size: 14px; }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic&display=swap" rel="stylesheet">
</head>
<body>
    <div id="chat-container" role="region" aria-label="Chatbot interface">
        <div id="language-selection" role="radiogroup" aria-label="Select language">
            <p id="lang-prompt">Welcome to Shekwoni Abuja Guide. Please select your preferred language:</p>
            <label><input type="radio" name="language" value="english" checked> English</label>
            <label><input type="radio" name="language" value="hausa"> Hausa</label>
            <button id="change-lang-btn" aria-label="Confirm language selection">Confirm Language</button>
        </div>
        <div id="chat-box" role="log" aria-live="polite" style="display: none;">
            <p class="bot" id="welcome-message"></p>
        </div>
        <div id="input-container" style="display: none;">
            <input type="text" id="user-input" placeholder="Type your message, e.g., starting address to destination" aria-label="Enter your route query">
            <button id="send-btn" aria-label="Send message">Send</button>
        </div>
    </div>
    <script src="chatbot.js"></script>
</body>
</html>
</xaiArtifact>

### File 2: `chatbot.js`
**Changes**:
- Updated the Hausa prompt in the `setLanguage` function to "Maraba da Shekwoni Abuja Jagora. Zaɓi yaren da kake so."
- Enhanced the `change-lang-btn` event listener:
  - Added a named function `handleLanguageConfirm` to improve debugging.
  - Implemented a simple debounce mechanism to prevent multiple rapid clicks.
  - Added explicit validation for radio button selection, displaying a user-friendly error if none is selected.
  - Ensured fallback to English if an error occurs or no language is selected.
- Improved `setLanguage` function:
  - Added explicit checks for all DOM elements before manipulation.
  - Isolated `localStorage` operations in a separate try-catch block.
  - Added fallback UI transition if `localStorage` fails.
- Retained previous fixes:
  - Generalized welcome message to avoid implying frequent routes.
  - Error handling in `chatbotResponse` and `fuzzyMatch`.
  - Hausa enhancements (RTL, translations, ARIA labels, fuzzy matching).
  - Completed `key` assignment in `chatbotResponse`.
- Added commented-out console logs for debugging (to be removed in production).
- Ensured the `DOMContentLoaded` listener is robust and only binds the event listener once.

<xaiArtifact artifact_id="96cff173-255c-44a0-8beb-a590d624172a" artifact_version_id="8fe60b0d-748c-41cf-8163-ce7534f9db65" title="chatbot.js" contentType="text/javascript">
const routes = {
    "wuse2-asokoro": {
        start_address_details: {
            description: "14 Monrovia Street, Wuse 2, AMAC, near Aminu Kano Crescent. Nearest bus stop: Wuse Market (~0.5 km, 7 min). Short distance: Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "14 Monrovia Street, Wuse 2, AMAC, kusa da Aminu Kano Crescent. Tashar kusa: Kasuwar Wuse (~0.5 km, 7 min). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba hanya (200-300 NGN, 3-5 min). Okada haram.",
            distance_to_bus_stop: 0.5,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "4 JF Kennedy Street, Asokoro, AMAC, near Aso Villa. From bus stop (AYA, ~1.5 km): Along taxi (200-300 NGN, 5-7 min). Okada/keke restricted.",
            hausa_description: "4 JF Kennedy Street, Asokoro, AMAC, kusa da Aso Villa. Daga tashar (AYA, ~1.5 km): Taksi mai raba hanya (200-300 NGN, 5-7 min). Okada/keke haram.",
            distance_from_bus_stop: 1.5,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0500,7.5140"
        },
        alighting_points: {
            description: "Alight at Power House/Asokoro Bridge (~0.5 km from 4 JF Kennedy St): Trek (free, 7 min); Along taxi (200-300 NGN, 3 min). Single-mode Along taxi at night OK. Okada/keke restricted. [View on Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
            hausa_description: "Sauka a Power House/Asokoro Bridge (~0.5 km daga 4 JF Kennedy St): Tafiya (kyauta, 7 min); Taksi mai raba hanya (200-300 NGN, 3 min). Taksi mai raba hanya guda ɗaya a dare yana da kyau. Okada/keke haram. [Duba a Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
            distance_to_destination: 0.5,
            okada_allowed: false,
            keke_allowed: false,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Asokoro at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing (Uber, Bolt, inDriver). Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Asokoro a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing (Uber, Bolt, inDriver). Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "keke", "Along taxi"],
            fares: [250, 200, 1200],
            description: "From Wuse 2 (Wuse Market) to Asokoro via Ahmadu Bello Way. Total distance ~8 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            hausa_description: "Daga Wuse 2 (Kasuwar Wuse) zuwa Asokoro ta Ahmadu Bello Way. Nisa ~8 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            time: "25-35 mins",
            hausa_time: "lokacin 25-35 mins",
            traffic: "Moderate; avoid 7-9 AM peaks on Ahmadu Bello Way.",
            hausa_traffic: "Matsakaici; guji 7-9 AM cunkoso a Ahmadu Bello Way."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1500],
            description: "Via Musa Yar'Adua Expressway, faster but pricier. Total distance ~8 km. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            hausa_description: "Ta Musa Yar'Adua Expressway, sauri amma mai tsada. Nisa ~8 km. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            time: "20-30 mins",
            hausa_time: "lokacin 20-30 mins",
            traffic: "Lighter, check for construction.",
            hausa_traffic: "Mai sauki, duba aikin gini."
        }
    },
    "maitama-nyanya": {
        start_address_details: {
            description: "Maitama, AMAC, near Maitama Junction (~0.6 km). Short distance: Trek (free, 8 min); Keke (50-100 NGN, 4 min); Along taxi (200-300 NGN, 3 min). Okada restricted.",
            hausa_description: "Maitama, AMAC, kusa da Maitama Junction (~0.6 km). Gajeren nisa: Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 3 min). Okada haram.",
            distance_to_bus_stop: 0.6,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0850,7.4930"
        },
        end_address_details: {
            description: "Nyanya, AMAC, from Nyanya Bridge (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Nyanya, AMAC, daga Nyanya Bridge (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=9.0030,7.5770"
        },
        alighting_points: {
            description: "Alight at Nyanya Market (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night due to security concerns. [View on Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
            hausa_description: "Sauka a Kasuwar Nyanya (~0.6 km): Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba hanya (200-300 NGN, 3 min). Yi amfani da e-hailing a dare saboda tsaro. [Duba a Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
            distance_to_destination: 0.6,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Nyanya at night (after 8 PM or before 6 AM) or due to security concerns, use e-hailing (Uber, Bolt, inDriver). Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Nyanya a dare (bayan 8 PM ko kafin 6 AM) ko saboda matsalolin tsaro, yi amfani da e-hailing (Uber, Bolt, inDriver). Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [300, 1500],
            description: "From Maitama Junction to Nyanya via A2 Road. Total distance ~10 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            hausa_description: "Daga Maitama Junction zuwa Nyanya ta A2 Road. Nisa ~10 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            time: "40-50 mins",
            hausa_time: "lokacin 40-50 mins",
            traffic: "Heavy on Nyanya-Maraba road 5-8 PM; expect delays.",
            hausa_traffic: "Mai nauyi a Nyanya-Maraba 5-8 PM; sa ran jinkiri."
        },
        alternative_route: {
            transport: ["keke", "Along taxi"],
            fares: [250, 1600],
            description: "Via Kubwa Expressway, less crowded but longer. [View route on Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            hausa_description: "Ta Kubwa Expressway, ba cunkoso amma nisa mai tsayi. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            time: "45-55 mins",
            hausa_time: "lokacin 45-55 mins",
            traffic: "Better during peaks; watch Kubwa bottlenecks.",
            hausa_traffic: "Mafi kyau a lokacin cunkoso; kula da Kubwa."
        }
    },
    "wuse2-gwagwalada": {
        start_address_details: {
            description: "Wuse 2, AMAC, near Wuse Market (~0.5 km). Short distance: Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, AMAC, kusa da Kasuwar Wuse (~0.5 km). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba hanya (200-300 NGN, 3-5 min). Okada haram.",
            distance_to_bus_stop: 0.5,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=8.9450,7.0670"
        },
        alighting_points: {
            description: "Alight at Gwagwalada Park (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            hausa_description: "Sauka a Gwagwalada Park (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba haya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            distance_to_destination: 0.5,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Gwagwalada at night (after 8 PM or before 6 AM) or due to security concerns, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Gwagwalada a dare (bayan 8 PM ko kafin 6 AM) ko saboda tsaro, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [500, 2000],
            description: "From Wuse 2 to Gwagwalada via Airport Road. Total distance ~25 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            hausa_description: "Daga Wuse 2 zuwa Gwagwalada ta Airport Road. Nisa ~25 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            time: "60-80 mins",
            hausa_time: "lokacin 60-80 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours.",
            hausa_traffic: "Mai nauyi 4-7 PM; guji lokutan cunkoso."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2500],
            description: "Via Dantata Road, longer but less traffic. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            hausa_description: "Ta Dantata Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            time: "65-85 mins",
            hausa_time: "lokacin 65-85 mins",
            traffic: "Lighter, check road conditions.",
            hausa_traffic: "Mai sauki, duba yanayin hanya."
        }
    },
    "asokoro-kuje": {
        start_address_details: {
            description: "Asokoro, AMAC, near AYA (~0.7 km). Short distance: Trek (free, 10 min); Along taxi (200-300 NGN, 4 min). Okada/keke restricted.",
            hausa_description: "Asokoro, AMAC, kusa da AYA (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Taksi mai raba hanya (200-300 NGN, 4 min). Okada/keke haram.",
            distance_to_bus_stop: 0.7,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0500,7.5140"
        },
        end_address_details: {
            description: "Kuje, near Kuje Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kuje, kusa da Kasuwar Kuje (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.8790,7.2270"
        },
        alighting_points: {
            description: "Alight at Kuje Junction (~0.4 km): Trek (free, 6 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.8800,7.2280).",
            hausa_description: "Sauka a Kuje Junction (~0.4 km): Tafiya (kyauta, 6 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba hanya (200-300 NGN, 2 min). Taksi mai raba hanya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.8800,7.2280).",
            distance_to_destination: 0.4,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Kuje at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Kuje a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [400, 1800],
            description: "From Asokoro to Kuje via Airport Road. Total distance ~20 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            hausa_description: "Daga Asokoro zuwa Kuje ta Airport Road. Nisa ~20 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            time: "50-70 mins",
            hausa_time: "lokacin 50-70 mins",
            traffic: "Moderate; heavy 4-7 PM on Airport Road.",
            hausa_traffic: "Matsakaici; mai nauyi 4-7 PM a Airport Road."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2000],
            description: "Via Gwagwalada Road, longer but avoids city traffic. [View route on Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            hausa_description: "Ta Gwagwalada Road, nisa amma guji cunkoson birni. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            time: "55-75 mins",
            hausa_time: "lokacin 55-75 mins",
            traffic: "Lighter, check roadworks.",
            hausa_traffic: "Mai sauki, duba aikin hanya."
        }
    },
    "garki-bwari": {
        start_address_details: {
            description: "Garki, AMAC, near Area 1 Roundabout (~0.6 km). Short distance: Trek (free, 8 min); Keke (50-100 NGN, 4 min); Along taxi (200-300 NGN, 3 min). Okada restricted.",
            hausa_description: "Garki, AMAC, kusa da Area 1 Roundabout (~0.6 km). Gajeren nisa: Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 3 min). Okada haram.",
            distance_to_bus_stop: 0.6,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0160,7.4820"
        },
        end_address_details: {
            description: "Bwari, near Bwari Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Bwari, kusa da Kasuwar Bwari (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.1350,7.3690"
        },
        alighting_points: {
            description: "Alight at Bwari Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
            hausa_description: "Sauka a Bwari Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba haya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
            distance_to_destination: 0.5,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Bwari at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Bwari a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [350, 1600],
            description: "From Garki to Bwari via Kubwa Expressway. Total distance ~15 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            hausa_description: "Daga Garki zuwa Bwari ta Kubwa Expressway. Nisa ~15 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            time: "40-60 mins",
            hausa_time: "lokacin 40-60 mins",
            traffic: "Moderate; heavy 5-7 PM on Kubwa road.",
            hausa_traffic: "Matsakaici; mai nauyi 5-7 PM a Kubwa road."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1800],
            description: "Via Dutse Road, longer but less congested. [View route on Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            hausa_description: "Ta Dutse Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            time: "45-65 mins",
            hausa_time: "lokacin 45-65 mins",
            traffic: "Lighter, check for construction.",
            hausa_traffic: "Mai sauki, duba aikin gini."
        }
    },
    "wuse2-abaji": {
        start_address_details: {
            description: "Wuse 2, AMAC, near Wuse Market (~0.5 km). Short distance: Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, AMAC, kusa da Kasuwar Wuse (~0.5 km). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba hanya (200-300 NGN, 3-5 min). Okada haram.",
            distance_to_bus_stop: 0.5,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.4780,6.7910"
        },
        alighting_points: {
            description: "Alight at Abaji Junction (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night if >0.5 km. [View on Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            hausa_description: "Sauka a Abaji Junction (~0.6 km): Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba haya (200-300 NGN, 3 min). Yi amfani da e-hailing a dare idan fiye da 0.5 km. [Duba a Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            distance_to_destination: 0.6,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Abaji at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Abaji a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [600, 2500],
            description: "From Wuse 2 to Abaji via Airport Road and Gwagwalada. Total distance ~40 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            hausa_description: "Daga Wuse 2 zuwa Abaji ta Airport Road da Gwagwalada. Nisa ~40 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            time: "90-120 mins",
            hausa_time: "lokacin 90-120 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours.",
            hausa_traffic: "Mai nauyi 4-7 PM; guji lokutan cunkoso."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [3000],
            description: "Via Toto Road, longer but less traffic. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            hausa_description: "Ta Toto Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            time: "100-130 mins",
            hausa_time: "lokacin 100-130 mins",
            traffic: "Lighter, check road conditions.",
            hausa_traffic: "Mai sauki, duba yanayin hanya."
        }
    },
    "wuse2-kwali": {
        start_address_details: {
            description: "Wuse 2, AMAC, near Wuse Market (~0.5 km). Short distance: Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, AMAC, kusa da Kasuwar Wuse (~0.5 km). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba hanya (200-300 NGN, 3-5 min). Okada haram.",
            distance_to_bus_stop: 0.5,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Kwali, near Kwali Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kwali, kusa da Kasuwar Kwali (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.8330,7.0400"
        },
        alighting_points: {
            description: "Alight at Kwali Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.8340,7.0410).",
            hausa_description: "Sauka a Kwali Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba haya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.8340,7.0410).",
            distance_to_destination: 0.5,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Kwali at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Kwali a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [550, 2200],
            description: "From Wuse 2 to Kwali via Airport Road and Gwagwalada. Total distance ~35 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.8340,7.0410).",
            hausa_description: "Daga Wuse 2 zuwa Kwali ta Airport Road da Gwagwalada. Nisa ~35 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.8340,7.0410).",
            time: "80-110 mins",
            hausa_time: "lokacin 80-110 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours.",
            hausa_traffic: "Mai nauyi 4-7 PM; guji lokutan cunkoso."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2700],
            description: "Via Abaji Road, longer but less traffic. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.8340,7.0410).",
            hausa_description: "Ta Abaji Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.8340,7.0410).",
            time: "85-115 mins",
            hausa_time: "lokacin 85-115 mins",
            traffic: "Lighter, check road conditions.",
            hausa_traffic: "Mai sauki, duba yanayin hanya."
        }
    },
    "kuje-gwagwalada": {
        start_address_details: {
            description: "Kuje, near Kuje Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kuje, kusa da Kasuwar Kuje (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_to_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.8790,7.2270"
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=8.9450,7.0670"
        },
        alighting_points: {
            description: "Alight at Gwagwalada Park (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            hausa_description: "Sauka a Gwagwalada Park (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba haya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            distance_to_destination: 0.5,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Gwagwalada at night (after 8 PM or before 6 AM) or due to security concerns, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Gwagwalada a dare (bayan 8 PM ko kafin 6 AM) ko saboda tsaro, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [300, 1200],
            description: "From Kuje to Gwagwalada via Gwagwalada Road. Total distance ~15 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            hausa_description: "Daga Kuje zuwa Gwagwalada ta Gwagwalada Road. Nisa ~15 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            time: "40-60 mins",
            hausa_time: "lokacin 40-60 mins",
            traffic: "Moderate; heavy 4-7 PM.",
            hausa_traffic: "Matsakaici; mai nauyi 4-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1400],
            description: "Via Airport Road, longer but less congested. [View route on Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            hausa_description: "Ta Airport Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            time: "45-65 mins",
            hausa_time: "lokacin 45-65 mins",
            traffic: "Lighter, check road conditions.",
            hausa_traffic: "Mai sauki, duba yanayin hanya."
        }
    },
    "bwari-abaji": {
        start_address_details: {
            description: "Bwari, near Bwari Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Bwari, kusa da Kasuwar Bwari (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_to_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.1350,7.3690"
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.4780,6.7910"
        },
        alighting_points: {
            description: "Alight at Abaji Junction (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night if >0.5 km. [View on Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            hausa_description: "Sauka a Abaji Junction (~0.6 km): Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba haya (200-300 NGN, 3 min). Yi amfani da e-hailing a dare idan fiye da 0.5 km. [Duba a Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            distance_to_destination: 0.6,
            okada_allowed: true,
            keke_allowed: true,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Abaji at night (after 8 PM or before 6 AM) if alighting point >0.5 km or multiple modes needed, use e-hailing. Price range for ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable).",
            hausa_description: "Don nisa na ƙarshe a Abaji a dare (bayan 8 PM ko kafin 6 AM) idan sauka fiye da 0.5 km ko buƙatar motoci da yawa, yi amfani da e-hailing. Farashin ~3 km: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa)."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [500, 2000],
            description: "From Bwari to Abaji via Airport Road. Total distance ~30 km. Use public transport for main route. [View route on Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            hausa_description: "Daga Bwari zuwa Abaji ta Airport Road. Nisa ~30 km. Yi amfani da motocin jama'a don babban hanya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            time: "70-100 mins",
            hausa_time: "lokacin 70-100 mins",
            traffic: "Moderate; heavy 4-7 PM.",
            hausa_traffic: "Matsakaici; mai nauyi 4-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2300],
            description: "Via Gwagwalada Road, longer but less traffic. [View route on Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            hausa_description: "Ta Gwagwalada Road, nisa amma ba cunkoso. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            time: "75-105 mins",
            hausa_time: "lokacin 75-105 mins",
            traffic: "Lighter, check road conditions.",
            hausa_traffic: "Mai sauki, duba yanayin hanya."
        }
    }
};

// Enhanced fuzzy matching for Hausa
function fuzzyMatch(input, target) {
    try {
        const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanTarget = target.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanInput.includes(cleanTarget)) return true;
        // Hausa-specific transliterations and common misspellings
        const hausaVariations = {
            'wuse': ['wushe', 'wuse2', 'wuseii'],
            'asokoro': ['asokor', 'asokoru'],
            'maitama': ['maytama', 'maitamma'],
            'nyanya': ['nyanyan', 'nanya'],
            'gwagwalada': ['gwagwalda', 'gwalada'],
            'kuje': ['kuji', 'kujeh'],
            'garki': ['garkee', 'garkii'],
            'bwari': ['bware', 'bwarii'],
            'abaji': ['abajii', 'abaje'],
            'kwali': ['kwalli', 'kwale']
        };
        const variations = hausaVariations[target] || [];
        if (variations.some(v => cleanInput.includes(v))) return true;
        let differences = 0;
        for (let i = 0; i < Math.min(cleanInput.length, cleanTarget.length); i++) {
            if (cleanInput[i] !== cleanTarget[i]) differences++;
            if (differences > 2) return false;
        }
        return true;
    } catch (e) {
        // console.log('FuzzyMatch Error:', e.message);
        return false;
    }
}

function suggestLocation(input) {
    const locations = ["wuse2", "asokoro", "maitama", "nyanya", "gwagwalada", "kuje", "garki", "bwari", "abaji", "kwali"];
    return locations.find(loc => fuzzyMatch(input, loc)) || null;
}

let selectedLanguage = null;
let isProcessing = false; // Debounce flag

// Check for localStorage availability
function isLocalStorageAvailable() {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

// Initialize saved language preference
if (isLocalStorageAvailable()) {
    try {
        selectedLanguage = localStorage.getItem('selectedLanguage') || null;
    } catch (e) {
        // console.log('localStorage Get Error:', e.message);
    }
}

function setLanguage(language) {
    try {
        selectedLanguage = language;

        // Save language preference if localStorage is available
        if (isLocalStorageAvailable()) {
            try {
                localStorage.setItem('selectedLanguage', language);
            } catch (e) {
                // console.log('localStorage Set Error:', e.message);
            }
        }

        // Get DOM elements
        const chatContainer = document.getElementById('chat-container');
        const langPrompt = document.getElementById('lang-prompt');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const changeLangBtn = document.getElementById('change-lang-btn');
        const welcomeMessage = document.getElementById('welcome-message');
        const languageSelection = document.getElementById('language-selection');
        const chatBox = document.getElementById('chat-box');
        const inputContainer = document.getElementById('input-container');

        // Validate DOM elements
        if (!chatContainer || !langPrompt || !userInput || !sendBtn || !changeLangBtn || !welcomeMessage || !languageSelection || !chatBox || !inputContainer) {
            throw new Error('Missing critical DOM elements');
        }

        // Perform UI transition
        languageSelection.style.display = 'none';
        chatBox.style.display = 'block';
        inputContainer.style.display = 'flex';

        // Update UI based on language
        if (language === 'hausa') {
            chatContainer.classList.add('hausa');
            langPrompt.innerHTML = 'Maraba da Shekwoni Abuja Jagora. Zaɓi yaren da kake so:';
            userInput.placeholder = 'Rubuta tambayarka, misali, adireshi na farko zuwa na ƙarshe';
            userInput.setAttribute('aria-label', 'Shigar da tambayar hanya');
            sendBtn.innerHTML = 'Aika';
            sendBtn.setAttribute('aria-label', 'Aika saƙo');
            changeLangBtn.innerHTML = 'Zaɓi Yare';
            changeLangBtn.setAttribute('aria-label', 'Zaɓi yaren da kake so');
            welcomeMessage.innerHTML = 'Sannu! Shigar da adireshi don jagorar hanya. Zan ba da shawarar motocin jama\'a (Bas, keke, Taksi mai raba hanya) don babban hanya da e-hailing don nisa na ƙarshe idan ba tsaro a dare.';
        } else {
            chatContainer.classList.remove('hausa');
            langPrompt.innerHTML = 'Welcome to Shekwoni Abuja Guide. Please select your preferred language:';
            userInput.placeholder = 'Type your message, e.g., starting address to destination';
            userInput.setAttribute('aria-label', 'Enter your route query');
            sendBtn.innerHTML = 'Send';
            sendBtn.setAttribute('aria-label', 'Send message');
            changeLangBtn.innerHTML = 'Confirm Language';
            changeLangBtn.setAttribute('aria-label', 'Confirm language selection');
            welcomeMessage.innerHTML = 'Welcome! Enter addresses for route guidance. I\'ll suggest public transport (Bus, keke, Along taxi) for main routes and e-hailing for last-mile in destination Area Councils at night or if less safe.';
        }
    } catch (e) {
        // console.log('setLanguage Error:', e.message);
        const welcomeMessage = document.getElementById('welcome-message');
        const languageSelection = document.getElementById('language-selection');
        const chatBox = document.getElementById('chat-box');
        const inputContainer = document.getElementById('input-container');
        if (welcomeMessage && languageSelection && chatBox && inputContainer) {
            welcomeMessage.innerHTML = 'Error loading language. Defaulting to English.';
            languageSelection.style.display = 'none';
            chatBox.style.display = 'block';
            inputContainer.style.display = 'flex';
            setLanguage('english'); // Fallback to English
        }
    }
}

// Handle language confirmation click
function handleLanguageConfirm() {
    if (isProcessing) return; // Prevent multiple clicks
    isProcessing = true;
    setTimeout(() => { isProcessing = false; }, 500); // Debounce for 500ms

    try {
        const selectedRadio = document.querySelector('input[name="language"]:checked');
        const langPrompt = document.getElementById('lang-prompt');
        if (!langPrompt) {
            throw new Error('Language prompt element missing');
        }

        if (!selectedRadio) {
            langPrompt.innerHTML = selectedLanguage === 'hausa'
                ? 'Kuskure: Zaɓi yare kafin ci gaba.'
                : 'Error: Please select a language before proceeding.';
            langPrompt.style.color = '#d32f2f';
            return;
        }

        const language = selectedRadio.value;
        setLanguage(language);
    } catch (e) {
        // console.log('handleLanguageConfirm Error:', e.message);
        const langPrompt = document.getElementById('lang-prompt');
        if (langPrompt) {
            langPrompt.innerHTML = 'Error changing language. Defaulting to English.';
            langPrompt.style.color = '#d32f2f';
        }
        setLanguage('english'); // Fallback to English
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize saved language preference
    if (selectedLanguage) {
        try {
            setLanguage(selectedLanguage);
            const radioInput = document.querySelector(`input[name="language"][value="${selectedLanguage}"]`);
            if (radioInput) {
                radioInput.checked = true;
            }
        } catch (e) {
            // console.log('Language Initialization Error:', e.message);
            setLanguage('english'); // Fallback to English
        }
    }

    // Bind language confirmation button
    const changeLangBtn = document.getElementById('change-lang-btn');
    if (changeLangBtn) {
        // Remove any existing listeners to prevent duplicates
        changeLangBtn.removeEventListener('click', handleLanguageConfirm);
        changeLangBtn.addEventListener('click', handleLanguageConfirm);
    } else {
        // console.log('Error: change-lang-btn not found');
        setLanguage('english'); // Fallback to English if button is missing
    }

    // Bind send button
    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        sendBtn.addEventListener('click', () => {
            try {
                const userInput = document.getElementById('user-input').value.trim();
                if (!userInput) return;
                const chatBox = document.getElementById('chat-box');
                const userMessage = document.createElement('p');
                userMessage.className = 'user';
                userMessage.innerHTML = userInput.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                chatBox.appendChild(userMessage);
                const botResponse = chatbotResponse(userInput);
                const botMessage = document.createElement('p');
                botMessage.className = 'bot';
                botMessage.innerHTML = botResponse;
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
                document.getElementById('user-input').value = '';
            } catch (e) {
                // console.log('Send Button Error:', e.message);
