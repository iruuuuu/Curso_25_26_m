// [x] crear un sistema de reservas de un restaurante que tenga:
// [x] un map con clave fecha en formato aaaa-mm-dd
// [x] y el valor un set con el nombre (dni)
// [x] un set con los nombres de los clientes que han reservado ese dia
// [x] funciones a implementar
// [x] agregar reserva
// [x] cancelar reserva
// [x] mostrar reservas
// [x] estadistica de resservas por dia , reservas totales, media de reservas

/**
 * Crea y devuelve un objeto para gestionar un sistema de reservas.
 * Utiliza un patrón funcional con clausuras para encapsular el estado.
 */
export function crearSistemaReservas() {
    // Esta variable 'reservas' está encapsulada y solo es accesible
    // por los métodos que se devuelven en el objeto.
    const reservas = new Map<string, Map<string, string>>();

    return {
        /**
         * Agrega una nueva reserva para un cliente en una fecha específica.
         */
        agregarReserva(fecha: string, dni: string, nombre: string): void {
            if (!reservas.has(fecha)) {
                reservas.set(fecha, new Map<string, string>());
            }
            reservas.get(fecha)!.set(dni, nombre);
        },

        /**
         * Cancela una reserva existente.
         */
        cancelarReserva(fecha: string, dni: string): void {
            const clientesEnFecha = reservas.get(fecha);
            if (clientesEnFecha) {
                clientesEnFecha.delete(dni);
                if (clientesEnFecha.size === 0) {
                    reservas.delete(fecha);
                }
            }
        },

        /**
         * Muestra todas las reservas agrupadas por fecha.
         */
        mostrarReservas(): void {
            if (reservas.size === 0) {
                console.log("No hay reservas.");
                return;
            }
            for (const [fecha, clientes] of reservas) {
                console.log(`Fecha: ${fecha}`);
                for (const [dni, nombre] of clientes) {
                    console.log(`- DNI: ${dni}, Nombre: ${nombre}`);
                }
            }
        },

        /**
         * Muestra estadísticas sobre las reservas.
         */
        mostrarEstadisticas(): void {
            const diasConReservas = reservas.size;
            if (diasConReservas === 0) {
                console.log("No hay estadísticas para mostrar, no hay reservas.");
                return;
            }

            let totalReservas = 0;
            console.log("Estadísticas de reservas por día:");
            for (const [fecha, clientes] of reservas) {
                const numReservas = clientes.size;
                console.log(`- ${fecha}: ${numReservas} reserva(s)`);
                totalReservas += numReservas;
            }

            const mediaReservasPorDia = totalReservas / diasConReservas;
            console.log("\nResumen:");
            console.log(`Total de reservas: ${totalReservas}`);
            console.log(`Días con reservas: ${diasConReservas}`);
            console.log(`Media de reservas por día: ${mediaReservasPorDia.toFixed(2)}`);
        },
    };
}


//lo ponemos a prueba

const sistema = crearSistemaReservas();

sistema.agregarReserva('2023-06-01', '12345678A', 'Juan Pérez');
sistema.agregarReserva('2023-06-01', '87654321B', 'Ana López');
sistema.agregarReserva('2023-06-02', '12345678A', 'Juan Pérez');
sistema.agregarReserva('2023-06-02', '87654321B', 'Ana López');
sistema.agregarReserva('2023-06-03', '11223344C', 'Carlos García');

console.log("--- Reservas Iniciales ---");
sistema.mostrarReservas();
sistema.mostrarEstadisticas();

console.log("\n--- Después de cancelar una reserva ---");
sistema.cancelarReserva('2023-06-01', '12345678A');

sistema.mostrarReservas();
sistema.mostrarEstadisticas();
