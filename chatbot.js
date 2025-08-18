// Data with updated terminology: "Bus" and "Along taxi"
const routes = {
    "wuse2-asokoro": {
        start_address_details: {
            description: "14 Monrovia Street, Wuse 2, AMAC, near Aminu Kano Crescent. Nearest bus stop: Wuse Market (~0.5 km, 7 min). Short distance: Trek (free, 7 min); Keke (50-100 NGN, 5 min); Along taxi (200-300 NGN, 3-5 min). Okada restricted.",
            hausa_description: "14 Monrovia Street, Wuse 2, AMAC, kusa da Aminu Kano Crescent. Tashar kusa: Kasuwar Wuse (~0.5 km, 7 min). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba hanya (200-300 NGN, 3-5 min). Okada haram.",
            distance_to_bus_stop: 0.5,
            okada_allowed: false,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0656,7.4686" // Wuse Market
        },
        end_address_details: {
            description: "4 JF Kennedy Street, Asokoro, AMAC, near Aso Villa. From bus stop (AYA, ~1.5 km): Along taxi (200-300 NGN, 5-7 min). Okada/keke restricted.",
            hausa_description: "4 JF Kennedy Street, Asokoro, AMAC, kusa da Aso Villa. Daga tashar (AYA, ~1.5 km): Taksi mai raba hanya (200-300 NGN, 5-7 min). Okada/keke haram.",
            distance_from_bus_stop: 1.5,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0500,7.5140" // Asokoro (AYA)
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
            map_link: "https://maps.google.com/?q=9.0850,7.4930" // Maitama Junction
        },
        end_address_details: {
            description: "Nyanya, AMAC, from Nyanya Bridge (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Nyanya, AMAC, daga Nyanya Bridge (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=9.0030,7.5770" // Nyanya Bridge
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
            map_link: "https://maps.google.com/?q=9.0656,7.4686" // Wuse Market
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=8.9450,7.0670" // Gwagwalada Market
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
            map_link: "https://maps.google.com/?q=9.0500,7.5140" // AYA
        },
        end_address_details: {
            description: "Kuje, near Kuje Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kuje, kusa da Kasuwar Kuje (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.8790,7.2270" // Kuje Market
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
            map_link: "https://maps.google.com/?q=9.0160,7.4820" // Area 1 Roundabout
        },
        end_address_details: {
            description: "Bwari, near Bwari Market (~0.7 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Bwari, kusa da Kasuwar Bwari (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba hanya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.7,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.1350,7.3690" // Bwari Market
        },
        alighting_points: {
            description: "Alight at Bwari Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
            hausa_description: "Sauka a Bwari Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba hanya (200-300 NGN, 2 min). Taksi mai raba hanya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=9.1360,7.3700).",
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
            map_link: "https://maps.google.com/?q=9.0656,7.4686" // Wuse Market
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.4780,6.7910" // Abaji Main Market
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
            map_link: "https://maps.google.com/?q=9.0656,7.4686" // Wuse Market
        },
        end_address_details: {
            description: "Kwali, near Kwali Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Kwali, kusa da Kasuwar Kwali (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.8330,7.0400" // Kwali Market
        },
        alighting_points: {
            description: "Alight at Kwali Junction (~0.5 km): Trek (free, 7 min); Keke (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Along taxi (200-300 NGN, 2 min). Single-mode Along taxi at night OK. [View on Google Maps](https://maps.google.com/?q=8.8340,7.0410).",
            hausa_description: "Sauka a Kwali Junction (~0.5 km): Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba hanya (200-300 NGN, 2 min). Taksi mai raba hanya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.8340,7.0410).",
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
            map_link: "https://maps.google.com/?q=8.8790,7.2270" // Kuje Market
        },
        end_address_details: {
            description: "Gwagwalada, near Gwagwalada Market (~0.8 km). Short distance: Trek (free, 10 min); Keke (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Gwagwalada, kusa da Kasuwar Gwagwalada (~0.8 km). Gajeren nisa: Tafiya (kyauta, 10 min); Keke mai rabawa (50-100 NGN, 5 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.8,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=8.9450,7.0670" // Gwagwalada Market
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
            map_link: "https://maps.google.com/?q=9.1350,7.3690" // Bwari Market
        },
        end_address_details: {
            description: "Abaji, near Abaji Main Market (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Abaji, kusa da Kasuwar Abaji (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=8.4780,6.7910" // Abaji Main Market
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

// Local storage for frequent routes
function getFrequentRoutes() {
    try {
        const routesData = localStorage.getItem('frequentRoutes');
        return routesData ? JSON.parse(routesData) : {};
    } catch (e) {
        console.error('Error accessing local storage:', e);
        return {};
    }
}

function saveFrequentRoute(key) {
    try {
        const frequentRoutes = getFrequentRoutes();
        frequentRoutes[key] = (frequentRoutes[key] || 0) + 1;
        localStorage.setItem('frequentRoutes', JSON.stringify(frequentRoutes));
    } catch (e) {
        console.error('Error saving to local storage:', e);
    }
}

function displayFrequentRoutes() {
    try {
        const frequentRoutes = getFrequentRoutes();
        const sortedRoutes = Object.entries(frequentRoutes)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .map(([key, count]) => ({ key, count }));

        let message = "Welcome! / Sannu! Ask for directions with addresses, e.g., 'From 14 Monrovia Street in Wuse 2 to 4 JF Kennedy Street in Asokoro' or 'Daga 14 Monrovia Street a Wuse 2 zuwa 4 JF Kennedy Street a Asokoro'. I'll suggest public transport (Bus, keke, Along taxi) for main routes and e-hailing for last-mile in destination Area Councils at night or if less safe.";
        let hausaMessage = "Sannu! / Welcome! A ji hanyoyi da adiresoshi, misali, 'Daga 14 Monrovia Street a Wuse 2 zuwa 4 JF Kennedy Street a Asokoro'. Zan ba da shawarar motocin jama'a (Bas, keke, Taksi mai raba hanya) don babban hanya da e-hailing don nisa na ƙarshe a yankin manufa a dare ko idan ba aminci.";

        if (sortedRoutes.length > 0) {
            message += "<br><br><b>Your Frequent Routes:</b><br>";
            hausaMessage += "<br><br><b>Hanyoyinku na Yau da Kullum:</b><br>";
            sortedRoutes.forEach(({ key, count }) => {
                const route = routes[key];
                if (route) {
                    const [start, end] = key.split('-');
                    message += `${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} (used ${count} time${count > 1 ? 's' : ''}): ${route.main_route.description} Fares: ${route.main_route.fares.join(", ")} NGN. Alight at ${route.alighting_points ? route.alighting_points.description.split(':')[0] : 'main bus stop'}.<br>`;
                    hausaMessage += `${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)} (an yi amfani da sau ${count}): ${route.main_route.hausa_description} Kudin Tafiya: ${route.main_route.fares.join(", ")} NGN. Sauka a ${route.alighting_points ? route.alighting_points.hausa_description.split(':')[0] : 'babban tashar'}.<br>`;
                }
            });
        }

        message += "<br>To forget a route, check your browser settings to clear local storage or manage saved data under 'Data Controls'.";
        hausaMessage += "<br>Don manta hanya, duba saitunan burauzarka don share bayanan ajiya ko sarrafa bayanai a ƙarƙashin 'Data Controls'.";
        
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.innerHTML = `${message}<br>(Hausa:)<br>${hausaMessage}`;
    } catch (e) {
        console.error('Error displaying frequent routes:', e);
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.innerHTML = "Welcome! / Sannu! Error loading frequent routes. Please ask for directions, e.g., 'From Wuse to Asokoro' or 'Daga Wuse zuwa Asokoro'.";
    }
}

// Fuzzy matching for input parsing
function fuzzyMatch(input, target) {
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanTarget = target.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanInput.includes(cleanTarget)) return true;
    let differences = 0;
    for (let i = 0; i < Math.min(cleanInput.length, cleanTarget.length); i++) {
        if (cleanInput[i] !== cleanTarget[i]) differences++;
        if (differences > 2) return false; // Allow up to 2 typos
    }
    return true;
}

function suggestLocation(input) {
    const locations = ["wuse2", "asokoro", "maitama", "nyanya", "gwagwalada", "kuje", "garki", "bwari", "abaji", "kwali"];
    return locations.find(loc => fuzzyMatch(input, loc)) || null;
}

function chatbotResponse(userInput) {
    try {
        let input = userInput.toLowerCase().trim();
        let isHausa = input.includes("daga") && input.includes("zuwa");
        let start, end, hasAddress = input.includes("street") || input.includes("close") || input.includes("inwuse2") || input.includes("asokoro") || input.includes("nyanya") || input.includes("gwagwalada") || input.includes("kuje") || input.includes("bwari") || input.includes("abaji") || input.includes("kwali");

        // Parse input
        if (isHausa) {
            try {
                start = input.split("daga")[1].split("zuwa")[0].trim();
                end = input.split("zuwa")[1].trim();
            } catch {
                return "Don Allah bayyana hanyarka, misali, 'Daga Wuse zuwa Asokoro'. / Please clarify your route, e.g., 'From Wuse to Asokoro'. <span class='error'>Error: Invalid format.</span>";
            }
        } else if (input.includes("from") && input.includes("to")) {
            try {
                start = input.split("from")[1].split("to")[0].trim();
                end = input.split("to")[1].trim();
            } catch {
                return "Please clarify your route, e.g., 'From Wuse to Asokoro'. / Don Allah bayyana hanyarka, misali, 'Daga Wuse zuwa Asokoro'. <span class='error'>Error: Invalid format.</span>";
            }
        } else {
            return "Please ask for directions in English or Hausa, e.g., 'From Wuse to Asokoro' or 'Daga Wuse zuwa Asokoro'. <span class='error'>Error: Missing 'from'/'to' or 'daga'/'zuwa'.</span>";
        }

        // Fuzzy matching for locations
        const startSuggestion = suggestLocation(start);
        const endSuggestion = suggestLocation(end);
        if (!startSuggestion || !endSuggestion) {
            const suggestion = `Did you mean ${startSuggestion || start} to ${endSuggestion || end}? Please try again, e.g., 'From Wuse to Asokoro' or 'Daga Wuse zuwa Asokoro'. <span class='error'>Error: Unrecognized location.</span>`;
            return suggestion;
        }

        start = startSuggestion || start;
        end = endSuggestion || end;

        // Map to key and save to frequent routes
        let key = `${start.replace(/[0-9]/g, '').replace('monroviastreetin', '').replace('jfk', 'jfkennedy')}-${end.replace(/[0-9]/g, '').replace('jfkennedystreetin', '').replace('asokoro', 'asokoro').replace('nyanya', 'nyanya').replace('gwagwalada', 'gwagwalada').replace('kuje', 'kuje').replace('bwari', 'bwari').replace('abaji', 'abaji').replace('kwali', 'kwali')}`;
        saveFrequentRoute(key);

        if (routes[key]) {
            const route = routes[key];
            let response = isHausa ? "" : `From ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)}:<br>`;
            let hausaResponse = isHausa ? `Daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)}:<br>` : "";

            // Check for night trip (outside 6 AM-8 PM) or security concerns
            const currentHour = new Date().getHours(); // Use real-time hour
            const isNightTrip = currentHour < 6 || currentHour >= 20;
            const hasSecurityConcerns = route.end_address_details.security_concerns;
            const isSingleModeClose = route.alighting_points && route.alighting_points.distance_to_destination <= 0.5 && route.alighting_points.single_mode;

            // Start address
            if (hasAddress && route.start_address_details.distance_to_bus_stop <= 1) {
                if (!isHausa) response += `<b>Start Address Info:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank">[View on Google Maps]</a><br>`;
                hausaResponse += `<b>Bayanin Adireshin Farawa:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank">[Duba a Google Maps]</a><br>`;
            }

            // Main and alternative routes
            if (!isHausa) {
                response += `<b>Main Route:</b> ${route.main_route.description}<br>` +
                            `<b>Transport:</b> ${route.main_route.transport.join(", ")}<br>` +
                            `<b>Fares (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
                            `<b>Time:</b> ${route.main_route.time}<br>` +
                            `<b>Traffic Note:</b> ${route.main_route.traffic}<br><br>` +
                            `<b>Alternative Route:</b> ${route.alternative_route.description}<br>` +
                            `<b>Transport:</b> ${route.alternative_route.transport.join(", ")}<br>` +
                            `<b>Fares (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
                            `<b>Time:</b> ${route.alternative_route.time}<br>` +
                            `<b>Traffic Note:</b> ${route.alternative_route.traffic}<br><br>`;
            }
            hausaResponse += `<b>Hanyar Babba:</b> ${route.main_route.hausa_description}<br>` +
                             `<b>Motoci:</b> ${route.main_route.transport.join(", ")}<br>` +
                             `<b>Kudin Tafiya (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
                             `<b>Lokaci:</b> ${route.main_route.hausa_time}<br>` +
                             `<b>Tambaya Zirga-zirga:</b> ${route.main_route.hausa_traffic}<br><br>` +
                             `<b>Hanyar Madadin:</b> ${route.alternative_route.hausa_description}<br>` +
                             `<b>Motoci:</b> ${route.alternative_route.transport.join(", ")}<br>` +
                             `<b>Kudin Tafiya (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
                             `<b>Lokaci:</b> ${route.alternative_route.hausa_time}<br>` +
                             `<b>Tambaya Zirga-zirga:</b> ${route.alternative_route.hausa_traffic}<br><br>`;

            // E-hailing advisory
            if (hasAddress && (isNightTrip && !isSingleModeClose || hasSecurityConcerns)) {
                if (!isHausa) response += `<b>Last-Mile E-Hailing Advisory:</b> ${route.ehailing_advisory.description}<br>`;
                hausaResponse += `<b>Shawara kan E-Hailing na Ƙarshe:</b> ${route.ehailing_advisory.hausa_description}<br>`;
            }

            // Alighting point and end address
            if (hasAddress) {
                if (route.alighting_points && route.alighting_points.distance_to_destination <= 1) {
                    if (!isHausa) response += `<b>Recommended Alighting Point:</b> ${route.alighting_points.description}<br>`;
                    hausaResponse += `<b>Matsayin Sauka da Aka Shawarta:</b> ${route.alighting_points.hausa_description}<br>`;
                }
                if (route.end_address
