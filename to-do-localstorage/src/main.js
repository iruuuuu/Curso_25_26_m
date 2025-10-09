//----------------IMPORTACIONES------------------

// Importa la variable 'dbTareas' desde el archivo './db/db'.
// Asumiendo que 'dbTareas' es algún tipo de arreglo, objeto o instancia
// que representa la base de datos o el estado inicial de las tareas.
import {dbTareas} from "./db/db.js";

// -------------------------------------------------------------------

// Importa la función por defecto (default) 'mostrarTareas' y
// una función con nombre 'rellenarLocalStorage' desde el archivo './helpers/tareas'.
// Ambas funciones probablemente se utilizan para la lógica de la interfaz
// de usuario o la persistencia de datos (guardar/cargar en el navegador).
import mostrarTareas, {rellenarLocalStorage} from "./helpers/tareas.js";

// -------------------------------------------------------------------

// Declara una constante llamada 'TEXT_KEY'.
// Su valor se obtiene de las variables de entorno de la aplicación,
// específicamente de una variable con el nombre 'VITE_TEXT_KEY'.
// Esto se usa a menudo para claves de API, configuración sensible o
// identificadores únicos necesarios en el código.
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;

// -------------------------------------------------------------------

// Importa una función con nombre 'obtenerTareas' desde el mismo archivo de ayuda './helpers/tareas'.
// Esta función probablemente se encarga de recuperar o leer las tareas (por ejemplo, desde 'dbTareas' o 'localStorage').
// Notar que aunque se importa desde el mismo archivo, se hace en una línea separada, lo cual es funcional pero se podría agrupar.
import { obtenerTareas } from "./helpers/tareas.js";

// -------------------------------------------------------------------

// Importa la función por defecto (default) 'guardarTareas' desde el archivo de ayuda './helpers/tareas'.
// Esta función seguramente se utiliza para guardar o actualizar el estado de las tareas
// (por ejemplo, en 'dbTareas' o en 'localStorage').
// Al igual que con 'obtenerTareas', se podría haber agrupado con la primera importación de './helpers/tareas'.
import guardarTareas from "./helpers/tareas.js"


//--------------INICIO DE LA APLICACION---------

// Llama a la función 'rellenarLocalStorage'.
// Esta función probablemente inicializa o actualiza el almacenamiento local (localStorage) del navegador.
//
// Argumentos:
// 1. dbTareas: Se utiliza como la fuente de datos (la lista inicial de tareas) que se guardará.
// 2. TEXT_KEY: Se usa probablemente como la clave o el nombre bajo el cual se guardarán las tareas en localStorage.
rellenarLocalStorage(dbTareas, TEXT_KEY);

// -------------------------------------------------------------------

// Llama a la función 'mostrarTareas'.
// Esta función, sin argumentos, seguramente se encarga de leer las tareas
// (posiblemente desde el localStorage después de la línea anterior) y renderizarlas o
// mostrarlas en la interfaz de usuario (el DOM).
mostrarTareas();

// -------------------------------------------------------------------

// Llama a la función 'obtenerTareas'.
// Esta función se utiliza para recuperar o filtrar las tareas.
//
// Argumentos:
// 1. dbTareas: La base de datos o lista de tareas de donde se obtendrán.
// 2. "Obtener": Un posible parámetro de acción o modo que indica a la función
//               qué tipo de operación de obtención debe realizar (por ejemplo, buscar, filtrar, o simplemente retornar todo).
obtenerTareas (dbTareas,"Obtener")

// -------------------------------------------------------------------

// Llama a la función 'guardarTareas'.
// Esta función se encarga de persistir el estado actual de las tareas.
//
// Argumentos:
// 1. dbTareas: La lista de tareas *actualizada* que debe ser guardada,
//               probablemente sobrescribiendo la versión anterior en `localStorage`.
guardarTareas(dbTareas);