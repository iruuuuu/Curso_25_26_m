export function booking() {

    const container = document.createElement("div");
    const header = document.createElement('h1')
    header.textContent = "HOTEL"
    header.className = "bg-white text-blue-600 text-2xl p-2";
    container.appendChild(header)

    // --- Elementos UI ---
    const filtadorporservicio = document.createElement("div")
    const tituloFiltrado = document.createElement('h2')
    tituloFiltrado.textContent = "Filtrar por servicio"
    filtadorporservicio.appendChild(tituloFiltrado)
    container.appendChild(filtadorporservicio)

    const containerHotelesxServico = document.createElement('div')
    container.appendChild(containerHotelesxServico)

    const input = document.createElement('input')
    input.type = 'input'
    input.placeholder = "Servicio de hotel a buscar"
    containerHotelesxServico.appendChild(input)

    const boton = document.createElement('button')
    boton.textContent = "buscar"
    containerHotelesxServico.appendChild(boton)

    let dataHotel = null; // Aquí guardamos lo que venga del fetch

    // --- 1. FETCH AL CARGAR EL COMPONENTE ---
    fetch("/api/hotel")
        .then(res => res.json())
        .then(data => {
            dataHotel = data;   // Guardamos la respuesta
        })
        .catch(err => {
            console.error("Error al cargar los datos del hotel", err)
        });

    // --- 2. FILTRADO AL CLIC DEL BOTÓN ---
    boton.addEventListener("click", () => {
        if (!dataHotel) return; // Aún no cargó el fetch

        const texto = input.value.toLowerCase();

        const resultados = dataHotel.habitaciones.filter(h =>
            h.servicios.some(s =>
                s.toLowerCase().includes(texto)
            )
        );

        mostrarResultados(resultados);
    });

    // --- Mostrar resultados ---
    function mostrarResultados(lista) {
        containerHotelesxServico.innerHTML = "";

        if (lista.length === 0) {
            containerHotelesxServico.textContent = "No se encontraron resultados";
            return;
        }

        lista.forEach(habitacion => {
            const item = document.createElement("p");
            item.textContent = `${habitacion.tipo} – Servicios: ${habitacion.servicios.join(", ")}`;
            containerHotelesxServico.appendChild(item);
        });
    }

    return {
        render() {
            return container
        }
    }
}
