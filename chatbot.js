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
    "berger to kubwa": {
        start_address_details: {
            description: "Berger, near Berger Junction",
            hausa_description: "Berger, kusa da Berger Junction",
            map_link: "https://maps.google.com/?q=Berger,+Abuja",
            distance_to_bus_stop: 0.1
        },
        main_route: {
            description: "Take direct bus from Berger Junction to Kubwa. ~10 km.",
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
    // Added more permutations from sources, e.g., "berger to nyanya"
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
    // More added from sources
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
    // Reverse permutation
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
    // ... Add reverse and other permutations for all defined routes. For example, "kubwa to berger", "maitama to garki", etc.
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
    },
    // Continue adding for all routes and their reverses. For areas like "gwarinpa to asokoro", if not direct, the dynamic generator will handle.
    // Full list would be long; in practice, add as needed or use graph for all permutations.
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
        graph[end][start] = { ...routes[key], main_route: { ...routes[key].main_route, description: routes[key].main_route.description.replace(start, end).replace(end, start) } }; // Simplified reverse
    }
});

// BFS for path finding (shortest by transits)
function findPath(start, end) {
    if (graph[start] && graph[start][end]) return [[start, end]];
    const queue = [[start, [start]]];
    const visited = new Set();
    while (queue.length) {
        const [current, path] = queue.shift();
        if (visited.has(current) ) continue;
        visited.add(current);
        if (current === end) return path;
        for (const neighbor in graph[current] || {}) {
            queue.push([neighbor, [...path, neighbor]]);
        }
    }
    return null;
}

// Update getRouteKey to use dynamic path if direct not found
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
            levenshteinDistance(inputWords[0], keyWords[1]),
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
    if (path) return path; // Return path array for transits
    return null;
}

// Update formatRoute to handle path array for transits
function formatRoute(routeOrPath, lang) {
    if (Array.isArray(routeOrPath)) {
        // Transit path
        let response = lang === 'hausa' ? "Babu hanya kai tsaye, amma zaka yi transit ta wadannan hanyoyi:<br>" : "No direct route, but you can transit via these adjoining routes:<br>";
        for (let i = 0; i < routeOrPath.length - 1; i++) {
            const start = routeOrPath[i];
            const end = routeOrPath[i + 1];
            const segment = graph[start][end];
            response += lang === 'hausa' ? `<b>Daga ${start} zuwa ${end}:</b> ${segment.main_route.hausa_description} (Kudi: ${segment.main_route.fares.join(", ")}, Lokaci: ${segment.main_route.hausa_time})<br>` : `<b>From ${start} to ${end}:</b> ${segment.main_route.description} (Fares: ${segment.main_route.fares.join(", ")}, Time: ${segment.main_route.time})<br>`;
        }
        return response;
    } else {
        // Direct route (existing formatRoute logic)
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

        response += isHausa ? "Na gode! Kana bukatar ƙarin taimako?" : "All set! Need more help?";
        return response;
    }
}

// ... (rest of the code, with inputForm.addEventListener updated to handle path)
inputForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = textInput.value.trim();
    if (!input) return;
    console.log("Processing input:", input); // Debug log
    renderMessage(input, "user");
    loadingDiv.style.display = 'block';
    try {
        const routeKeyOrPath = getRouteKey(input);
        console.log("Matched route key or path:", routeKeyOrPath); // Debug log
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
        console.error("Error in submit handler:", error); // Debug log
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

// ... (other code as before)
