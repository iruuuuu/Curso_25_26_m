// Importa el array de productos.
import { productos } from "./data/data" 
// Importa las funciones de ayuda.
import { extraerData, maxRam } from "./helpers/myFuctions.js"


//--------------INICIO DE LA APLICACION-------------

// 1. Función para mapear el array de productos y extraer datos específicos.
const newDataArray = (arrayProducts) => arrayProducts
.map((product)=> extraerData(product));


// 2. Ejecución de la primera función para obtener un nuevo array con datos extraídos.
newDataArray(productos)


// 3. Llamo a la función 'maxRam' pasándole el array de productos completo.

const nombreProductoMaxRamReduce = maxRam(productos);
console.log("Resultado con .reduce():", nombreProductoMaxRamReduce);