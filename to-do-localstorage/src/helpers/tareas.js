// Funciones helper para manejar tareas

const CLAVE_TAREAS = 'Tareas';

// Cargar tareas del localStorage
export const getTareas = () => {
    const tareas = localStorage.getItem(CLAVE_TAREAS);
    return tareas ? JSON.parse(tareas) : [];
};

// Guardar tareas en localStorage
export const saveTareas = (tareas) => {
    localStorage.setItem(CLAVE_TAREAS, JSON.stringify(tareas));
};

// Rellenar localStorage con datos iniciales
export const rellenarLocalStorage = (arrayTareas, clave = CLAVE_TAREAS) => {
    localStorage.setItem(clave, JSON.stringify(arrayTareas));
};

// Mostrar tareas en consola (para debugging)
export const mostrarTareas = (clave = CLAVE_TAREAS) => {
    const tareas = localStorage.getItem(clave);
    if (tareas) {
        console.table(JSON.parse(tareas));
    }
};

// Agregar nueva tarea
export const addTarea = (nombre) => {
    const tareas = getTareas();
    const nuevaTarea = {
        id: Date.now(),
        nombre: nombre,
        fechaCreacion: new Date().toISOString(),
        completada: false
    };
    
    tareas.push(nuevaTarea);
    saveTareas(tareas);
    return nuevaTarea;
};

// Eliminar tarea
export const deleteTarea = (id) => {
    const tareas = getTareas().filter(tarea => tarea.id !== id);
    saveTareas(tareas);
};

// Toggle tarea (completar/descompletar)
export const toggleTarea = (id) => {
    const tareas = getTareas();
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        saveTareas(tareas);
    }
};

// Obtener tareas (función de compatibilidad)
export const obtenerTareas = (dbTareas, accion) => {
    console.log(`Ejecutando acción: ${accion}`);
    return getTareas();
};

// Guardar tareas (función de compatibilidad)
export const guardarTareas = (tareas) => {
    saveTareas(tareas);
};

// Exportar por defecto
export default mostrarTareas;
