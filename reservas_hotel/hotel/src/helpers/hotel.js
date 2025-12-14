/**
 * crear un sistema booking de gestion de reservas de hotel que permita ejemplificar la reserva en un hotel. El sistema tendra 
 * la siguiente interfaz:
 * -main con:
 * -un desplegable donde pueda seleccionar de una API privada de json server !!!!!!!!
 * -dos imput date , check in y check out donde el check out no puede ser anterior que el check in!!!
 * - numero de huespedes ; me mostrara utilizando un componente card hotel todos aquellos hoteles
 *  que tenga disponibilidad para las fechas seleccionadas, sacadas de la data. Cuando le de un click 
 * a la card automaticamente se añadira en un componenete carrito reserva la informacion del hotel
 * numero de personas , nº estrellas y precio a pagar; el total a pagar sera igual al precio por noche * numero de huespedes
 * se reseteara todo al realizar una reserva
 * hay persistencia de datos en el carrito reserva utilizando localstorage
 * */

import db from "../helpers/db/db.json";
import { getData } from "../utils/fetching.js";

export async function getHoteles() {
    return await getData("hoteles"); // debe coincidir con tu db.json
}

export function createEjercicioHotel() {

    // Renderiza la tabla de habitaciones
    function renderHotel(habitaciones) {
        const container = document.createElement("div");
        container.classList.add("alojamientos-tabla");

        const tabla = document.createElement("table");
        tabla.classList.add("alojamientos-tabla");

        // THEAD
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        ['numero_habitacion', 'precio_dia', 'descripcion'].forEach(texto => {
            const th = document.createElement("th");
            th.textContent = texto;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        tabla.appendChild(thead);

        // TBODY
        const tbody = document.createElement("tbody");
        habitaciones.forEach(h => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${h.numero_habitacion}</td>
                <td>${h.precio_dia}</td>
                <td>${h.descripcion}</td>
            `;
            tbody.appendChild(tr);
        });

        tabla.appendChild(tbody);
        container.appendChild(tabla);
        return container;
    }

    // Renderiza la interfaz de booking
    function renderBooking() {
        const container = document.createElement("div");

        const titulo = document.createElement("h3");
        titulo.textContent = "Reserva de habitaciones";
        container.appendChild(titulo);

        // Desplegable habitaciones
        const select = document.createElement("select");
        db.habitaciones.forEach(h => {
            const option = document.createElement("option");
            option.value = h.numero_habitacion;
            option.textContent = `Habitación ${h.numero_habitacion} - ${h.descripcion}`;
            select.appendChild(option);
        });
        container.appendChild(select);

        // Input fechas
        const checkIn = document.createElement("input");
        checkIn.type = "date";
        checkIn.placeholder = "Check-in";
        container.appendChild(checkIn);

        const checkOut = document.createElement("input");
        checkOut.type = "date";
        checkOut.placeholder = "Check-out";
        container.appendChild(checkOut);

        // Número de huéspedes
        const numHuespedes = document.createElement("input");
        numHuespedes.type = "number";
        numHuespedes.min = 1;
        numHuespedes.value = 1;
        numHuespedes.placeholder = "Número de huéspedes";
        container.appendChild(numHuespedes);

        // Botón para mostrar disponibilidad
        const btnBuscar = document.createElement("button");
        btnBuscar.textContent = "Buscar disponibilidad";
        container.appendChild(btnBuscar);

        // Contenedor de resultados (cards)
        const resultados = document.createElement("div");
        resultados.classList.add("resultados");
        container.appendChild(resultados);

        // Contenedor carrito de reserva
        const carrito = document.createElement("div");
        carrito.classList.add("carrito-reserva");
        container.appendChild(carrito);

        // Función para renderizar cards
        function mostrarCards() {
            resultados.innerHTML = "";

            const fechaIn = new Date(checkIn.value);
            const fechaOut = new Date(checkOut.value); 

            if (!checkIn.value || !checkOut.value || fechaOut <= fechaIn) {
                alert("Selecciona fechas válidas (check-out posterior al check-in)");
                return;
            }

            // Calculamos la diferencia de días
            const diffTiempo = fechaOut.getTime() - fechaIn.getTime();
            const diffDias = Math.ceil(diffTiempo / (1000 * 3600 * 24));

            const num = parseInt(numHuespedes.value);

            // Filtramos habitaciones disponibles según el número de huéspedes
            const disponibles = db.habitaciones.filter(h => {
                // 1. Comprobar capacidad
                if (h.capacidad < num) {
                    return false;
                }

                // 2. Comprobar si hay solapamiento de fechas
                const haySolapamiento = h.reservas.some(reserva => {
                    const reservaStart = new Date(reserva.fecha_entrada);
                    const reservaEnd = new Date(reserva.fecha_salida);
                    return fechaIn < reservaEnd && fechaOut > reservaStart;
                });

                return !haySolapamiento; // Solo devolver si NO hay solapamiento
            });

            disponibles.forEach(h => {
                const card = document.createElement("div");
                card.classList.add("card-hotel");
                card.style.border = "1px solid #bd5532";
                card.style.margin = "10px";
                card.style.padding = "10px";
                card.style.cursor = "pointer";

                card.innerHTML = `
                    <h4>Habitación ${h.numero_habitacion}</h4>
                    <p>${h.descripcion}</p>
                    <p>Precio por noche: $${h.precio_dia}</p>
                    <p>Capacidad: ${h.capacidad} huéspedes</p>
                `;

                card.addEventListener("click", () => {
                    // Guardar en carrito y localStorage
                    const total = h.precio_dia * diffDias;
                    const reserva = { 
                        numero_habitacion: h.numero_habitacion, 
                        descripcion: h.descripcion, 
                        precio_total: total, 
                        num_huespedes: num, 
                        noches: diffDias,
                        fecha_entrada: checkIn.value,
                        fecha_salida: checkOut.value
                    };
                    localStorage.setItem("reservaHotel", JSON.stringify(reserva));

                    // Limpiamos el carrito y creamos los elementos dinámicamente
                    carrito.innerHTML = "";
                    carrito.innerHTML = `
                        <h4>Reserva agregada:</h4>
                        <p>Habitación ${reserva.numero_habitacion}</p>
                        <p>Número de huéspedes: ${reserva.num_huespedes}</p>
                        <p>Precio total: $${reserva.precio_total}</p>
                        <p>Noches: ${reserva.noches}</p>
                        <button id="btnPagar">Pagar y Confirmar Reserva</button>
                    `;

                    // Añadimos el listener al botón de pagar
                    const btnPagar = document.getElementById("btnPagar");
                    btnPagar.addEventListener("click", () => {
                        alert(`¡Reserva confirmada para la habitación ${reserva.numero_habitacion}! Total pagado: $${reserva.precio_total}`);

                        // Limpiamos todo para una nueva reserva
                        carrito.innerHTML = "";
                        resultados.innerHTML = "";
                        localStorage.removeItem("reservaHotel");

                        // Reset inputs del formulario
                        checkIn.value = "";
                        checkOut.value = "";
                        numHuespedes.value = 1;
                    });
                });

                resultados.appendChild(card);
            });

            if (disponibles.length === 0) {
                resultados.innerHTML = "<p>No hay habitaciones disponibles para esas fechas y número de huéspedes.</p>";
            }
        }

        btnBuscar.addEventListener("click", mostrarCards);

        return container;
    }

    function render() {
        const mainContainer = document.createElement("div");

        // Tabla habitaciones
        const tabla = renderHotel(db.habitaciones);
        mainContainer.appendChild(tabla);

        // Interfaz booking
        const booking = renderBooking();
        mainContainer.appendChild(booking);

        return mainContainer;
    }

    return { render };
}
