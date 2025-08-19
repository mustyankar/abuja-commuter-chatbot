const routes = {
    "wuse-maitama": {
        "start_address_details": {
            "description": "Wuse, near Wuse Market",
            "hausa_description": "Hausa: Wuse, near Wuse Market",
            "map_link": "https://maps.google.com/?q=Wuse,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            "hausa_description": "Hausa: Take Adetokunbo Ademola Crescent to Maitama. ~4 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["200-300"],
            "time": "10-15 mins",
            "hausa_time": "Hausa: 10-15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Aminu Kano Crescent to Maitama. ~5 km.",
            "hausa_description": "Hausa: Via Aminu Kano Crescent to Maitama. ~5 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["150-250"],
            "time": "15-20 mins",
            "hausa_time": "Hausa: 15-20 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Use Bolt or Uber for quick trips, especially at night.",
            "hausa_description": "Hausa: Use Bolt or Uber for quick trips, especially at night."
        },
        "alighting_points": {
            "description": "Maitama Roundabout, walk 100m to destination.",
            "hausa_description": "Hausa: Maitama Roundabout, walk 100m to destination.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "garki-asokoro": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "hausa_description": "Hausa: Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["100-200"],
            "time": "15 mins",
            "hausa_time": "Hausa: 15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Area 1 to AYA. ~6 km.",
            "hausa_description": "Hausa: Via Area 1 to AYA. ~6 km.",
            "transport": ["Keke", "Bus"],
            "fares": ["150-250"],
            "time": "20 mins",
            "hausa_time": "Hausa: 20 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "ehailing_advisory": {
            "description": "Bolt for short trips.",
            "hausa_description": "Hausa: Bolt for short trips."
        },
        "alighting_points": {
            "description": "Asokoro District, walk 200m.",
            "hausa_description": "Hausa: Asokoro District, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": true
        }
    },
    "nyanya-karu": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Karu Road to Karu Market. ~2 km.",
            "hausa_description": "Hausa: Take Karu Road to Karu Market. ~2 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "5-10 mins",
            "hausa_time": "Hausa: 5-10 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Nyanya Underpass to Karu. ~3 km.",
            "hausa_description": "Hausa: Via Nyanya Underpass to Karu. ~3 km.",
            "transport": ["Keke"],
            "fares": ["100-150"],
            "time": "10 mins",
            "hausa_time": "Hausa: 10 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Use Indrive for cheap local rides.",
            "hausa_description": "Hausa: Use Indrive for cheap local rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 50m.",
            "hausa_description": "Hausa: Karu Market, walk 50m.",
            "distance_to_destination": 0.05,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.05,
            "security_concerns": false
        }
    },
    "lugbe-airport": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "hausa_description": "Hausa: Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-500"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Idu to Airport. ~12 km.",
            "hausa_description": "Hausa: Via Idu to Airport. ~12 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["400-600"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "kubwa-bwari": {
        "start_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Bwari Road to Bwari Town. ~15 km.",
            "hausa_description": "Hausa: Take Bwari Road to Bwari Town. ~15 km.",
            "transport": ["Bus", "Mini Bus"],
            "fares": ["200-400"],
            "time": "30 mins",
            "hausa_time": "Hausa: 30 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Dutse to Bwari. ~17 km.",
            "hausa_description": "Hausa: Via Dutse to Bwari. ~17 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["250-450"],
            "time": "35 mins",
            "hausa_time": "Hausa: 35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Bolt for rural areas.",
            "hausa_description": "Hausa: Bolt for rural areas."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "ushafa-shere": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Shere Road from Ushafa. ~20 km.",
            "hausa_description": "Hausa: Take Shere Road from Ushafa. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Shere. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Shere. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Shere Village, walk 300m.",
            "hausa_description": "Hausa: Shere Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Shere Village",
            "hausa_description": "Hausa: Shere Village",
            "map_link": "https://maps.google.com/?q=Shere,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "ushafa-mpape": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Bwari Road to Mpape. ~20 km.",
            "hausa_description": "Hausa: Take Bwari Road to Mpape. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Mpape. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Mpape. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Mpape Hill, walk 300m.",
            "hausa_description": "Hausa: Mpape Hill, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "mpape-kawu": {
        "start_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Bwari Road to Kawu Village. ~25 km.",
            "hausa_description": "Hausa: Take Bwari Road to Kawu Village. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Ushafa to Kawu. ~27 km.",
            "hausa_description": "Hausa: Via Ushafa to Kawu. ~27 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["450-650"],
            "time": "50 mins",
            "hausa_time": "Hausa: 50 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Kawu Village, walk 300m.",
            "hausa_description": "Hausa: Kawu Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kawu, near Kawu Village",
            "hausa_description": "Hausa: Kawu, near Kawu Village",
            "map_link": "https://maps.google.com/?q=Kawu,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "maitama-asokoro": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Musa Yar’Adua Way to Asokoro. ~6 km.",
            "hausa_description": "Hausa: Take Musa Yar’Adua Way to Asokoro. ~6 km.",
            "transport": ["Shared Taxi", "Bus"],
            "fares": ["150-250"],
            "time": "15-20 mins",
            "hausa_time": "Hausa: 15-20 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Wuse to Asokoro. ~7 km.",
            "hausa_description": "Hausa: Via Wuse to Asokoro. ~7 km.",
            "transport": ["Keke", "Mini Bus"],
            "fares": ["100-200"],
            "time": "20-25 mins",
            "hausa_time": "Hausa: 20-25 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt or Uber for quick trips.",
            "hausa_description": "Hausa: Bolt or Uber for quick trips."
        },
        "alighting_points": {
            "description": "Asokoro District, walk 200m.",
            "hausa_description": "Hausa: Asokoro District, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": true
        }
    },
    "maitama-garki": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Musa Yar’Adua Way to Garki. ~5 km.",
            "hausa_description": "Hausa: Take Musa Yar’Adua Way to Garki. ~5 km.",
            "transport": ["Shared Taxi", "Bus"],
            "fares": ["150-250"],
            "time": "15-20 mins",
            "hausa_time": "Hausa: 15-20 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Wuse to Garki. ~6 km.",
            "hausa_description": "Hausa: Via Wuse to Garki. ~6 km.",
            "transport": ["Keke", "Mini Bus"],
            "fares": ["100-200"],
            "time": "20-25 mins",
            "hausa_time": "Hausa: 20-25 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt or Uber for quick trips.",
            "hausa_description": "Hausa: Bolt or Uber for quick trips."
        },
        "alighting_points": {
            "description": "Garki Market, walk 150m.",
            "hausa_description": "Hausa: Garki Market, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "maitama-nyanya": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take A2 to Nyanya Bridge. ~12 km.",
            "hausa_description": "Hausa: Take A2 to Nyanya Bridge. ~12 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "alternative_route": {
            "description": "Via Asokoro to Nyanya. ~13 km.",
            "hausa_description": "Hausa: Via Asokoro to Nyanya. ~13 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["250-350"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Nyanya Bridge, walk 150m.",
            "hausa_description": "Hausa: Nyanya Bridge, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "maitama-karu": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take A2 to Karu Market. ~10 km.",
            "hausa_description": "Hausa: Take A2 to Karu Market. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["250-350"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Nyanya to Karu. ~11 km.",
            "hausa_description": "Hausa: Via Nyanya to Karu. ~11 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["200-300"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 100m.",
            "hausa_description": "Hausa: Karu Market, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "maitama-lugbe": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Garki to Lugbe. ~16 km.",
            "hausa_description": "Hausa: Via Garki to Lugbe. ~16 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["250-350"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "maitama-airport": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Airport Road. ~18 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Airport Road. ~18 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Lugbe to Airport. ~20 km.",
            "hausa_description": "Hausa: Via Lugbe to Airport. ~20 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["450-650"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "maitama-kubwa": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Kubwa. ~18 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Kubwa. ~18 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~20 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~20 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["250-350"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "maitama-bwari": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Bwari Road. ~25 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Bwari Road. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-500"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Bwari. ~27 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Bwari. ~27 km.",
            "transport": ["Mini Bus", "Bolt"],
            "fares": ["350-550"],
            "time": "45-55 mins",
            "hausa_time": "Hausa: 45-55 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt for rural areas.",
            "hausa_description": "Hausa: Bolt for rural areas."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "maitama-ushafa": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Ushafa Road. ~22 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Ushafa Road. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-500"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Kubwa to Ushafa. ~24 km.",
            "hausa_description": "Hausa: Via Kubwa to Ushafa. ~24 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["400-550"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in Ushafa; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in Ushafa; use local options."
        },
        "alighting_points": {
            "description": "Ushafa Village, walk 300m.",
            "hausa_description": "Hausa: Ushafa Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "maitama-shere": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Bwari, then Shere Road. ~30 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Bwari, then Shere Road. ~30 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "50-60 mins",
            "hausa_time": "Hausa: 50-60 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Mpape to Shere. ~32 km.",
            "hausa_description": "Hausa: Via Mpape to Shere. ~32 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["450-650"],
            "time": "55-65 mins",
            "hausa_time": "Hausa: 55-65 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in Shere; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in Shere; use local options."
        },
        "alighting_points": {
            "description": "Shere Village, walk 300m.",
            "hausa_description": "Hausa: Shere Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Shere Village",
            "hausa_description": "Hausa: Shere Village",
            "map_link": "https://maps.google.com/?q=Shere,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "maitama-mpape": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Murtala Mohammed Way to Mpape. ~8 km.",
            "hausa_description": "Hausa: Take Murtala Mohammed Way to Mpape. ~8 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Wuse to Mpape. ~9 km.",
            "hausa_description": "Hausa: Via Wuse to Mpape. ~9 km.",
            "transport": ["Keke", "Mini Bus"],
            "fares": ["150-250"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt or Uber available.",
            "hausa_description": "Hausa: Bolt or Uber available."
        },
        "alighting_points": {
            "description": "Mpape Hill, walk 200m.",
            "hausa_description": "Hausa: Mpape Hill, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "maitama-kawu": {
        "start_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Bwari Road, then Kawu. ~35 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Bwari Road, then Kawu. ~35 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["500-700"],
            "time": "60-70 mins",
            "hausa_time": "Hausa: 60-70 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Ushafa to Kawu. ~37 km.",
            "hausa_description": "Hausa: Via Ushafa to Kawu. ~37 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["550-750"],
            "time": "65-75 mins",
            "hausa_time": "Hausa: 65-75 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in Kawu; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in Kawu; use local options."
        },
        "alighting_points": {
            "description": "Kawu Village, walk 300m.",
            "hausa_description": "Hausa: Kawu Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kawu, near Kawu Village",
            "hausa_description": "Hausa: Kawu, near Kawu Village",
            "map_link": "https://maps.google.com/?q=Kawu,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "garki-asokoro": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "hausa_description": "Hausa: Take Ahmadu Bello Way to Asokoro. ~5 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["150-250"],
            "time": "15 mins",
            "hausa_time": "Hausa: 15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Area 1 to AYA. ~6 km.",
            "hausa_description": "Hausa: Via Area 1 to AYA. ~6 km.",
            "transport": ["Keke", "Bus"],
            "fares": ["100-200"],
            "time": "20 mins",
            "hausa_time": "Hausa: 20 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "ehailing_advisory": {
            "description": "Bolt for short trips.",
            "hausa_description": "Hausa: Bolt for short trips."
        },
        "alighting_points": {
            "description": "Asokoro District, walk 200m.",
            "hausa_description": "Hausa: Asokoro District, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": true
        }
    },
    "garki-maitama": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Ahmadu Bello Way to Maitama. ~6 km.",
            hausa_description: "Hausa: Take Ahmadu Bello Way to Maitama. ~6 km.",
            transport: ["Shared Taxi", "Bus"],
            fares: ["200-300"],
            time: "15-25 mins",
            hausa_time: "Hausa: 15-25 mins",
            traffic: "Moderate",
            hausa_traffic: "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Wuse to Maitama. ~7 km.",
            "hausa_description": "Hausa: Via Wuse to Maitama. ~7 km.",
            "transport": ["Keke", "Mini Bus"],
            "fares": ["150-250"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt or Uber for quick trips.",
            "hausa_description": "Hausa: Bolt or Uber for quick trips."
        },
        "alighting_points": {
            "description": "Maitama Roundabout, walk 100m.",
            "hausa_description": "Hausa: Maitama Roundabout, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "garki-nyanya": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take A2 to Nyanya Bridge. ~10 km.",
            "hausa_description": "Hausa: Take A2 to Nyanya Bridge. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["250-350"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "alternative_route": {
            "description": "Via Asokoro to Nyanya. ~11 km.",
            "hausa_description": "Hausa: Via Asokoro to Nyanya. ~11 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["200-300"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Nyanya Bridge, walk 150m.",
            "hausa_description": "Hausa: Nyanya Bridge, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "garki-karu": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take A2 to Karu Market. ~8 km.",
            "hausa_description": "Hausa: Take A2 to Karu Market. ~8 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Nyanya to Karu. ~9 km.",
            "hausa_description": "Hausa: Via Nyanya to Karu. ~9 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["150-250"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 100m.",
            "hausa_description": "Hausa: Karu Market, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "garki-lugbe": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Lugbe. ~12 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Lugbe. ~12 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["250-350"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Area 1 to Lugbe. ~13 km.",
            "hausa_description": "Hausa: Via Area 1 to Lugbe. ~13 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["200-300"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "garki-airport": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Airport Road. ~18 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Airport Road. ~18 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Lugbe to Airport. ~20 km.",
            "hausa_description": "Hausa: Via Lugbe to Airport. ~20 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["450-650"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "garki-kubwa": {
        "start_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Kubwa Expressway to Kubwa. ~18 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway to Kubwa. ~18 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~20 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~20 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["250-350"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "asokoro-nyanya": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take A2 to Nyanya Bridge. ~8 km.",
            "hausa_description": "Hausa: Take A2 to Nyanya Bridge. ~8 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "15-25 mins",
            "hausa_time": "Hausa: 15-25 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Karu to Nyanya. ~9 km.",
            "hausa_description": "Hausa: Via Karu to Nyanya. ~9 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["150-250"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Nyanya Bridge, walk 150m.",
            "hausa_description": "Hausa: Nyanya Bridge, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "asokoro-karu": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take A2 to Karu Market. ~6 km.",
            "hausa_description": "Hausa: Take A2 to Karu Market. ~6 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["150-250"],
            "time": "15-25 mins",
            "hausa_time": "Hausa: 15-25 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Nyanya to Karu. ~7 km.",
            "hausa_description": "Hausa: Via Nyanya to Karu. ~7 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 100m.",
            "hausa_description": "Hausa: Karu Market, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "asokoro-lugbe": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Garki to Lugbe. ~16 km.",
            "hausa_description": "Hausa: Via Garki to Lugbe. ~16 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["250-350"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "nyanya-karu": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Karu Road to Karu Market. ~2 km.",
            "hausa_description": "Hausa: Take Karu Road to Karu Market. ~2 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "5-10 mins",
            "hausa_time": "Hausa: 5-10 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Nyanya Underpass to Karu. ~3 km.",
            "hausa_description": "Hausa: Via Nyanya Underpass to Karu. ~3 km.",
            "transport": ["Keke"],
            "fares": ["100-150"],
            "time": "10 mins",
            "hausa_time": "Hausa: 10 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Use Indrive for cheap local rides.",
            "hausa_description": "Hausa: Use Indrive for cheap local rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 50m.",
            "hausa_description": "Hausa: Karu Market, walk 50m.",
            "distance_to_destination": 0.05,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.05,
            "security_concerns": false
        }
    },
    "nyanya-lugbe": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take A2 to Umaru Musa Yar’Adua Expressway to Lugbe. ~20 km.",
            "hausa_description": "Hausa: Take A2 to Umaru Musa Yar’Adua Expressway to Lugbe. ~20 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Karu to Lugbe. ~22 km.",
            "hausa_description": "Hausa: Via Karu to Lugbe. ~22 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["350-450"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "karu-airport": {
        "start_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take A2 to Airport Road. ~20 km.",
            "hausa_description": "Hausa: Take A2 to Airport Road. ~20 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Nyanya to Airport. ~22 km.",
            "hausa_description": "Hausa: Via Nyanya to Airport. ~22 km.",
            "transport": ["Mini Bus", "Bolt"],
            "fares": ["450-650"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "karu-kubwa": {
        "start_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway via Wuse to Kubwa. ~25 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway via Wuse to Kubwa. ~25 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~27 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~27 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["350-450"],
            "time": "45-55 mins",
            "hausa_time": "Hausa: 45-55 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "lugbe-airport": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "hausa_description": "Hausa: Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-500"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Idu to Airport. ~12 km.",
            "hausa_description": "Hausa: Via Idu to Airport. ~12 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["400-600"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "lugbe-kubwa": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Kubwa. ~15 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Kubwa. ~15 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["250-350"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~17 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~17 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["300-400"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "airport-bwari": {
        "start_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Airport Road to Kubwa, then Bwari Road. ~25 km.",
            "hausa_description": "Hausa: Take Airport Road to Kubwa, then Bwari Road. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate to heavy",
            "hausa_traffic": "Hausa: Moderate to heavy"
        },
        "alternative_route": {
            "description": "Via Idu to Bwari. ~27 km.",
            "hausa_description": "Hausa: Via Idu to Bwari. ~27 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["450-650"],
            "time": "45-55 mins",
            "hausa_time": "Hausa: 45-55 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport-to-Bwari trips.",
            "hausa_description": "Hausa: Uber or Bolt for airport-to-Bwari trips."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "kubwa-bwari": {
        "start_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Bwari Road to Bwari Town. ~15 km.",
            "hausa_description": "Hausa: Take Bwari Road to Bwari Town. ~15 km.",
            "transport": ["Bus", "Mini Bus"],
            "fares": ["200-400"],
            "time": "30 mins",
            "hausa_time": "Hausa: 30 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Dutse to Bwari. ~17 km.",
            "hausa_description": "Hausa: Via Dutse to Bwari. ~17 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["250-450"],
            "time": "35 mins",
            "hausa_time": "Hausa: 35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Bolt for rural areas.",
            "hausa_description": "Hausa: Bolt for rural areas."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "ushafa-shere": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Shere Road from Ushafa. ~20 km.",
            "hausa_description": "Hausa: Take Shere Road from Ushafa. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Shere. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Shere. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Shere Village, walk 300m.",
            "hausa_description": "Hausa: Shere Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Shere Village",
            "hausa_description": "Hausa: Shere Village",
            "map_link": "https://maps.google.com/?q=Shere,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "ushafa-mpape": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Bwari Road to Mpape. ~20 km.",
            "hausa_description": "Hausa: Take Bwari Road to Mpape. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Mpape. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Mpape. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Mpape Hill, walk 300m.",
            "hausa_description": "Hausa: Mpape Hill, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "mpape-kawu": {
        "start_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Bwari Road to Kawu Village. ~25 km.",
            "hausa_description": "Hausa: Take Bwari Road to Kawu Village. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Ushafa to Kawu. ~27 km.",
            "hausa_description": "Hausa: Via Ushafa to Kawu. ~27 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["450-650"],
            "time": "50 mins",
            "hausa_time": "Hausa: 50 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Kawu Village, walk 300m.",
            "hausa_description": "Hausa: Kawu Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kawu, near Kawu Village",
            "hausa_description": "Hausa: Kawu, near Kawu Village",
            "map_link": "https://maps.google.com/?q=Kawu,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "asokoro-maitama": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Musa Yar’Adua Way to Maitama. ~6 km.",
            "hausa_description": "Hausa: Take Musa Yar’Adua Way to Maitama. ~6 km.",
            "transport": ["Shared Taxi", "Bus"],
            "fares": ["150-250"],
            "time": "15-20 mins",
            "hausa_time": "Hausa: 15-20 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Wuse to Maitama. ~7 km.",
            "hausa_description": "Hausa: Via Wuse to Maitama. ~7 km.",
            "transport": ["Keke", "Mini Bus"],
            "fares": ["100-200"],
            "time": "20-25 mins",
            "hausa_time": "Hausa: 20-25 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Bolt or Uber for quick trips.",
            "hausa_description": "Hausa: Bolt or Uber for quick trips."
        },
        "alighting_points": {
            "description": "Maitama Roundabout, walk 100m.",
            "hausa_description": "Hausa: Maitama Roundabout, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Maitama, near Maitama Roundabout",
            "hausa_description": "Hausa: Maitama, near Maitama Roundabout",
            "map_link": "https://maps.google.com/?q=Maitama,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "asokoro-garki": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Ahmadu Bello Way to Garki. ~5 km.",
            "hausa_description": "Hausa: Take Ahmadu Bello Way to Garki. ~5 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["150-250"],
            "time": "15 mins",
            "hausa_time": "Hausa: 15 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Area 1 to Garki. ~6 km.",
            "hausa_description": "Hausa: Via Area 1 to Garki. ~6 km.",
            "transport": ["Keke", "Bus"],
            "fares": ["100-200"],
            "time": "20 mins",
            "hausa_time": "Hausa: 20 mins",
            "traffic": "Heavy during rush",
            "hausa_traffic": "Hausa: Heavy during rush"
        },
        "ehailing_advisory": {
            "description": "Bolt for short trips.",
            "hausa_description": "Hausa: Bolt for short trips."
        },
        "alighting_points": {
            "description": "Garki Market, walk 150m.",
            "hausa_description": "Hausa: Garki Market, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Garki, near Garki Market",
            "hausa_description": "Hausa: Garki, near Garki Market",
            "map_link": "https://maps.google.com/?q=Garki,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "asokoro-nyanya": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take A2 to Nyanya Bridge. ~8 km.",
            "hausa_description": "Hausa: Take A2 to Nyanya Bridge. ~8 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["200-300"],
            "time": "15-25 mins",
            "hausa_time": "Hausa: 15-25 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Karu to Nyanya. ~9 km.",
            "hausa_description": "Hausa: Via Karu to Nyanya. ~9 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["150-250"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Nyanya Bridge, walk 150m.",
            "hausa_description": "Hausa: Nyanya Bridge, walk 150m.",
            "distance_to_destination": 0.15,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_from_bus_stop": 0.15,
            "security_concerns": false
        }
    },
    "asokoro-karu": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take A2 to Karu Market. ~6 km.",
            "hausa_description": "Hausa: Take A2 to Karu Market. ~6 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["150-250"],
            "time": "15-25 mins",
            "hausa_time": "Hausa: 15-25 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Nyanya to Karu. ~7 km.",
            "hausa_description": "Hausa: Via Nyanya to Karu. ~7 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Indrive for cost-effective rides.",
            "hausa_description": "Hausa: Indrive for cost-effective rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 100m.",
            "hausa_description": "Hausa: Karu Market, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "asokoro-lugbe": {
        "start_address_details": {
            "description": "Asokoro, near AYA Roundabout",
            "hausa_description": "Hausa: Asokoro, near AYA Roundabout",
            "map_link": "https://maps.google.com/?q=Asokoro,+Abuja",
            "distance_to_bus_stop": 0.2
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Lugbe. ~15 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Garki to Lugbe. ~16 km.",
            "hausa_description": "Hausa: Via Garki to Lugbe. ~16 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["250-350"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "nyanya-karu": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Karu Road to Karu Market. ~2 km.",
            "hausa_description": "Hausa: Take Karu Road to Karu Market. ~2 km.",
            "transport": ["Mini Bus", "Keke"],
            "fares": ["100-200"],
            "time": "5-10 mins",
            "hausa_time": "Hausa: 5-10 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Nyanya Underpass to Karu. ~3 km.",
            "hausa_description": "Hausa: Via Nyanya Underpass to Karu. ~3 km.",
            "transport": ["Keke"],
            "fares": ["100-150"],
            "time": "10 mins",
            "hausa_time": "Hausa: 10 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Use Indrive for cheap local rides.",
            "hausa_description": "Hausa: Use Indrive for cheap local rides."
        },
        "alighting_points": {
            "description": "Karu Market, walk 50m.",
            "hausa_description": "Hausa: Karu Market, walk 50m.",
            "distance_to_destination": 0.05,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_from_bus_stop": 0.05,
            "security_concerns": false
        }
    },
    "nyanya-kubwa": {
        "start_address_details": {
            "description": "Nyanya, near Nyanya Bridge",
            "hausa_description": "Hausa: Nyanya, near Nyanya Bridge",
            "map_link": "https://maps.google.com/?q=Nyanya,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Kubwa Expressway via Wuse to Kubwa. ~22 km.",
            "hausa_description": "Hausa: Take Kubwa Expressway via Wuse to Kubwa. ~22 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~24 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~24 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["350-450"],
            "time": "45-55 mins",
            "hausa_time": "Hausa: 45-55 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "karu-lugbe": {
        "start_address_details": {
            "description": "Karu, near Karu Market",
            "hausa_description": "Hausa: Karu, near Karu Market",
            "map_link": "https://maps.google.com/?q=Karu,+Abuja",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take A2 to Umaru Musa Yar’Adua Expressway to Lugbe. ~20 km.",
            "hausa_description": "Hausa: Take A2 to Umaru Musa Yar’Adua Expressway to Lugbe. ~20 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["300-400"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Heavy during peak",
            "hausa_traffic": "Hausa: Heavy during peak"
        },
        "alternative_route": {
            "description": "Via Nyanya to Lugbe. ~22 km.",
            "hausa_description": "Hausa: Via Nyanya to Lugbe. ~22 km.",
            "transport": ["Bus", "Keke"],
            "fares": ["350-450"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Lugbe FHA, walk 200m.",
            "hausa_description": "Hausa: Lugbe FHA, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "lugbe-airport": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "hausa_description": "Hausa: Take Airport Road to Nnamdi Azikiwe Airport. ~10 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["300-500"],
            "time": "20-30 mins",
            "hausa_time": "Hausa: 20-30 mins",
            "traffic": "Heavy near airport",
            "hausa_traffic": "Hausa: Heavy near airport"
        },
        "alternative_route": {
            "description": "Via Idu to Airport. ~12 km.",
            "hausa_description": "Hausa: Via Idu to Airport. ~12 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["400-600"],
            "time": "25-35 mins",
            "hausa_time": "Hausa: 25-35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport transfers.",
            "hausa_description": "Hausa: Uber or Bolt for airport transfers."
        },
        "alighting_points": {
            "description": "Airport Terminal, walk 100m.",
            "hausa_description": "Hausa: Airport Terminal, walk 100m.",
            "distance_to_destination": 0.1,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_from_bus_stop": 0.1,
            "security_concerns": false
        }
    },
    "lugbe-kubwa": {
        "start_address_details": {
            "description": "Lugbe, near Lugbe FHA",
            "hausa_description": "Hausa: Lugbe, near Lugbe FHA",
            "map_link": "https://maps.google.com/?q=Lugbe,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Umaru Musa Yar’Adua Expressway to Kubwa. ~15 km.",
            "hausa_description": "Hausa: Take Umaru Musa Yar’Adua Expressway to Kubwa. ~15 km.",
            "transport": ["BRT Bus", "Shared Taxi"],
            "fares": ["250-350"],
            "time": "30-40 mins",
            "hausa_time": "Hausa: 30-40 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "alternative_route": {
            "description": "Via Gwarimpa to Kubwa. ~17 km.",
            "hausa_description": "Hausa: Via Gwarimpa to Kubwa. ~17 km.",
            "transport": ["Bus", "Bolt"],
            "fares": ["300-400"],
            "time": "35-45 mins",
            "hausa_time": "Hausa: 35-45 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for comfort.",
            "hausa_description": "Hausa: Uber or Bolt for comfort."
        },
        "alighting_points": {
            "description": "Kubwa Gate, walk 200m.",
            "hausa_description": "Hausa: Kubwa Gate, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "airport-bwari": {
        "start_address_details": {
            "description": "Nnamdi Azikiwe International Airport",
            "hausa_description": "Hausa: Nnamdi Azikiwe International Airport",
            "map_link": "https://maps.google.com/?q=Abuja+Airport",
            "distance_to_bus_stop": 0.1
        },
        "main_route": {
            "description": "Take Airport Road to Kubwa, then Bwari Road. ~25 km.",
            "hausa_description": "Hausa: Take Airport Road to Kubwa, then Bwari Road. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "40-50 mins",
            "hausa_time": "Hausa: 40-50 mins",
            "traffic": "Moderate to heavy",
            "hausa_traffic": "Hausa: Moderate to heavy"
        },
        "alternative_route": {
            "description": "Via Idu to Bwari. ~27 km.",
            "hausa_description": "Hausa: Via Idu to Bwari. ~27 km.",
            "transport": ["Train from Idu", "Bus"],
            "fares": ["450-650"],
            "time": "45-55 mins",
            "hausa_time": "Hausa: 45-55 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Uber or Bolt for airport-to-Bwari trips.",
            "hausa_description": "Hausa: Uber or Bolt for airport-to-Bwari trips."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "kubwa-bwari": {
        "start_address_details": {
            "description": "Kubwa, near Kubwa Gate",
            "hausa_description": "Hausa: Kubwa, near Kubwa Gate",
            "map_link": "https://maps.google.com/?q=Kubwa,+Abuja",
            "distance_to_bus_stop": 0.3
        },
        "main_route": {
            "description": "Take Bwari Road to Bwari Town. ~15 km.",
            "hausa_description": "Hausa: Take Bwari Road to Bwari Town. ~15 km.",
            "transport": ["Bus", "Mini Bus"],
            "fares": ["200-400"],
            "time": "30 mins",
            "hausa_time": "Hausa: 30 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Dutse to Bwari. ~17 km.",
            "hausa_description": "Hausa: Via Dutse to Bwari. ~17 km.",
            "transport": ["Shared Taxi", "Keke"],
            "fares": ["250-450"],
            "time": "35 mins",
            "hausa_time": "Hausa: 35 mins",
            "traffic": "Moderate",
            "hausa_traffic": "Hausa: Moderate"
        },
        "ehailing_advisory": {
            "description": "Bolt for rural areas.",
            "hausa_description": "Hausa: Bolt for rural areas."
        },
        "alighting_points": {
            "description": "Bwari Town Center, walk 200m.",
            "hausa_description": "Hausa: Bwari Town Center, walk 200m.",
            "distance_to_destination": 0.2,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Bwari Town Center",
            "hausa_description": "Hausa: Bwari Town Center",
            "map_link": "https://maps.google.com/?q=Bwari,+Abuja",
            "distance_from_bus_stop": 0.2,
            "security_concerns": false
        }
    },
    "ushafa-shere": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Shere Road from Ushafa. ~20 km.",
            "hausa_description": "Hausa: Take Shere Road from Ushafa. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Shere. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Shere. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Shere Village, walk 300m.",
            "hausa_description": "Hausa: Shere Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Shere Village",
            "hausa_description": "Hausa: Shere Village",
            "map_link": "https://maps.google.com/?q=Shere,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "ushafa-mpape": {
        "start_address_details": {
            "description": "Ushafa, near Ushafa Village",
            "hausa_description": "Hausa: Ushafa, near Ushafa Village",
            "map_link": "https://maps.google.com/?q=Ushafa,+Abuja",
            "distance_to_bus_stop": 0.5
        },
        "main_route": {
            "description": "Take Bwari Road to Mpape. ~20 km.",
            "hausa_description": "Hausa: Take Bwari Road to Mpape. ~20 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["300-500"],
            "time": "40 mins",
            "hausa_time": "Hausa: 40 mins",
            "traffic": "Light",
            "hausa_traffic": "Hausa: Light"
        },
        "alternative_route": {
            "description": "Via Bwari Town to Mpape. ~22 km.",
            "hausa_description": "Hausa: Via Bwari Town to Mpape. ~22 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["350-550"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Mpape Hill, walk 300m.",
            "hausa_description": "Hausa: Mpape Hill, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    },
    "mpape-kawu": {
        "start_address_details": {
            "description": "Mpape, near Mpape Hill",
            "hausa_description": "Hausa: Mpape, near Mpape Hill",
            "map_link": "https://maps.google.com/?q=Mpape,+Abuja",
            "distance_to_bus_stop": 0.4
        },
        "main_route": {
            "description": "Take Bwari Road to Kawu Village. ~25 km.",
            "hausa_description": "Hausa: Take Bwari Road to Kawu Village. ~25 km.",
            "transport": ["Bus", "Shared Taxi"],
            "fares": ["400-600"],
            "time": "45 mins",
            "hausa_time": "Hausa: 45 mins",
            "traffic": "Light to moderate",
            "hausa_traffic": "Hausa: Light to moderate"
        },
        "alternative_route": {
            "description": "Via Ushafa to Kawu. ~27 km.",
            "hausa_description": "Hausa: Via Ushafa to Kawu. ~27 km.",
            "transport": ["Mini Bus", "Motorcycle"],
            "fares": ["450-650"],
            "time": "50 mins",
            "hausa_time": "Hausa: 50 mins",
            "traffic": "Low",
            "hausa_traffic": "Hausa: Low"
        },
        "ehailing_advisory": {
            "description": "Limited e-hailing in remote areas; use local options.",
            "hausa_description": "Hausa: Limited e-hailing in remote areas; use local options."
        },
        "alighting_points": {
            "description": "Kawu Village, walk 300m.",
            "hausa_description": "Hausa: Kawu Village, walk 300m.",
            "distance_to_destination": 0.3,
            "single_mode": true
        },
        "end_address_details": {
            "description": "Kawu, near Kawu Village",
            "hausa_description": "Hausa: Kawu, near Kawu Village",
            "map_link": "https://maps.google.com/?q=Kawu,+Abuja",
            "distance_from_bus_stop": 0.3,
            "security_concerns": true
        }
    }
};

// Utility: Normalize user input to match route keys
function normalizeRouteInput(input) {
    if (!input) return "";
    return input
        .toLowerCase()
        .replace(/\s*to\s*/g, '-')     // "wuse 2 to asokoro" -> "wuse 2-asokoro"
        .replace(/\s+/g, '')           // "wuse 2-asokoro" -> "wuse2-asokoro"
        .replace(/[^a-z0-9\-]/g, '');  // Remove other symbols
}

// UI helpers
function showMessage(msg, sender = "bot", lang = "en") {
    const chatBox = document.getElementById("chat-box");
    const wrapper = document.createElement("div");
    wrapper.className = sender === "user" ? "user-bubble chat-bubble" : "bot-bubble chat-bubble";
    if (lang === "hausa" && sender === "bot") wrapper.classList.add("hausa");
    wrapper.innerHTML = msg;
    chatBox.appendChild(wrapper);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Main route lookup and response logic
function chatbotResponse(userInput, selectedLanguage = "english") {
    try {
        const key = normalizeRouteInput(userInput);
        const route = routes[key];

        if (!route) {
            const supportedRoutes = Object.keys(routes)
                .map(r => r.replace(/([a-z0-9]+)-([a-z0-9]+)/, "$1 to $2"))
                .join(", ");
            return selectedLanguage === "hausa"
                ? "Kayi hakuri, ban gane hanyar ba. Zaka iya gwadawa kamar: <b>Wuse2 to Asokoro</b>. Hanyoyin da ake goyon baya: " + supportedRoutes
                : "Sorry, I couldn't find a route for that. Try e.g. <b>Wuse2 to Asokoro</b>. Supported routes: " + supportedRoutes;
        }

        // Defensive: check for all fields before using them
        let response = "";
        const start = key.split('-')[0] || "";
        const end = key.split('-')[1] || "";
        const distance = route.main_route?.description?.match(/~(\d+)\s*km/)?.[1];

        // Greeting
        response += selectedLanguage === "hausa"
            ? `Sannu! Hanyarka daga ${start.charAt(0).toUpperCase() + start.slice(1)} zuwa ${end.charAt(0).toUpperCase() + end.slice(1)} shine kamar ${distance || '?'} km. Ga shawarata:<br>`
            : `Hey! Your trip from ${start.charAt(0).toUpperCase() + start.slice(1)} to ${end.charAt(0).toUpperCase() + end.slice(1)} is about ${distance || '?'} km. Here’s my suggestion:<br>`;

        // Night & Security
        const currentHour = new Date().getHours();
        const isNightTrip = currentHour < 6 || currentHour >= 20;
        const hasSecurityConcerns = route.end_address_details?.security_concerns;
        const isSingleModeClose = route.alighting_points
            && route.alighting_points.distance_to_destination <= 0.5
            && route.alighting_points.single_mode;

        // Start Address
        if (route.start_address_details && typeof route.start_address_details.distance_to_bus_stop === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Fara Adireshi:</b> ${route.start_address_details.hausa_description} <a href="${route.start_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Starting Point:</b> ${route.start_address_details.description} <a href="${route.start_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        // Main Route
        if (route.main_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Hanyar Babba:</b> ${route.main_route.hausa_description}<br>
                   <b>Motoci:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                   <b>Kudi (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                   <b>Lokaci:</b> ${route.main_route.hausa_time || ""}<br>
                   <b>Zirga-zirga:</b> ${route.main_route.hausa_traffic || ""}<br><br>`
                : `<b>Main Route:</b> ${route.main_route.description}<br>
                   <b>Transport:</b> ${route.main_route.transport?.join(", ") || ""}<br>
                   <b>Fares (NGN):</b> ${route.main_route.fares?.join(", ") || ""}<br>
                   <b>Time:</b> ${route.main_route.time || ""}<br>
                   <b>Traffic:</b> ${route.main_route.traffic || ""}<br><br>`;
        }

        // Alternative Route
        if (route.alternative_route) {
            response += selectedLanguage === "hausa"
                ? `<b>Wata Hanya:</b> ${route.alternative_route.hausa_description}<br>
                   <b>Motoci:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                   <b>Kudi (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                   <b>Lokaci:</b> ${route.alternative_route.hausa_time || ""}<br>
                   <b>Zirga-zirga:</b> ${route.alternative_route.hausa_traffic || ""}<br><br>`
                : `<b>Alternative Route:</b> ${route.alternative_route.description}<br>
                   <b>Transport:</b> ${route.alternative_route.transport?.join(", ") || ""}<br>
                   <b>Fares (NGN):</b> ${route.alternative_route.fares?.join(", ") || ""}<br>
                   <b>Time:</b> ${route.alternative_route.time || ""}<br>
                   <b>Traffic:</b> ${route.alternative_route.traffic || ""}<br><br>`;
        }

        // E-hailing Advisory
        if ((isNightTrip && !isSingleModeClose) || hasSecurityConcerns) {
            if (route.ehailing_advisory) {
                response += selectedLanguage === "hausa"
                    ? `<b>Shawara E-Hailing:</b> ${route.ehailing_advisory.hausa_description}<br>`
                    : `<b>E-Hailing Tip:</b> ${route.ehailing_advisory.description}<br>`;
            }
        }

        // Alighting Points
        if (route.alighting_points && typeof route.alighting_points.distance_to_destination === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Sauka:</b> ${route.alighting_points.hausa_description}<br>`
                : `<b>Drop-Off Point:</b> ${route.alighting_points.description}<br>`;
        }

        // End Address
        if (route.end_address_details && typeof route.end_address_details.distance_from_bus_stop === "number") {
            response += selectedLanguage === "hausa"
                ? `<b>Adireshin Ƙarshe:</b> ${route.end_address_details.hausa_description} <a href="${route.end_address_details.map_link}" target="_blank">[Duba Google Maps]</a><br>`
                : `<b>Destination:</b> ${route.end_address_details.description} <a href="${route.end_address_details.map_link}" target="_blank">[Check Google Maps]</a><br>`;
        }

        // Goodbye
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

// --- DOM & Event Handling ---

let selectedLanguage = "english";

// Language selection
document.getElementById("change-lang-btn").onclick = function () {
    const selected = document.querySelector('input[name="language"]:checked');
    selectedLanguage = selected ? selected.value : "english";
    document.getElementById("language-selection").style.display = "none";
    document.getElementById("chat-box").style.display = "";
    document.getElementById("input-container").style.display = "";
    document.getElementById("toggle-lang-btn").style.display = "inline-block";
    document.getElementById("welcome-message")?.remove();

    // Welcome message
    showMessage(
        selectedLanguage === "hausa"
            ? "Sannu da zuwa Shekwoni Abuja Guide! Tambayi hanyarka: misali, 'Wuse2 to Asokoro'"
            : "Welcome to Shekwoni Abuja Guide! Ask for your route, e.g., 'Wuse2 to Asokoro'.",
        "bot",
        selectedLanguage
    );
};

// Send message logic
document.getElementById("send-btn").onclick = function () {
    const input = document.getElementById("user-input");
    const value = input.value.trim();
    if (!value) return;
    showMessage(value, "user");
    input.value = "";
    setTimeout(() => {
        const reply = chatbotResponse(value, selectedLanguage);
        showMessage(reply, "bot", selectedLanguage);
    }, 500);
};

// Enter key sends message
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("send-btn").click();
    }
});
