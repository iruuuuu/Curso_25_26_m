import { hotel } from "../db/data"

export function booking() {

    const container = document.createElement("div");
    const header = document.createElement('h1')
    header.textContent="HOTEL"
    header.className = "bg-white text-blue-600 text-2xl p-2";
    container.appendChild(header)


    const filtadorporservicio = document.createElement("div")
    const tituloFiltrado = document.createElement('h2')
    tituloFiltrado.textContent="Filtrar por servicio"
    container.appendChild(filtadorporservicio)

    filtadorporservicio.appendChild(tituloFiltrado)
    const containerHotelesxServico = document.createElement('div')
    container.appendChild(containerHotelesxServico)
    
    const input = document.createElement('input')
    input.type='input'
    input.placeholder= "Servicio de hotel a buscar"
    containerHotelesxServico.appendChild(input)
    
    const boton = document.createElement('button')
    boton.textContent="buscar"
    boton.placeholder="buscar"
    containerHotelesxServico.appendChild(boton)
    
    
    
    boton.addEventListener("click", () => {
        const texto = input.value.toLowerCase();
        
    const resultadosCoincidentes = hotel.habitaciones.filter(h =>
        h.servicios.some(s => s.toLowerCase().includes(texto))
    );
    
    mostrarResultados(resultadosCoincidentes);
});


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

const containerDesplegable = document.createElement('div')
const tituloDesplegable = document.createElement("h2")
tituloDesplegable.textContent="Desplegable"
containerDesplegable.appendChild(tituloDesplegable)
container.appendChild(containerDesplegable)


return {
    render(){
        return container
        }
    }
}