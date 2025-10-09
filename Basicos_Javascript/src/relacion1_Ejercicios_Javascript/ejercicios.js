/**
 * =========================================================================
 * RELACIÓN I: Ejercicios de Arrays en JavaScript
 * Módulo DWEC - DAW
 * =========================================================================
 */

// -------------------------------------------------------------------------
// Ejercicio 1: Suma de Arrays
// -------------------------------------------------------------------------
/**
 * Escribe una función llamada 'sumaArrays' que tome dos arrays 'arr1' y 'arr2'
 * del mismo tamaño. La función debe devolver un nuevo array que contenga la
 * suma de los elementos correspondientes de 'arr1' y 'arr2'.
 */

const arr1 =[1,2,4,5]
const arr2 = [2,4,55,6]

const sumaArrays = (arr1, arr2) =>{
    return total = [];

    for (let i=0; i<arr1.lenght; i++){
        const sumaContenido = arr1[i] + arr2[i]
    }

    return total;
}

// -------------------------------------------------------------------------
// Ejercicio 2: Duplicados
// -------------------------------------------------------------------------
/**
 * Define una función llamada 'eliminarDuplicados' que tome un array 'arr'.
 * La función debe eliminar los elementos duplicados y devolver un nuevo array
 * con elementos únicos, manteniendo el orden original.
 */

const arr = [2,4,22,5,2,4]

const eliminarDuplicados = (arr)=> {
    return elementosUnicos = [];


}

// -------------------------------------------------------------------------
// Ejercicio 3: Filtrar Pares
// -------------------------------------------------------------------------
/**
 * Crea una función llamada 'filtrarPares' que tome un array de números 'arr'
 * y devuelva un nuevo array que contenga solo los números pares.
 */

const filtrarPares= (arr) =>{
    const arrayPares = [];

    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 ===0){
            arrayPares.push(arr[i]);
        }
    }    

    return arrayPares;
}

// -------------------------------------------------------------------------
// Ejercicio 4: Unión de Arrays
// -------------------------------------------------------------------------
/**
 * Escribe una función llamada 'unirArrays' que acepte un número variable de arrays
 * y los combine en uno solo.
 * Nota: Se podría utilizar el método 'reduce' y el método 'concat' para lograrlo.
 */


const unirArrays= (...arrays) => {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 5: Conteo de Palabras
// -------------------------------------------------------------------------
/**
 * Define una función llamada 'contarPalabras' que tome una cadena de texto 'texto'
 * y devuelva un objeto que cuente cuántas veces aparece cada palabra en el texto.
 */
function contarPalabras(texto) {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 6: Ordenar Números
// -------------------------------------------------------------------------
/**
 * Crea una función llamada 'ordenarNumeros' que tome un array de números 'arr'
 * y lo ordene de menor a mayor.
 */
function ordenarNumeros(arr) {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 7: Eliminar Elementos
// -------------------------------------------------------------------------
/**
 * Escribe una función llamada 'eliminarElemento' que tome un array 'arr' y un
 * elemento 'elemento', y elimine la primera aparición de ese elemento en el array.
 */
function eliminarElemento(arr, elemento) {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 8: Máximo y Mínimo
// -------------------------------------------------------------------------
/**
 * Define una función llamada 'encontrarMaxMin' que tome un array de números 'arr'
 * y devuelva un objeto con las propiedades 'max' y 'min', que contengan el valor
 * máximo y mínimo del array, respectivamente.
 */
function encontrarMaxMin(arr) {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 9: Buscar Elemento
// -------------------------------------------------------------------------
/**
 * Crea una función llamada 'buscarElemento' que tome un array 'arr' y un elemento 'elemento'.
 * La función debe devolver el índice de la primera aparición de 'elemento' en el array,
 * o -1 si no se encuentra.
 */
function buscarElemento(arr, elemento) {
    // Tu código aquí
}

// -------------------------------------------------------------------------
// Ejercicio 10: Dividir en fragmentos
// -------------------------------------------------------------------------
/**
 * Escribe una función llamada 'dividirFragmento' que tome un array 'arr' y un
 * número entero 'tamano'. La función debe dividir el array en fragmentos de
 * tamaño 'tamano' y devolver un nuevo array con los fragmentos.
 */
function dividirFragmento(arr, tamano) {
    // Tu código aquí
}