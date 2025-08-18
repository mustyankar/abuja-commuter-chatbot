I understand you want to remove the "loading frequent routes" feature from the Abuja Commuter Chatbot and address the issue of the program not responding. Since the previous response provided updated `index.html` and `chatbot.js` files with Hausa language enhancements, I'll assume you're referring to those files. However, the provided code doesn't explicitly include a "loading frequent routes" feature, which suggests either a misunderstanding or a remnant from a previous version you might be working with. Additionally, the "not responding" issue indicates potential errors in the code or deployment. I'll analyze the provided code for faults, remove any potential references to frequent routes, and ensure the chatbot is responsive by reconciling errors.

### Fault Detection
1. **"Loading Frequent Routes" Issue**:
   - The provided `index.html` and `chatbot.js` do not display or load frequent routes explicitly (e.g., no UI element or function lists routes like "Wuse to Asokoro" on load).
   - However, the welcome message in `chatbot.js` might be interpreted as implying frequent routes by suggesting example inputs (e.g., "From Wuse to Asokoro"). If this is the source of confusion, I’ll revise the welcome message to avoid suggesting specific routes.
   - If you’re seeing "loading frequent routes" in the UI, it might be from an older version of the code or a deployment mismatch. I’ll ensure the code explicitly avoids any such feature.

2. **"Not Responding" Issue**:
   - Possible causes:
     - **JavaScript Errors**: Syntax errors, undefined variables, or broken event listeners in `chatbot.js` could cause the chatbot to freeze.
     - **DOM Issues**: Incorrect element IDs or missing elements in `index.html` could prevent interaction.
     - **Deployment Issues**: Files not correctly uploaded to GitHub Pages or cached versions causing inconsistencies.
     - **Language Persistence**: Issues with `localStorage` or language switching logic could make the UI seem unresponsive.
   - I’ll check for:
     - Syntax errors in `chatbot.js`.
     - Event listener functionality (e.g., `send-btn` and `keypress`).
     - Robustness of the `fuzzyMatch` and `chatbotResponse` functions.
     - Console errors that might indicate runtime issues.

3. **Code Analysis**:
   - **Syntax**: The provided `chatbot.js` has a truncated line in the `chatbotResponse` function (incomplete `response` string for English alternative route). This could cause a syntax error, making the chatbot unresponsive.
   - **Event Listeners**: The `send-btn` and `keypress` listeners are correctly set up, but if the `chatbotResponse` function throws an error, clicks or keypresses won’t work.
   - **Fuzzy Matching**: The `fuzzyMatch` function is robust but could be slow for long inputs. I’ll optimize it to prevent performance bottlenecks.
   - **Language Switching**: The `setLanguage` function uses `localStorage` and dynamically updates the UI, which should work but might fail if `localStorage` is disabled or if the browser doesn’t support it.
   - **Hausa Enhancements**: The Hausa-specific logic (RTL, translations, ARIA labels) is correct, but I’ll ensure it doesn’t interfere with responsiveness.

### Reconciliation Plan
1. **Remove Frequent Routes**:
   - Remove any implication of frequent routes from the welcome message.
   - Ensure no UI or logic attempts to load or suggest routes automatically.

2. **Fix Non-Responsiveness**:
   - Complete the truncated `response` string in `chatbotResponse`.
   - Add error handling to prevent crashes from invalid inputs.
   - Optimize `fuzzyMatch` for performance.
   - Add a fallback for `localStorage` issues.
   - Include console logs for debugging (to be removed in production).
   - Validate DOM element references.

3. **Hausa Enhancements**:
   - Retain all Hausa-specific improvements (RTL, translations, ARIA labels, fuzzy matching for Hausa terms).
   - Ensure Hausa input validation is robust and doesn’t cause unresponsiveness.

4. **Deployment**:
   - Provide clear instructions to update GitHub Pages and clear cache to avoid running an outdated version.

Below are the updated `index.html` and `chatbot.js` files, with the frequent routes reference removed and errors reconciled. I’ll keep the same `artifact_id` values as the previous response since these are updates to the same files.

### File 1: `index.html`
**Changes**:
- No changes needed, as the HTML doesn’t reference frequent routes and has no structural issues affecting responsiveness.
- Retained for completeness and to ensure correct deployment.

<xaiArtifact artifact_id="46a29245-ce4f-4c89-80da-96ca09818e2f" artifact_version_id="d908f7d1-92d7-43c9-bf66-8095bccadf15" title="index.html" contentType="text/html">
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
            <p id="lang-prompt">Please select your preferred language:</p>
            <label><input type="radio" name="language" value="english" checked> English</label>
            <label><input type="radio" name="language" value="hausa"> Hausa</label>
            <button id="change-lang-btn" aria-label="Confirm language selection">Confirm Language</button>
        </div>
        <div id="chat-box" role="log" aria-live="polite" style="display: none;">
            <p class="bot" id="welcome-message"></p>
        </div>
        <div id="input-container" style="display: none;">
            <input type="text" id="user-input" placeholder="Type your message, e.g., 'From Wuse to Asokoro'" aria-label="Enter your route query">
            <button id="send-btn" aria-label="Send message">Send</button>
        </div>
    </div>
    <script src="chatbot.js"></script>
</body>
</html>
</xaiArtifact>

### File 2: `chatbot.js`
**Changes**:
- **Removed Frequent Routes**:
  - Modified the welcome message to be generic, removing specific route examples (e.g., "Wuse to Asokoro") to avoid implying frequent routes.
- **Fixed Non-Responsiveness**:
  - Completed the truncated `response` string in `chatbotResponse`.
  - Added try-catch blocks to handle invalid inputs gracefully.
  - Optimized `fuzzyMatch` by limiting variation checks for performance.
  - Added a fallback for `localStorage` failures.
  - Added input sanitization to prevent XSS or malformed inputs.
- **Retained Hausa Enhancements**:
  - Kept RTL support, Hausa translations, ARIA labels, and fuzzy matching for Hausa terms.
- **Error Handling**:
  - Added console logs for debugging (commented out for production).
  - Improved error messages to guide users without crashing.
- **Code Structure**:
  - Kept the `routes` object unchanged, as it’s necessary for functionality and doesn’t load routes automatically.

<xaiArtifact artifact_id="96cff173-255c-44a0-8beb-a590d624172a" artifact_version_id="1ee9fd53-3fda-4636-90f7-f899ffdf9838" title="chatbot.js" contentType="text/javascript">
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
            description: "Via Musa Yar'Adua Expressway, faster but pricier. [View route on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            hausa_description: "Ta Musa Yar'Adua Expressway, sauri amma mai tsada. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
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
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=8.9450,7.0670"
        },
        alighting_points: {
            description: "Alight at Gwagwalada Park (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            hausa_description: "Sauka a Gwagwalada Park (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba hanya (200-300 NGN, 2 min). Taksi mai raba hanya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
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
            hausa_description: "Sauka a Bwari Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba hanya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
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
try {
    selectedLanguage = localStorage.getItem('selectedLanguage') || null;
} catch (e) {
    // console.log('localStorage Error:', e.message);
}

function setLanguage(language) {
    try {
        selectedLanguage = language;
        localStorage.setItem('selectedLanguage', language);
        document.getElementById('language-selection').style.display = 'none';
        document.getElementById('chat-box').style.display = 'block';
        document.getElementById('input-container').style.display = 'flex';

        const chatContainer = document.getElementById('chat-container');
        const langPrompt = document.getElementById('lang-prompt');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const changeLangBtn = document.getElementById('change-lang-btn');
        const welcomeMessage = document.getElementById('welcome-message');

        if (language === 'hausa') {
            chatContainer.classList.add('hausa');
            langPrompt.innerHTML = 'Zaɓi yaren da kake so:';
            userInput.placeholder = 'Rubuta tambayarka, misali, adireshi na farko zuwa na ƙarshe';
            userInput.setAttribute('aria-label', 'Shigar da tambayar hanya');
            sendBtn.innerHTML = 'Aika';
            sendBtn.setAttribute('aria-label', 'Aika saƙo');
            changeLangBtn.innerHTML = 'Zaɓi Yare';
            changeLangBtn.setAttribute('aria-label', 'Zaɓi yaren da kake so');
            welcomeMessage.innerHTML = 'Sannu! Shigar da adireshi don jagorar hanya. Zan ba da shawarar motocin jama\'a (Bas, keke, Taksi mai raba hanya) don babban hanya da e-hailing don nisa na ƙarshe idan ba tsaro a dare.';
        } else {
            chatContainer.classList.remove('hausa');
            langPrompt.innerHTML = 'Please select your preferred language:';
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
        welcomeMessage.innerHTML = 'Error loading language. Please refresh the page.';
    }
}

// Check for saved language preference
if (selectedLanguage) {
    try {
        setLanguage(selectedLanguage);
        document.querySelector(`input[name="language"][value="${selectedLanguage}"]`).checked = true;
    } catch (e) {
        // console.log('Language Initialization Error:', e.message);
    }
}

document.getElementById('change-lang-btn').addEventListener('click', () => {
    try {
        const language = document.querySelector('input[name="language"]:checked').value;
        setLanguage(language);
    } catch (e) {
        // console.log('Change Language Error:', e.message);
        document.getElementById('welcome-message').innerHTML = 'Error changing language. Please try again.';
    }
});

document.getElementById('send-btn').addEventListener('click', () => {
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
        const chatBox = document.getElementById('chat-box');
        const botMessage = document.createElement('p');
        botMessage.className = 'bot error';
        botMessage.innerHTML = selectedLanguage === 'hausa' ? 'Kuskure: Ba za a iya sarrafa tambayar ba. Gwada kuma.' : 'Error: Could not process request. Please try again.';
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});

document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function chatbotResponse(userInput) {
    try {
        let input = userInput.toLowerCase().trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
        let isHausaInput = input.includes("daga") && input.includes("zuwa");
        let hasAddress = input.includes("street") || input.includes("close") || input.includes("inwuse2") || input.includes("asokoro") || input.includes("nyanya") || input.includes("gwagwalada") || input.includes("kuje") || input.includes("bwari") || input.includes("abaji") || input.includes("kwali");

        // Validate language consistency
        if (selectedLanguage === 'hausa' && !isHausaInput) {
            return 'Don Allah shigar da tambaya cikin Hausa, misali, "Daga Wuse zuwa Asokoro". <span class="error">Kuskure: A shigar da Hausa.</span>';
        } else if (selectedLanguage === 'english' && isHausaInput) {
            return 'Please use English, e.g., "From Wuse to Asokoro". <span class="error">Error: Use English input.</span>';
        }

        // Parse input
        let start, end;
        if (isHausaInput) {
            try {
                start = input.split("daga")[1].split("zuwa")[0].trim();
                end = input.split("zuwa")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Don Allah fayyace hanyarka, misali, "Daga Wuse zuwa Asokoro". <span class="error">Kuskure: Tsari ba daidai ba ne.</span>'
                    : 'Please clarify your route, e.g., "From Wuse to Asokoro". <span class="error">Error: Invalid format.</span>';
            }
        } else if (input.includes("from") && input.includes("to")) {
            try {
                start = input.split("from")[1].split("to")[0].trim();
                end = input.split("to")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Don Allah fayyace hanyarka, misali, "Daga Wuse zuwa Asokoro". <span class="error">Kuskure: Tsari ba daidai ba ne.</span>'
                    : 'Please clarify your route, e.g., "From Wuse to Asokoro". <span class="error">Error: Invalid format.</span>';
            }
        } else {
            return selectedLanguage === 'hausa'
                ? 'Don Allah ka ji "Daga" da "Zuwa", misali, "Daga Wuse zuwa Asokoro". <span class="error">Kuskure: Rashin "daga"/"zuwa".</span>'
                : 'Please use "From" and "To", e.g., "From Wuse to Asokoro". <span class="error">Error: Missing "from"/"to".</span>';
        }

        // Fuzzy matching for locations
        const startSuggestion = suggestLocation(start);
        const endSuggestion = suggestLocation(end);
        if (!startSuggestion || !endSuggestion) {
            return selectedLanguage === 'hausa'
                ? `Shin kana nufin daga ${startSuggestion || start} zuwa ${endSuggestion || end}? Gwada kuma. <span class="error">Kuskure: Wuri ba a gane shi ba.</span>`
                : `Did you mean from ${startSuggestion || start} to ${endSuggestion || end}? Please try again. <span class="error">Error: Unrecognized location.</span>`;
        }

        start = startSuggestion;
        end = endSuggestion;

        // Map to key
        let key = `${start.replace(/[0-9]/g, '').replace('monroviastreetin',
