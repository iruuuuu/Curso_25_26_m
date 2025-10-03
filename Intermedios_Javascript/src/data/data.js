export const productos = [
    // 1. Laptop (Igual al ejemplo anterior)
    {
        id: 4578,
        nombre: "Laptop Profesional X10",
        precio: 1250.99,
        fabricante: {
            nombre:"sofia",
            pais: "China",
            contacto: {
                email: "soporte@techcorp.com",
                telefono: "+86 555 123 4567"
            }
        },
        especificaciones: {
            ram: "32 GB DDR4",
            cpu: "Intel Core i7 (13th Gen)"
        }
    },

    // 2. Smartphone
    {
        id: 1205,
        nombre: "Smartphone Ultra 9",
        precio: 899.00,
        fabricante: {
            nombre:"Maria",
            pais: "Corea del Sur",
            contacto: {
                email: "atencion@globalmobile.net",
                telefono: "+82 234 567 8900"
            }
        },
        especificaciones: {
            ram: "8 GB LPDDR5",
            cpu: "Snapdragon 8 Gen 2"
        }
    },

    // 3. Monitor
    {
        id: 7311,
        nombre: "Monitor Gaming 27p 144Hz",
        precio: 349.50,
        fabricante: {
            nombre:"Jose",
            pais: "Taiwán",
            contacto: {
                email: "support@displaypro.com",
                telefono: "+886 987 654 321"
            }
        },
        especificaciones: {
            ram: "N/A", // No aplica a monitores
            cpu: "Controlador de imagen dedicado"
        }
    },

    // 4. Disco Duro SSD
    {
        id: 9002,
        nombre: "SSD NVMe 2TB Gen4",
        precio: 155.75,
        fabricante: {
            nombre:"Julio",
            pais: "Estados Unidos",
            contacto: {
                email: "sales@datastore.biz",
                telefono: "+1 800 555 9002"
            }
        },
        especificaciones: {
            ram: "1 GB Cache",
            cpu: "Phison E18" // Nombre del controlador/CPU
        }
    },
];