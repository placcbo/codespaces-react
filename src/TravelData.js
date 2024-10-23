const travelData = [
    {
        id: 1,
        destination: "Paris, France",
        country: "France",
        description: "The capital of France, known for its art, fashion, and culture. Iconic landmarks include the Eiffel Tower and the Louvre Museum.",
        attractions: [
            {
                name: "Eiffel Tower",
                description: "The iconic symbol of Paris, offering stunning views of the city from its observation decks.",
                entryFee: 25,
                bestTimeToVisit: "Spring and Fall",
                image: "eiffel-tower.jpg"
            },
            {
                name: "Louvre Museum",
                description: "The world's largest art museum, home to the famous Mona Lisa.",
                entryFee: 17,
                bestTimeToVisit: "Early morning to avoid crowds",
                image: "louvre.jpg"
            }
        ],
        accommodation: [
            {
                name: "Hotel de Crillon",
                type: "Luxury",
                pricePerNight: 500,
                rating: 4.8,
                image: "hotel-de-crillon.jpg"
            },
            {
                name: "Ibis Paris Montmartre",
                type: "Budget",
                pricePerNight: 80,
                rating: 4.0,
                image: "ibis-paris-montmartre.jpg"
            }
        ],
        transport: {
            airport: "Charles de Gaulle Airport",
            publicTransport: "Metro, Bus, Bike Rentals",
            bestWayToTravel: "Metro for city commuting"
        },
        tips: [
            "Learn basic French phrases to interact with locals.",
            "Always carry a reusable water bottle, as drinking fountains are common.",
            "Visit major attractions early to avoid crowds."
        ],
        image: "paris.jpg"
    },
    {
        id: 2,
        destination: "Tokyo, Japan",
        country: "Japan",
        description: "A bustling metropolis blending ancient traditions with modern skyscrapers. Known for its temples, technology, and cuisine.",
        attractions: [
            {
                name: "Shibuya Crossing",
                description: "The busiest pedestrian crossing in the