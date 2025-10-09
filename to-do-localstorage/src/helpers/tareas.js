//aqui van las funciones helper para las tareas

// 1. Error: Falta el punto y coma (;) después de la asignación.
//    Mejora: Aunque no es estrictamente necesario, es buena práctica.
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;


export const rellenarLocalStorage = (arrayTareas, tareas = "Tareas") => {
    //Guardar en el localStorage en la clave
    localStorage.setItem(tareas, JSON.stringify(arrayTareas))
}

export const mostrarTareas = (claveBuscarLocalStorage = "Tareas") => {
    // 2. Error: La expresión ternaria debe tener una expresión para el 'else'.
    //    El retorno '[]' estaba mal colocado. En este caso, si no existe la clave, retorna un array vacío.
    return localStorage.hasOwnProperty(claveBuscarLocalStorage) ?
        //Mostrar en el localStorage 
        console.table(JSON.parse(localStorage.getItem(claveBuscarLocalStorage)))
        : [];
}

export const getTareas = () => {
    // 3. Error: La variable para el dato sin parsear se llama 'tareas'
    //    pero en la siguiente línea se usa 'dataSinParsear', que no está definida.
    const dataSinParsear = localStorage.getItem(TEXT_KEY);
    // 4. Error: Se intenta usar una función 'safeJSONParse' que está definida más abajo.
    //    Esto es un error de lógica de secuencia si el archivo se lee estrictamente de arriba
    //    abajo, aunque en JavaScript a veces se permite por el "hoisting" de funciones
    //    declaradas. La función en sí está bien, pero se corrige el nombre de la variable.
    const dataParseada = safeJSONParse(dataSinParsear); 
    
    if (!Array.isArray(dataParseada)) {
        // 5. Error: 'console.rror' está mal escrito, debe ser 'console.error'.
        console.error("Error en la data: No es un array válido");
        return [];
    }
    return dataParseada;
};


export const guardarTareas = (arrayTareas = []) => { // Se elimina la coma extra: (arrayTareas= [])
    try {
        if (!Array.isArray(arrayTareas)) {
            throw new Error("Error, el array de tareas no es valido")
        }
        //serializar --> convierto a string
        const json = JSON.stringify(arrayTareas);
        //guardo en localstorage
        localStorage.setItem(TEXT_KEY, json);
        console.info("Array guardado correctamente")
    } catch (error) {
        console.error("Error al realizar el almacenamiento en el localStorage", error) // Se añade 'error' para mejor info
    }
};

// Se renombra a saveTareas para que coincida con el uso en 'addTarea' y 'deleteTarea'
export const saveTareas = guardarTareas;


export const addTarea = (nombre) => {
    // 6. Error: La variable 'nombre' ya fue declarada como parámetro de la función,
    //    redeclararla dentro con 'const nombre' genera un error de sintaxis/scope.
    const tareaNombre = String(nombre ?? "").trim();
    // 7. Error: La estructura `try{...}catch(){}` está incompleta y mal anidada.
    //    Faltan llaves de cierre y la declaración de la variable 'tareas'.
    try {
        const tareas = getTareas(); // Obtener las tareas actuales
        const nuevaTarea = {
            id: Date.now(),
            nombre: tareaNombre, // Usar la variable corregida
            fecha: new Date().toISOString(),
            completada: false,
        };
        
        tareas.push(nuevaTarea);
        saveTareas(tareas);
        console.info(`Tarea '${tareaNombre}' agregada correctamente.`);

    } catch (error) {
        console.error("Error al agregar la tarea:", error);
    }
};


export const deleteTarea = (id) => {
    const tareas = getTareas().filter(tarea => tarea.id !== id);
    saveTareas(tareas);
    console.info(`Tarea con ID ${id} eliminada correctamente.`); // Feedback
};



function safeJSONParse(text) {
    try {
        if (typeof text !== "string") {
            throw new Error(`Error, la data ${text} no es un string`);
        }
        // Devuelve 'null' si el JSON está vacío o es nulo (aunque JSON.parse lo maneja)
        // Pero lo más seguro para almacenamiento vacío es devolver '[]'
        if (!text) return []; 
        return JSON.parse(text);
    } catch (error) {
        console.error("Error Parseando la data:", error.message);
        // Si hay un error de parseo (JSON corrupto), devuelve un array vacío
        return []; 
    }
}

export const TareasHelper = {
    rellenarLocalStorage,
    mostrarTareas,
    getTareas,
    guardarTareas,
    saveTareas: guardarTareas, // Alias para consistencia
    addTarea,
    deleteTarea,
    safeJSONParse
};

export default mostrarTareas;