const locations = {
    "wuse2": { lat: 9.0656, lon: 7.4686 },
    "asokoro": { lat: 9.0500, lon: 7.5140 },
    "maitama": { lat: 9.0850, lon: 7.4930 },
    "nyanya": { lat: 9.0030, lon: 7.5770 },
    "gwagwalada": { lat: 8.9450, lon: 7.0670 },
    "kuje": { lat: 8.8790, lon: 7.2270 },
    "garki": { lat: 9.0160, lon: 7.4820 },
    "bwari": { lat: 9.1350, lon: 7.3690 },
    "abaji": { lat: 8.4780, lon: 6.7910 },
    "kwali": { lat: 8.7080, lon: 6.9390 },
    "gwako": { lat: 8.9167, lon: 7.0667 },
    "yaba": { lat: 8.9, lon: 7.2 },
    "pai": { lat: 8.75, lon: 7.05 }
};

const routes = {
    "wuse2-asokoro": {
        start_address_details: {
            description: "Wuse 2, near Wuse Market (~0.5 km). Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, kusa da Kasuwar Wuse (~0.5 km). Tafiya (kyauta, 7 min); Keke (50-100 NGN, 5 min); Taksi mai raba (200-300 NGN, 3-5 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Asokoro, near Aso Villa. From bus stop (AYA, ~1.5 km): Along taxi (200-300 NGN, 5-7 min). Okada/keke restricted.",
            hausa_description: "Asokoro, kusa da Aso Villa. Daga tashar (AYA, ~1.5 km): Taksi mai raba (200-300 NGN, 5-7 min). Okada/keke haram.",
            map_link: "https://maps.google.com/?q=9.0500,7.5140"
        },
        alighting_points: {
            description: "Alight at Power House/Asokoro Bridge (~0.5 km from destination): Trek (free, 7 min); Along taxi (200-300 NGN, 3 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
            hausa_description: "Sauka a Power House/Asokoro Bridge (~0.5 km daga wurin): Tafiya (kyauta, 7 min); Taksi mai raba (200-300 NGN, 3 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
            distance_to_destination: 0.5,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Asokoro at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Asokoro a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "keke", "Along taxi"],
            fares: [250, 200, 1200],
            description: "Wuse 2 to Asokoro via Ahmadu Bello Way (~8 km). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            hausa_description: "Daga Wuse 2 zuwa Asokoro ta Ahmadu Bello Way (~8 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            time: "25-35 mins",
            hausa_time: "lokacin 25-35 mins",
            traffic: "Moderate; avoid 7-9 AM peaks."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1500],
            description: "Via Musa Yar'Adua Expressway (~8 km, faster but pricier). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            hausa_description: "Ta Musa Yar'Adua Expressway (~8 km, sauri amma mai tsada). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=9.0510,7.5120).",
            time: "20-30 mins",
            hausa_time: "lokacin 20-30 mins",
            traffic: "Lighter, check for construction."
        }
    },
    "maitama-nyanya": {
        start_address_details: {
            description: "Maitama, near Maitama Junction (~0.6 km). Trek (free, 8 min); Keke (50-100 NGN, 4 min); Along taxi (200-300 NGN, 3 min). Okada restricted.",
            hausa_description: "Maitama, kusa da Maitama Junction (~0.6 km). Tafiya (kyauta, 8 min); Keke (50-100 NGN, 4 min); Taksi mai raba (200-300 NGN, 3 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0850,7.4930"
        },
        end_address_details: {
            description: "Nyanya, near Nyanya Bridge (~0.9 km). Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Nyanya, kusa da Nyanya Bridge (~0.9 km). Tafiya (kyauta, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=9.0030,7.5770"
        },
        alighting_points: {
            description: "Alight at Nyanya Market (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night. [View on Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
            hausa_description: "Sauka a Kasuwar Nyanya (~0.6 km): Tafiya (kyauta, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba (200-300 NGN, 3 min). E-hailing a dare. [Duba Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
            distance_to_destination: 0.6,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Nyanya at night or due to security concerns, use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Nyanya a dare ko saboda tsaro, yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [300, 1500],
            description: "Maitama to Nyanya via A2 Road (~10 km). [View on Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            hausa_description: "Daga Maitama zuwa Nyanya ta A2 Road (~10 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            time: "40-50 mins",
            hausa_time: "lokacin 40-50 mins",
            traffic: "Heavy on Nyanya-Maraba road 5-8 PM."
        },
        alternative_route: {
            transport: ["Keke", "Along taxi"],
            fares: [250, 1600],
            description: "Via Kubwa Expressway (~12 km, less crowded). [View on Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            hausa_description: "Ta Kubwa Expressway (~12 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
            time: "45-55 mins",
            hausa_time: "lokacin 45-55 mins",
            traffic: "Lighter, watch Kubwa bottlenecks."
        }
    },
    "wuse2-gwagwalada": {
        start_address_details: {
            description: "Wuse 2, near Wuse Market (~0.5 km). Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, kusa da Kasuwar Wuse (~0.5 km). Tafiya (kyauta, 7 min); Keke (50-100 NGN, 5 min); Taksi mai raba (200-300 NGN, 3-5 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.9450,7.0670"
        },
        alighting_points: {
            description: "Alight at Gwagwalada Park (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            hausa_description: "Sauka a Gwagwalada Park (~0.5 km): Tafiya (kyauta, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba (200-300 NGN, 2 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            distance_to_destination: 0.5,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Gwagwalada at night or due to security concerns, use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Gwagwalada a dare ko saboda tsaro, yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [500, 2000],
            description: "Wuse 2 to Gwagwalada via Airport Road (~25 km). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            hausa_description: "Daga Wuse 2 zuwa Gwagwalada ta Airport Road (~25 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            time: "60-80 mins",
            hausa_time: "lokacin 60-80 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2500],
            description: "Via Dantata Road (~27 km, less traffic). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            hausa_description: "Ta Dantata Road (~27 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
            time: "65-85 mins",
            hausa_time: "lokacin 65-85 mins",
            traffic: "Lighter, check road conditions."
        }
    },
    "asokoro-kuje": {
        start_address_details: {
            description: "Asokoro, near AYA (~0.7 km). Trek (free, 10 min); Along taxi (200-300 NGN, 4 min). Okada/keke restricted.",
            hausa_description: "Asokoro, kusa da AYA (~0.7 km). Tafiya (kyauta, 10 min); Taksi mai raba (200-300 NGN, 4 min). Okada/keke haram.",
            map_link: "https://maps.google.com/?q=9.0500,7.5140"
        },
        end_address_details: {
            description: "Kuje, near Kuje Market (~0.7 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kuje, kusa da Kasuwar Kuje (~0.7 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.8790,7.2270"
        },
        alighting_points: {
            description: "Alight at Kuje Junction (~0.4 km): Trek (free, 6 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.8800,7.2280).",
            hausa_description: "Sauka a Kuje Junction (~0.4 km): Tafiya (kyauta, 6 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba (200-300 NGN, 2 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=8.8800,7.2280).",
            distance_to_destination: 0.4,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Kuje at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Kuje a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [400, 1800],
            description: "Asokoro to Kuje via Airport Road (~20 km). [View on Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            hausa_description: "Daga Asokoro zuwa Kuje ta Airport Road (~20 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            time: "50-70 mins",
            hausa_time: "lokacin 50-70 mins",
            traffic: "Moderate; heavy 4-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2000],
            description: "Via Gwagwalada Road (~22 km, avoids city traffic). [View on Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            hausa_description: "Ta Gwagwalada Road (~22 km, guji cunkoson birni). [Duba Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
            time: "55-75 mins",
            hausa_time: "lokacin 55-75 mins",
            traffic: "Lighter, check roadworks."
        }
    },
    "garki-bwari": {
        start_address_details: {
            description: "Garki, near Area 1 Roundabout (~0.6 km). Trek (free, 8 min); Keke (50-100 NGN, 4 min); Along taxi (200-300 NGN, 3 min). Okada restricted.",
            hausa_description: "Garki, kusa da Area 1 Roundabout (~0.6 km). Tafiya (kyauta, 8 min); Keke (50-100 NGN, 4 min); Taksi mai raba (200-300 NGN, 3 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0160,7.4820"
        },
        end_address_details: {
            description: "Bwari, near Bwari Market (~0.7 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Bwari, kusa da Kasuwar Bwari (~0.7 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=9.1350,7.3690"
        },
        alighting_points: {
            description: "Alight at Bwari Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
            hausa_description: "Sauka a Bwari Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba (200-300 NGN, 2 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
            distance_to_destination: 0.5,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Bwari at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Bwari a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [350, 1600],
            description: "Garki to Bwari via Kubwa Expressway (~15 km). [View on Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            hausa_description: "Daga Garki zuwa Bwari ta Kubwa Expressway (~15 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            time: "40-60 mins",
            hausa_time: "lokacin 40-60 mins",
            traffic: "Moderate; heavy 5-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1800],
            description: "Via Dutse Road (~17 km, less congested). [View on Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            hausa_description: "Ta Dutse Road (~17 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
            time: "45-65 mins",
            hausa_time: "lokacin 45-65 mins",
            traffic: "Lighter, check for construction."
        }
    },
    "wuse2-abaji": {
        start_address_details: {
            description: "Wuse 2, near Wuse Market (~0.5 km). Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, kusa da Kasuwar Wuse (~0.5 km). Tafiya (kyauta, 7 min); Keke (50-100 NGN, 5 min); Taksi mai raba (200-300 NGN, 3-5 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Tafiya (kyauta, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.4780,6.7910"
        },
        alighting_points: {
            description: "Alight at Abaji Junction (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night. [View on Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            hausa_description: "Sauka a Abaji Junction (~0.6 km): Tafiya (kyauta, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba (200-300 NGN, 3 min). E-hailing a dare. [Duba Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            distance_to_destination: 0.6,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Abaji at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Abaji a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [600, 2500],
            description: "Wuse 2 to Abaji via Airport Road and Gwagwalada (~40 km). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            hausa_description: "Daga Wuse 2 zuwa Abaji ta Airport Road da Gwagwalada (~40 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            time: "90-120 mins",
            hausa_time: "lokacin 90-120 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [3000],
            description: "Via Toto Road (~42 km, less traffic). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            hausa_description: "Ta Toto Road (~42 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
            time: "100-130 mins",
            hausa_time: "lokacin 100-130 mins",
            traffic: "Lighter, check road conditions."
        }
    },
    "wuse2-kwali": {
        start_address_details: {
            description: "Wuse 2, near Wuse Market (~0.5 km). Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "Wuse 2, kusa da Kasuwar Wuse (~0.5 km). Tafiya (kyauta, 7 min); Keke (50-100 NGN, 5 min); Taksi mai raba (200-300 NGN, 3-5 min). Okada haram.",
            map_link: "https://maps.google.com/?q=9.0656,7.4686"
        },
        end_address_details: {
            description: "Kwali, near Kwali Market (~0.8 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kwali, kusa da Kasuwar Kwali (~0.8 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.7080,6.9390"
        },
        alighting_points: {
            description: "Alight at Kwali Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.7090,6.9400).",
            hausa_description: "Sauka a Kwali Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba (200-300 NGN, 2 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=8.7090,6.9400).",
            distance_to_destination: 0.5,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Kwali at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Kwali a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [550, 2200],
            description: "Wuse 2 to Kwali via Airport Road and Gwagwalada (~35 km). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.7090,6.9400).",
            hausa_description: "Daga Wuse 2 zuwa Kwali ta Airport Road da Gwagwalada (~35 km). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.7090,6.9400).",
            time: "80-100 mins",
            hausa_time: "lokacin 80-100 mins",
            traffic: "Heavy 4-7 PM; avoid rush hours."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2700],
            description: "Via Abaji Road (~37 km, less traffic). [View on Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.7090,6.9400).",
            hausa_description: "Ta Abaji Road (~37 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.7090,6.9400).",
            time: "85-105 mins",
            hausa_time: "lokacin 85-105 mins",
            traffic: "Lighter, check road conditions."
        }
    },
    "kuje-gwagwalada": {
        start_address_details: {
            description: "Kuje, near Kuje Market (~0.7 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kuje, kusa da Kasuwar Kuje (~0.7 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.8790,7.2270"
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.9450,7.0670"
        },
        alighting_points: {
            description: "Alight at Gwagwalada Park (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            hausa_description: "Sauka a Gwagwalada Park (~0.5 km): Tafiya (kyauta, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba (200-300 NGN, 2 min). Taksi guda ɗaya a dare yana da kyau. [Duba Google Maps](https://maps.google.com/?q=8.9460,7.0680).",
            distance_to_destination: 0.5,
            single_mode: true
        },
        ehailing_advisory: {
            description: "For last-mile in Gwagwalada at night or due to security concerns, use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Gwagwalada a dare ko saboda tsaro, yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [300, 1200],
            description: "Kuje to Gwagwalada via Gwagwalada Road (~15 km). [View on Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            hausa_description: "Daga Kuje zuwa Gwagwalada ta Gwagwalada Road (~15 km). [Duba Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            time: "40-60 mins",
            hausa_time: "lokacin 40-60 mins",
            traffic: "Moderate; heavy 4-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [1400],
            description: "Via Airport Road (~17 km, less congested). [View on Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            hausa_description: "Ta Airport Road (~17 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=8.8790,7.2270&daddr=8.9460,7.0680).",
            time: "45-65 mins",
            hausa_time: "lokacin 45-65 mins",
            traffic: "Lighter, check road conditions."
        }
    },
    "bwari-abaji": {
        start_address_details: {
            description: "Bwari, near Bwari Market (~0.7 km). Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Bwari, kusa da Kasuwar Bwari (~0.7 km). Tafiya (kyauta, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=9.1350,7.3690"
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Tafiya (kyauta, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba (200-300 NGN, 4 min).",
            map_link: "https://maps.google.com/?q=8.4780,6.7910"
        },
        alighting_points: {
            description: "Alight at Abaji Junction (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night. [View on Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            hausa_description: "Sauka a Abaji Junction (~0.6 km): Tafiya (kyauta, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba (200-300 NGN, 3 min). E-hailing a dare. [Duba Google Maps](https://maps.google.com/?q=8.4790,6.7920).",
            distance_to_destination: 0.6,
            single_mode: false
        },
        ehailing_advisory: {
            description: "For last-mile in Abaji at night (>0.5 km or multi-mode), use e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, negotiable) for ~3 km.",
            hausa_description: "Don nisa na ƙarshe a Abaji a dare (>0.5 km ko motoci da yawa), yi amfani da e-hailing: Uber (1000-1800 NGN), Bolt (800-1500 NGN), inDriver (700-1300 NGN, ana sasantawa) na ~3 km."
        },
        main_route: {
            transport: ["Bus", "Along taxi"],
            fares: [500, 2000],
            description: "Bwari to Abaji via Airport Road (~30 km). [View on Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            hausa_description: "Daga Bwari zuwa Abaji ta Airport Road (~30 km). [Duba Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            time: "70-100 mins",
            hausa_time: "lokacin 70-100 mins",
            traffic: "Moderate; heavy 4-7 PM."
        },
        alternative_route: {
            transport: ["Along taxi"],
            fares: [2300],
            description: "Via Gwagwalada Road (~32 km, less traffic). [View on Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            hausa_description: "Ta Gwagwalada Road (~32 km, ba cunkoso). [Duba Google Maps](https://maps.google.com/?saddr=9.1350,7.3690&daddr=8.4790,6.7920).",
            time: "75-105 mins",
            hausa_time: "lokacin 75-105 mins",
            traffic: "Lighter, check road conditions."
        }
    }
};

// Haversine formula for distance
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

// Simple graph for connections (nodes: locations, edges: distances)
const graph = {};
for (const loc1 in locations) {
    graph[loc1] = {};
    for (const loc2 in locations) {
        if (loc1 !== loc2) {
            graph[loc1][loc2] = haversineDistance(locations[loc1].lat, locations[loc1].lon, locations[loc2].lat, locations[loc2].lon);
        }
    }
}

// Dijkstra for shortest path
function dijkstra(start, end) {
    const distances = {};
    const previous = {};
    const pq = [];

    for (const loc in graph) {
        distances[loc] = Infinity;
        previous[loc] = null;
    }
    distances[start] = 0;
    pq.push({ loc: start, dist: 0 });

    while (pq.length > 0) {
        pq.sort((a, b) => a.dist - b.dist);
        const { loc, dist } = pq.shift();

        if (dist > distances[loc]) continue;

        for (const neighbor in graph[loc]) {
            const alt = dist + graph[loc][neighbor];
            if (alt < distances[neighbor]) {
                distances[neighbor] = alt;
                previous[neighbor] = loc;
                pq.push({ loc: neighbor, dist: alt });
            }
        }
    }

    let path = [];
    let current = end;
    while (current !== null) {
        path.unshift(current);
        current = previous[current];
    }

    return { path, distance: distances[end] };
}

// Fuzzy matching for location names
function fuzzyMatch(input, target) {
    try {
        const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cleanTarget = target.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (cleanInput.includes(cleanTarget)) return true;
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
            'kwali': ['kwalli', 'kwale'],
            'gwako': ['gwakoo', 'gwaako'],
            'yaba': ['yabah', 'yaaba'],
            'pai': ['paai', 'paee']
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
        return false;
    }
}

function suggestLocation(input) {
    const locs = Object.keys(locations);
    return locs.find(loc => fuzzyMatch(input, loc)) || null;
}

let selectedLanguage = null;
let isProcessing = false;

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

function getFormattedTime() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function setLanguage(language) {
    try {
        selectedLanguage = language;
        if (isLocalStorageAvailable()) {
            try {
                localStorage.setItem('selectedLanguage', language);
            } catch (e) {
                console.log('localStorage Set Error:', e.message);
            }
        }

        const chatContainer = document.getElementById('chat-container');
        const langPrompt = document.getElementById('lang-prompt');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const changeLangBtn = document.getElementById('change-lang-btn');
        const toggleLangBtn = document.getElementById('toggle-lang-btn');
        const chatBox = document.getElementById('chat-box');
        const languageSelection = document.getElementById('language-selection');
        const inputContainer = document.getElementById('input-container');

        if (!chatContainer || !langPrompt || !userInput || !sendBtn || !changeLangBtn || !toggleLangBtn || !chatBox || !languageSelection || !inputContainer) {
            throw new Error('Missing critical DOM elements');
        }

        langPrompt.style.color = '';
        langPrompt.className = 'text-center text-gray-700 font-medium text-sm sm:text-base mb-2';
        languageSelection.style.display = 'none';
        chatBox.style.display = 'block';
        inputContainer.style.display = 'flex';
        toggleLangBtn.style.display = 'inline-block';

        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'bot-bubble';
        if (language === 'hausa') {
            chatContainer.classList.add('hausa');
            langPrompt.innerHTML = 'Sannu! Ka zaɓi yaren da ka fi so!';
            userInput.placeholder = 'Rubuta hanyarka, kamar Daga Wuse zuwa Asokoro';
            userInput.setAttribute('aria-label', 'Shigar da hanyarka');
            sendBtn.innerHTML = 'Aika';
            sendBtn.setAttribute('aria-label', 'Aika saƙo');
            changeLangBtn.innerHTML = 'Tabatar';
            changeLangBtn.setAttribute('aria-label', 'Tabatar da yare');
            toggleLangBtn.innerHTML = 'Canza Yare';
            toggleLangBtn.setAttribute('aria-label', 'Canza yare');
            welcomeMessage.innerHTML = 'Sannu! Ina nan don taimaka maka da tafiyarka. Rubuta hanyarka kamar “Daga Wuse zuwa Asokoro”, zan nuna maka motocin jama’a da e-hailing idan ya dace!';
        } else {
            chatContainer.classList.remove('hausa');
            langPrompt.innerHTML = 'Hey! Pick your favorite language!';
            userInput.placeholder = 'Type your route, like From Wuse to Asokoro';
            userInput.setAttribute('aria-label', 'Enter your route');
            sendBtn.innerHTML = 'Send';
            sendBtn.setAttribute('aria-label', 'Send message');
            changeLangBtn.innerHTML = 'Confirm';
            changeLangBtn.setAttribute('aria-label', 'Confirm language');
            toggleLangBtn.innerHTML = 'Switch Language';
            toggleLangBtn.setAttribute('aria-label', 'Switch language');
            welcomeMessage.innerHTML = 'Hey! Ready to plan your trip? Type your route like “From Wuse to Asokoro”, and I’ll suggest buses, kekes, taxis, or e-hailing if needed!';
        }
        welcomeMessage.innerHTML += `<div class="timestamp">${getFormattedTime()}</div>`;
        chatBox.appendChild(welcomeMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        userInput.focus();
    } catch (e) {
        console.log('setLanguage Error:', e.message);
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'bot-bubble text-red-600';
            errorMessage.innerHTML = language === 'hausa' ? 'Kai! Wani abu ya faru. Mu koma Turanci!' : 'Oops, something broke. Let’s switch to English!';
            errorMessage.innerHTML += `<div class="timestamp">${getFormattedTime()}</div>`;
            chatBox.appendChild(errorMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
            setLanguage('english');
        }
    }
}

function showLanguageSelection() {
    const languageSelection = document.getElementById('language-selection');
    const chatBox = document.getElementById('chat-box');
    const inputContainer = document.getElementById('input-container');
    if (languageSelection && chatBox && inputContainer) {
        languageSelection.style.display = 'block';
        chatBox.style.display = 'none';
        inputContainer.style.display = 'none';
        const langPrompt = document.getElementById('lang-prompt');
        if (langPrompt) {
            langPrompt.innerHTML = selectedLanguage === 'hausa' 
                ? 'Sannu! Ka zaɓi yaren da ka fi so!'
                : 'Hey! Pick your favorite language!';
            langPrompt.className = 'text-center text-gray-700 font-medium text-sm sm:text-base mb-2';
        }
        document.querySelector(`input[name="language"][value="${selectedLanguage || 'english'}"]`).focus();
    }
}

function handleLanguageConfirm() {
    if (isProcessing) return;
    isProcessing = true;
    setTimeout(() => { isProcessing = false; }, 300);

    try {
        const selectedRadio = document.querySelector('input[name="language"]:checked');
        const langPrompt = document.getElementById('lang-prompt');
        if (!langPrompt) throw new Error('Language prompt element missing');

        if (!selectedRadio) {
            langPrompt.innerHTML = selectedLanguage === 'hausa'
                ? 'Kai! Ka zaɓi yare don ci gaba!'
                : 'Hey, pick a language to continue!';
            langPrompt.className = 'text-center text-red-600 font-medium text-sm sm:text-base mb-2';
            return;
        }

        setLanguage(selectedRadio.value);
    } catch (e) {
        console.log('handleLanguageConfirm Error:', e.message);
        const langPrompt = document.getElementById('lang-prompt');
        if (langPrompt) {
            langPrompt.innerHTML = selectedLanguage === 'hausa' 
                ? 'Kai! Ba zan iya canza yare ba. Sake gwadawa!'
                : 'Oops, couldn’t switch language. Try again!';
            langPrompt.className = 'text-center text-red-600 font-medium text-sm sm:text-base mb-2';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (isLocalStorageAvailable()) {
        try {
            selectedLanguage = localStorage.getItem('selectedLanguage') || null;
            if (selectedLanguage) {
                setLanguage(selectedLanguage);
                const radioInput = document.querySelector(`input[name="language"][value="${selectedLanguage}"]`);
                if (radioInput) radioInput.checked = true;
            } else {
                const chatBox = document.getElementById('chat-box');
                if (chatBox) {
                    const welcomeMessage = document.createElement('div');
                    welcomeMessage.className = 'bot-bubble';
                    welcomeMessage.innerHTML = 'Hey! Welcome to Shekwoni Abuja Guide. Pick a language to get started!';
                    welcomeMessage.innerHTML += `<div class="timestamp">${getFormattedTime()}</div>`;
                    chatBox.appendChild(welcomeMessage);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
            }
        } catch (e) {
            console.log('Language Initialization Error:', e.message);
            setLanguage('english');
        }
    }

    const changeLangBtn = document.getElementById('change-lang-btn');
    if (changeLangBtn) {
        changeLangBtn.removeEventListener('click', handleLanguageConfirm);
        changeLangBtn.addEventListener('click', handleLanguageConfirm);
    }

    const toggleLangBtn = document.getElementById('toggle-lang-btn');
    if (toggleLangBtn) {
        toggleLangBtn.removeEventListener('click', showLanguageSelection);
        toggleLangBtn.addEventListener('click', showLanguageSelection);
    }

    const radioButtons = document.querySelectorAll('input[name="language"]');
    radioButtons.forEach(radio => {
        radio.removeEventListener('keydown', handleRadioKeydown);
        radio.addEventListener('keydown', handleRadioKeydown);
    });

    function handleRadioKeydown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            radio.checked = true;
            handleLanguageConfirm();
        }
    }

    const sendBtn = document.getElementById('send-btn');
    if (sendBtn) {
        sendBtn.removeEventListener('click', handleSendMessage);
        sendBtn.addEventListener('click', handleSendMessage);
    }

    function handleSendMessage() {
        if (isProcessing) return;
        isProcessing = true;

        const chatBox = document.getElementById('chat-box');
        const userInput = document.getElementById('user-input');
        if (!chatBox || !userInput) return;

        const inputValue = userInput.value.trim();
        if (!inputValue) {
            isProcessing = false;
            return;
        }

        const userMessage = document.createElement('div');
        userMessage.className = 'user-bubble';
        userMessage.innerHTML = inputValue.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        userMessage.innerHTML += `<div class="timestamp">${getFormattedTime()}</div>`;
        chatBox.appendChild(userMessage);

        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        chatBox.appendChild(spinner);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            chatBox.removeChild(spinner);
            const botResponse = chatbotResponse(inputValue);
            const botMessage = document.createElement('div');
            botMessage.className = 'bot-bubble';
            botMessage.innerHTML = botResponse;
            botMessage.innerHTML += `<div class="timestamp">${getFormattedTime()}</div>`;
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
            userInput.value = '';
            userInput.focus();
            isProcessing = false;
        }, 500);
    }

    const userInput = document.getElementById('user-input');
    if (userInput) {
        userInput.removeEventListener('keypress', handleInputKeypress);
        userInput.addEventListener('keypress', handleInputKeypress);
    }

    function handleInputKeypress(e) {
        if (e.key === 'Enter' && !isProcessing) {
            handleSendMessage();
        }
    }
});

function chatbotResponse(userInput) {
    try {
        let input = userInput.toLowerCase().trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
        let isHausaInput = input.includes("daga") && input.includes("zuwa");
        let hasAddress = input.includes("street") || input.includes("close") || Object.keys(locations).some(loc => input.includes(loc));

        if (!selectedLanguage) {
            return 'Hey, pick a language first!';
        }

        if (selectedLanguage === 'hausa' && !isHausaInput) {
            return 'Kai! Rubuta a Hausa, kamar “Daga Wuse zuwa Kwali”! <span class="text-red-600">Ba ka ji Hausa ba?</span>';
        } else if (selectedLanguage === 'english' && isHausaInput) {
            return 'Oops, stick to English, like “From Wuse to Kwali”! <span class="text-red-600">Not in English?</span>';
        }

        let start, end;
        if (isHausaInput) {
            try {
                start = input.split("daga")[1].split("zuwa")[0].trim();
                end = input.split("zuwa")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Kai! Rubuta hanyarka kamar “Daga Wuse zuwa Kwali”! <span class="text-red-600">Ba daidai ba ne!</span>'
                    : 'Oops, try your route like “From Wuse to Kwali”! <span class="text-red-600">Wrong format!</span>';
            }
        } else if (input.includes("from") && input.includes("to")) {
            try {
                start = input.split("from")[1].split("to")[0].trim();
                end = input.split("to")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Kai! Rubuta hanyarka kamar “Daga Wuse zuwa Kwali”! <span class="text-red-600">Ba daidai ba ne!</span>'
                    : 'Oops, try your route like “From Wuse to Kwali”! <span class="text-red-600">Wrong format!</span>';
            }
        } else {
            return selectedLanguage === 'hausa'
                ? 'Kai! Ka ji “Daga” da “Zuwa”, kamar “Daga Wuse zuwa Kwali”! <span class="text-red-600">Ba ka ji “Daga”/“Zuwa” ba?</span>'
                : 'Oops, use “From” and “To”, like “From Wuse to Kwali”! <span class="text-red-600">Missing “From”/“To”?</span>';
        }

        const startSuggestion = suggestLocation(start);
        const endSuggestion = suggestLocation(end);
        if (!startSuggestion || !endSuggestion) {
            return selectedLanguage === 'hausa'
                ? `Kai! Shin kana nufin daga ${startSuggestion || start} zuwa ${endSuggestion || end}? Sake gwadawa! <span class="text-red-600">Ba mu gane wurin ba!</span>`
                : `Hmm, did you mean from ${startSuggestion || start} to ${endSuggestion || end}? Give it another shot! <span class="text-red-600">Couldn’t find that place!</span>`;
        }

        start = startSuggestion;
        end = endSuggestion;

        let key = `${start}-${end}`;
        if (!routes[key]) {
            key = `${end}-${start}`;
        }

        const { path, distance } = dijkstra(start, end);
        let response = selectedLanguage === 'hausa'
            ? `Sannu! Hanyarka daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)} shine kamar ${distance ? distance.toFixed(1) : 'unknown'} km. Ga shawarata:<br>`
            : `Hey! Your trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} is about ${distance ? distance.toFixed(1) : 'unknown'} km. Here’s my suggestion:<br>`;

        const currentHour = new Date().getHours();
        const isNightTrip = currentHour < 6 || currentHour >= 20;
        const hasSecurityConcerns = route.end_address_details.security_concerns;
        const isSingleModeClose = route.alighting_points && route.alighting_points.distance_to_destination <= 0.5 && route.alighting_points.single_mode;

        if (hasAddress && route.start_address_details.distance_to_bus_stop <= 1) {
            response += selectedLanguage === 'hausa'
                ? `<b>Fara Adireshi:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba Google Maps]</a><br>`
                : `<b>Starting Point:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Check Google Maps]</a><br>`;
        }

        response += selectedLanguage === 'hausa'
            ? `<b>Hanyar Babba:</b> ${route.main_route.hausa_description}<br>` +
              `<b>Motoci:</b> ${route.main_route.transport.join(", ")}<br>` +
              `<b>Kudi (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
              `<b>Lokaci:</b> ${route.main_route.hausa_time}<br>` +
              `<b>Zirga-zirga:</b> ${route.main_route.hausa_traffic}<br><br>` +
              `<b>Wata Hanya:</b> ${route.alternative_route.hausa_description}<br>` +
              `<b>Motoci:</b> ${route.alternative_route.transport.join(", ")}<br>` +
              `<b>Kudi (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
              `<b>Lokaci:</b> ${route.alternative_route.hausa_time}<br>` +
              `<b>Zirga-zirga:</b> ${route.alternative_route.hausa_traffic}<br><br>`
            : `<b>Main Route:</b> ${route.main_route.description}<br>` +
              `<b>Transport:</b> ${route.main_route.transport.join(", ")}<br>` +
              `<b>Fares (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
              `<b>Time:</b> ${route.main_route.time}<br>` +
              `<b>Traffic:</b> ${route.main_route.traffic}<br><br>` +
              `<b>Alternative Route:</b> ${route.alternative_route.description}<br>` +
              `<b>Transport:</b> ${route.alternative_route.transport.join(", ")}<br>` +
              `<b>Fares (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
              `<b>Time:</b> ${route.alternative_route.time}<br>` +
              `<b>Traffic:</b> ${route.alternative_route.traffic}<br><br>`;

        if (hasAddress && (isNightTrip && !isSingleModeClose || hasSecurityConcerns)) {
            response += selectedLanguage === 'hausa'
                ? `<b>Shawara E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
                : `<b>E-Hailing Tip:</b> ${route.ehailing_advisory.description}<br>`;
        }

        if (hasAddress) {
            if (route.alighting_points && route.alighting_points.distance_to_destination <= 1) {
                response += selectedLanguage === 'hausa'
                    ? `<b>Sauka:</b> ${route.alighting_points.hausa_description}<br>`
                    : `<b>Drop-Off Point:</b> ${route.alighting_points.description}<br>`;
            }
            if (route.end_address_details.distance_from_bus_stop <= 1) {
                response += selectedLanguage === 'hausa'
                    ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba Google Maps]</a><br>`
                    : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Check Google Maps]</a><br>`;
            } else {
                response += selectedLanguage === 'hausa'
                    ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba Google Maps]</a><br>`
                    : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Check Google Maps]</a><br>`;
            }
        }

        response += selectedLanguage === 'hausa' ? 'Na gode! Kana bukatar ƙarin taimako?' : 'All set! Need more help?';
        return response;
    } catch (e) {
        console.log('chatbotResponse Error:', e.message);
        return selectedLanguage === 'hausa'
            ? `Kai! Wani kuskure ya faru. Sake gwadawa! <span class="text-red-600">Kuskure: ${e.message}</span>`
            : `Oops, something went wrong. Try again! <span class="text-red-600">Error: ${e.message}</span>`;
    }
}
