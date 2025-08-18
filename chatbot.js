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
            hausa_description: "4 JF Kennedy Street, Asokoro, AMAC, kusa da Aso Villa. Daga tashar (AYA, ~1.5 km): Taksi mai raba haya (200-300 NGN, 5-7 min). Okada/keke haram.",
            distance_from_bus_stop: 1.5,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0500,7.5140"
        },
        alighting_points: {
            description: "Alight at Power House/Asokoro Bridge (~0.5 km from 4 JF Kennedy St): Trek (free, 7 min); Along taxi (200-300 NGN, 3 min). Single-mode Along taxi at night OK. Okada/keke restricted. [View on Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
            hausa_description: "Sauka a Power House/Asokoro Bridge (~0.5 km daga 4 JF Kennedy St): Tafiya (kyauta, 7 min); Taksi mai raba haya (200-300 NGN, 3 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. Okada/keke haram. [Duba a Google Maps](https://maps.google.com/?q=9.0510,7.5120).",
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
            hausa_description: "Maitama, AMAC, kusa da Maitama Junction (~0.6 km). Gajeren nisa: Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 3 min). Okada haram.",
            distance_to_bus_stop: 0.6,
            okada_allowed: false,
            keke_allowed: false,
            security_concerns: false,
            map_link: "https://maps.google.com/?q=9.0850,7.4930"
        },
        end_address_details: {
            description: "Nyanya, AMAC, from Nyanya Bridge (~0.9 km). Short distance: Trek (free, 12 min); Keke (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Along taxi (200-300 NGN, 4 min).",
            hausa_description: "Nyanya, AMAC, daga Nyanya Bridge (~0.9 km). Gajeren nisa: Tafiya (kyauta, 12 min); Keke mai rabawa (50-100 NGN, 6 min); Okada (100-200 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 4 min).",
            distance_from_bus_stop: 0.9,
            okada_allowed: true,
            keke_allowed: true,
            security_concerns: true,
            map_link: "https://maps.google.com/?q=9.0030,7.5770"
        },
        alighting_points: {
            description: "Alight at Nyanya Market (~0.6 km): Trek (free, 8 min); Keke (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Along taxi (200-300 NGN, 3 min). E-hailing advised at night due to security concerns. [View on Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
            hausa_description: "Sauka a Kasuwar Nyanya (~0.6 km): Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Okada (100-200 NGN, 3 min); Taksi mai raba haya (200-300 NGN, 3 min). Yi amfani da e-hailing a dare saboda tsaro. [Duba a Google Maps](https://maps.google.com/?q=9.0040,7.5750).",
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
            hausa_description: "Daga Maitama Junction zuwa Nyanya ta A2 Road. Nisa ~10 km. Yi amfani da motocin jama'a don babban haya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0850,7.4930&daddr=9.0040,7.5750).",
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
            hausa_description: "Wuse 2, AMAC, kusa da Kasuwar Wuse (~0.5 km). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba haya (200-300 NGN, 3-5 min). Okada haram.",
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
            hausa_description: "Daga Wuse 2 zuwa Gwagwalada ta Airport Road. Nisa ~25 km. Yi amfani da motocin jama'a don babban haya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.9460,7.0680).",
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
            hausa_description: "Asokoro, AMAC, kusa da AYA (~0.7 km). Gajeren nisa: Tafiya (kyauta, 10 min); Taksi mai raba haya (200-300 NGN, 4 min). Okada/keke haram.",
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
            hausa_description: "Sauka a Kuje Junction (~0.4 km): Tafiya (kyauta, 6 min); Keke mai rabawa (50-100 NGN, 3 min); Okada (100-200 NGN, 2 min); Taksi mai raba haya (200-300 NGN, 2 min). Taksi mai raba haya guda ɗaya a dare yana da kyau. [Duba a Google Maps](https://maps.google.com/?q=8.8800,7.2280).",
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
            hausa_description: "Daga Asokoro zuwa Kuje ta Airport Road. Nisa ~20 km. Yi amfani da motocin jama'a don babban haya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0500,7.5140&daddr=8.8800,7.2280).",
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
            hausa_traffic: "Mai sauki, duba aikin haya."
        }
    },
    "garki-bwari": {
        start_address_details: {
            description: "Garki, AMAC, near Area 1 Roundabout (~0.6 km). Short distance: Trek (free, 8 min); Keke (50-100 NGN, 4 min); Along taxi (200-300 NGN, 3 min). Okada restricted.",
            hausa_description: "Garki, AMAC, kusa da Area 1 Roundabout (~0.6 km). Gajeren nisa: Tafiya (kyauta, 8 min); Keke mai rabawa (50-100 NGN, 4 min); Taksi mai raba haya (200-300 NGN, 3 min). Okada haram.",
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
            hausa_description: "Daga Garki zuwa Bwari ta Kubwa Expressway. Nisa ~15 km. Yi amfani da motocin jama'a don babban haya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0160,7.4820&daddr=9.1360,7.3700).",
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
            hausa_description: "Wuse 2, AMAC, kusa da Kasuwar Wuse (~0.5 km). Gajeren nisa: Tafiya (kyauta, 7 min); Keke mai rabawa (50-100 NGN, 5 min); Taksi mai raba haya (200-300 NGN, 3-5 min). Okada haram.",
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
            hausa_description: "Daga Wuse 2 zuwa Abaji ta Airport Road da Gwagwalada. Nisa ~40 km. Yi amfani da motocin jama'a don babban haya. [Duba hanya a Google Maps](https://maps.google.com/?saddr=9.0656,7.4686&daddr=8.4790,6.7920).",
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
    }
};

// Enhanced fuzzy matching for Hausa
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
        return false;
    }
}

function suggestLocation(input) {
    const locations = ["wuse2", "asokoro", "maitama", "nyanya", "gwagwalada", "kuje", "garki", "bwari", "abaji", "kwali"];
    return locations.find(loc => fuzzyMatch(input, loc)) || null;
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
        languageSelection.style.display = 'none';
        chatBox.style.display = 'block';
        inputContainer.style.display = 'flex';
        toggleLangBtn.style.display = 'inline-block';

        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'bot-bubble';
        if (language === 'hausa') {
            chatContainer.classList.add('hausa');
            langPrompt.innerHTML = 'Maraba da Shekwoni Abuja Jagora. Zaɓi yaren da kake so:';
            userInput.placeholder = 'Rubuta tambayarka, misali, Daga Wuse zuwa Asokoro';
            userInput.setAttribute('aria-label', 'Shigar da tambayar hanya');
            sendBtn.innerHTML = 'Aika';
            sendBtn.setAttribute('aria-label', 'Aika saƙo');
            changeLangBtn.innerHTML = 'Tabatar da Yare';
            changeLangBtn.setAttribute('aria-label', 'Tabatar da zaɓin yare');
            toggleLangBtn.innerHTML = 'Canza Yare';
            toggleLangBtn.setAttribute('aria-label', 'Canza yare');
            welcomeMessage.innerHTML = 'Sannu! Na ji ka ke son taimako da hanya. Rubuta adireshi kamar “Daga Wuse zuwa Asokoro”, zan ba ka shawarar motocin jama’a (Bas, Keke, Taksi) da e-hailing idan ya kamata, musamman a dare!';
        } else {
            chatContainer.classList.remove('hausa');
            langPrompt.innerHTML = 'Welcome to Shekwoni Abuja Guide. Please select your preferred language:';
            userInput.placeholder = 'Type your message, e.g., From Wuse to Asokoro';
            userInput.setAttribute('aria-label', 'Enter your route query');
            sendBtn.innerHTML = 'Send';
            sendBtn.setAttribute('aria-label', 'Send message');
            changeLangBtn.innerHTML = 'Confirm Language';
            changeLangBtn.setAttribute('aria-label', 'Confirm language selection');
            toggleLangBtn.innerHTML = 'Change Language';
            toggleLangBtn.setAttribute('aria-label', 'Change language');
            welcomeMessage.innerHTML = 'Hi! I’m here to help with your commute. Type your route like “From Wuse to Asokoro”, and I’ll suggest public transport (Bus, Keke, Taxi) and e-hailing options if needed, especially at night!';
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
            errorMessage.innerHTML = 'Oops, something went wrong. Defaulting to English. Try typing your route!';
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
                ? 'Maraba da Shekwoni Abuja Jagora. Zaɓi yaren da kake so:'
                : 'Welcome to Shekwoni Abuja Guide. Please select your preferred language:';
            langPrompt.style.color = '';
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
                ? 'Kuskure: Zaɓi yare kafin ci gaba.'
                : 'Please select a language to continue.';
            langPrompt.className = 'text-center text-red-600 font-medium mb-2';
            return;
        }

        setLanguage(selectedRadio.value);
    } catch (e) {
        console.log('handleLanguageConfirm Error:', e.message);
        const langPrompt = document.getElementById('lang-prompt');
        if (langPrompt) {
            langPrompt.innerHTML = selectedLanguage === 'hausa' 
                ? 'Kuskure: Ba za a iya canza yare ba. Sake gwadawa.'
                : 'Error: Could not change language. Please try again.';
            langPrompt.className = 'text-center text-red-600 font-medium mb-2';
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
                    welcomeMessage.innerHTML = 'Hi! Welcome to Shekwoni Abuja Guide. Please choose a language to start!';
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
        let hasAddress = input.includes("street") || input.includes("close") || input.includes("inwuse2") || input.includes("asokoro") || input.includes("nyanya") || input.includes("gwagwalada") || input.includes("kuje") || input.includes("bwari") || input.includes("abaji") || input.includes("kwali");

        if (!selectedLanguage) {
            return 'Please select a language first!';
        }

        if (selectedLanguage === 'hausa' && !isHausaInput) {
            return 'Kai! Don Allah rubuta a Hausa, kamar “Daga Wuse zuwa Asokoro”. <span class="text-red-600">Kuskure: A shigar da Hausa.</span>';
        } else if (selectedLanguage === 'english' && isHausaInput) {
            return 'Oops, please use English, like “From Wuse to Asokoro”. <span class="text-red-600">Error: Use English input.</span>';
        }

        let start, end;
        if (isHausaInput) {
            try {
                start = input.split("daga")[1].split("zuwa")[0].trim();
                end = input.split("zuwa")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Kai! Rubuta hanyarka da kyau, kamar “Daga Wuse zuwa Asokoro”. <span class="text-red-600">Kuskure: Tsari ba daidai ba ne.</span>'
                    : 'Oops, please clarify your route, like “From Wuse to Asokoro”. <span class="text-red-600">Error: Invalid format.</span>';
            }
        } else if (input.includes("from") && input.includes("to")) {
            try {
                start = input.split("from")[1].split("to")[0].trim();
                end = input.split("to")[1].trim();
            } catch {
                return selectedLanguage === 'hausa'
                    ? 'Kai! Rubuta hanyarka da kyau, kamar “Daga Wuse zuwa Asokoro”. <span class="text-red-600">Kuskure: Tsari ba daidai ba ne.</span>'
                    : 'Oops, please clarify your route, like “From Wuse to Asokoro”. <span class="text-red-600">Error: Invalid format.</span>';
            }
        } else {
            return selectedLanguage === 'hausa'
                ? 'Kai! Ka ji “Daga” da “Zuwa”, kamar “Daga Wuse zuwa Asokoro”. <span class="text-red-600">Kuskure: Rashin “daga”/“zuwa”.</span>'
                : 'Oops, please use “From” and “To”, like “From Wuse to Asokoro”. <span class="text-red-600">Error: Missing “from”/“to”.</span>';
        }

        const startSuggestion = suggestLocation(start);
        const endSuggestion = suggestLocation(end);
        if (!startSuggestion || !endSuggestion) {
            return selectedLanguage === 'hausa'
                ? `Kai! Shin kana nufin daga ${startSuggestion || start} zuwa ${endSuggestion || end}? Gwada kuma! <span class="text-red-600">Kuskure: Wuri ba a gane shi ba.</span>`
                : `Oops, did you mean from ${startSuggestion || start} to ${endSuggestion || end}? Try again! <span class="text-red-600">Error: Unrecognized location.</span>`;
        }

        start = startSuggestion;
        end = endSuggestion;

        let key = `${start}-${end}`;
        if (!routes[key]) {
            key = `${end}-${start}`;
        }

        if (routes[key]) {
            const route = routes[key];
            let response = selectedLanguage === 'hausa'
                ? `Sannu! Mu shirya tafiyarka daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)}! Ga hanyoyinka:<br>`
                : `Hi! Let’s plan your trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)}! Here’s how you can go:<br>`;

            const currentHour = new Date().getHours();
            const isNightTrip = currentHour < 6 || currentHour >= 20;
            const hasSecurityConcerns = route.end_address_details.security_concerns;
            const isSingleModeClose = route.alighting_points && route.alighting_points.distance_to_destination <= 0.5 && route.alighting_points.single_mode;

            if (hasAddress && route.start_address_details.distance_to_bus_stop <= 1) {
                response += selectedLanguage === 'hausa'
                    ? `<b>Fara Adireshi:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba a Google Maps]</a><br>`
                    : `<b>Starting Point:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank" class="text-blue-600 underline">[View on Google Maps]</a><br>`;
            }

            response += selectedLanguage === 'hausa'
                ? `<b>Hanyar Babba:</b> ${route.main_route.hausa_description}<br>` +
                  `<b>Motoci:</b> ${route.main_route.transport.join(", ")}<br>` +
                  `<b>Kudi (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
                  `<b>Lokaci:</b> ${route.main_route.hausa_time}<br>` +
                  `<b>Tambaya Zirga-zirga:</b> ${route.main_route.hausa_traffic}<br><br>` +
                  `<b>Hanyar Madadin:</b> ${route.alternative_route.hausa_description}<br>` +
                  `<b>Motoci:</b> ${route.alternative_route.transport.join(", ")}<br>` +
                  `<b>Kudi (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
                  `<b>Lokaci:</b> ${route.alternative_route.hausa_time}<br>` +
                  `<b>Tambaya Zirga-zirga:</b> ${route.alternative_route.hausa_traffic}<br><br>`
                : `<b>Main Route:</b> ${route.main_route.description}<br>` +
                  `<b>Transport:</b> ${route.main_route.transport.join(", ")}<br>` +
                  `<b>Fares (NGN):</b> ${route.main_route.fares.join(", ")}<br>` +
                  `<b>Time:</b> ${route.main_route.time}<br>` +
                  `<b>Traffic Note:</b> ${route.main_route.traffic}<br><br>` +
                  `<b>Alternative Route:</b> ${route.alternative_route.description}<br>` +
                  `<b>Transport:</b> ${route.alternative_route.transport.join(", ")}<br>` +
                  `<b>Fares (NGN):</b> ${route.alternative_route.fares.join(", ")}<br>` +
                  `<b>Time:</b> ${route.alternative_route.time}<br>` +
                  `<b>Traffic Note:</b> ${route.alternative_route.traffic}<br><br>`;

            if (hasAddress && (isNightTrip && !isSingleModeClose || hasSecurityConcerns)) {
                response += selectedLanguage === 'hausa'
                    ? `<b>Shawara kan E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
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
                        ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba a Google Maps]</a><br>`
                        : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[View on Google Maps]</a><br>`;
                } else {
                    response += selectedLanguage === 'hausa'
                        ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[Duba a Google Maps]</a><br>`
                        : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank" class="text-blue-600 underline">[View on Google Maps]</a><br>`;
                }
            }

            response += selectedLanguage === 'hausa' ? 'Na gode! Kana son ƙarin taimako?' : 'All set! Need more help?';
            return response;
        } else {
            return selectedLanguage === 'hausa'
                ? `Kai! Ba mu da cikakken bayani akan wannan hanya. Gwada yankuna kamar Wuse, Asokoro, ko Area Councils. <span class="text-red-600">Kuskure: Ba a samo hanya ba.</span>`
                : `Sorry, I don’t have details for that route yet. Try areas like Wuse, Asokoro, or Area Councils! <span class="text-red-600">Error: Route not found.</span>`;
        }
    } catch (e) {
        console.log('chatbotResponse Error:', e.message);
        return selectedLanguage === 'hausa'
            ? `Kai! Wani kuskure ya faru. Gwada kuma! <span class="text-red-600">Kuskure: ${e.message}</span>`
            : `Oops, something went wrong. Please try again! <span class="text-red-600">Error: ${e.message}</span>`;
    }
}
