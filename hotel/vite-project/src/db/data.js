export const hotel = {
    nombre: "Hotel Costa del Sol",
    direccion: "Avenida del Mar 123, Málaga, España",
    descripcion:
        "Un hotel moderno frente al mar con servicios completos, ideal para vacaciones y viajes de negocios.",
    
    habitaciones: [
        {
            id: 1,
            tipo: "Suite Deluxe",
            capacidad: 4,
            precio: 220,
            vista: "Mar",
            servicios: ["Wifi", "Aire acondicionado", "Desayuno incluido", "Jacuzzi"],
            imagen: "https://via.placeholder.com/300x200?text=Suite+Deluxe",
        },
        {
            id: 2,
            tipo: "Habitación Doble",
            capacidad: 2,
            precio: 120,
            vista: "Ciudad",
            servicios: ["Wifi", "Aire acondicionado"],
            imagen: "https://via.placeholder.com/300x200?text=Habitación+Doble",
        },
        {
            id: 3,
            tipo: "Habitación Familiar",
            capacidad: 5,
            precio: 180,
            vista: "Jardín",
            servicios: ["Wifi", "Aire acondicionado", "Desayuno incluido"],
            imagen: "https://via.placeholder.com/300x200?text=Familiar",
        },
        {
            id: 4,
            tipo: "Suite Premium",
            capacidad: 3,
            precio: 260,
            vista: "Mar",
            servicios: ["Wifi", "Aire acondicionado", "Jacuzzi", "Servicio a la habitación"],
            imagen: "https://via.placeholder.com/300x200?text=Suite+Premium",
        }
    ],

    ubicacionesCercanas: [
        { nombre: "Playa La Malagueta", distancia: "300m" },
        { nombre: "Museo Picasso", distancia: "1.4 km" },
        { nombre: "Centro Histórico", distancia: "850m" },
        { nombre: "Puerto de Málaga", distancia: "500m" }
    ],

    serviciosHotel: [
        "Piscina",
        "Spa",
        "Gimnasio",
        "Restaurante",
        "Bar",
        "Parking gratuito",
        "Recepción 24h",
        "Transporte al aeropuerto"
    ]
};
